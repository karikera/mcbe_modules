
import '@mcbe/dummy-console';

import { command, CommandResult } from "@mcbe/system_server";
import { commandError, scoreboard, Scores } from "@mcbe/command";
import { Lang } from "@mcbe/lang";

/** 
 * scoreboard by objective name
 * it needs to call 'create' to create scoreboard
 */
export class ObjectiveScoreboard
{
    constructor(public readonly objective:string)
    {
        scoreboard.testInvalid(objective);
    }

    /** create new objective */
    create():Promise<CommandResult>
    {
        return scoreboard.objectives.add(this.objective);
    }

    /** remove objective */
    destroy():Promise<CommandResult>
    {
        return scoreboard.objectives.remove(this.objective);
    }

    setDisplay(mode:'list'|'sidebar', order?:'ascending'|'descending'):Promise<CommandResult>
    {
        return scoreboard.objectives.setDisplay(mode, this.objective, order);
    }

    /** get score by player name */
    get(name:string):Promise<number|undefined>
    {
        return scoreboard.players.get(name, this.objective);
    }

    /** reset score by player name */
    reset(name:string):Promise<void>
    {
        return scoreboard.players.reset(name, this.objective);
    }

    /** set score by player name */
    set(name:string, count:number):Promise<void>
    {
        return scoreboard.players.set(name, this.objective, count);
    }
    
    /** add score by player name */
    add(name:string, count:number):Promise<number>
    {
        return scoreboard.players.add(name, this.objective, count);
    }
    
    /** subtract score by player name */
    remove(name:string, count:number):Promise<number>
    {
        return scoreboard.players.remove(name, this.objective, count);
    }
}

async function addObjective(name:string):Promise<void>
{
    const res = await scoreboard.objectives.add(name);
    if (res.statusCode !== 0)
    {
        const lang = await Lang.onLoad;
        if (!lang.commands.scoreboard_objectives_add_alreadyExists.reset().exec(res.statusMessage))
        {
            throw commandError(res);
        }
    }
}

/**
 * scoreboard by player name
 * it will generate objective automatically
 */
export class Scoreboard
{
    constructor(public readonly player:string)
    {
        scoreboard.testInvalidCharacter(this.player);
    }

    /** get score by objective name */
    get(objective:string):Promise<number|undefined>
    {
        return scoreboard.players.get(this.player, objective);
    }

    /** list all scores in player */
    list():Promise<Scores>
    {
        return scoreboard.players.listOf(this.player);
    }

    /**
     * reset score by objective name
     * without objective name, it will reset all objectives
     */
    reset(objective?:string):Promise<void>
    {
        return scoreboard.players.reset(this.player, objective);
    }

    /** set score by objective name */
    async set(objective:string, count:number):Promise<void>
    {
        scoreboard.testInvalid(objective);
        let res = await command(`scoreboard players set "${this.player}" "${objective}" ${count}`);
        if (res.statusCode !== 0)
        {
            await addObjective(objective);
            res = await command(`scoreboard players set "${this.player}" "${objective}" ${count}`);
            if (res.statusCode !== 0) throw commandError(res);
        }
    }
    
    /** add score by objective name */
    async add(objective:string, count:number):Promise<number>
    {
        scoreboard.testInvalidCharacter(this.player);
        scoreboard.testInvalid(objective);
        let res = await command(`scoreboard players add "${this.player}" "${objective}" ${count}`);
        if (res.statusCode !== 0)
        {
            await addObjective(objective);
            res = await command(`scoreboard players add "${this.player}" "${objective}" ${count}`);
            if (res.statusCode !== 0) throw commandError(res);
        }
        const lang = await Lang.onLoad;
        const regres = lang.commands.scoreboard_players_add_success.reset().exec(res.statusMessage);
        if (!regres) throw commandError(res);
        return parseInt(regres[3]);
    }
    
    /** subtract score by objective name */
    async remove(objective:string, count:number):Promise<number>
    {
        scoreboard.testInvalid(objective);
        let res = await command(`scoreboard players remove "${this.player}" "${objective}" ${count}`);
        if (res.statusCode !== 0)
        {
            await addObjective(objective);
            res = await command(`scoreboard players remove "${this.player}" "${objective}" ${count}`);
            if (res.statusCode !== 0) throw commandError(res);
        }
        const lang = await Lang.onLoad;
        const regres = lang.commands.scoreboard_players_remove_success.reset().exec(res.statusMessage);
        if (!regres) throw commandError(res);
        return parseInt(regres[3]);
    }
}
