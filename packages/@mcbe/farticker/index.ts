
import { timerIsNeeded } from "krchecktimer";
timerIsNeeded("store");

import { Box } from "krgeometry";
import { command } from "@mcbe/system_server";
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { setblockWithoutError } from "@mcbe/command";
import ruacore from "@mcbe/event_server";
import { Lang } from "@mcbe/lang";
import { realTime } from "@mcbe/timer/realtime";

const ids:number[] = [];
for (let i=0;i<5;i++)
{
    ids[i] = i;
}

const waiting:Processing[] = [];
const processing = new Set<Processing>();
let processingTimeout:NodeJS.Timeout|null = null;

class Processing
{
    private index = 0;
    private removed = false;
    private id = -1;

    constructor(
        private readonly blocks:[Identifier, number?][],
        public readonly pos:VectorXYZ, 
        public readonly area:Box, 
        public readonly cb:(last:Identifier, data?:number)=>(Promise<boolean>|boolean),
        private readonly resolve:()=>void,
        private readonly reject:(err:Error)=>void)
    {
        const id = ids.pop();
        if (id === undefined)
        {
            waiting.push(this);
        }
        else
        {
            this.create(id);
        }
    }

    async create(id:number):Promise<void>
    {
        this.id = id;
        
        for (;;)
        {
            const [res, lang] = await Promise.all([
                command(`tickingarea add ${this.area.x1} ${this.area.y1} ${this.area.z1} ${this.area.x2} ${this.area.y2} ${this.area.z2} TR${this.id}`),
                Lang.onLoad
            ]);
            if (res.statusCode === 0) break;
            if (lang.commands.generic_dimension_notFound.reset().exec(res.statusMessage))
            {
                await realTime.promise(1000);
                continue;
            }
            break;
        }

        this._addProcessing();
    }

    private _addProcessing():void
    {
        processing.add(this);
        if (!processingTimeout)
        {
            processingTimeout = setInterval(process, 1000);
        }
    }

    async process():Promise<void>
    {
        try
        {
            const pos = this.pos;
            this.index = (this.index + 1) % this.blocks.length;
    
            const block = this.blocks[this.index];

            processing.delete(this);
            const res = await setblockWithoutError(pos, block[0], block[1]);
            if (this.removed) return;
            if (!res)
            {
                this._addProcessing();
                return;
            }
            try
            {
                const res = await this.cb(block[0], block[1]);
                if (this.removed) return;
                if (!res)
                {
                    this._addProcessing();
                    return;
                }
            }
            catch(err)
            {
                console.error(err);
            }
            this.removed = true;
            processing.delete(this);

            command(`tickingarea remove TR${this.id}`);
            const w = waiting.pop();
            if (w)
            {
                w.create(this.id);
            }
            else
            {
                ids.push(this.id);
            }
            this.resolve();
        }
        catch(err)
        {
            console.error(err);
        }
    }

    remove():void
    {
        if (this.removed) return;
        this.removed = true;
        if (this.id === -1)
        {
            waiting.splice(waiting.indexOf(this), 1);
        }
        else
        {
            processing.delete(this);
            command(`tickingarea remove TR${this.id}`);
        }
        this.reject(Error('canceled'));
    }
}

function process():void
{
    if (processing.size === 0)
    {
        if (processingTimeout)
        {
            clearInterval(processingTimeout);
            processingTimeout = null;
        }
        return;
    }
    for (const p of processing)
    {
        p.process();
    }
}

function addProcessing(pos:VectorXYZ, area:Box, list:[Identifier, number?][], cb:(last:Identifier, data?:number)=>Promise<boolean>|boolean):Promise<void>
{
    return new Promise<void>((resolve, reject) => {
        new Processing(list, pos, area, cb, resolve, reject);
    });
}

/**
 * Add ticking area to area and callback
 * @param pos position to test, It will overwrite stone or dirt to this position
 * @param area position to add ticking area
 * @param cb callback when it loaded, it will be called again if it returns false
 */
export function setFarTicker(pos:VectorXYZ, area:Box, cb:()=>Promise<boolean>|boolean):Promise<void>
{
    return addProcessing(pos, area, [[ID.stone], [ID.dirt]], cb);
}

/**
 * set block to position
 */
export async function setFarBlock(pos:VectorXYZ, block:Identifier, data?:number):Promise<void>
{
    const res = await setblockWithoutError(pos, block, data);
    if (res) return;

    const second = block === ID.stone ? ID.dirt : ID.stone;
    await addProcessing(pos, Box.fromVector(pos, pos), [[block, data], [second]], last => {
        if (last === block) return true;
        return setblockWithoutError(pos, block, data);
    });
}

ruacore.shutdown.on(()=>{
    for (const p of processing.values())
    {
        p.remove();
    }
});