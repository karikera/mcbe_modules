
declare global
{
    namespace NodeJS
    {
        interface Timeout{}
    }

    function setTimeout(fn:(...args:any[])=>void, wait:number, ...args:any[]):NodeJS.Timeout;
    function setInterval(fn:(...args:any[])=>void, wait:number, ...args:any[]):NodeJS.Timeout;
    function clearTimeout(timeout:NodeJS.Timeout):void;
    function clearInterval(timeout:NodeJS.Timeout):void;
}

/**
 * return true if timer is installed
 */
export function isTimerInstalled():boolean
{
    return typeof setTimeout !== 'undefined';
}

/**
 * just throw Error(`${moduleName} needs timer`)
 * if timer is not installed
 */
export function timerIsNeeded(moduleName:string):void
{
    if (typeof setTimeout === 'undefined')
    {
        console.error(`${moduleName} needs timer`);
        throw Error(`${moduleName} needs timer`);
    }
}
