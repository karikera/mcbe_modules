
import { Box, Vector3 } from "krgeometry";

import ID from "@mcbe/identifier/id";
import { execute } from "@mcbe/command";
import { callAtNextTick } from "@mcbe/nexttick";
import { Entity, EntityType } from "@mcbe/entity";
import { containerItems, doorItems } from "@mcbe/ruakr_itemgroup";

import { UserLike, Block } from "@bdsx/block";

export function removeBlockDrop(block:Block):boolean
{
    let id = block.id;
    switch (id)
    {
    case ID.lit_furnace: id = ID.furnace; break;
    case ID.lit_blast_furnace: id = ID.blast_furnace; break;
    case ID.lit_smoker: id = ID.smoker; break;
    case ID.chest: 
    case ID.trapped_chest:
    case ID.shulker_box:
    case ID.undyed_shulker_box:
        return false;
    }
    
    const pos = block.pos;
    if (id === ID.skull)
    {
        // weird item drop position
        const area = new Box(pos.x, pos.y, pos.z, pos.x, pos.y, pos.z).expand(1);

        // item already created?! WHY?
        Entity.catchPre(area, ev=>{
            if (ev.entity.type !== EntityType.Item) return;
            if (ev.entity.id === id)
            {
                ev.removeEntity = true;
                ev.removeArea = true;
            }
        });
    }
    else
    {
        const area = new Box(pos.x, pos.y, pos.z, pos.x, pos.y, pos.z);
        if (containerItems.has(id))
        {
            Entity.catchPost(area, ev=>{
                if (ev.entity.type !== EntityType.Item) return;
                if (ev.entity.id === id)
                {
                    ev.removeEntity = true;
                    ev.removeArea = true;
                }
            });
        }
        else
        {
            Entity.catchPost(area, ev=>{
                if (ev.entity.type !== EntityType.Item)
                {
                    if (ev.entity.id === ID.xp_orb)
                    {
                        ev.removeEntity = true;
                    }
                    return;
                }
                ev.removeEntity = true;
            });
        }
    }
    return true;
}

function restorePlace(player:UserLike, block:Block):void
{
    if (doorItems.has(block.id))
    {
        // restore door to under position if no block
        const under = Vector3.sub(block.pos, Vector3.Y);
        const bottom = player.getTickingArea().getBlock(under);
        if (bottom && bottom.id === ID.air)
        {
            execute(player.name).setblock(under, block.id, block.data);
            return;
        }
    }
    execute(player.name).setblock(block.pos, block.id, block.data);
}

export function restoreBlock(player:UserLike, block:Block):boolean
{
    if (!removeBlockDrop(block)) return false;
    restorePlace(player, block);
    return true;
}

export function restoreBlockSlow(player:UserLike, block:Block, duration:number = 1000):boolean
{
    if (!removeBlockDrop(block)) return false;
    setTimeout(()=>restorePlace(player, block), duration);
    return true;
}

export function restorePistonPush(player:UserLike, block:Block, pistonPos:VectorXYZ, oldPos:VectorXYZ):boolean
{
    if (!removeBlockDrop(block)) return false;
    execute(player.name).setblock(pistonPos, ID.air, 0, 'destroy');
    execute(player.name).setblock(block.pos, ID.air);
    callAtNextTick(()=>{
        execute(player.name).setblock(oldPos, block.id, block.data);
    });
    return true;
}
