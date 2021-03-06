
import { Vector3 } from "krgeometry";
import Event from "krevent";

import Identifier from "@mcbe/identifier";
import { keysOf } from "@mcbe/ruakr_util";
import { execute } from "@mcbe/command";
import { createItem } from "@mcbe/system_server";
import ID from "@mcbe/identifier/id";

import { Block } from "@bdsx/block";

import { User } from "./user";

const events = {
    onPlace(user:User, block:Block, hand:Identifier):boolean{ return false; },
    onDestroy(user:User, block:Block):void{},
    onInterect(user:User, block:Block):boolean{ return false; },
    onPistonPush(user:User, block:Block, pistonPos:Vector3, oldpos:Vector3):boolean{ return false; },
};
const eventKeys = [ ... keysOf(events)];
type Events = typeof events;

class BlockEvent<T extends (...args:any[])=>(void|boolean)>
{
    private readonly map = new WeakMap<Identifier, Event<T>>();

    constructor()
    {
        Object.freeze(this);
    }

    on(block:Identifier, fn:T):void
    {
        let ev = this.map.get(block);
        if (!ev) this.map.set(block, ev = new Event<T>());
        ev.on(fn);
    }

    fire(...args:T extends (...args:infer ARGS)=>any ? ARGS : never):boolean
    {
        const block:Block = args[1];
        const ev = this.map.get(block.id);
        if (!ev) return false;
        return ev.fire(...args) as boolean;
    }
}

export type BlockListener = Partial<Events> & {TARGET:Identifier[], onInstall?():void};

const blockFuncs = {
    install(event:BlockListener):void
    {
        for (const key of eventKeys)
        {
            const listener = event[key];
            if (!listener) continue;
            
            const ev = blockEvent[key];
            for (const target of event.TARGET)
            {
                ev.on(target, listener as any);
            }
        }
        if (event.onInstall) event.onInstall();
    },
    setNonPlaceable(id:Identifier):void
    {
        blockEvent.onPlace.on(id, (user, block)=>{
            execute(user.name).setblock(block.pos, ID.air);
            createItem(id, block.pos.add(Vector3.HALF));
            return true;
        });
    },
    setUnsupported(id:Identifier):void
    {
        blockEvent.onPlace.on(id, (user, block)=>{
            block.destroy();
            user.info('미지원 아이템');
            return true;
        });
    }
};

type BlockEvents = {
    readonly [key in keyof typeof events]:BlockEvent<Events[key]>;
} & typeof blockFuncs;

export const blockEvent = (()=>{
    const maps = blockFuncs as any;
    for (const key of eventKeys)
    {
        maps[key] = new BlockEvent<any>();
    }
    Object.freeze(maps);
    return maps as BlockEvents;
})();
