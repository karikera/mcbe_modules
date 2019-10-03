import { readJsonFiles } from "./util";
import { extra_id } from "./extra_id";
import Identifier from "@mcbe/identifier";

export function readIdFromVanilaPack():void
{
    interface Item
    {
        ['minecraft:item']:{
            description:{
                identifier:string;
            };
        };
    }

    interface SpawnRule
    {
        ['minecraft:spawn_rules']:{
            description:{
                identifier: string;
            };
        };
    }
    for (const [name, content] of readJsonFiles<Item>('D:\\Downloads\\ME\\Games\\bedrock-server-1.12.0.28\\behavior_packs\\vanilla\\items'))
    {
        try
        {
            Identifier.get(content['minecraft:item'].description.identifier.toLowerCase());
        }
        catch (err)
        {
        }
    }
        
    for (const [name, content] of readJsonFiles<SpawnRule>('D:\\Downloads\\ME\\Games\\bedrock-server-1.12.0.28\\behavior_packs\\vanilla\\spawn_rules'))
    {
        try
        {
            Identifier.get(content['minecraft:spawn_rules'].description.identifier.toLowerCase());
        }
        catch (err)
        {
        }
    }
    
    for (const id of extra_id)
    {
        Identifier.getFromMini(id);
    }
}