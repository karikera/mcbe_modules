
## About this
it contains system instance for sharing  
Almost of my modules are dependent on this module  
You can override system instance with setSystem function before it created

## Example
```ts

import { createServerSystem } from '@mcbe/system_shared';
const system = createServerSystem(0,0);

// or

import { registerSystem } from '@mcbe/system_shared';
const system = client.registerSystem(0,0);
setSystem(system);

```

## References
```ts

// system shared, it can be client or server
let systemShared:IVanillaClientSystem|IVanillaServerSystem;

// set system from external
function setSystem(system:IVanillaClientSystem|IVanillaServerSystem):void;

// get system object
// It will create system with (0,0) if it does not exist
function getSystem():IVanillaClientSystem|IVanillaServerSystem;

// create client system
// if system is already exists it will that
function createClientSystem(majorVersion: number, minorVersion: number):IVanillaClientSystem;

// create server system
// if system is already exists it will that
function createServerSystem(majorVersion: number, minorVersion: number):IVanillaServerSystem;

```