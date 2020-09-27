
export function * keysOf<T extends {[key:string]:any}>(obj:T):IterableIterator<Extract<keyof T, string>>
{
    for (const key in obj)
    {
        yield key;
    }
}

export function * entiresOf<T extends {[key:string]:any}>(obj:T):IterableIterator<[Extract<keyof T, string>, T[keyof T]]>
{
    for (const key in obj)
    {
        yield [key, obj[key]];
    }
}

const SEC = 1000;

/**
 * JS millisecond-scale time to custom second-scale time with 32bit integer
 * It can contains wider duration than regular 32bit UTS
 */
export const timepack = {
    AXIS: 1567177200000,

    pack(now:number):number
    {    
        return ((now - timepack.AXIS) / SEC) | 0;
    },

    unpack(packed:number|undefined):number
    {
        if (packed === undefined) return timepack.AXIS;
        return packed * SEC + timepack.AXIS;
    },

    now():number
    {
        return timepack.pack(Date.now());
    }
    
};
Object.freeze(timepack);
