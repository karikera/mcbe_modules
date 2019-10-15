
import { getSystem } from "@mcbe/system_shared";
import Event from "krevent";

const system = getSystem();

type BroadcastMapped<T extends {[key:string]:{value:any}}> = {[key in keyof T]:(value:T[key]['value'])=>boolean|null};
type EventList = {[key:string]:{key:string, value:any}};
type ListenerMapped<T extends EventList> = {[key in keyof T]:(cb:(ev:IEventData<T[key]['value']>['data'])=>void)=>void};
interface EventObject<T extends EventList, KEY extends keyof T>
{
    type:T[KEY]['key'];
    data:IEventData<T[KEY]['value']>['data'];
}

export interface AllListener<T extends EventList>
{
    all<KEY extends keyof T>(cb:(ev:EventObject<T, KEY>)=>void):void
}
export type ListenerList<T extends EventList> = ListenerMapped<T> & AllListener<T>;


export function evitem<T, KEY extends string=string>(key:KEY)
{
    return {key, value:null as any as T};
}

export function createBroadcast<T extends EventList>(map:T):BroadcastMapped<T>
{
    const mapped:BroadcastMapped<T> = {} as any;
    for (const key in map)
    {
        const mckey = map[key].key;
        mapped[key] = (data:any)=>{
            const ev = system.createEventData(mckey);
            if (!ev) throw Error('createEvent failed');
            ev.data = data;
            return system.broadcastEvent(mckey, ev);
        };
    }
    return mapped;
}

export function createListener<T extends EventList>(map:T):ListenerList<T>
{
    const mapped:ListenerMapped<T> = {} as any;
    for (const key in map)
    {
        const mckey = map[key].key;
        mapped[key] = (cb:(ev:any)=>void)=>{
            system.listenForEvent(mckey, ev=>{
                try
                {
                    cb(ev.data);
                }
                catch(err)
                {
                    console.error(err);
                }
            });
        };
    }

    const alls:(T[keyof T]['key'])[] = [];
    for (const key in map)
    {
        alls.push(map[key].key);
    }
    const mapped_ex:ListenerList<T> = mapped as any;
    mapped_ex.all = function<KEY extends keyof T>(cb:(ev:EventObject<T, KEY>)=>void){
        for (const type of alls)
        {
            system.listenForEvent(type, ev=>{
                cb({type, data:ev.data});
            });
        }
    };
    return mapped_ex;
}

export const sharedEvents = {
    initialize: new Event<()=>void>(),
    shutdown: new Event<()=>void>(),
    update: new Event<()=>void>(),
};
Object.freeze(sharedEvents);

system.initialize = ()=>sharedEvents.initialize.fire();
system.shutdown = ()=>sharedEvents.shutdown.fire();
system.update = ()=>sharedEvents.update.fire();
Object.freeze(system);
