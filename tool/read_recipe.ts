import { Recipe } from "@mcbe/recipe";
import { ItemStack } from "@mcbe/item";
import { readJsonFiles } from "krfileutil";
import { putRecipe } from "./extra_recipe";
import Identifier from "@mcbe/identifier";

function isMiniPattern(pattern:string[]):boolean
{
    function testX(x:number):boolean
    {
        for (const p of pattern)
        {
            if (p[x] === ' ') continue;
            return false;
        }
        return true;
    }

    function testY(y:number):boolean
    {
        const line = pattern[y];
        for (let i=0;i<line.length;i++)
        {
            if (line[i] === ' ') continue;
            return false;
        }
        return true;
    }

    const yempty = pattern.length <= 2 || testY(0) || testY(2);
    if (!yempty) return false;
    return pattern.every(line=>line.length <= 2) || testX(0) || testX(2);
}

function splitData(id:string):[Identifier, number?]
{
    id = id.toLowerCase();
    console.assert(id.startsWith('minecraft:'));
    const data = id.indexOf(':', 10);
    if (data !== -1)
    {
        const idp = id.substr(0, data);
        Identifier.get(idp);
        return [Identifier.get(idp), +id.substr(data+1)];

    }
    Identifier.get(id);
    return [Identifier.get(id)];
}

export function readIdAndRecipeFromBehaviorPack(packname:string):void
{
    interface RecipeData
    {
        ['minecraft:recipe_furnace']:{
            input:string;
            output:string;
            tags:string[];
        },
        ['minecraft:recipe_shapeless']:{
            ingredients:{
                item:string;
                count?:number;
            }[];
            result:{
                item:string;
                data?:number;
                count:number;
            };
            tags:string[];
        },
        ['minecraft:recipe_shaped']:{
            pattern:string[];
            key:{[key:string]:{
                item:string,
                count?:number
            }};
            result:{
                item:string;
                count:number;
            }|({
                item:string;
                count:number;
            }[]);
            tags:string[];
        }
        ['minecraft:recipe_brewing_mix']:{
            output:string;
            input:string;
            reagent:string;
            tags:string[];
        }
        ['minecraft:recipe_brewing_container']:{
            output:string;
            input:string;
            reagent:string;
        }
    }
    
    for (const [name, content] of readJsonFiles<RecipeData>(`behavior_packs\\${packname}\\recipes`))
    {
        try
        {
            const inputs = new Map<Identifier, ItemStack>();
            const outputs = new Map<Identifier, ItemStack>();
            const putInput = (name:string, count:number)=>{
                const [id, data] = splitData(name);

                const item = inputs.get(id);
                if (item) item.count += count;
                else inputs.set(id, {id, count});
            };
            const putOutput = (name:string, count:number)=>{
                const [id, data] = splitData(name);

                const item = outputs.get(id);
                if (item) item.count += count;
                else outputs.set(id, {id, count});
            };

            const furance = content['minecraft:recipe_furnace'];
            if (furance)
            {
                putInput(furance.input, 1);
                putOutput(furance.output, 1);
            }
            const shapeless = content['minecraft:recipe_shapeless'];
            if (shapeless)
            {
                for (const item of shapeless.ingredients)
                {
                    putInput(item.item, item.count || 1);
                }
                const result = shapeless.result;
                putOutput(result.item, result.count || 1);
                shapeless.tags = shapeless.tags.filter(v=>v !== 'crafting_table');
            }
            const shaped = content['minecraft:recipe_shaped'];
            if (shaped)
            {
                const {pattern, key} = shaped;
                for (const k of Object.values(key))
                {
                    k.count = 0;
                }
                if (isMiniPattern(pattern))
                {
                    shaped.tags = shaped.tags.filter(v=>v !== 'crafting_table');
                }
    
                for (const line of pattern)
                {
                    for (let i=0;i<line.length;i++)
                    {
                        const k = line[i];
                        if (k === ' ') continue;
                        if (!key[k]) console.error('unknown key: '+k+' '+k.charCodeAt(0));
                        key[k].count!++;
                    }
                }
                for (const k of Object.values(key))
                {
                    putInput(k.item, k.count!);
                }
    
                let result = shaped.result;
                if (result instanceof Array)
                {
                    for (let i=0;i<result.length;)
                    {
                        const res = result[i];
                        const [id, data] = splitData(res.item);
                        const ocount = res.count;
    
                        const input = inputs.get(id);
                        if (input !== undefined)
                        {
                            const icount = input.count;
                            if (icount === ocount)
                            {
                                result.splice(i, 1);
                                inputs.delete(id);
                            }
                            else if (icount > ocount)
                            {
                                result.splice(i, 1);
                                input.count = icount - ocount;
                            }
                            else
                            {
                                res.count = ocount - icount;
                                inputs.delete(id);
                            }
                        }
                        i++;
                    }
                    console.assert(inputs.size !== 0);

                    for (const r of result)
                    {
                        putOutput(r.item, r.count || 1);
                    }
                }
                else
                {
                    putOutput(result.item, result.count || 1);
                }
            }
            const brewing = content['minecraft:recipe_brewing_mix'];
            if (brewing) continue;
            
            const brewing_con = content['minecraft:recipe_brewing_container'];
            if (brewing_con)
            {
                const id = Identifier.getFromName(brewing_con.input.toLowerCase());
                inputs.set(id, {
                    id,
                    count: 1
                });
                putOutput(brewing_con.output, 1);
            }
    
            const anything = furance || shapeless || shaped || brewing || brewing_con;
            if (!anything) debugger;
            const tags = anything.tags.map(name=>{
                if (name === 'stonecutter') name = 'stonecutter_block';
                return Identifier.getFromName(name.toLowerCase());
            });
            putRecipe(new Recipe(
                tags,
                [...inputs.values()].map(item=>[item.id, item.count]),
                [...outputs.values()].map(item=>[item.id, item.count])
            ));
        }
        catch (err)
        {
            console.error(err.stack);
            console.error('File: '+name);
            break;
        }
    }
}
