
(global as any).server = {
    log(message:string){ console.log(message); },
    registerSystem<TSystem extends IServerSystem<TSystem> = IVanillaServerSystem>(majorVersion: number, minorVersion: number): TSystem{
        return {
            executeCommand(command: string, callback: (callback: IExecuteCommandCallback) => void):void
            {
                const full = command;
                function shift():string
                {
                    if (command.charAt(0) === '"')
                    {
                        const idx = command.indexOf('"', 1);
                        if (idx === -1)
                        {
                            const out = command;
                            command = '';
                            return out;
                        }
                        const idx2 = command.indexOf(' ', idx+1);
                        const out = command.substr(0, idx2);
                        command = command.substr(idx2+1);
                        return out;
                    }
                    else
                    {
                        const idx = command.indexOf(' ');
                        if (idx === -1)
                        {
                            const out = command;
                            command = '';
                            return out;
                        }
                        const out = command.substr(0, idx);
                        command = command.substr(idx+1);
                        return out;
                    }
                }

                
                function filteredShift<NAMES extends string>(...names:NAMES[]):NAMES
                {
                    const name = shift();
                    for (const filter of names)
                    {
                        if (name === filter) return name as NAMES;
                    }
                    throw Error(`Not supported command: ${full} (unknown syntax: ${name})`);
                }

                console.log('command: '+ full);
                switch (filteredShift('scoreboard'))
                {
                case 'scoreboard':
                    switch (filteredShift('objectives'))
                    {
                    case 'objectives':
                        switch (filteredShift('add'))
                        {
                        case 'add':
                            const name = shift();
                            filteredShift('dummy');
                            if (name === '""' || name === '')
                            {
                                setTimeout(()=>{
                                    callback({
                                        command,
                                        data:{
                                            statusMessage:lang_data.commands.scoreboard_objectives_add_needName,
                                            statusCode:-1
                                        } as any
                                    });
                                }, 0);
                            }
                            else
                            {
                            }
                            break;
                        }
                        break;
                    }
                    break;
                }
            },
        } as any;
    },
};

import "@mcbe/system_server";

import { Lang, itemLang } from "@mcbe/lang";
import lang_data = require("@mcbe/lang/data/en_US");
import ID from "@mcbe/identifier/id";
import MAKEID from "@mcbe/identifier/make";


export async function test():Promise<void>
{
    console.assert(ID.poisonous_potato == MAKEID.poisonous_potato);
    
    Lang.load(require('@mcbe/lang/data/ko_KR'));
    Lang.mergeLoad(require('@mcbe/lang/data/ko_KR'));

    const lang = await Lang.onLoad;
    console.assert(lang.id === 'en_US');
    itemLang.set('ko_KR');
    console.assert(itemLang.get(ID.ice) === '얼음');
}
