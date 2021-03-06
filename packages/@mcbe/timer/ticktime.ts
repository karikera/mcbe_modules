
import { Timer } from ".";

export const NIGHT_BEGIN = 13000;
export const NIGHT_END = 23000;
export const DAY = 24000;

export const TICK_PER_SECONDS = 20;
export const tickTime = new Timer(0, v=>v+1);

/** return true if daytime in NIGHT_BEGIN ~ NIGHT_END */
export function isNight(daytime:number):boolean
{        
    return NIGHT_BEGIN <= daytime && daytime < NIGHT_END;
}
