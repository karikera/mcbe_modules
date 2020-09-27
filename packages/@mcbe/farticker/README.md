
## About this
It can setblock to unloaded chunk  
Or load and wait chunk

## Example

```ts
import { realTime } from '@mcbe/timer/realtime';
realTime.install(); // install timer to use setTimeout/setInterval
// It needs timer supports, it repeats setblock per 1sec until success

import ID from "@mcbe/identifier/id";
import { setFarBlock } from "@mcbe/farticker";

setFarBlock({x:0, y:80, z:0}, ID.stone); // setblock 0 80 0 stone
setFarBlock({x:1000, y:80, z:0}, ID.stone); // setblock 1000 80 0 stone

```

## @mcbe/event dependency
`@mcbe/event` will freeze system object to prevent modifiying `initialize` `update` `shutdown` functions.  
```ts
// please use
import events from "@mcbe/event_server";
events.initialize.on(()=>{ /* codes */ });
events.update.on(()=>{ /* codes */ });
events.shutdown.on(()=>{ /* codes */ });
// instead of 
system.initialize = ()=>{ /* codes */ };
system.update = ()=>{ /* codes */ };
system.shutdown = ()=>{ /* codes */ };
```
