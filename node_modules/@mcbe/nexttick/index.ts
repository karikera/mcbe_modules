
import { sharedEvents } from "@mcbe/event";
import "@mcbe/dummy-console";

export class NextTick
{
    private canceled = false;

    constructor(private readonly fn:()=>void)
    {
    }

    cancel():void
    {
        this.canceled = true;
    }
    

    call():void
    {
        if (this.canceled) return;
        try
        {
            this.fn();
        }
        catch (err)
        {
            console.error(err);
        }
    }
}

const nextFrames:NextTick[] = [];

/** call fn at begining of next tick */
export function callAtNextTick(fn:()=>void):NextTick
{
    const nt = new NextTick(fn);
    nextFrames.push(nt);
    return nt;
}

/** function that attached to ruacore.update */
export function nextTickOnUpdate():void
{
    if (nextFrames.length !== 0)
    {
        const copied = nextFrames.slice();
        nextFrames.length = 0;
        for (const nextTick of copied)
        {
            try
            {
                nextTick.call();
            }
            catch (err)
            {
                console.error(err);
            }
        }
    }
}

sharedEvents.update.on(nextTickOnUpdate);