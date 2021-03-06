
import { timerIsNeeded } from "krchecktimer";
timerIsNeeded("store");

import { Scoreboard } from "@mcbe/scoreboard";
import { scoreboard } from "@mcbe/command";
import ruacore from "@mcbe/event_server";
import Identifier from "@mcbe/identifier";

/** Map<string, number> style storage that will store scoreboard */
export class Storage
{
    private readonly board:Scoreboard;
    private readonly prev = new Map<string, number>();
    private readonly now = new Map<string, number>();
    public notExists = false;
    public deleted = false;
    private savingWait:NodeJS.Timeout|null = null;
    
    /**
     * it will generates by store.create
     * please do not generate manually
     */
    constructor(
        private readonly store:Store, 
        public readonly name:string)
    {
        this.board = new Scoreboard(store.prefix + '_' + name);
    }

    /**
     * Identifier.minified can be changed by update
     * This function is re-fix minified name
     * @param ignores ignore function or set, it ignores when it returns true
     */
    reminify(ignores?:Set<string>|((id:string)=>boolean)):void
    {
        let check:(id:string)=>boolean;
        if (!ignores)
        {
            check = ()=>false;
        }
        else if (ignores instanceof Set)
        {
            check = id=>ignores.has(id);
        }
        else
        {
            check = ignores;
        }
        
        for (const [minified, count] of this.entires())
        {
            if (check(minified)) continue;
    
            const itemId = Identifier.getFromMinified(minified);
            // check changed
            if (itemId.minified !== minified)
            {
                this.delete(minified);
                this.set(itemId.minified, count);
            }
        }
    }
    
    /**
     * rename storage
     * it will repeat remove & set
     * this storage will be destroyed
     * and return renamed storage
     */
    rename(newname:string):Storage|null
    {
        if (this.store.get(newname)) return null;
        const s = this.store.create(newname);
        for (const [key, value] of this.entires())
        {
            s.set(key, value);
        }
        this.dispose();
        return s;
    }

    /** get field count */
    size():number
    {
        return this.now.size;
    }

    clear():void
    {
        this.now.clear();
    }

    dispose():void
    {
        this.now.clear();
        this.prev.clear();
        this.deleted = true;
        this.save();
    }

    get(key:string):number|undefined
    {
        return this.now.get(key);
    }

    /** return defaultValue If value is undefined  */
    getOr(key:string, defaultValue:number):number|undefined
    {
        const v = this.now.get(key);
        return v === undefined ? defaultValue : v;
    }

    /** set number if field is undefined */
    setDefault(key:string, value:number):void
    {
        if (this.get(key) === undefined)
        {
            this.set(key, value);
        }
    }
    
    /**
     * set number to field
     * key is objective name
     * key max length is 16 character (it defined as OBJECTIVE_MAX_LENGTH in @mcbe/command)
     */
    set(key:string, value:number):void
    {
        this.now.set(key, value);
        this.save();
    }
    
    /**
     * add number to field
     * key is objective name
     * key max length is 16 character (it defined as OBJECTIVE_MAX_LENGTH in @mcbe/command)
     */
    add(key:string, value:number):number
    {
        const old = this.now.get(key);
        const v = old !== undefined ? old + value : value;
        this.now.set(key, v);
        this.save();
        return v;
    }
    
    /**
     * subtract number to field
     * key is objective name
     * key max length is 16 character (it defined as OBJECTIVE_MAX_LENGTH in @mcbe/command)
     */
    remove(key:string, value:number):number
    {
        const old = this.now.get(key);
        const v = old !== undefined ? old - value : -value;
        this.now.set(key, v);
        this.save();
        return v;
    }

    /** delete field */
    delete(key:string):void
    {
        this.now.delete(key);
        this.save();
    }

    /**
     * set field without save
     * it's for matching scoreboard manually
     */
    setWithoutSave(key:string, value?:number):void
    {
        if (value === undefined)
        {
            this.now.delete(key);
            this.prev.delete(key);
        }
        else
        {
            this.now.set(key, value);
            this.prev.set(key, value);
        }
    }

    /** update specific field */
    async update(key:string):Promise<void>
    {
        const value = await this.board.get(key);
        const nowval = this.now.get(key);
        const prevval = this.prev.get(key);
        if (value === undefined)
        {
            this.prev.delete(key);
            if (nowval === prevval)
            {
                this.now.delete(key);
            }
            else
            {
                this.save();
            }
        }
        else
        {
            this.prev.set(key, value);
            if (nowval === prevval)
            {
                this.now.set(key, value);
            }
            else
            {
                this.save();
            }
        }
    }

    /** update all objectives */
    async updateAll():Promise<void>
    {
        const all = await this.board.list();
        const modified:[string, number|undefined][] = [];
        for (const p of this.prev.keys())
        {
            if (!this.now.has(p))
            {
                modified.push([p, undefined]);
            }
        }

        for (const entry of this.now)
        {
            if (entry[1] === this.prev.get(entry[0])) continue;
            modified.push(entry);
        }

        this.prev.clear();
        this.now.clear();
        for (const p in all)
        {
            const v = all[p];
            this.prev.set(p, v);
            this.now.set(p, v);
        }
        if (modified.length !== 0)
        {
            for (const [name, value] of modified)
            {
                if (value === undefined)
                {
                    this.now.delete(name);
                }
                else
                {
                    this.now.set(name, value);
                }
            }
            this.save();
        }
    }

    entires():IterableIterator<[string, number]>
    {
        return this.now.entries();
    }

    keys():IterableIterator<string>
    {
        return this.now.keys();
    }

    values():IterableIterator<number>
    {
        return this.now.values();
    }

    private _save():void
    {
        if (this.deleted)
        {
            if (!this.notExists)
            {
                this.notExists = true;
                this.board.reset();
                this.store._delete(this.name);
            }
            return;
        }
        if (this.notExists)
        {
            this.notExists = false;
        }

        for (const p of this.prev.keys())
        {
            if (!this.now.has(p))
            {
                this.prev.delete(p);
                this.board.reset(p);
            }
        }

        for (const [p, v] of this.now)
        {
            if (v === this.prev.get(p)) continue;
            this.prev.set(p, v);
            this.board.set(p, v);
        }
    }

    /**
     * save after 1 sec
     * it calls automatically
     * no need to call manually
     */
    save():void
    {
        if (this.savingWait) clearTimeout(this.savingWait);
        this.savingWait = setTimeout(()=>{
            this.savingWait = null;
            this._save();
        }, 1000);
    }

    /** save now without waiting */
    saveNow():void
    {
        if (this.savingWait) clearTimeout(this.savingWait);
        this.savingWait = null;
        this._save();
    }

    /**
     * storage is not checking scoreboard, if you do not call updateAll
     * if objective is removed, it will screwed
     * it need to remove internal memory to call it
     */
    cleanObjectiveWithoutSave(objective:string):void
    {
        this.now.delete(objective);
        this.prev.delete(objective);
    }
}

export class StoreLoaded
{
    constructor(
        public readonly scoreboards:string[])
    {
    }

    use(cb:(name:string)=>boolean):void
    {
        for (let i=0;i<this.scoreboards.length;)
        {
            if (cb(this.scoreboards[i]))
            {
                const last = this.scoreboards.pop();
                if (this.scoreboards.length !== i)
                {
                    this.scoreboards[i] = last!;
                }
            }
            else
            {
                i++;
            }
        }
    }
}

let storeLoaded = false;

/** Map<string, Map<string, number>> style storage that will store scoreboard */
export class Store
{
    private static readonly all = new Map<string, Store>();
    private readonly data = new Map<string, Storage>();

    /**
     * it will name scoreboard player as [prefix]_[name]
     * prefix length is not limited
     */
    constructor(public readonly prefix:string)
    {
        console.assert(prefix.indexOf('_') === -1, 'prefix is not allowed underscope');
        console.assert(!Store.all.has(prefix), 'already using prefix: ' + prefix);
        Store.all.set(prefix, this);
    }

    /**
     * get all entries as [name, storage]
     * the name is without prefix
     */
    * entires():IterableIterator<[string, Storage]>
    {
        if (!storeLoaded) throw Error('Loading');
        for (const entry of this.data.entries())
        {
            if (entry[1].deleted) continue;
            yield entry;
        }
    }

    /** get all storages */
    * values():IterableIterator<Storage>
    {
        if (!storeLoaded) throw Error('Loading');
        for (const entry of this.data.values())
        {
            if (entry.deleted) continue;
            yield entry;
        }
    }

    /**
     * storage is not checking scoreboard, if you do not call updateAll
     * if objective is removed, it will screwed
     * it need to remove internal memory to call it
     */
    cleanObjectiveWithoutSave(objective:string):void
    {
        for (const user of this.values())
        {
            user.cleanObjectiveWithoutSave(objective);
        }
    }

    /**
     * get all names
     * the name is without prefix
     */
    * keys():IterableIterator<string>
    {
        if (!storeLoaded) throw Error('Loading');
        for (const [entry, storage] of this.data.entries())
        {
            if (storage.deleted) continue;
            yield entry;
        }
    }

    /** dispose storage with name */
    dispose(name:string):void
    {
        if (!storeLoaded) throw Error('Loading');
        const obj = this.data.get(name);
        if (!obj) return;
        obj.dispose();
    }

    /**
     * get storage
     * it will return null if not found
     * name length is not limited
     */
    get(name:string):Storage|null
    {
        if (!storeLoaded) throw Error('Loading');
        const obj = this.data.get(name);
        if (obj && !obj.deleted) return obj;
        return null;
    }

    /**
     * create storage
     * it will get storage if it already exists
     * name length is not limited
     */
    create(name:string):Storage
    {
        if (!storeLoaded) throw Error('Loading');
        const obj = this.data.get(name);
        if (obj)
        {
            obj.deleted = false;
            obj.save();
            return obj;
        }
        const s = new Storage(this, name);
        s.notExists = true;
        this.data.set(name, s);
        s.save();
        return s;
    }

    /**
     * save after 1 sec
     * it calls automatically
     * no need to call manually
     */
    save():void
    {
        if (!storeLoaded) throw Error('Loading');
        for (const storage of this.data.values())
        {
            storage.save();
        }
    }

    /** save contained storages without waiting */
    saveNow():boolean
    {
        if (!storeLoaded) return false;
        for (const storage of this.data.values())
        {
            storage.saveNow();
        }
        return true;
    }

    /**
     * this is internal function that called from Storage class
     * do not call manually
     */
    _delete(name:string):void
    {
        this.data.delete(name);
    }
    
    /**
     * load storage
     * do not call manually
     */
    async _load(name:string):Promise<Storage>
    {
        const s = new Storage(this, name);
        this.data.set(name, s);

        await s.updateAll();
        return s;
    }

    /** save all storages across all store */
    static saveNowAll():boolean
    {
        if (!storeLoaded) return false;
        for (const store of Store.all.values())
        {
            store.saveNow();
        }
        return true;
    }

    /**
     * read all storages from scoreboard
     * it will return scoreboard player list which contains non-store scoreboard players
     */
    static async updateAll():Promise<StoreLoaded>
    {
        const scoreboards = await scoreboard.players.list();
        const loadings:Promise<unknown>[] = [];
        const data = new StoreLoaded(scoreboards);
        data.use(sbname=>{
            const prefix_idx = sbname.indexOf('_');
            if (prefix_idx === -1) return false;

            const prefix = sbname.substr(0, prefix_idx);
            const name = sbname.substr(prefix_idx+1);
            const store = Store.all.get(prefix);
            if (store)
            {
                if (storeLoaded)
                {
                    const s = store.get(name);
                    if (s)
                    {
                        loadings.push(s.updateAll());
                        return true;
                    }
                }
                loadings.push(store._load(name));
                return true;
            }
            return false;
        });
        
        await Promise.all(loadings);
        return data;
    }

    /**
     * on load all storages
     * it have scoreboard player list which contains non-store scoreboard players
     */
    public static readonly onLoad = (async()=>{
        const data = await Store.updateAll();
        storeLoaded = true;
        return data;
    })();
}

ruacore.shutdown.on(Store.saveNowAll);
