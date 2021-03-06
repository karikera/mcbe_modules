
import { command } from "@mcbe/system_server";
import { Lang } from "@mcbe/lang";

let version_ge = 0;
let version_less = Infinity;

function setVersionGE(version:number):void
{
    if (version_ge < version) version_ge = version;
}
function setVersionLess(version:number):void
{
    if (version_less > version) version_less = version;
}

export async function is_1_13():Promise<boolean>
{
    const VERSION = 10013;
    if (version_ge >= VERSION) return true;
    if (version_less <= VERSION) return false;

    const [res, lang] = await Promise.all([
        command('setblock 0 999 0 light_block'),
        Lang.onLoad
    ]);

    if (lang.commands.setblock_outOfWorld.reset().exec(res.statusMessage))
    {
        setVersionGE(VERSION);
        return true;
    }
    if (lang.commands.setblock_noChange.reset().exec(res.statusMessage))
    {
        setVersionGE(VERSION);
        return true;
    }
    if (!lang.commands.generic_syntax.reset().exec(res.statusMessage))
    {
        setVersionLess(VERSION);
        console.error(`Version check failed, invalid message: ${res.statusMessage}`);
    }
    return false;
}