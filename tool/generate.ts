
require('source-map-support').install();
import Identifier from "@mcbe/identifier";
import { readSchema } from "./read_schema";
import { generateId } from "./gen_id";
import { lang2ts } from "mcaddon-lang2ts";
import { bdspath } from "./bdspath";

switch (process.argv[2])
{
case 'id':
    if (!process.argv[3]) console.error('Need id input');
    else console.log(Identifier.getFromName(process.argv[3]).minified);
    break;
case 'gen_lang':
    const keys:string[] = [];
    lang2ts(
        `${bdspath}/resource_packs/vanilla/texts`, 
        'node_modules/@mcbe/lang/data', 
        (name, lang)=>{
            keys.push(name);
            switch (name)
            {
            case 'en_US':
                lang.item.banner[0] = 'Banner';
                lang.item.boat[0] = 'Boat';
                lang.item.dye[0] = 'Dye';
                lang.item.skull[0] = 'Head';
                lang.item.sapling[0] = 'Sapling';
                lang.item.spawn_egg = ['Spawn Egg'];
                break;
            case 'ko_KR':
                lang.item.banner[0] = '배너';
                lang.item.boat[0] = '보트';
                lang.item.dye[0] = '염료';
                lang.item.skull[0] = '머리';
                lang.item.sapling[0] = '묘목';
                lang.item.spawn_egg = ['생성 알'];
                break;
            }
        });    
    break;
case 'gen_schema':
    (async()=>{
        await readSchema();
        // await readbreaking();
    })().catch(err=>{
        console.error(err.stack);
    });
    break;
case 'gen_id':
    generateId();
    break;
default:
    console.error('Unknown command: '+process.argv[2]);
    break;
}

