import krlog from "krlog";
import { isTimerInstalled } from "krchecktimer";
import { tellraw, tellrawAll } from "@mcbe/system_server";

const LOG_LEVEL_PREFIX:string[] = [];

LOG_LEVEL_PREFIX[krlog.Level.Verbose] = '§7';
LOG_LEVEL_PREFIX[krlog.Level.Message] = '';
LOG_LEVEL_PREFIX[krlog.Level.Warning] = '§4';
LOG_LEVEL_PREFIX[krlog.Level.Error] = '§c';

const listeners = new Map<string, (level:krlog.Level, message:string)=>void>();
let defaultChatLog = false;
let installed = false;
let defaultChatLogTimer:NodeJS.Timeout|null = null;

function mainListener(level:krlog.Level, message:string):void
{
    tellrawAll([LOG_LEVEL_PREFIX[level] + message]);
}

const mcConsole = {
    /**
     * send message to target with colored text
     * It will just attach minecraft color code to front
     * @param target user name
     * @param level Verbose = gray, Message = white, Warning = dark red, Error = red
     */
    message(target:string, level:krlog.Level, msg:string)
    {
        tellraw(target, [LOG_LEVEL_PREFIX[level] + msg]);
    },

    /**
     * It will send log to target
     * @param target user name
     */
    addTarget(target:string):void
    {
        if (listeners.has(target)) return;
        function printTo(level:krlog.Level, msg:string):void
        {
            mcConsole.message(target, level, msg);
        }
        krlog.listener.on(printTo);
        listeners.set(target, printTo);
    },
    
    /**
     * remove user that added by addTarget
     * @param target user name
     */
    removeTarget(target:string):void
    {
        const listener = listeners.get(target);
        if (listener)
        {
            listeners.delete(target);
            krlog.listener.remove(listener);
        }
    },

    disableDefaultChatLog():void
    {
        if (!defaultChatLog) return;
        defaultChatLog = false;
        if (defaultChatLogTimer)
        {
            clearTimeout(defaultChatLogTimer);
        }
        else
        {
            krlog.listener.remove(mainListener);
        }
    },
    
    enableDefaultChatLog():void
    {
        if (defaultChatLog) return;
        defaultChatLog = true;
        krlog.listener.on(mainListener);
    },

    /**
     * install console.log/console.error
     * @param disableDefaultChatLog disable default message for online server
     */
    install(disableDefaultChatLog = false):boolean
    {
        if (installed) return false;
        installed = true;
        krlog.install();
        if (!disableDefaultChatLog && !defaultChatLog)
        {
            defaultChatLog = true;
            if (isTimerInstalled())
            {
                defaultChatLogTimer = setTimeout(()=>{
                    defaultChatLogTimer = null;
                    if (listeners.size !== 0) return;
                    krlog.listener.on(mainListener);
                }, 5000);
            }
            else
            {
                if (listeners.size !== 0) return true;
                krlog.listener.on(mainListener);
            }
        }
        return true;
    }
};

export default mcConsole;
