
import fs = require('fs');
import { webNameToId, wget, firstLine } from '../tool_lib/util';
import { Elements } from '../tool_lib/elements';

export async function readbreaking():Promise<void>
{
    const readed = await wget('https://minecraft.gamepedia.com/Breaking');

    const rows = Elements.parse(readed).findByTag('tbody').at(2).children().tag('tr').slice(2, -2);


    const out = fs.createWriteStream('../development_behavior_packs/ruarule-bp/src/lib/breaking_data.ts', 'utf-8');
    out.write(`
import ID from "@mcbe/identifier/id";
import Identifier from "@mcbe/identifier";
import { BlockInfo, ToolType } from './type';
export const BREAKING = new Map<Identifier, BlockInfo>([
`);
    
    let frostedIceFirst = false;
    const already = new Set<string>();

    for (const row of rows)
    {
        const cells = row.children().tag('th', 'td');
        
        const name = cells.splice(0, 1).children(0).children(0).children(1).text(0);
        let tool = cells.splice(1, 1).attributes('title')[0];
        if (!tool) tool = 'Any';

        const [hardness, hand, wooden, stone, iron, diamond, golden, shears, sword] = cells.htmls().map(html=>{
            const text = firstLine(html);
            switch (text)
            {
            case '∞': return Infinity;
            case '—': return NaN;
            default: return +text;
            }
        });

        switch(name)
        {
        case 'Frosted Ice':
            if (!frostedIceFirst)
            {
                frostedIceFirst = true;
                continue;
            }
        }
        const ids = webNameToId(name);


        for (const name of ids)
        {
            if (already.has(name)) continue;
            already.add(name);
            out.write('[ID.');
            out.write(name);
            out.write(',{tool:ToolType.');
            out.write(tool);
            out.write(',hardness:'); out.write(hardness+'');
            out.write(',hand:'); out.write(hand+'');
            out.write(',wooden:'); out.write(wooden+'');
            out.write(',stone:'); out.write(stone+'');
            out.write(',iron:'); out.write(iron+'');
            out.write(',diamond:'); out.write(diamond+'');
            out.write(',golden:'); out.write(golden+'');
            out.write(',shears:'); out.write(shears+'');
            out.write(',sword:'); out.write(sword+'');
            out.write('}],\n');
        }
    }
    
    out.write(']);\n');
    out.end();
    console.log('breaking_data.ts generated');
}
