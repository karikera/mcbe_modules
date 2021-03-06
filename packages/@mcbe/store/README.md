
## About this
It's `Map<string, Map<string, number>>` style storage with auto-saving
It will keep every stored values  
Si, It can write/read without any delay  
It uses prefix to avoid duplication  

## Example

```ts
import { realTime } from '@mcbe/timer/realtime';
realTime.install(); // install timer to use setTimeout/setInterval
// It needs timer supports, it saves modified fields after 1sec

import { Store } from '@mcbe/store';

const chest = new Store('chest');

Store.onLoad.then(loaded=>{ // wait loading, It will read all of scoreboard
    loaded.scoreboards; // string array, player names that not in store
        
    const chest1 = chest.create('x_y_z'); // player name of scoreboard is chest_x_y_z
    const chest2 = chest.create('1_2_3'); // player name of scoreboard is chest_1_2_3
    // player name length is no limited, I tested over 4*1024*1024 characters

    const chest1_item1 = chest1.get('item1'); // get 'item1'
    // 'item1' is objective, it will auto generated
    // objective name has length limit (16 characters)

    chest1.add('item1', 1); // increase item1 count
    chest2.set('item2', chest1_item1 || 0);
    
    setTimeout(()=>{
        say("chest1_item1-old: "+chest1_item1);
        say("chest1_item1-new: "+chest1.get('item1'));
        say("chest2_item2: "+chest2.get('item2'));
    }, 5000);
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

## References

```ts

// Map<string, Map<string, number>> style storage that will store scoreboard
class Store
{
    private static readonly all = new Map<string, Store>();
    private readonly data = new Map<string, Storage>();

    // it will name scoreboard player as [prefix]_[name]
    constructor(public readonly prefix:string);

    // create storage
    // it will get storage if it already exists
    create(name:string):Storage;

    // get storage
    // it will return null if not found
    get(name:string):Storage|null;

    // dispose storage with name
    dispose(name:string):void;

    // get all entries as [name, storage]
    // name is without prefix
    * entires():IterableIterator<[string, Storage]>;

    // get all storages
    * values():IterableIterator<Storage>;
    
    // get all names
    // this name is without prefix
    * keys():IterableIterator<string>;

    // save contained storages without waiting
    saveNow():void;

    // save all storages across all store
    static saveNowAll():boolean;

    // read all storages from scoreboard
    // it will return scoreboard player list which contains non-store scoreboard players
    static async updateAll():Promise<StoreLoaded>;

    // on load all storages
    // it have scoreboard player list which contains non-store scoreboard players
    public static readonly onLoad:Promise<StoreLoaded>;
}

// kind of event object
class StoreLoaded
{
    // non-store scoreboard players
    scoreboards:string[];

    // filter for 'this.scoreboards'
    // if return true, it will removed from scoreboards, ordering will twist for performance
    use(cb:(name:string)=>boolean):void;
}

// Map<string, numbe> style storage that will store scoreboard
class Storage
{
    // rename storage
    // it will repeat remove & set
    // this storage will be destroyed
    // and return renamed storage
    rename(newname:string):Storage|null;

    // get field count
    size():number;
    
    // clear all fields
    clear():void;

    // remove this storage
    dispose():void;

    // get value
    // key is cannot be longer than SCORE_LIMIT
    get(key:string):number|undefined

    // set number if field is undefined
    setDefault(key:string, value:number):void;
    
    // set number to field
    set(key:string, value:number):void;
    
    // add number to field
    add(key:string, value:number):number;

    // subtract number to field    
    remove(key:string, value:number):number;

    // delete field
    delete(key:string):void;

    // update specific field
    async update(key:string):Promise<void>;

    // update all objectives
    async updateAll():Promise<void>;

    entires():IterableIterator<[string, number]>;

    keys():IterableIterator<string>;
    
    values():IterableIterator<number>;
}

```
