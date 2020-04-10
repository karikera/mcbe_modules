
export class ArrayMap<Key, T> extends Map<Key, T[]>
{
    gen(key:Key):T[]
    {
        let arr = this.get(key);
        if (!arr) this.set(key, arr = []);
        return arr;
    }

    push(key:Key, ...items:T[]):number
    {
        const arr = this.get(key);
        if (arr)
        {
            return arr.push(...items);
        }
        else
        {
            this.set(key, items);
            return items.length;
        }
    }

    pop(key:Key):T|undefined
    {
        const arr = this.get(key);
        if (!arr) return undefined;
        if (arr.length === 0)
        {
            this.delete(key);
            return undefined;
        }
        const res = arr.pop();
        if (arr.length === 0) this.delete(key);
        return res;
    }
    
    unshift(key:Key, ...items:T[]):number
    {
        const arr = this.get(key);
        if (arr)
        {
            return arr.unshift(...items);
        }
        else
        {
            this.set(key, items);
            return items.length;
        }
    }

    shift(key:Key):T|undefined
    {
        const arr = this.get(key);
        if (!arr) return undefined;
        if (arr.length === 0)
        {
            this.delete(key);
            return undefined;
        }
        const res = arr.shift();
        if (arr.length === 0) this.delete(key);
        return res;
    }
}
