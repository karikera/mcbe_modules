
## About this
setTimeout/setInterval supports

## Example

```ts
import { realTime } from '@mcbe/timer/realtime';
realTime.install();

// or

import { tickTime } from '@mcbe/timer/ticktime';
tickTime.install();


```

## @mcbe/event dependency
`@mcbe/event` will freeze system object to prevent modifiying `initialize` `update` `shutdown` functions.  
```ts
// please use
import { sharedEvents } from "@mcbe/event";
sharedEvents.initialize.on(()=>{ /* codes */ });
sharedEvents.update.on(()=>{ /* codes */ });
sharedEvents.shutdown.on(()=>{ /* codes */ });
// instead of 
system.initialize = ()=>{ /* codes */ };
system.update = ()=>{ /* codes */ };
system.shutdown = ()=>{ /* codes */ };
```

## References

```ts

/// @mcbe/timer/realtime
const TIME_PER_SECONDS = 1000;
const realTime:Timer;

/// @mcbe/timer/ticktime
const TICK_PER_SECONDS = 20;
const tickTime:Timer;

/// @mcbe/timer

class Timer
{    // current time
    now:number;
    
    /**
     * @param now starting number of timer
     * @param getTime get time 
     */
    constructor(now:number, getTime:(prev:number)=>number);
    
    // promise wrapping of setTimeout
    promise(wait:number):Promise<void>;

    // setTimeout
    timeout(fn:(...args:any[])=>void, wait:number, ...args:any[]):Timeout;
    // setInterval
    interval(fn:(...args:any[])=>void, interval:number, ...args:any[]):Timeout;
    clearTimeout(timeout:Timeout):void;
    clearInterval(timeout:Timeout):void;

    /**
     * Use it with setTimeout & setInterval
     */
    install():void;
}

class Timeout implements NodeJS.Timeout
{
}

```
