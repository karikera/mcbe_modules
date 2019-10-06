
## About this
global system variable that created by @mcbe/system_shared

## Example

```ts

import events from '@mcbe/event_server';

events.initialize.on(()=>{ /* on initialize */ });
events.shutdown.on(()=>{ /* on shutdown */ });
events.update.on(()=>{ /* on update */ });

events.broadcast.DisplayChat({message:' message '}); // broadcast minecraft:display_chat event
events.listen.EntityCreated(ev=>{ // listen minecraft:entity_created event
    ev.entity; // IEntity
});

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