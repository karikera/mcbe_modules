
import { fs, MariaDB } from 'bdsx';

let dbconfig:any;
const configpath = process.argv[1]+'/dbconfig.json';
try
{
    dbconfig = JSON.parse(fs.readFileSync(configpath));
}
catch (err)
{
    console.error('Cannot read dbconfig.json: '+configpath);
}

export const db = new MariaDB(dbconfig.host, dbconfig.username, dbconfig.password, dbconfig.database);

const ADD_SLASHES_MAP:{[key:string]:string} = {
    '\\': '\\\\',
    '\n': '\\n',
    '\r': '\\r',
    '\f': '\\f',
    '\t': '\\t',
    '\a': '\\a',
    '\b': '\\b',
    '\'': '\\\'',
    '\"': '\\\"',
    '\0': '\\\0',
};
const STRIP_SLASHES_MAP:{[key:string]:string} = {};
for (const key in ADD_SLASHES_MAP)
{
    const val = ADD_SLASHES_MAP[key];
    STRIP_SLASHES_MAP[val.charAt(1)] = key;
}

export function addSlashes(str:string):string
{
    return str.replace(/['"\\\0\r\n\f]/g, chr=>ADD_SLASHES_MAP[chr]);
}

export function stripSlashes(str:string):string
{
    return str.replace(/\\./g, chr=>{
        chr = chr.charAt(1);
        return STRIP_SLASHES_MAP[chr] || chr;
    });
}
