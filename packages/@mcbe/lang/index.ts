
import escapeStringRegexp = require('escape-string-regexp');
import { SCOREBOARD_UNUSABLE_CHARACTER } from '@mcbe/ruakr_const';
import { command } from '@mcbe/system_server';
import { entiresOf } from '@mcbe/ruakr_util';
import Identifier from '@mcbe/identifier';
import en_US = require('./data/en_US');
import { LangId } from './data/langid';
import { freeze } from './data/freeze';

import '@mcbe/system_shared/require_d';

const MATCH = /%[sd]|%([0-9])(?:\\\$([sd]))?/g;

const UNUSABLE_FILTER = '([^'+SCOREBOARD_UNUSABLE_CHARACTER+']+)';

class Matcher
{
    private readonly indexes:(number|undefined)[];
    private readonly regexp:RegExp;

    constructor(msg:string)
    {
        const indexes:(number|undefined)[] = [];
        this.indexes = indexes;
        let idx = 1;
        let regexp_idx = 0;
        msg = ('^'+escapeStringRegexp(msg)+'$').replace(MATCH, (matched:string, pos:string, type:string)=>{
            if (!pos)
            {
                while (indexes[idx] !== undefined)
                {
                    idx ++;
                }
                indexes[idx++] = regexp_idx++;
                type = matched[1];
            }
            else
            {
                indexes[+pos] = regexp_idx++;
                if (type === undefined)
                {
                    type = 's';
                }
            }
            switch (type)
            {
            case 's': return UNUSABLE_FILTER;
            case 'd': return '(-?[0-9]+)';
            default: throw Error('unknown matcher %'+type);
            }
        });
        this.regexp = new RegExp(msg, 'gm');
    }

    reset():this
    {
        this.regexp.lastIndex = 0;
        return this;
    }

    exec(msg:string):string[]|null
    {
        const res:string[] = [];
        const matched = this.regexp.exec(msg);
        if (!matched) return null;
        for (let i=0;i<matched.length;i++)
        {
            const idx = this.indexes[i];
            if (idx === undefined) continue;
            res[idx] = matched[i];
        }
        return res;
    }
}

type LangData = typeof en_US;

type CommandIds = keyof LangData['commands'];

const loaded:{[key in LangId]?:LangData} = { en_US };

function getLangData(langId:LangId):LangData
{
    const langdata = loaded[langId];
    if (!langdata)
    {
        const err = 'Not loaded language: '+langId;
        console.error(err);
        console.error(`it needs to call: Lang.load(require('@mcbe/lang/data/${langId}'))`);
        throw Error(err);
    }
    return langdata;
}

export class Lang
{
    public id:LangId|null = null;
    public commands:{readonly [key in CommandIds]: Matcher};

    /**
     * Load language data
     * You can use it likes Lang.load(require('@mcbe/lang/data/[lang_code]'))
     * ex) Lang.load(require('@mcbe/lang/data/[lang_code]'))
     */
    static load(langData:LangData):void
    {
        loaded[langData.id] = langData;
    }
    
    /**
     * Load language data and merge to previous data
     */
    static mergeLoad(langData:LangData):void
    {
        const prevData = loaded[langData.id];
        if (!prevData)
        {
            loaded[langData.id] = langData;
            return;
        }
        const commands:{[key:string]:string} = {};
        const item:{[key:string]:(string|null)[]} = {};

        for (const [key, value] of entiresOf(prevData.commands))
        {
            commands[key] = value;
        }
        for (const [key, value] of entiresOf(langData.commands))
        {
            commands[key] = value;
        }
        
        for (const [key, value] of entiresOf(prevData.item))
        {
            item[key] = value;
        }
        for (const [key, value] of entiresOf(langData.item))
        {
            item[key] = value;
        }
        const newData:LangData = {commands, item} as any;
        freeze(newData);
        loaded[langData.id] = newData;
    }
    
    static set(langId:LangId):Lang
    {
        lang.id = langId;
        const langdata = getLangData(langId);
        const commands = langdata.commands;
        const commandsMatchers:{[key in CommandIds]:Matcher} = {} as any;
        for (const [key, value] of entiresOf(commands))
        {
            commandsMatchers[key] = new Matcher(value);
        }
        Object.freeze(commandsMatchers);
        lang.commands = commandsMatchers;
        return lang;
    }

    public static readonly onLoad = (async()=>{
        const res = await command('___dummy_text');
        if (lang.commands) return lang;
        const needName = res.statusMessage;
        
        for (const [langId, lang_data_in] of entiresOf(loaded))
        {
            if (!lang_data_in) continue;
            const reg = new RegExp('^' + lang_data_in.commands.generic_syntax.replace(/%([0-9]\$)?s/g, '.*') + '$');
            if (reg.test(needName))
            {
                Lang.set(langId);
                break;
            }
        }
        
        if (lang.id === null) console.error('Language: Unsupported');
        else console.log('Language: ' + lang.id);
        return lang;
    })().catch(err=>{
        console.error(err);
        return lang;
    });
}

class ItemLang
{
    constructor(public items:{[key:string]:(string|null)[]})
    {
    }

    get(item:Identifier, id?:number):string
    {
        const name = this.items[item.mini];
        if (name)
        {
            if (id !== undefined)
            {
                const out = name[id+1];
                if (out) return out;
            }
            const out = name[0];
            if (out) return out;
        }
        console.error('Name not found: '+item.mini);
        return item.mini;
    }
    
    set(langId:LangId):void
    {
        const langdata = getLangData(langId);
        const selected = langdata.item;
        itemLang.items = selected;
    }
}

const lang:Lang = new Lang;
export let itemLang:ItemLang = new ItemLang(loaded.en_US!.item);
