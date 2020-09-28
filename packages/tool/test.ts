/// <reference types="minecraft-scripting-types-server" /> 

(global as any).server = {
    log(message:string){ console.log(message); },
    registerSystem<TSystem extends IServerSystem<TSystem> = IVanillaServerSystem>(majorVersion: number, minorVersion: number): TSystem{
        return {
            executeCommand(command: string, callback: (callback: IExecuteCommandCallback) => void):void
            {
                let readfrom = 0;
                let readto = 0;
                function shift():string
                {
                    readfrom = readto;
                    if (command.charAt(readto) === '"')
                    {
                        const idx = command.indexOf('"', readto+1);
                        if (idx === -1)
                        {
                            const out = command;
                            readto = command.length;
                            return out;
                        }
                        const idx2 = command.indexOf(' ', idx+1);
                        const out = command.substr(readto, idx2);
                        readto = idx2 + 1;
                        return out;
                    }
                    else
                    {
                        const idx = command.indexOf(' ', readto);
                        if (idx === -1)
                        {
                            const out = command;
                            readto = command.length;
                            return out;
                        }
                        const out = command.substr(0, idx);
                        readto = idx + 1;
                        return out;
                    }
                }

                
                function filteredShift<NAMES extends string>(...names:NAMES[]):NAMES|null
                {
                    const name = shift();
                    for (const filter of names)
                    {
                        if (name === filter) return name as NAMES;
                    }
                
                    setTimeout(()=>{
                        const params = [
                            command.substr(0, readfrom), 
                            command.substring(readfrom, readto-1), 
                            command.substr(readto-1)
                        ];
                        callback({
                            command,
                            data:{
                                statusMessage:lang_data.commands.generic_syntax.replace(/%([0-9]$)?s/g, (str, v)=>{
                                    if (v)
                                    {
                                        return params[parseInt(v.substr(0, v.length - 1))];
                                    }
                                    return v;
                                }),
                                statusCode:-1
                            } as any
                        });
                    }, 0);
                    return null;
                }

                console.log('command: '+ command);
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
                                return;
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

import "../@mcbe/system_server";

import { Lang, itemLang } from "../@mcbe/lang";
import lang_data = require("../@mcbe/lang/data/en_US");
import ID from "../@mcbe/identifier/id";
import MAKEID from "../@mcbe/identifier/make";
import { pickOutOrCraft } from "../@mcbe/recipe/make";
import { ItemList } from "../@mcbe/item";
import { recipes } from "../@mcbe/recipe/list";


(async()=>{
    console.assert(ID.poisonous_potato == MAKEID.poisonous_potato);
    
    Lang.load(require('@mcbe/lang/data/ko_KR'));
    Lang.mergeLoad(require('@mcbe/lang/data/ko_KR'));

    const lang = await Lang.onLoad;
    console.assert(lang.id === 'en_US');
    itemLang.set('ko_KR');
    console.assert(itemLang.get(ID.ice) === '얼음');

    const list =  new ItemList;
    for (const rs of recipes.values())
    {
        for (const r of rs)
        {
            try
            {
                list.clear();
                for (const [item, count] of r.inputs)
                {
                    list.add(item, count);
                }
                if (pickOutOrCraft(list, r.tools[0], r.outputs[0][0], r.outputs[0][1]) !== 0)
                {
                    throw Error('crafting failed');
                }
                for (let i=1;i<r.outputs.length;i++)
                {
                    const o = r.outputs[i];
                    if(list.remove(o[0], o[1]) !== 0) throw Error('output unmatch: less output');
                }
                // list.clean();
                // if (list.size() !== 0) console.log('more output');
            }
            catch (err)
            {
                console.error(err.message);
                console.log(' [current list]');
                console.log(list.toString());
                console.log(' [input]');
                console.log(r.inputs.map(([item, count])=>item+': '+count).join('\n'));
                console.log(' [output]');
                console.log(r.outputs.map(([item, count])=>item+': '+count).join('\n'));

                list.clear();
                for (const [item, count] of r.inputs)
                {
                    list.add(item, count);
                }
                debugger;
                const resultcount = pickOutOrCraft(list, r.tools[0], r.outputs[0][0], r.outputs[0][1]);
                throw err;
            }
        }
    }
})();
