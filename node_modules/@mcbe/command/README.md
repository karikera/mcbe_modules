
## About this
Minecraft Bedrock Commands compilations.  

## Example

```ts

import { scoreboard, say } from '@mcbe/command';
import { system } from '@mcbe/system_server'; // created by server.registerSystem(0,0)

async function asyncfunc()
{
    // if you want to use scoreboard, you need to enable cheat!

    scoreboard.objectives.add("test"); // add objective
    scoreboard.players.set("dummy_player", "test", 100); // set score
    scoreboard.players.add("dummy_player", "test", 100); // add score
    scoreboard.objectives.setDisplay("sidebar", "test"); // set display
    const get_value = await scoreboard.players.get("dummy_player", "test"); // get score
    say(get_value);
}

let counter = 0;
system.update = ()=>{
    counter ++;
    if (counter === 20*5) // after 5 seconds
    {
        asyncfunc();
    }
    if (counter === 20*10) // after 10 seconds
    {
        scoreboard.objectives.remove('test');
    }
};

```

## References
```ts

/////////////////////////////////////////////////
// Scoreboard commands

const scoreboard = {
    // check objective name has invalid character
    // It limits more character to parse from message
    testInvalidCharacter(name:string):void,
    
    // check objective name has invalid character
    // It limits more character to parse from message
    // it calls testInvalidCharacter internally
    // and check score length for objective names
    testInvalid(name:string):void,

    players:{
        // get all player list from scoreboard
        list():Promise<string[]>,
        // get all scores from player
        // Scores is just map-like object
        listOf(player:string):Promise<Scores>,
        // get score from player and objective
        // it can return undefined
        get(player:string, objective:string):Promise<number|undefined>,
        // reset score with player and objective
        // if objective is not defined, it will reset all scores of player
        reset(player:string, objective?:string):Promise<void>,
        //set score with player and objective
        set(player:string, objective:string, count:number):Promise<void>,
        // add score with player and objective
        add(player:string, objective:string, count:number):Promise<number>,
        // remove score with player and objective
        remove(player:string, objective:string, count:number):Promise<number>,
    },
    objectives: {
        // get all objective list from scoreboard
        // Objective has { id:string, displayName:string, type:string } properties
        list():Promise<Objective[]>,
        // create objective
        add(objective:string):Promise<CommandResult>,
        // remove objective
        remove(objective:string):Promise<CommandResult>,
        // display objective to list or sidebar
        setDisplay(type:'list'|'sidebar', objective?:string, order?:'ascending'|'descending'),
        // clear all objective
        // it will repeat remove internally
        clear():Promise<void>,
    }
};

/////////////////////////////////////////////////
// Other Commands

// Command result interface from @mcbe/system_server module
interface CommandResult
{
    statusCode:number; // zero if succeeded
    statusMessage:string; // command result message
}

// display message
function say(message:string):Promise<CommandResult>;

// list of players
function list():Promise<string[]>;

// kill user with name
function kill(name:string):Promise<boolean>;

// fill blocks with range, it can fill 32768(0x8000) blocks at one
function fill(from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<boolean>;

// fill blocks with rance, it can fill unlimited count
// it repeats 'fill' internally
function fillx(from:VectorXYZ, to:VectorXYZ, type:Identifier, dataId?:number):Promise<void>;

// replace blocks with range, it can fill 32768(0x8000) blocks at one
// 'fill .. replace' command wrapper
function fillReplace(from:VectorXYZ, to:VectorXYZ, 
    type:Identifier, dataId:number, 
    typeFrom:Identifier, dataIdFrom:number):Promise<number>;

// test block at position
function testforblock(pos:VectorXYZ, type:Identifier):Promise<boolean>;

// set block at position
// it will write log if it failed
function setblock(to:VectorXYZ, type:Identifier, data?:number, option?:'destroy'|'keep'):Promise<boolean>;

// replace block at position with player
// it uses fillReplace internally
function replaceBlock(pos:VectorXYZ, from:Identifier, to:Identifier):Promise<boolean>;

// teleport user
function tp(name:string, to:VectorXYZ):Promise<boolean>;

// set title fade times
function titleTimes(name:string, fadeIn:number, stay:number, fadeOut:number):Promise<boolean>;

// reset title fade times
function titleReset(name:string):Promise<boolean>;

// display title to user
function title(name:string, type:'title'|'subtitle'|'actionbar', message:string):Promise<boolean>;

// title to all
// it uses 'title @a ..' command internally
function titleAll(type:'title'|'subtitle'|'actionbar', message:string):Promise<boolean>;

// clear specfic items from user
// return removed count
// this function targeted to 1.12, it will returns wrong number in above 1.12
// some furnaced items have 32767 data value, it will return very weird value.
// You can fix it with -1 data number,   -1 data number will clear 32767 and 0 data value (not all data values)
function clear(name:string, item:Identifier, data?:number, count?:number):Promise<number>;

// clear specfic items from user with multiple datas
// it repeats 'clear' command internally
// return removed count
// this function targeted to 1.12, it will returns wrong number in above 1.12
// some furnaced items have 32767 data value, it will return very weird value.
// You can fix it with -1 data number,   -1 data number will clear 32767 and 0 data value (not all data values)
function clears(name:string, item:Identifier, datas:number[], count?:number):Promise<number>;

// give items to user
function give(name:string, item:Identifier, count?:number, data?:number):Promise<void>;

// get day time
function getDayTime():Promise<number>;

// get specific item count
function getItemCount(name:string, item:Identifier, data:number):Promise<number>;

// get specific item count with multiple datas
function getItemCounts(name:string, item:Identifier, datas:number[]):Promise<number>;

// kill entities with mask
// it's "kill @e[type=..]" wrapper
function killEntities(mask?:{type?:Identifier}):Promise<string[]>;

// make particle
function particle(id:string, pos:VectorXYZ):Promise<CommandResult>;

// set spawnppoint of player
function spawnpoint(player:string, pos:VectorXYZ):Promise<CommandResult>;

/** 
 * execute command with player
 * It cannot receive number result like 'fill count'
 * If player out, it will fail
 */
function execute(player:string):UserCommander;

/////////////////////////////////////////////////
// ETC

// Make Error instance from CommandResult
function commandError(res:CommandResult):Error;

// it contains commands functions
// almost command functions are wrapper of commander methods
const commander:Commander;

```
