import ID from "@mcbe/identifier/id";
import Identifier from "@mcbe/identifier";
import { signBlocks } from "@mcbe/ruakr_itemgroup";
import { execute, setblock } from "@mcbe/command";

import { DimensionId } from "bdsx/common";

import { Position } from "@bdsx/position";
import { createItem, system } from "@mcbe/system_server";
import { Vector3 } from "krgeometry";

export interface UserLike
{
    name:string;
    getTickingArea():TickingArea;
    disposed:boolean;
    position:Position;
}

export interface BlockState
{
    facing_direction: number;
    direction: number;
    sand_type: "normal";
    stone_type: "stone"|"andesite"|"diorite"|"granite";
    dirt_type: "normal";
    sand_stone_type: "default"|"smooth";
    color: "white";
    conditional_bit: boolean;
    ground_sign_direction: number;
    infinitiburn_bit: boolean;
    huge_mushroom_bits: number;
    attachment: "standing";
    toggle_bit: boolean;
}

const NON_RESTOREABLE = new Set([ID.campfire, ID.ender_chest]);

export abstract class Block
{
    protected constructor(
        public readonly id:Identifier,
        public readonly pos:Position,
        private readonly user:UserLike)
    {
    }

    isSlab():boolean
    {
        return this.id.mini.endsWith('_slab');
    }

    isSign():boolean
    {
        return signBlocks.has(this.id);
    }

    destroy():void
    {
        if (this.pos.dimension === DimensionId.Overworld)
        {
            if (NON_RESTOREABLE.has(this.id))
            {
                setblock(this.pos, ID.air);
                createItem(this.id, this.pos.add(new Vector3(0.5, 0.5, 0.5)));
            }
            else
            {
                setblock(this.pos, ID.air, 0, 'destroy');
            }
        }
        if (this.user.disposed)
        {
            console.error(`${this}: destroying failed at (${this.pos}), ${this.user} is already disposed`);
            return;
        }
        if (this.user.position.dimension !== this.pos.dimension)
        {
            console.error(`${this}: destroying failed at (${this.pos}), ${this.user} is out of dimension`);
            return;
        }
        execute(this.user.name).setblock(this.pos, ID.air, 0, 'destroy');
        if (NON_RESTOREABLE.has(this.id))
        {
            console.error(`${this}: item restoring failed at (${this.pos}), is not on overworld`);
        }
    }

    abstract get data():number;

    abstract get state():BlockState|null;

    toString():string
    {
        return `${this.id}(${this.pos.x},${this.pos.y},${this.pos.z})`;
    }

    static make(id:Identifier, data:number, pos:Position, user:UserLike):UserBlock
    {
        return new UserBlock(id, data, pos, user);
    }

    static getFromBlock(object:IBlock, pos:Position, user:UserLike):MappedBlock
    {
        return new MappedBlock(object, pos, user);
    }
}

class UserBlock extends Block
{
    constructor(id:Identifier, public readonly data:number, pos:Position, user:UserLike)
    {
        super(id, pos, user);
    }

    get state():BlockState|null
    {
        return null;
    }
}

class MappedBlock extends Block
{
    constructor(
        public readonly object:IBlock, pos:Position, user:UserLike)
    {
        super(Identifier.get(object.__identifier__), pos, user);
    }

    get data():number
    {
        return 0;
    }

    get state():BlockState|null
    {
        const comp = system.getComponent(this.object as any, 'minecraft:blockstate');
        return comp && (comp.data as BlockState);
    }
}

export class TickingArea
{
    constructor(private readonly user:UserLike, private readonly area:ITickingArea, public readonly dimension:DimensionId)
    {
    }

    getBlock(v:VectorXYZ):Block|null
    {
        const block = system.getBlock(this.area, v);
        return block && Block.getFromBlock(block, new Position(v.x, v.y, v.z, this.dimension), this.user);
    }
    
    getBlocks(v1:VectorXYZ, v2:VectorXYZ):Block[][][]|null
    {
        const blocks = system.getBlocks(this.area, v1, v2) as any as (IBlock|Identifier)[][][];
        if (blocks[0] === undefined) return null;
        if (blocks[0][0] === undefined) return null;
        if (blocks[0][0][0] === undefined) return null;
        for (const bs of blocks)
        {
            for (const b of bs)
            {
                for (let i=0;i<b.length;i++)
                {
                    b[i] = Identifier.get((b[i] as IBlock).__identifier__);
                }
            }
        }
        return blocks as any;
    }
}
