
import '@mcbe/dummy-console';
import { Timer } from ".";

let offsetTime = 0;
export const TIME_PER_SECONDS = 1000;
export const realTime = new Timer(Date.now(), prev=>{
    const realNow = Date.now();
    const now = realNow + offsetTime;
    if (prev > now)
    {
        console.log(`System time is rewinded (${prev} -> ${now})`);
        offsetTime = prev - realNow;
        return prev;
    }
    if (now > prev + 3000)
    {
        console.log(`System time is forwarded (${prev} -> ${now})`);
        offsetTime = prev - realNow;
        return prev;
    }
    return now;
});
