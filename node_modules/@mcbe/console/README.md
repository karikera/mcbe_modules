
## About this
console.log / console.error to chat message

## Example
```ts

import { realTime } from '@mcbe/timer/realtime';
realTime.install(); // install timer to use setTimeout/setInterval, You can use 'ticktime' instead of 'realtime'
// If timer is installed, console.log will delay 5sec at begining
import mcConsole from '@mcbe/console';
mcConsole.install(); // install console to use console.log/console.error

console.log('test');
console.log('test2');
console.error('test3');

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
const mcConsole = {
    /**
     * install console.log/console.error
     * @param disableDefaultChatLog disable default message for online server
     */
    install(disableDefaultChatLog:boolean = false):boolean;
    /**
     * It will send log to target
     * @param target user name
     */
    addTarget(target:string):void;
    /**
     * remove user that added by addTarget
     * @param target user name
     */
    removeTarget(target:string):void;
    disableDefaultChatLog():void;
    enableDefaultChatLog():void;
    /**
     * send message to target with colored text
     * It will just attach minecraft color code to front
     * @param target user name
     * @param level Verbose = gray, Message = white, Warning = dark red, Error = red
     */
    message(target:string, level:krlog.Level, msg:string);
};
```