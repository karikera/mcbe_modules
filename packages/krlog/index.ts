
import '@mcbe/dummy-console';
import Event from "krevent";

namespace krlog
{
    export enum Level
    {
        Verbose,
        Message,
        Warning,
        Error,
    }
    
    const logarray:string[] = [];
    
    class ListenerWaiter
    {
        private readonly waiting:string[] = [];
        private finished = false;
    
        constructor()
        {
        }
    
        finish():void
        {
            if (this.finished) return;
            this.finished = true;
    
            Promise.resolve().then(()=>{
                if (listenerWaiter === this)
                {
                    listenerWaiter = null;
                }
                for (const log of this.waiting)
                {
                    krlog.listener.fire(log.charCodeAt(0), log.substr(1));
                }
            });
        }
    
        keep(level:krlog.Level, message:string):void
        {
            this.waiting.push(String.fromCharCode(level) + message);
            if (this.waiting.length > 100)
            {
                this.waiting.shift();
            }
        }
    }
    var listenerWaiter:ListenerWaiter|null = new ListenerWaiter;
    
    class LogEvent extends Event<(level:krlog.Level, message:string)=>void>
    {
        on(listener:(level:krlog.Level, message:string)=>void):void
        {
            super.on(listener);
            if (listenerWaiter) listenerWaiter.finish();
        }
    
        remove(listener:(level:krlog.Level, message:string)=>void):boolean
        {
            const removed = super.remove(listener);
            if (!removed) return false;
            if (this.isEmpty())
            {
                listenerWaiter = new ListenerWaiter;
            }
            return true;
        }
    }
    let keepLevel = krlog.Level.Message;
    let printLevel = krlog.Level.Message;
    
    function print(level:krlog.Level, message:string):void
    {
        if (listenerWaiter) listenerWaiter.keep(level, message);
        else krlog.listener.fire(level, message);
    }
    
    let installed = false;
    
    function getStack(err:Error):string
    {
        return err.stack!.replace(/\([a-f0-9-]+_[0-9]+\.[0-9]+\.[0-9]+_scripts\/([^)]+)_[a-f0-9]+:([0-9]+:[0-9]+)\)/gm, (a, $1, $2)=>{
            return '('+$1+':'+$2+')';
        });
    }
    
    function joinConsoleMessage(message:unknown, params:string[]):string
    {
        if (message instanceof Error)
        {
            message = getStack(message);
        }
        if (params.length >= 0)
        {
            return message+' '+params.join(' ');
        }
        else
        {
            return message+'';
        }
    }
    
    export const listener = new LogEvent();
    
    export function log(level:Level, message:string):void
    {
        if (level >= keepLevel)
        {
            logarray.push(String.fromCharCode(level) + message);
        }
        if (level >= printLevel)
        {
            print(level, message);
        }
    }

    export function verbose(message:string):void
    {
        krlog.log(Level.Verbose, message);
    }
    
    export function message(message:string):void
    {
        krlog.log(Level.Message, message);
    }

    export function warning(message:string):void
    {
        krlog.log(Level.Warning, message);
    }

    export function error(message:string):void
    {
        krlog.log(Level.Error, message);
    }

    export function setLevel(_printLevel:Level, _keepLevel?:Level):void
    {
        printLevel = _printLevel;
        if (_keepLevel !== undefined) keepLevel = _keepLevel;
        else keepLevel = _printLevel;
    }

    export const page = {
        pageSize: 5,
        pageIndex: -1,
        
        *current():IterableIterator<[Level, string]>
        {
            if (page.pageIndex < 0 || page.pageIndex >= logarray.length)
            {
                return [].values();
            }
            let i = page.pageIndex * page.pageSize;
            const end = Math.min(i + page.pageSize, logarray.length);
            while (i < end)
            {
                const line = logarray[i];
                yield [line.charCodeAt(0), line.substr(1)];
                i++;
            }
        },
        all():string[]
        {
            return logarray;
        },   
        get page():number
        {
            return page.pageIndex + 1;
        },
        get pageCount():number
        {
            return Math.ceil(logarray.length/page.pageSize);
        },
        previous():boolean
        {
            if (page.pageIndex < 0) return false;
            page.pageIndex --;
            return true;
        },
        next():boolean
        {
            const maxPage = Math.ceil(logarray.length/page.pageSize);
            if (page.pageIndex >= maxPage) return false;
            page.pageIndex ++;
            return true;
        },
        clear():void
        {
            page.pageIndex = 0;
            logarray.length = 0;
        }
    };

    export function install():boolean
    {
        if (installed) return false;
        if (typeof console === 'undefined')
        {
            // avoid "use strict" for minecraft addon
            new Function('console={};')();
        }
        console.log = (msg:any, ...params:any[])=>{
            krlog.message(joinConsoleMessage(msg, params));
        };
        console.warn = console.error = (msg:any, ...params:any[])=>{
            krlog.error(joinConsoleMessage(msg, params));
        };
        console.assert = (value:any, msg:any, ...params:any[])=>{
            if (value) return;
            const joined = joinConsoleMessage(msg, params);
            krlog.error(joined);
            debugger;
            throw Error('Assertion failed: '+joined);
        };
        return true;
    }
}

export default krlog;
