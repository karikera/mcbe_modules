
## About this
global system variable that created by @mcbe/system_shared

## Example

```ts

import { system } from '@mcbe/system_server';

```

## References

```ts
const system:IVanillaServerSystem;

/**
 * @param item you can use Identifier with ID.~~
 *          import ID = require('@mcbe/identifier/id');
 */
function createItem(item:Identifier, pos:VectorXYZ):IEntity|null;

// command result time is not sequenced
function command<T extends CommandResult>(command:string):Promise<T>;

// tellraw, display chat without any prefix
function tellraw(name:string, text:string[]):Promise<boolean>;

// tellraw to all
function tellrawAll(text:string[]):Promise<boolean>;

// Command result interface
export interface CommandResult
{
    // 0 when succeeded
    statusCode:number;

    statusMessage:string;
}

```