
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";

import { CommandResult, command } from "@mcbe/system_server";
import { Lang } from "@mcbe/lang";
import ruakr_const = require("@mcbe/ruakr_const");
import version = require("@mcbe/version");

/** objective length limit */
export const OBJECTIVE_MAX_LENGTH = ruakr_const.OBJECTIVE_MAX_LENGTH;
/** 
 * scoreboard character limit
 * this limitations is needed to parse from message
 */
export const SCOREBOARD_UNUSABLE_CHARACTER = ruakr_const.SCOREBOARD_UNUSABLE_CHARACTER;

/**
 * scoreboard character limit with regexp
 * just to capture one character
 */
export const SCOREBOARD_UNUSABLE_REGEXP = ruakr_const.SCOREBOARD_UNUSABLE_REGEXP;

declare global
{
    interface Error
    {
        statusCode?:number;
    }
}

const itemNameMap = new Map<Identifier, string>([
    [ID.concrete_powder, 'concretepowder'],
    [ID.double_stone_slab, 'stone_slab'],
    [ID.double_stone_slab2, 'stone_slab2'],
    [ID.double_stone_slab3, 'stone_slab3'],
    [ID.double_stone_slab4, 'stone_slab4'],
]);

function coordForTp(num:number):string
{
    const str = num.toString();
    if (!str.indexOf('.')) return str + '.0';
    else return str;
}

export function commandError(res:CommandResult):Error
{
    const err = Error(res.statusMessage);
    err.statusCode = res.statusCode;
    return err;
}

/** Objective result for scoreboard */
export interface Objective
{
    id:string;
    displayName:string;
    type:string;
}

/** Score result for 'scoreboard players list [playername]', just map-like object */
export type Scores = {[key:string]:number};

/** 'list' command result */
export interface ListResult extends CommandResult
{
    currentPlayer:number;
    maxPlayer:number;

    /** comma+space seperated player list */
    players:string;
}

export class Commander
{
    errorlog(msg:string):void
    {
        console.error(msg);
    }
    
    /** command result time is not sequenced */
    command<T extends CommandResult>(cmd:string):Promise<T>
    {
        return command(cmd);
    }
    
    /** get all player list from scoreboard */
    async players_list():Promise<string[]>
    {
        const [res, lang] = await Promise.all([this.command('scoreboard players list'), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            if (lang.commands.scoreboard_players_list_empty.reset().exec(res.statusMessage))
            {
                return [];
            }
            console.error('scoreboard players list: '+res.statusMessage);
            throw commandError(res);
        }
        const msg = res.statusMessage;
        const nextLine = msg.indexOf('\n');
        return msg.substr(nextLine+1).split(', ');
    }

    /**
     * get all scores from player
     * Scores is just map-like object
     */
    async players_listOf(player:string):Promise<Scores>
    {
        scoreboard.testInvalidCharacter(player);
        const [res, lang] = await Promise.all([this.command(`scoreboard players list "${player}"`), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            if (lang.commands.scoreboard_players_list_player_empty.reset().exec(res.statusMessage))
            {
                return {};
            }
            console.error('scoreboard players list: '+res.statusMessage);
            throw commandError(res);
        }
        const regexp = lang.commands.scoreboard_players_list_player_entry;
        const values:Scores = {};
        let arr:string[]|null;
        regexp.reset();
        while ((arr = regexp.exec(res.statusMessage)))
        {
            values[arr[1]] = (arr[0] as any) | 0;
        }
        return values;
    }

    /**
     * get score from player and objective
     * it can return undefined
     * It limits player name character to parse from message
     * limited characters are defined as SCOREBOARD_UNUSABLE_CHARACTER
     */
    async players_get(player:string, objective:string):Promise<number|undefined>
    {
        scoreboard.testInvalidCharacter(player);
        scoreboard.testInvalid(objective);
        const cmd = `scoreboard players test "${player}" "${objective}" *`;
        const [res, lang] = await Promise.all([this.command(cmd), Lang.onLoad]);
        if (res.statusCode !== 0) return undefined;
        const regres = lang.commands.scoreboard_players_test_success.reset().exec(res.statusMessage);
        if (!regres)
        {
            this.errorlog(cmd + ': ' + res.statusMessage);
            throw commandError(res);
        }
        return parseInt(regres[0]);
    }

    /**
     * reset score with player and objective
     * if objective is not defined, it will reset all scores of player
     * It limits player name character to parse from message
     * limited characters are defined as SCOREBOARD_UNUSABLE_CHARACTER
     */
    async players_reset(player:string, objective?:string):Promise<void>
    {
        scoreboard.testInvalidCharacter(player);
        let cmd = `scoreboard players reset "${player}"`;
        if (objective)
        {
            scoreboard.testInvalid(objective);
            cmd += ' "';
            cmd += objective;
            cmd += '"';
        }
        const res = await this.command(cmd);
        if (res.statusCode !== 0)
        {
            this.errorlog(`${cmd}: ${res.statusMessage}`);
        }
    }

    /** 
     * set score with player and objective
     */
    async players_set(player:string, objective:string, count:number):Promise<void>
    {
        const icount = count |0;
        if (count !== icount)
        {
            throw Error(`scoreboard players set "${player}" "${objective}" ${count}: count must be integer`);
        }
        scoreboard.testInvalidCharacter(player);
        scoreboard.testInvalid(objective);
        const cmd = `scoreboard players set "${player}" "${objective}" ${icount}`;
        const res = await this.command(cmd);
        if (res.statusCode !== 0)
        {
            this.errorlog(`${cmd}: ${res.statusMessage}`);
            throw commandError(res);
        }
    }

    /** add score with player and objective */
    async players_add(player:string, objective:string, count:number):Promise<number>
    {
        const icount = count |0;
        if (count !== icount)
        {
            throw Error(`scoreboard players add "${player}" "${objective}" ${count}: count must be integer`);
        }

        scoreboard.testInvalidCharacter(player);
        scoreboard.testInvalid(objective);
        const cmd = `scoreboard players add "${player}" "${objective}" ${icount}`;
        const [res, lang] = await Promise.all([this.command(cmd), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            this.errorlog(`${cmd}: ${res.statusMessage}`);
            throw commandError(res);
        }
        const regres = lang.commands.scoreboard_players_add_success.reset().exec(res.statusMessage);
        if (!regres)
        {
            console.error(`${cmd}: ${res.statusMessage}`);
            throw commandError(res);
        }
        return parseInt(regres[3]);
    }

    /** remove score with player and objective */
    async players_remove(player:string, objective:string, count:number):Promise<number>
    {
        const icount = count |0;
        if (count !== icount)
        {
            throw Error(`scoreboard players remove "${player}" "${objective}" ${count}: count must be integer`);
        }

        scoreboard.testInvalidCharacter(player);
        scoreboard.testInvalid(objective);
        const cmd = `scoreboard players remove "${player}" "${objective}" ${icount}`;
        const [res, lang] = await Promise.all([this.command(cmd), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            this.errorlog(`${cmd}: ${res.statusMessage}`);
            throw commandError(res);
        }
        const regres = lang.commands.scoreboard_players_remove_success.reset().exec(res.statusMessage);
        if (!regres) throw commandError(res);
        return parseInt(regres[3]);
    }

    /** get all objective list from scoreboard */
    async objectives_list():Promise<Objective[]>
    {
        const [list, lang] = await Promise.all([this.command(`scoreboard objectives list`), Lang.onLoad]);
        if (list.statusCode !== 0) return [];
        const reg = lang.commands.scoreboard_objectives_list_entry;
        const message = list.statusMessage;
    
        reg.reset();
    
        const objectives:Objective[] = [];
        let res:string[]|null;
        while ((res = reg.exec(message)))
        {
            const id = res[0];
            const displayName = res[1];
            const type = res[2];
            objectives.push({id, displayName, type});
        }
        return objectives;
    }
    
    /** create objective */
    objectives_add(objective:string):Promise<CommandResult>
    {
        scoreboard.testInvalid(objective);
        return this.command(`scoreboard objectives add "${objective}" dummy`);
    }
        
    /** remove objective */
    objectives_remove(objective:string):Promise<CommandResult>
    {
        scoreboard.testInvalid(objective);
        return this.command(`scoreboard objectives remove "${objective}"`);
    }
    
    /** display objective to list or sidebar */
    objectives_setDisplay(type:'list'|'sidebar', objective?:string, order?:'ascending'|'descending'):Promise<CommandResult>
    {
        let cmd = `scoreboard objectives setdisplay ${type}`;
        if (objective)
        {
            scoreboard.testInvalid(objective);
            cmd += ' "';
            cmd += objective;
            cmd += '"';
            if (order)
            {
                cmd += ' ';
                cmd += 'order';
            }
        }
        return this.command(cmd);
    }
    
    /**
     * clear all objective
     * it will repeat objectives_remove internally
     */
    async objectives_clear():Promise<void>
    {
        const list = await this.objectives_list();
        const removing:Promise<CommandResult>[] = [];
        for (const obj of list)
        {
            removing.push(this.objectives_remove(obj.id));
        }
        await Promise.all(removing);
    }

        
    /** display message */
    say(message:any):Promise<CommandResult>
    {
        return this.command(`say ${message}`);
    }

    /** list of players */
    async list():Promise<string[]>
    {    
        const res:ListResult = await this.command<ListResult>('list');
        if (res.statusCode !== 0)
        {
            this.errorlog('list: '+res.statusMessage);
            return [];
        }
        return res.players.split(', ');
    }

    /** kill user with name */
    async kill(name:string):Promise<boolean>
    {
        let cmd = `kill "${name}"`;
        const res = await this.command(cmd);
        return res.statusCode === 0;
    }

    /** fill blocks with range, it can fill 32768(0x8000) blocks at one */
    async fill(from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<boolean>
    {
        let cmd = `fill ${from.x} ${from.y} ${from.z} ${to.x} ${to.y} ${to.z} ${type}`;
        if (dataId !== undefined)
        {
            cmd += ' ';
            cmd += dataId;
        }
        const res = await this.command(cmd);
        if (res.statusCode !== 0)
        {
            this.errorlog(`fill ${from.x} ${from.y} ${from.z} ${type.mini}: ${res.statusMessage}`);
            return false;
        }
        return true;
    }

    /**
     * fill blocks with rance, it can fill unlimited count
     * it repeats 'fill' internally
     */
    async fillx(from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<void>
    {
        const minx:number = Math.min(from.x, to.x);
        const miny:number = Math.min(from.y, to.y);
        const minz:number = Math.min(from.z, to.z);
        const maxx:number = Math.max(from.x, to.x) + 1;
        const maxy:number = Math.max(from.y, to.y) + 1;
        const maxz:number = Math.max(from.z, to.z) + 1;
        let extra = type+'';
        if (dataId !== undefined)
        {
            extra += ' ';
            extra += dataId;
        }

        const proms:Promise<CommandResult>[] = [];
        const cmds:string[] = [];

        for (let z = minz; z < maxz; z+= 0x20)
        {
            const zto = Math.min(maxz - z, 0x20) + z - 1;
            for (let y = miny; y < maxy; y+= 0x20)
            {
                const yto = Math.min(maxy - y, 0x20) + y - 1;
                for (let x = minx; x < maxx; x+= 0x20)
                {
                    const xto = Math.min(maxx - x, 0x20) + x - 1;
                    const cmd = `fill ${x} ${y} ${z} ${xto} ${yto} ${zto} ${extra}`;
                    cmds.push(cmd);
                    proms.push(this.command(cmd));
                }
            }
        }
        const res = await Promise.all(proms);
        let i = 0;
        for (const r of res)
        {
            const cmd = cmds[i++];
            if (r.statusCode === 0) continue;
            this.errorlog(cmd + ': ' + r.statusMessage);
        }
    }

    /**
     * replace blocks with range, it can fill 32768(0x8000) blocks at one
     * 'fill .. replace'
     */
    async fillReplace(from:VectorXYZ, to:VectorXYZ, 
        type:Identifier, dataId:number, 
        typeFrom:Identifier, dataIdFrom:number):Promise<number>
    {
        let cmd = `fill ${from.x} ${from.y} ${from.z} ${to.x} ${to.y} ${to.z} ${type} ${dataId} replace ${typeFrom} ${dataIdFrom}`;
        const [res, lang] = await Promise.all([this.command(cmd), Lang.onLoad]);
        lang.commands.fill_success.reset();
        const regres = lang.commands.fill_success.reset().exec(res.statusMessage);
        if (res.statusCode !== 0)
        {
            if (regres && regres[0] === '0') return 0;
            this.errorlog(`fillReplace(${from}, ${to}, ${type}, ${typeFrom}) ${res.statusMessage}`);
            return -1;
        }
        if (!regres) return 1;
        return +regres[0];
    }

    /** test block at position */
    async testforblock(pos:VectorXYZ, type:Identifier):Promise<boolean>
    {
        const res = await this.command(`testforblock ${pos.x} ${pos.y} ${pos.z} ${type}`);
        return res.statusCode === 0;
    }

    /** set block at position */
    async setblock(to:VectorXYZ, type:Identifier, data?:number, option?:'destroy'|'keep'):Promise<boolean>
    {
        let cmd = `setblock ${to.x} ${to.y} ${to.z} ${type}`;
        if (data)
        {
            cmd += ' ';
            cmd += data;
        }
        if (option)
        {
            if (!data) cmd += ' 0 ';
            cmd += option;
        }
        const res = await this.command(cmd);
        if (res.statusCode !== 0)
        {
            this.errorlog(`setblock(${to.x},${to.y},${to.z},${type}) ${res.statusMessage}`);
            return false;
        }
        return true;
    }

    /**
     * replace block at position with player
     * it uses fillReplace internally
     */
    async replaceBlock(pos:VectorXYZ, from:Identifier, to:Identifier):Promise<boolean>
    {
        try
        {
            const count = await this.fillReplace(pos, pos, to, 0, from, 0);
            return count > 0;
        }
        catch (err)
        {
            return false;
        }
    }

    /** teleport user */
    async tp(name:string, to:VectorXYZ, yRot?:number, xRot?:number):Promise<boolean>
    {
        let cmd = `tp "${name}" ${coordForTp(to.x)} ${coordForTp(to.y)} ${coordForTp(to.z)}`;
        if (yRot !== undefined) cmd += ` ${yRot}`;
        if (xRot !== undefined) cmd += ` ${xRot}`;
        const res = await this.command(cmd);
        return res.statusCode === 0;
    }

    /** set title fade times to user */
    async titleTimes(name:string, fadeIn:number, stay:number, fadeOut:number):Promise<boolean>
    {
        const res = await this.command(`title "${name}" times ${fadeIn} ${stay} ${fadeOut}`);
        return res.statusCode === 0;
    }

    /** reset title fade times to user */
    async titleReset(name:string):Promise<boolean>
    {
        const res = await this.command(`title "${name}" reset`);
        return res.statusCode === 0;
    }

    /** display title to user */
    async title(name:string, type:'title'|'subtitle'|'actionbar', message:string):Promise<boolean>
    {
        const res = await this.command(`title "${name}" ${type} ${message}`);
        return res.statusCode === 0;
    }

    /**
     * title to all
     * it uses 'title @a ..' command internally
     */
    async titleAll(type:'title'|'subtitle'|'actionbar', message:string):Promise<boolean>
    {
        const res = await this.command(`title @a ${type} ${message}`);
        return res.statusCode === 0;
    }

    /**
     * clear specfic items from user
     * return removed count
     * this function targeted to 1.12, it will returns wrong number in above 1.12
     * some furnaced items have 32767 data value, it will return very weird value.
     * You can fix it with -1 data number,   -1 data number will clear 32767 and 0 data value (not all data values)
     */
    async clear(name:string, item:Identifier, data?:number, count?:number):Promise<number>
    {
        const itemId = itemNameMap.get(item) || item.mini;
        let cmd = `clear "${name}" ${itemId}`;
        if (data !== undefined)
        {
            cmd += ' ';
            cmd += data;
            if (count !== undefined)
            {
                cmd += ' ';
                cmd += count;
            }
        }
        else
        {
            if (count !== undefined)
            {
                cmd += ' 0 ';
                cmd += count;
            }
        }
        const [res, lang, is_1_13] = await Promise.all([
            this.command(cmd), 
            Lang.onLoad, 
            version.is_1_13()]);
        
        if (is_1_13)
        {
            const regres = lang.commands.clear_success.reset().exec(res.statusMessage);
            if (!regres) return 0;
            return +regres[1];
        }
        count = count !== undefined ? count : 1;
        if (res.statusCode !== 0)
        {
            if (lang.commands.clear_failure_no_items.reset().exec(res.statusMessage))
            {
                return 0;
            }
            if (lang.commands.clear_failure.reset().exec(res.statusMessage))
            {
                return count >> 1;
            }
            this.errorlog(`${cmd}: ${res.statusMessage}`);
            return 0;
        }

        const regres = lang.commands.clear_success.reset().exec(res.statusMessage);
        if (!regres) return 0;
        const output = +regres[1];
        if (output >= count) return count;
        return (output + count) >> 1;
    }

    /**
     * clear specfic items from user with multiple datas
     * it repeats 'clear' command internally
     * return removed count
     * this function targeted to 1.12, it will returns wrong number in above 1.12
     * some furnaced items have 32767 data value, it will return very weird value.
     * You can fix it with -1 data number,   -1 data number will clear 32767 and 0 data value (not all data values)
     */
    async clears(name:string, item:Identifier, datas:number[], count?:number):Promise<number>
    {
        const itemId = itemNameMap.get(item) || item.mini;

        const pre_text = `clear "${name}" ${itemId} `;

        let removed = 0; 
        for (const data of datas)
        {
            let cmd = pre_text + data;
            if (count !== undefined)
            {
                const remained = count - removed;
                if (remained <= 0) return removed;
                cmd += ` ${remained}`;
            }
            const [res, lang, is_1_13] = await Promise.all([this.command(cmd), Lang.onLoad, version.is_1_13()]);
            if (is_1_13)
            {
                const regres = lang.commands.clear_success.reset().exec(res.statusMessage);
                if (!regres) continue;
                removed += +regres[1];
            }
            else 
            {
                if (res.statusCode !== 0)
                {
                    if (lang.commands.clear_failure.reset().exec(res.statusMessage))
                    {
                        if (count === undefined) continue;
                        removed += (count >> 1);
                        continue;
                    }
                    if (lang.commands.clear_failure_no_items.reset())
                    {
                        continue;
                    }
                    this.errorlog(`${cmd}: ${res.statusMessage}`);
                    continue;
                }
            
                const regres = lang.commands.clear_success.reset().exec(res.statusMessage);
                if (!regres) continue;
                const output = +regres[1];
                if (count === undefined) removed += output;
                else
                {
                    if (output >= count) removed += count;
                    else removed += ((output + count) >> 1);
                }
            }
        }
        return removed;
    }

    /** give items to user */
    async give(name:string, item:Identifier, count?:number, data?:number):Promise<void>
    {
        const itemId = itemNameMap.get(item) || item.mini;
        let cmd = `give "${name}" ${itemId}`;
        if (count !== undefined)
        {
            cmd += ' ';
            cmd += count;
            if (data !== undefined)
            {
                cmd += ' ';
                cmd += data;
            }
        }
        else
        {
            if (data !== undefined)
            {
                cmd += ' 1 ';
                cmd += data;
            }
        }
        const res = await this.command(cmd);
        count = count !== undefined ? count : 1;
        if (res.statusCode !== 0)
        {
            this.errorlog(`${cmd}: ${res.statusMessage}`);
        }
    }

    /** get day time */
    async getDayTime():Promise<number>
    {
        const cmd = 'time query daytime';
        const [res, lang] = await Promise.all([this.command(cmd), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            console.error(`${cmd}: ${res.statusMessage}`);
            throw commandError(res);
        }
        lang.commands.time_query_daytime.reset();
        const regres = lang.commands.time_query_daytime.exec(res.statusMessage);
        if (!regres) throw Error('invalid daytime result');
        return +regres[0];
    }

    /**
     * get specific item count
     * this function targeted to 1.12, it will returns wrong number in above 1.12
     */
    async getItemCount(name:string, item:Identifier, data:number):Promise<number>
    {
        const cmd = `clear "${name}" ${item} ${data} 0`;
        const [res, lang] = await Promise.all([this.command(cmd), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            lang.commands.clear_failure_no_items.reset();
            if (lang.commands.clear_failure_no_items.exec(res.statusMessage) === null)
            {
                this.errorlog(`${cmd}: ${res.statusMessage}`);
            }
            return 0;
        }
        lang.commands.clear_testing.reset();
        const regres = lang.commands.clear_testing.exec(res.statusMessage);
        if (!regres)
        {
            this.errorlog(`${cmd}: ${res.statusMessage}`);
            return 0;
        }
        return +regres[1];
    }

    /** get specific item count with multiple datas */
    async getItemCounts(name:string, item:Identifier, datas:number[]):Promise<number>
    {
        const cmds:string[] = [];
        const proms:Promise<CommandResult>[] = [];
        for (const data of datas)
        {
            const cmd = `clear "${name}" ${item} ${data} 0`;
            cmds.push(cmd);
            proms.push(this.command(cmd));
        }
        proms.push(Lang.onLoad as any);
        const reses = await Promise.all(proms);
        const lang:Lang = reses.pop() as any;
        let count = 0;
        let i = 0;
        for (const res of reses)
        {
            const cmd = cmds[i++];
            if (res.statusCode !== 0)
            {
                if (lang.commands.clear_failure_no_items.reset().exec(res.statusMessage) === null)
                {
                    this.errorlog(`${cmd}: ${res.statusMessage}`);
                }
            }
            else
            {
                const regres = lang.commands.clear_testing.reset().exec(res.statusMessage);
                if (!regres)
                {
                    this.errorlog(`${cmd}: ${res.statusMessage}`);
                }
                else
                {
                    count += +regres[1];
                }
            }
        }
        return count;
    }

    /**
     * kill entities with mask
     * it's "kill @e[type=..]" wrapper
     */
    async killEntities(mask?:{type?:Identifier}):Promise<string[]>
    {
        let cmd = 'kill @e';
        if (mask)
        {
            cmd += '[';
            if (mask.type)
            {
                cmd += 'type=';
                cmd += mask.type.mini;
            }
            else
            {
                throw TypeError('Invalid arguments');
            }
            cmd += ']';
        }
        interface KillResult extends CommandResult
        {
            targetname:string[];
        }
        const [res, lang] = await Promise.all([this.command<KillResult>(cmd), Lang.onLoad]);
        if (res.statusCode !== 0)
        {
            if (lang.commands.generic_noTargetMatch.reset().exec(res.statusMessage))
            {
                return ruakr_const.EMPTY_ARRAY;
            }
            this.errorlog(`${cmd}: ${res.statusMessage}`);
            throw commandError(res);
        }
        return res.targetname;
    }

    /** make particle */
    particle(id:string, pos:VectorXYZ):Promise<CommandResult>
    {
        return this.command(`particle ${id} ${pos.x} ${pos.y} ${pos.z}`);
    }

    /** set spawnppoint of player */
    spawnpoint(player:string, pos:VectorXYZ):Promise<CommandResult>
    {
        return this.command(`spawnpoint "${player}" ${pos.x} ${pos.y} ${pos.z}`);
    }
}

/**
 * execute command without errorlog
 */
export class SilentCommander extends Commander
{
    errorlog(msg:string):void
    {
    }
}

/**
 * Execute with player
 * Some commands cannot receive command result
 * If player out, it will fail
 */
export class UserCommander extends SilentCommander
{
    constructor(
        public readonly executer:string)
    {
        super();
    }

    /** command result time is not sequenced */
    command<T extends CommandResult>(cmd:string):Promise<T>
    {
        return command(`execute "${this.executer}" ~~~ ${cmd}`);
    }
}

export const commander = new Commander;
export const silentCommander = new SilentCommander;

export const scoreboard = {
    /**
     * check objective name has invalid character
     * It limits more character to parse from message
     * limited characters are defined as SCOREBOARD_UNUSABLE_CHARACTER
     */
    testInvalidCharacter(name:string):void
    {
        if (SCOREBOARD_UNUSABLE_REGEXP.test(name))
        {
            const msg = 'Invalid character contains: '+name;
            console.error(msg);
            throw Error(msg);
        }
    },

    /**
     * check objective name has invalid character
     * It limits more character to parse from message
     * it calls testInvalidCharacter internally
     * and check score length for objective names
     */
    testInvalid(name:string):void
    {
        scoreboard.testInvalidCharacter(name);
        if (name.length > OBJECTIVE_MAX_LENGTH)
        {
            const msg = `${name} is too long(${name.length})`;
            console.error(msg);
            throw Error(msg);
        }
    },

    players:{
        /** get all player list from scoreboard */
        list():Promise<string[]>
        {
            return commander.players_list();
        },
        /**
         * get all scores from player
         * Scores is just map-like object
         */
        listOf(player:string):Promise<Scores>
        {
            return commander.players_listOf(player);
        },
        /**
         * get score from player and objective
         * it can return undefined
         * It limits player name character to parse from message
         * limited characters are defined as SCOREBOARD_UNUSABLE_CHARACTER
         */
        get(player:string, objective:string):Promise<number|undefined>
        {
            return commander.players_get(player, objective);
        },    
        /**
         * reset score with player and objective
         * if objective is not defined, it will reset all scores of player
         * It limits player name character to parse from message
         * limited characters are defined as SCOREBOARD_UNUSABLE_CHARACTER
         */
        reset(player:string, objective?:string):Promise<void>
        {
            return commander.players_reset(player, objective);
        },
        /** set score with player and objective */
        set(player:string, objective:string, count:number):Promise<void>
        {
            return commander.players_set(player, objective, count);
        },
        /** add score with player and objective */
        add(player:string, objective:string, count:number):Promise<number>
        {
            return commander.players_add(player, objective, count);
        },
        /** remove score with player and objective */
        remove(player:string, objective:string, count:number):Promise<number>
        {
            return commander.players_remove(player, objective, count);
        }
    },
    objectives: {
        /** get all objective list from scoreboard */
        list():Promise<Objective[]>
        {
            return commander.objectives_list();
        },
        
        /** create objective */
        add(objective:string):Promise<CommandResult>
        {
            return commander.objectives_add(objective);
        },
        
        /** remove objective */
        remove(objective:string):Promise<CommandResult>
        {
            return commander.objectives_remove(objective);
        },
        
        /** display objective to list or sidebar */
        setDisplay(type:'list'|'sidebar', objective?:string, order?:'ascending'|'descending'):Promise<CommandResult>
        {
            return commander.objectives_setDisplay(type, objective, order);
        },
        
        /**
         * clear all objective
         * it will repeat remove internally
         */
        clear():Promise<void>
        {
            return commander.objectives_clear();
        }
    }
};

/** display message */
export function say(message:any):Promise<CommandResult>
{
    return commander.say(message);
}

/** list of players */
export function list():Promise<string[]>
{    
    return commander.list();
}

/** kill user with name */
export function kill(name:string):Promise<boolean>
{
    return commander.kill(name);
}

/** fill blocks with range, it can fill 32768(0x8000) blocks at one */
export function fill(from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<boolean>
{
    return commander.fill(from, to, type, dataId);
}

/**
 * fill blocks with rance, it can fill unlimited count
 * it repeats 'fill' internally
 */
export function fillx(from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<void>
{
    return commander.fillx(from, to, type, dataId);
}

/**
 * fill blocks with range, it can fill 32768(0x8000) blocks at one
 * it uses 'execute .. fill'
 * If player out, it will fail
 * @deprecated use execute(player).fill instead
 */
export function fillBy(player:string, from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<boolean>
{
    return execute(player).fill(from, to, type, dataId);
}

/**
 * replace blocks with range, it can fill 32768(0x8000) blocks at one
 * 'fill .. replace'
 */
export function fillReplace(from:VectorXYZ, to:VectorXYZ, 
    type:Identifier, dataId:number, 
    typeFrom:Identifier, dataIdFrom:number):Promise<number>
{
    return commander.fillReplace(from, to, type, dataId, typeFrom, dataIdFrom);
}

/**
 * replace blocks with range, it can fill 32768(0x8000) blocks at one
 * 'execute .. fill .. replace'
 * If player out, it will fail
 * @deprecated use execute(player).fillReplace instead
 */
export async function fillReplaceBy(player:string, from:VectorXYZ, to:VectorXYZ, 
    type:Identifier, dataId:number, 
    typeFrom:Identifier, dataIdFrom:number):Promise<boolean>
{
    const res = await execute(player).fillReplace(from, to, type, dataId, typeFrom, dataIdFrom);
    return res !== -1;
}

/** test block at position */
export function testforblock(pos:VectorXYZ, type:Identifier):Promise<boolean>
{
    return commander.testforblock(pos, type);
}

/**
 * test block at position with player
 * it uses 'execute .. testforblock'
 * If player out, it will fail
 * @deprecated use execute(player).testforblock instead
 */
export function testforblockBy(player:string, pos:VectorXYZ, type:Identifier):Promise<boolean>
{
    return execute(player).testforblock(pos, type);
}

/** set block at position */
export function setblock(to:VectorXYZ, type:Identifier, data?:number, option?:'destroy'|'keep'):Promise<boolean>
{
    return commander.setblock(to, type, data, option);
}

/**
 * replace block at position with player
 * it uses fillReplace internally
 */
export function replaceBlock(pos:VectorXYZ, from:Identifier, to:Identifier):Promise<boolean>
{
    return commander.replaceBlock(pos, from, to);
}

/**
 * set block at position with player
 * it uses 'execute .. setblock'
 * If player out, it will fail
 * @deprecated use execute(player).setblock instead
 */
export function setBlockBy(player:string, to:VectorXYZ, type:Identifier, data?:number, option?:'destroy'|'keep'):Promise<boolean>
{
    return execute(player).setblock(to, type, data, option);
}

/**
 * replace block at position with player
 * it uses fillReplace internally
 * If player out, it will fail
 * @deprecated use execute(player).replaceBlock instead
 */
export function replaceBlockBy(player:string, pos:VectorXYZ, from:Identifier, to:Identifier):Promise<boolean>
{
    return execute(player).replaceBlock(pos, from, to);
}

/**
 * set block at position
 * it's same with setBlock but no log
 * @deprecated use slientCommander.setblock instead
 */
export function setblockWithoutError(pos:VectorXYZ, block:Identifier, data?:number, option?:'destroy'|'keep'):Promise<boolean>
{
    return silentCommander.setblock(pos, block, data, option);
}

/**
 * set block at position with player
 * it's same with setBlockBy
 * @deprecated use execute(player).setblock instead
 */
export function setblockByWithoutError(player:string, to:VectorXYZ, type:Identifier, data?:number, option?:'destroy'|'keep'):Promise<boolean>
{
    return execute(player).setblock(to, type, data, option);
}

/** teleport user */
export function tp(name:string, to:VectorXYZ, yRot?:number, xRot?:number):Promise<boolean>
{
    return commander.tp(name, to, yRot, xRot);
}

/** set title fade times to user */
export function titleTimes(name:string, fadeIn:number, stay:number, fadeOut:number):Promise<boolean>
{
    return commander.titleTimes(name, fadeIn, stay, fadeOut);
}

/** reset title fade times to user */
export function titleReset(name:string):Promise<boolean>
{
    return commander.titleReset(name);
}

/** display title to user */
export function title(name:string, type:'title'|'subtitle'|'actionbar', message:string):Promise<boolean>
{
    return commander.title(name, type, message);
}

/**
 * title to all
 * it uses 'title @a ..' command internally
 */
export function titleAll(type:'title'|'subtitle'|'actionbar', message:string):Promise<boolean>
{
    return commander.titleAll(type, message);
}

/**
 * clear specfic items from user
 * return removed count
 * this function targeted to 1.12, it will returns wrong number in above 1.12
 * some furnaced items have 32767 data value, it will return very weird value.
 * You can fix it with -1 data number,   -1 data number will clear 32767 and 0 data value (not all data values)
 */
export function clear(name:string, item:Identifier, data?:number, count?:number):Promise<number>
{
    return commander.clear(name, item, data, count);
}

/**
 * clear specfic items from user with multiple datas
 * it repeats 'clear' command internally
 * return removed count
 * this function targeted to 1.12, it will returns wrong number in above 1.12
 * some furnaced items have 32767 data value, it will return very weird value.
 * You can fix it with -1 data number,   -1 data number will clear 32767 and 0 data value (not all data values)
 */
export function clears(name:string, item:Identifier, datas:number[], count?:number):Promise<number>
{
    return commander.clears(name, item, datas, count);
}

/** give items to user */
export function give(name:string, item:Identifier, count?:number, data?:number):Promise<void>
{
    return commander.give(name, item, count, data);
}

/** get day time */
export function getDayTime():Promise<number>
{
    return commander.getDayTime();
}

/**
 * get specific item count
 * this function targeted to 1.12, it will returns wrong number in above 1.12
 */
export function getItemCount(name:string, item:Identifier, data:number):Promise<number>
{
    return commander.getItemCount(name, item, data);
}

/** get specific item count with multiple datas */
export function getItemCounts(name:string, item:Identifier, datas:number[]):Promise<number>
{
    return commander.getItemCounts(name, item, datas);
}

/**
 * kill entities with mask
 * it's "kill @e[type=..]" wrapper
 */
export function killEntities(mask?:{type?:Identifier}):Promise<string[]>
{
    return commander.killEntities(mask);
}

/** make particle */
export function particle(id:string, pos:VectorXYZ):Promise<CommandResult>
{
    return commander.particle(id, pos);
}

/**
 * make particle with player
 * If player out, it will fail
 * @deprecated use execute(player).particle instead
 */
export function particleBy(player:string, id:string, pos:VectorXYZ):Promise<CommandResult>
{
    return execute(player).particle(id, pos);
}

/** set spawnppoint of player */
export function spawnpoint(player:string, pos:VectorXYZ):Promise<CommandResult>
{
    return commander.particle(player, pos);
}

/** 
 * execute command with player
 * It cannot receive number result like 'fill count'
 * If player out, it will fail
 */
export function execute(player:string):UserCommander
{
    return new UserCommander(player);
}
