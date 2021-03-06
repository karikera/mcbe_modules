
import { createServerSystem } from "@mcbe/system_shared";
import Identifier from "@mcbe/identifier";

export const system = createServerSystem(0,0);

/** Command result interface */
export interface CommandResult
{
    /** 0 when succeeded */
    statusCode:number;

    statusMessage:string;
}

/**
 * @param item you can use Identifier with ID.~~
 *          import ID = require('@mcbe/identifier/id');
 */
export function createItem(item:Identifier, pos:VectorXYZ):IEntity|null
{
    const entity = system.createEntity('item_entity', item.full);
    if (!entity) return null;
    const comp = system.getComponent(entity, MinecraftComponent.Position);
    if (!comp)
    {
        system.destroyEntity(entity);
        return null;
    }
    comp.data.x = pos.x;
    comp.data.y = pos.y;
    comp.data.z = pos.z;
    system.applyComponentChanges(entity, comp);
    return entity;
}

/** command result time is not sequenced */
export function command<T extends CommandResult>(command:string):Promise<T>
{
    return new Promise<T>(resolve=>{
        system.executeCommand(command, cb=>{
            const res:T = cb.data as any;
            resolve(res);
        });
    });
}

function tellrawRaw(target:string, text:string[]):Promise<CommandResult>
{
    const command = `tellraw ${target} {"rawtext":${JSON.stringify(text.map(line=>({text:line})))}}`;
    return new Promise<CommandResult>(resolve=>{
        system.executeCommand(command, cb=>{
            resolve(cb.data as any);
        });
    });
}

export async function tellraw(name:string, text:string[]):Promise<boolean>
{
    const res = await tellrawRaw(`"${name}"`, text);
    return res.statusCode === 0;
}

export async function tellrawAll(text:string[]):Promise<boolean>
{
    const res = await tellrawRaw('@a', text);
    return res.statusCode === 0;
}
