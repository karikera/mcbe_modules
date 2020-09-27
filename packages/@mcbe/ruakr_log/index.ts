
import "@mcbe/dummy-console";
import { IVector3 } from "krgeometry";
import Identifier from "@mcbe/identifier";
import { ItemStack } from "@mcbe/item";
import Event from 'krevent';


const console_log = console.log;
const console_error = console.error;
console.log = function(msg:any, ...params:any[]){
    console_log.apply(console, arguments);
};
console.error = function(msg:any, ...params:any[]){
    console_error.apply(console, arguments);
};

namespace LOG {

    export type Tag = 'V'|'M'|'W'|'E';
    
    export const USER_NAME_LENGTH = 32;
    export const ITEM_ID_LENGTH = 64;
    
    export enum Action
    {
        undefined,
        Message,
        Assertion,
        Why,
        Interact,

        Login,
        Logout,
        Hand,
        Get,
        Put,
        Acquire,
        Drop,
        Use,
        Death,
        Chat,
        Buy,
        Sell,
        Place,
        Attack,
        Move,
        Destroy,
        DestroyContainer,

        PistonPush,

        SetSpawn,
        TooMany,
        OverMine,
        OverItem,
        OverItemKeeping,
        BlockedItem,
        AggressiveDestroy,
        AggressiveEntering,
        AggressiveInteract,
        ImpossibleAttack,
        ImpossibleDestroy,
        ImpossiblePlace,
        
        ManualBan,
        Ban,
        WeakBan,
        Banned,

        length,
    }

    export interface IVector3Nullable
    {
        x?:number|null;
        y?:number|null;
        z?:number|null;
    }

    export interface Record
    {
        tag:Tag;
        action:Action;

        user?:string;

        /**
         * user position
         */
        upos:IVector3Nullable;
        
        msg?:string;

        pos:IVector3Nullable;

        item?:string|null;
        item2?:string|null;

        count?:number;
        count2?:number;
    }
        
    export interface Arguments
    {
        action:Action;
        user?:string|{name:string, position:IVector3};
        upos?:IVector3Nullable|null;
        pos?:IVector3Nullable|null;
        item?:string|Identifier|ItemStack|null;
        item2?:string|Identifier|ItemStack|null;
        count?:number;
        count2?:number;
        msg?:string;
        block?:{id:Identifier, pos:IVector3};
    }

    const onLog = new Event<(record:Record)=>void>();

    function dblog(tag:Tag, args:Arguments):string
    {
        let output = Action[args.action] || 'undefined';
        
        if (args.user)
        {
            if (typeof args.user !== 'string')
            {
                args.upos = args.user.position;
                args.user = args.user.name;
            }
            if (args.user.length >= USER_NAME_LENGTH)
            {
                const oriname = args.user;
                args.user = oriname!.substr(0, USER_NAME_LENGTH);
                error({user: args.user, action:Action.Assertion, msg: "Too long username: "+oriname});
            }
            
            output += ' @';
            output += args.user;
        }

        if (args.block)
        {
            args.item = args.block.id.name;
            args.pos = args.block.pos;
        }
        else if (args.item)
        {
            if (args.item instanceof Identifier)
            {
                args.item = args.item.name;
            }
            else if (typeof args.item !== 'string')
            {
                args.count = args.item.count;
                args.item = args.item.id.name;
            }
        }
        if (args.item2)
        {
            if (args.item2 instanceof Identifier)
            {
                args.item2 = args.item2.name;
            }
            else if (typeof args.item2 !== 'string')   
            {
                args.count2 = args.item2.count;
                args.item2 = args.item2.id.name;
            }
        }

        if (args.upos)
        {
            if (args.upos.x != null) args.upos.x = Math.floor(args.upos.x);
            if (args.upos.y != null) args.upos.y = Math.floor(args.upos.y);
            if (args.upos.z != null) args.upos.z = Math.floor(args.upos.z);
            output += `(${args.upos.x} ${args.upos.y} ${args.upos.z})`;
        }
        else
        {
            args.upos = {
                x:null,
                y:null,
                z:null
            };
        }
        if (args.pos)
        {
            if (args.pos.x != null) args.pos.x = Math.floor(args.pos.x);
            if (args.pos.y != null) args.pos.y = Math.floor(args.pos.y);
            if (args.pos.z != null) args.pos.z = Math.floor(args.pos.z);
            output += `(${args.pos.x} ${args.pos.y} ${args.pos.z})`;
        }
        else
        {
            args.pos = {
                x:null,
                y:null,
                z:null,
            };
        }
        if (args.item)
        {
            output += ' ';
            output += args.item;
        }
        if (args.count != null)
        {
            output += '(';
            output += args.count;
            output += ')';
        }
        if (args.item2)
        {
            output += ' ';
            output += args.item2;
        }
        if (args.count2 != null)
        {
            output += '(';
            output += args.count2;
            output += ')';
        }
        if (args.msg)
        {
            output += ' ';
            output += args.msg;
        }
        switch (tag)
        {
        case 'V': break;
        case 'M': console.log(output); break;
        case 'W': console.log(output); break;
        case 'E': console.error(output); break;
        }

        const record = args as Record;
        record.tag = tag;
        onLog.fire(record);
        return output;
    }

    export function on(listener:(record:Record)=>void):void
    {
        onLog.on(listener);
    }
    
    export function verbose(args:Arguments):void
    {
        dblog('V', args);
    }
    export function message(args:Arguments):void
    {
        dblog('M', args);
    }
    export function warning(args:Arguments):void
    {
        dblog('W', args);
    }
    export function error(args:Arguments):void
    {
        dblog('E', args);
    }
    export function append(args:Arguments, message:string):void
    {
        if (!args.msg) args.msg = message;
        else args.msg += ' ' + message;
    }
    export function assert(test:boolean, args:Arguments&{action?:Action}):void
    {
        if (test) return;
        args.action = Action.Assertion;
        const msg = dblog('E', args);
        throw Error('Assertion Failed: '+msg);
    }
    export function message_np(msg:string):void
    {
        message({action:Action.Message, msg});
    }
    export function error_np(msg:string):void
    {
        error({action:Action.Message, msg});
    }
    export function error_obj(err:Error):void
    {
        error({action:Action.Assertion, msg:err.stack});
    }
}

export default LOG;
