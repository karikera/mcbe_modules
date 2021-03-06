
import "krchecktimer";
import { sharedEvents } from "@mcbe/event";
import { nextTickOnUpdate } from "@mcbe/nexttick";


class TimerLink
{
    prev:TimerLink = this;
    next:TimerLink = this;

    remove():void
    {
        this.prev.next = this.next;
        this.next.prev = this.prev;
        this.next = this.prev = this;
    }

    insertToPrev(node:Timeout):void
    {
        const p = this.prev;
        p.next = node;
        node.prev = p;
        node.next = this;
        this.prev = node;
    }
    insertToNext(node:Timeout):void
    {
        const n = this.next;
        n.prev = node;
        node.next = n;
        node.prev = this;
        this.next = node;
    }
}

let counter = 1000;

export class Timeout extends TimerLink implements NodeJS.Timeout
{
    private readonly id = counter++;

    constructor(
        public time:number,
        private readonly fn:(...args:any[])=>void|Promise<any>, 
        private readonly args:any[],
        public interval:number)
    {
        super();
    }

    call():void
    {
        try
        {
            const res = this.fn(...this.args);
            if (res instanceof Promise)
            {
                res.catch(console.error);
            }
        }
        catch (err)
        {
            console.error(err);
        }
    }

    hasRef():boolean { throw Error('Not supported'); }
    ref(): this { throw Error('Not supported'); }
    refresh(): this { throw Error('Not supported'); }
    unref(): this { throw Error('Not supported'); }
    [Symbol.toPrimitive](){ return this.id; }
}

declare var setTimeout:(fn:(...args:any[])=>void, wait:number, ...args:any[])=>Timeout;
declare var setInterval:(fn:(...args:any[])=>void, wait:number, ...args:any[])=>Timeout;
declare var clearTimeout:(timeout:Timeout)=>void;
declare var clearInterval:(timeout:Timeout)=>void;

export class Timer
{
    private readonly axis:TimerLink = new TimerLink;

    /** function that attached to ruacore.update */
    public readonly onUpdate:()=>void;
    
    /**
     * @param now starting number of timer
     * @param getTime get time 
     */
    constructor(public now:number, private readonly getTime:(prev:number)=>number)
    {
        this.onUpdate = ()=>{
            this.update();
            const now = this.now;
            const axis = this.axis;
        
            let node = axis.next as Timeout;
            if (node === axis) return;
            for (;;)
            {
                const left = now - node.time;
                if (left < 0) return;
                node.call();
                node.remove();
                if (node.interval !== -1)
                {
                    node.time += node.interval;
                    this.insert(node);
                }
                node = axis.next as Timeout;
                if (node === axis) return;
            }
        };
        sharedEvents.update.onBefore(this.onUpdate, nextTickOnUpdate);
    }
    
    /**
     * insert timeout instance
     * you can use just Timer.timeout() method
     */
    insert(node:Timeout):void
    {
        const axis = this.axis;
        let find = axis.next as Timeout;
        for (;;)
        {
            if (find === axis || node.time <= find.time)
            {
                find.insertToPrev(node);
                return;
            }
            find = find.next as Timeout;
        }
    }

    /** promise wrapping of setTimeout */
    promise(wait:number):Promise<void>
    {
        return new Promise(resolve=>this.timeout(resolve, wait));
    }

    /** setTimeout */
    timeout(fn:(...args:any[])=>void, wait:number, ...args:any[]):Timeout
    {
        const timeout = new Timeout(this.now + wait, fn, args, -1);
        this.insert(timeout);
        return timeout;
    }
    
    /** setInterval */
    interval(fn:(...args:any[])=>void, interval:number, ...args:any[]):Timeout
    {
        const timeout = new Timeout(this.now + interval, fn, args, interval);
        this.insert(timeout);
        return timeout;
    }
    
    clearTimeout(timeout:Timeout):void
    {
        timeout.remove();
    }
    
    clearInterval(timeout:Timeout):void
    {
        timeout.remove();
        timeout.interval = -1;
    }

    /** it will call 'getTime' from constructor parameter to update 'now' */
    update():void
    {
        this.now = this.getTime(this.now);
    }

    /**
     * Use it with setTimeout & setInterval
     */
    install():void
    {
        if (typeof setTimeout !== 'undefined') return;
        new Function('setTimeout=null;setInterval=null;clearTimeout=null;clearInterval=null;')();
        
        setTimeout = (fn, wait, ...args)=>{
            return this.timeout(fn, wait, ...args);
        };
        
        setInterval = (fn, interval, ...args)=>{
            return this.interval(fn, interval, ...args);
        };
        
        clearTimeout = (timeout)=>{
            timeout.remove();
        };
        
        clearInterval = (timeout)=>{
            timeout.remove();
            timeout.interval = -1;
        };
    }
}
