
require('source-map-support').install();
import Identifier from "@mcbe/identifier";
import { readSchema } from "./read_schema";
import { generateId } from "./gen_id";
import { readLang, writeLang } from "./read_lang";

switch (process.argv[2])
{
case 'id':
    if (!process.argv[3]) console.error('Need id input');
    else console.log(Identifier.getFromMini(process.argv[3]).short);
    break;
case 'gen_lang':
    const lang = readLang("resource_packs\\vanilla\\texts");
    writeLang('node_module/@mcbe/lang/lang_data.ts', lang);

    // const lang2 = readLang("resource_packs\\vanilla\\texts");
    // writeLang('node_module/@mcbe/lang/lang_data.ts', lang2);
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

