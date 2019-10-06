
## About this
set callback when next update

## Example

```ts

/// <reference path="../../node_modules/minecraft-scripting-types-server/index.d.ts" />

import { callAtNextTick } from '@mcbe/nexttick';
import events from '@mcbe/event_server';
import { system } from '@mcbe/system_server';

events.listen.EntityCreated(entity=>{
    if (entity.entity.__identifier__ === 'minecraft:arrow') // when arrow is created
    {
        // if you delete arrow instantly, minecraft will crash (1.12)
        // it needs to wait to next tick
        callAtNextTick(()=>{
            system.destroyEntity(entity.entity);
        });
    }    
});


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
