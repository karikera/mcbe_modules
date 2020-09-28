
import { getSystem } from "@mcbe/system_shared";
import Event from "krevent";

const system = getSystem();

export type BroadcastMapped<T extends Record<string, any>> = {[key in keyof T]:(value:T[key])=>boolean|null};
type EventList = {[key:string]:{key:string, value:any}};
type ListenerMappedBase<T extends EventList> = {[key in keyof T]:(cb:(ev:IEventData<T[key]['value']>['data'])=>void)=>void};
interface EventObject<T extends EventList, KEY extends keyof T>
{
    type:T[KEY]['key'];
    data:IEventData<T[KEY]['value']>['data'];
}

export interface AllListener<T extends EventList>
{
    all<KEY extends keyof T>(cb:(ev:EventObject<T, KEY>)=>void):void
}
export type ListenerMapped<T extends EventList> = ListenerMappedBase<T> & AllListener<T>;


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

export function createListener<T extends EventList>(map:T):ListenerMapped<T>
{
    const mapped:ListenerMappedBase<T> = {} as any;
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
    const mapped_ex:ListenerMapped<T> = mapped as any;
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
