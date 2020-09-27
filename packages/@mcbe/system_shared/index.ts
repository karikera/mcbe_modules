/// <reference types="minecraft-scripting-types-server" />
/// <reference types="minecraft-scripting-types-client" />

import '@mcbe/dummy-console';
import './require_d';

declare global
{
    var __globalSystem:IVanillaClientSystem|IVanillaServerSystem|null;
}

if (typeof __globalSystem === 'undefined')
{
    new Function('__globalSystem = null')();
}

/** 
 * system shared, it can be client or server 
 * @deprecated 
 */
export let systemShared:IVanillaClientSystem|IVanillaServerSystem;

/** set system from external */
export function setSystem(system:IVanillaClientSystem|IVanillaServerSystem):void
{
    if (__globalSystem)
    {
        console.error('Already system is created');
        throw Error('Already system is created');
    }
    __globalSystem = system;
    systemShared = system;
}

/**
 * get system object
 * It will create system if it does not exist
 */
export function getSystem():IVanillaClientSystem|IVanillaServerSystem
{
    if (__globalSystem) return __globalSystem;

    if (typeof client !== 'undefined')
    {
        __globalSystem = client.registerSystem(0, 0);
    }
    else if (typeof server !== 'undefined')
    {
        __globalSystem = server.registerSystem(0, 0);
    }
    else
    {
        throw Error('No minecraft system');
    }
    systemShared = __globalSystem;
    return __globalSystem;
}

/**
 * create client system
 * if system is already exists it will that
 */
export function createClientSystem(majorVersion: number, minorVersion: number):IVanillaClientSystem
{
    if (typeof client === 'undefined') throw Error('No client system');
    if (__globalSystem) return __globalSystem as any;
    const system = client.registerSystem(majorVersion, minorVersion);
    __globalSystem = system;
    systemShared = system;
    return system;
}

/**
 * create server system
 * if system is already exists it will that
 */
export function createServerSystem(majorVersion: number, minorVersion: number):IVanillaServerSystem
{
    if (typeof server === 'undefined') throw Error('No server system');
    if (__globalSystem) return __globalSystem as any;
    const system = server.registerSystem(majorVersion, minorVersion);
    __globalSystem = system;
    systemShared = system;
    return system;
}
