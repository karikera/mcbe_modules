
## About this
make identifier string to `Identifier` instance  
`Identifier` instance is unique instance per identifier  
You can compare like `id === ID.stone`  
You can use autocomplete

## Example

```ts
import mcConsole from '@mcbe/console';
mcConsole.install(); // install console

import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import MAKEID from "@mcbe/identifier/make";

system.listenForEvent(ReceiveFromMinecraftServer.PlayerDestroyedBlock, (data)=>{
    const blockId = Identifier.get(data.block_identifier);
    // toString() returns blockId.mini, it does not contains 'minecraft:'
    console.log(`breaked: ${blockId}`);

    // 'full' contains 'minecraft:'
    console.log(`full id: ${blockId.full}`);

    // 'short' is minified to under 16 characters to put as objective name
    console.log(`short id: ${blockId.short}`); 
    
    switch (blockId)
    {
    case ID.stone:
        console.log(`is stone`);
        break;
    case ID.dirt:
        console.log(`is dirt`);
        break;
    case MAKEID.log:
        console.log(`is minecraft:log`);
        break;
    case MAKEID.custom_ns$custom_id:
        console.log(`is custom_ns:custom_id`);
        break;
    }
});

```
