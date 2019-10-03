
require('source-map-support').install();
import Identifier from "@mcbe/identifier";
import { readSchema } from "./read_schema";
import { generateId } from "./gen_id";
import { readLang, writeLang } from "./read_lang";

switch (process.argv[2])
{
case 'id':
    console.log(Identifier.getFromMini(process.argv[3]).short);
    break;
case 'gen_lang':
    const lang = readLang();
    writeLang('src/lib/lang_data.ts', lang);
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
}

