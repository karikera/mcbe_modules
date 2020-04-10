
import { db, addSlashes } from '@bdsx/ruakr_db';
import { LoginInfo } from '@bdsx/logininfo';

db.query("create table if not exists ipinfo(ipaddr char(39) not null, username char(32) not null, primary key(ipaddr, username))");
db.query("create table if not exists xuidinfo(xuid char(32) not null, username char(32) not null, primary key(xuid, username))");

LoginInfo.onLogin.on(info=>{
    const name = addSlashes(info.name);
    const ip = addSlashes(info.ip);
    const xuid = addSlashes(info.xuid);
    db.query(`insert ignore into ipinfo values("${ip}", "${name}")`);
    db.query(`insert ignore into xuidinfo values("${xuid}", "${name}")`);
});

export namespace loginInfoTables
{
    export async function getNameFromXuid(xuid:string):Promise<string[]>
    {
        const rows = await db.execute(`select username from xuidinfo where xuid in ('${xuid}')`);
        const out:string[] = [];
        for (const [name] of rows)
        {
            if (name) out.push(name);
        }
        return out;
    }
    
    export async function getXuidFromName(name:string):Promise<string[]>
    {
        const rows = await db.execute(`select xuid from xuidinfo where username in ('${name}')`);
        const out:string[] = [];
        for (const [xuid] of rows)
        {
            if (xuid) out.push(xuid);
        }
        return out;
    }
    
    export async function getNameFromXuids(xuids:string[]):Promise<Map<string, string[]>>
    {
        const rows = await db.execute(`select xuid,username from xuidinfo where xuid in ('${xuids.join("','")}')`);
        const namemap = new Map<string, string[]>();
        for (const [xuid, name] of rows)
        {
            let v = namemap.get(xuid!);
            if (!v) namemap.set(xuid!, v = []);
            v.push(name!);
        }
        return namemap;
    }
    
    export async function getXuidFromNames(names:string[]):Promise<Map<string, string[]>>
    {
        const rows = await db.execute(`select xuid,username from xuidinfo where username in ('${names.join("','")}')`);
        const xuidmap = new Map<string, string[]>();
        for (const [xuid, name] of rows)
        {
            let v = xuidmap.get(name!);
            if (!v) xuidmap.set(name!, v = []);
            v.push(xuid!);
        }
        return xuidmap;
    }    
}
