import { readIdFromBehaviorPack } from "./read_id";
import { readIdAndRecipeFromBehaviorPack } from "./read_recipe";

import fs = require('fs');
import { recipes_data } from "./extra_recipe";
import Identifier from "@mcbe/identifier";

export function generateId():void
{
    let out:fs.WriteStream;

    readIdFromBehaviorPack('vanilla');
    readIdFromBehaviorPack('vanilla_1.14');
    readIdFromBehaviorPack('vanilla_1.15');
    readIdFromBehaviorPack('vanilla_1.16');
    readIdFromBehaviorPack('chemistry');
    readIdAndRecipeFromBehaviorPack('vanilla');
    readIdAndRecipeFromBehaviorPack('chemistry');
    
    // recipe
    out = fs.createWriteStream('node_modules/@mcbe/recipe/list.ts', 'utf-8');
    out.write(`
import { Recipe } from ".";
import ID from "@mcbe/identifier/id";

export const recipes = new Map([`);
    for (const [id, recipe] of recipes_data)
    {
        if (!id) continue;
        out.write('\n    [ID.');
        out.write(id.mini);
        out.write(',[\n        ');
        recipe.sort((a,b)=>a.complexCompare(b));
        out.write(recipe.map(r=>r.toSource()).join(',\n        '));
        out.write('\n    ]],');
    }
    out.write('\n]);\n');
    out.end();
    console.log(`${recipes_data.size} Recipes generateds.`);

    // ID
    out = fs.createWriteStream('node_modules/@mcbe/identifier/id.ts', 'utf-8');
    out.write(`
import MAKEID from "./make";

const ID = {
`);
    
    const ids = [...Identifier.all()];
    ids.sort((a,b)=>a.name.localeCompare(b.name));

    for (const id of ids)
    {
        out.write('    ');
        out.write(id.name);
        out.write(': MAKEID.');
        out.write(id.name);
        out.write(',\n');
    }
    out.write(`};
export default ID;
`);
    out.end();
    console.log(`${ids.length} ID generateds.`);
}
