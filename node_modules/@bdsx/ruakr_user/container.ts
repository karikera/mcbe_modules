
import { Vector3 } from "krgeometry";

import ID from "@mcbe/identifier/id";
import Identifier from "@mcbe/identifier";
import { Store, Storage } from "@mcbe/store";
import { execute } from "@mcbe/command";
import { timepack } from "@mcbe/ruakr_util";
import { ItemList } from "@mcbe/item";

import { UserLike } from "@bdsx/block";

const VAR_CONTAINER_TYPE = '#type';
const VAR_CONTAINER_LAST = '#last';

function makeCoordId(pos:VectorXYZ) {
    return pos.x + '_' + pos.y + '_' + pos.z;
}
function makeEnderId(opener:string) {
    return 'e_' + opener;
}
function getContainerTypeFrom(s:Storage) {
    const type = s.get(VAR_CONTAINER_TYPE);
    if (type !== undefined)
        return type;
    console.error(`*${s.name}: no flags`);
    s.set(VAR_CONTAINER_TYPE, 0);
    return 0;
}
function peekArround(flags:number, pos:Vector3) {
    const id = makeCoordId(pos);
    const c = peekById(id);
    if (c)
        return c;
    switch (flags & Container.CHEST_MASK) {
        case Container.CHEST_YES:
            return peekAroundChestByPosition(id, pos);
        default:
            return null;
    }
}
const store = new Store('c');
const containers = new Map();

export class Container
{
    public readonly ids:string[];

    constructor(
        public readonly id:string, 
        public readonly storage:Storage)
    {
        this.storage = storage;
        this.ids = [id];
        containers.set(id, this);
        getContainerTypeFrom(this.storage);
        this.updateUse();
    }
    
    addId(id:string)
    {
        this.ids.push(id);
        containers.set(id, this);
    }
    getId()
    {
        return this.ids;
    }

    destroy()
    {
        for (const id of this.ids)
        {
            containers.delete(id);
        }
        for (let i = 1; i < this.ids.length; i++)
        {
            store.dispose(this.ids[i]);
        }
        this.storage.dispose();
    }

    getFlags():number
    {
        return this.storage.get(VAR_CONTAINER_TYPE)!;
    }

    getLastUse() {
        return this.storage.get(VAR_CONTAINER_LAST);
    }
    updateUse() {
        this.storage.set(VAR_CONTAINER_LAST, timepack.now());
    }
    setFlags(flags:number) {
        this.storage.set(VAR_CONTAINER_TYPE, flags);
    }
    getChestType():number {
        return this.getFlags() & Container.CHEST_MASK;
    }
    put(item:Identifier, count:number) {
        this.storage.add(item.short, count);
        this.updateUse();
    }
    get(item:Identifier, count:number) {
        const newcount = this.storage.remove(item.short, count);
        if (newcount <= 0) {
            this.storage.delete(item.short);
        }
        return newcount;
    }
    getAll(dest:ItemList) {
        for (const [key, value] of this.storage.entires()) {
            if (key.startsWith('#'))
                continue;
            dest.add(Identifier.getFromShort(key), value);
        }
    }
    updateAll(src:ItemList) {
        for (const remained of this.storage.keys()) {
            if (remained.startsWith('#'))
                continue;
            if (src.get(Identifier.getFromShort(remained)))
                continue;
            this.storage.delete(remained);
        }
        for (const item of src.values()) {
            const old = this.storage.get(item.id.short);
            if (old !== item.count) {
                this.storage.set(item.id.short, Math.max(item.count, 0));
            }
        }
        this.updateUse();
    }
    *list() {
        for (const [short, count] of this.storage.entires()) {
            if (short === VAR_CONTAINER_TYPE)
                continue;
            if (short === VAR_CONTAINER_LAST)
                continue;
            const id = Identifier.getFromShort(short);
            yield { id, count };
        }
    }
    getInventoryText() {
        let out = `--- ${this.ids.join(',')} (0x${this.getFlags().toString(16)}) ---`;
        let empty = true;
        for (const item of this.list()) {
            out += `\n${item.id}: ${item.count}`;
            empty = false;
        }
        if (empty) {
            out += '\nempty';
        }
        return out;
    }
    static isChest(id:Identifier) {
        return id === ID.chest || id === ID.trapped_chest;
    }
    static getFlags(id:Identifier) {
        return Container.FLAGS_MAP.get(id) ?? Container.INVALID;
    }
    static onDestroy(user:UserLike, flags:number, position:Vector3) {
        if (flags === Container.CHEST_YES) {
            const area = user.getTickingArea();
            const destroyChest = (pos:Vector3) => {
                const block = area.getBlock(pos);
                if (!block)
                    return;
                if (Container.isChest(block.id))
                    block.destroy();
            };
            destroyChest(position.sub(Vector3.X));
            destroyChest(position.add(Vector3.X));
            destroyChest(position.sub(Vector3.Z));
            destroyChest(position.add(Vector3.Z));
        }
        const chest = peekArround(flags, position);
        if (!chest)
            return;
        chest.destroy();
    }
    static destroy(user:UserLike, flags:number, position:Vector3) {
        execute(user.name).setblock(position, ID.air, 0, 'destroy');
        Container.onDestroy(user, flags, position);
    }
    static getEnder(opener:string) {
        const id = makeEnderId(opener);
        let c = peekById(id);
        if (c)
            return c;
        const s = store.create(id);
        s.set(VAR_CONTAINER_TYPE, Container.CHEST_ENDER);
        return new Container(id, s);
    }
    static peek(opener:string, flags:number, pos:Vector3) {
        switch (flags) {
            case Container.CHEST_ENDER:
                return Container.getEnder(opener);
            case Container.CHEST_NO:
                return peekById(makeCoordId(pos));
            case Container.CHEST_YES:
                return peekArround(flags, pos);
            default:
                throw Error('Invalid contanier flags: 0x' + flags.toString(16));
        }
    }
    static create(flags:number, pos:Vector3) {
        const id = makeCoordId(pos);
        let c = peekById(id);
        if (c)
            return c;
        switch (flags) {
            case Container.CHEST_NO: break;
            case Container.CHEST_YES:
                c = peekAroundChestByPosition(id, pos);
                if (c)
                    return c;
                break;
            default:
                throw Error(`Container.create 0x${flags.toString(16)}`);
        }
        const s = store.create(id);
        s.set(VAR_CONTAINER_TYPE, flags);
        return new Container(id, s);
    }
    static cleanEnder(opener:string) {
        const id = makeEnderId(opener);
        store.dispose(id);
    }
    static search(item:Identifier) {
        for (const s of store.values()) {
            const count = s.get(item.minified);
            if (count)
                console.log(s.name + ': ' + count);
        }
    }
    toString() {
        return 'container(' + this.ids.join(',') + ')';
    }

    static readonly INVALID = -1;
    static readonly CHEST_UNKNOWN = 0 << 2;
    static readonly CHEST_NO = 1 << 2;
    static readonly CHEST_YES = 2 << 2;
    static readonly CHEST_ENDER = 3 << 2;
    static readonly CHEST_MASK = 3 << 2;
    static readonly ALL_MASK = Container.CHEST_MASK;
    static readonly store = store;
    static readonly FLAGS_MAP = new Map<Identifier, number>([
        [ID.lit_furnace, Container.CHEST_NO],
        [ID.lit_blast_furnace, Container.CHEST_NO],
        [ID.lit_smoker, Container.CHEST_NO],
        [ID.furnace, Container.CHEST_NO],
        [ID.blast_furnace, Container.CHEST_NO],
        [ID.smoker, Container.CHEST_NO],
        [ID.brewing_stand, Container.CHEST_NO],
        [ID.hopper, Container.CHEST_NO],
        [ID.dispenser, Container.CHEST_NO],
        [ID.dropper, Container.CHEST_NO],
        [ID.barrel, Container.CHEST_NO],
        [ID.chest, Container.CHEST_YES],
        [ID.trapped_chest, Container.CHEST_YES],
        [ID.ender_chest, Container.CHEST_ENDER],
    ]);
}
function peekById(id:string) {
    const c = containers.get(id);
    if (c)
        return c;
    const s = store.get(id);
    if (s)
        return new Container(id, s);
    return null;
}
function peekAroundChestByPosition(id:string, pos:Vector3) {
    function peekChest(pos:Vector3) {
        const id = makeCoordId(pos);
        const c = containers.get(id);
        if (c) {
            if (c.getChestType() === Container.CHEST_YES)
                return c;
            else
                return null;
        }
        const s = store.get(id);
        if (s) {
            const flags = s.get(VAR_CONTAINER_TYPE);
            if (flags === undefined)
                return null;
            if ((flags & Container.CHEST_MASK) === Container.CHEST_YES) {
                return new Container(id, s);
            }
        }
        return null;
    }
    const chest = peekChest(pos.add(Vector3.X)) ||
        peekChest(pos.add(Vector3.Z)) ||
        peekChest(pos.sub(Vector3.X)) ||
        peekChest(pos.sub(Vector3.Z));
    if (chest) {
        chest.addId(id);
        return chest;
    }
    return null;
}
Store.onLoad.then(data => {
    for (const s of store.values()) {
        if (!s.get(VAR_CONTAINER_TYPE)) {
            s.dispose();
            continue;
        }
        s.reminify();
    }
});
//# sourceMappingURL=container.js.map