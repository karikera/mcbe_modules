import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";

export interface ItemStack
{
    id:Identifier,
    count:number
}

export abstract class ItemGetter
{
    abstract save():ItemList;
}

export class ItemList
{
    private items = new Map<Identifier, ItemStack>();

    values():IterableIterator<ItemStack>
    {
        return this.items.values();
    }

    size():number
    {
        return this.items.size;
    }

    clear():void
    {
        this.items.clear();
    }

    clean():void
    {
        for (const [name, value] of this.items)
        {
            if (value.count === 0)
            {
                this.items.delete(name);
            }
        }
    }

    get(item:Identifier):ItemStack|undefined
    {
        return this.items.get(item);
    }

    getCount(item:Identifier):number
    {
        let iitem = this.items.get(item);
        if (!iitem) return 0;
        return iitem.count;
    }

    has(item:Identifier, count:number):boolean
    {
        let iitem = this.items.get(item);
        if (!iitem) return false;
        return iitem.count >= count;
    }

    remove(id:Identifier, count:number):number
    {
        let iitem = this.items.get(id);
        if (!iitem)
        {
            this.items.set(id, iitem = {id, count:0});
        }
        return iitem.count -= count;
    }

    reset(id:Identifier):void
    {
        this.items.delete(id);
    }

    /**
     * return failed
     * remove anyway
     */
    use(item:Identifier, count:number):number
    {
        let iitem = this.items.get(item);
        if (!iitem) return count;
        if (iitem.count >= count)
        {
            iitem.count = iitem.count - count;
            return 0;
        }
        else
        {
            const failed = count - iitem.count;
            iitem.count = 0;
            return failed;
        }
    }

    /**
     * return failed
     * remove anyway
     */
    useClean(item:Identifier, count:number):number
    {
        let iitem = this.items.get(item);
        if (!iitem) return count;
        if (iitem.count > count)
        {
            iitem.count = iitem.count - count;
            return 0;
        }
        else
        {
            const failed = count - iitem.count;
            this.items.delete(item);
            return failed;
        }
    }

    add(id:Identifier, count:number):void
    {
        let iitem = this.items.get(id);
        if (!iitem)
        {
            this.items.set(id, iitem = {id, count:0});
        }
        iitem.count += count;
    }
    
    setAllRaw(inventory:ItemStack[]):void
    {
        this.items.clear();
        for (const item of inventory)
        {
            if (item.id === ID.undefined) continue;
            this.add(item.id, item.count);
        }
    }

    setAll(other:ItemList):void
    {
        this.items.clear();
        for (const [key, value] of other.items.entries())
        {
            this.items.set(key, {id:value.id, count:value.count});
        }
    }

    moveAll(other:ItemList):void
    {
        this.items = other.items;
    }
    
    addAll(other:ItemList):void
    {
        for (const item of other.items.values())
        {
            this.add(item.id, item.count);
        }
    }

    removeAll(other:ItemList):void
    {
        for (const item of other.items.values())
        {
            this.remove(item.id, item.count);
        }
    }

    clone():ItemList
    {
        const clone = new ItemList;
        clone.setAll(this);
        return clone;
    }

    diff(newinv:ItemList, added:ItemStack[], removed:ItemStack[]):void
    {
        diff.setAll(this);
        diff.removeAll(newinv);
        for (const item of diff.values())
        {
            if (item.count < 0)
            {
                item.count = -item.count;
                removed.push(item);
            }
            else if (item.count > 0)
            {
                added.push(item);
            }
        }
        diff.clear();
    }

    update(inventory:ItemStack[], added:ItemStack[], removed:ItemStack[]):void
    {
        temp.setAll(this);
        this.setAllRaw(inventory);
        this.diff(temp, added, removed);
    }

    toString():string
    {
        if (this.size() === 0) return 'ItemList{}';
        let out = 'ItemList{';
        for (const item of this.values())
        {
            out += item.id;
            out += ':';
            out += item.count;
            out += ',';
        }
        return out.substr(0,out.length-1) + '}';
    }

    static readonly temp = new ItemList;
}

const diff = new ItemList;
const temp = ItemList.temp;