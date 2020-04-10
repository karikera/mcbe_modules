import { realTime } from "@mcbe/timer/realtime";

/**
 * Reducing number object
 * it uses the millisecond rule
 */
export class Damper
{
    private current:number = 0;
    private time:number = realTime.now;

    /**
     * initial value is zero
     * @param max max value, maximum capacity for using (ms)
     */
    constructor(public readonly max:number)
    {
    }

    /**
     * current value
     */
    get():number
    {
        if (this.current === 0) return 0;
        const passed = realTime.now - this.time;
        this.time = realTime.now;
        return this.current = Math.max(this.current - passed, 0);
    }

    /**
     * set value to 0
     */
    reset():void
    {
        this.current = 0;
        this.time = realTime.now;
    }

    /**
     * ignore reducing until now from latest update(get, reduce, use)
     */
    pause():void
    {
        this.time = realTime.now;
    }

    /**
     * subtract value
     * @param value 
     * @return current value
     */
    reduce(value:number):number
    {
        if (this.current === 0) return 0;
        const passed = realTime.now - this.time;
        this.time = realTime.now;
        this.current = Math.max(this.current - passed - value, 0);
        return this.current;
    }

    /**
     * add value
     * cannot add over maximum
     * @param value 
     * @return returns true if it's successfully added
     */
    use(value:number):boolean
    {
        let remaining = this.max - this.get();
        if (value > remaining) return false;
        this.current += value;
        return true;
    }

    /**
     * @return '(current/max)'
     */
    toString():string
    {
        return '(' + Math.round(this.get()) + '/' + Math.round(this.max) + ')';
    }
}
