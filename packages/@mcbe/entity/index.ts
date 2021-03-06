
import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { system } from "@mcbe/system_server";
import { ComponentAccessor } from "@mcbe/component";
import events from "@mcbe/event_server";
import { callAtNextTick } from "@mcbe/nexttick";

import { ArrayMap } from 'krarraymap';
import { Box } from "krgeometry";
import Event from "krevent";

const all = new Map<number, Entity>();
const tempSets = new Map<Identifier, TemporalSet>();

type Filter = (ev:EntityEvent)=>void;
const removingList:[Box, Filter][] = [];
const temporalEntities:[VectorXYZ, Entity][] = [];

class TemporalSet
{
    private readonly array:Entity[] = [];
    private index = 0;

    constructor(ids:Identifier[], private readonly count:number)
    {
        for (const id of ids)
        {
            tempSets.set(id, this);
        }
    }

    add(entity:Entity):void
    {
        const old = this.array[this.index];
        if (old) old.fireDestroy();
        this.array[this.index++] = entity;
        this.index %= this.count;
    }
}

interface EntityEvent
{
    entity:Entity;
    removeArea:boolean;
    removeEntity:boolean;
}

function autoDestroy(entity:Entity):void
{
    entity.destroy();    
}

function registEntityCatch(entity:Entity):void
{
    const ev = {
        entity,
        removeArea:false,
        removeEntity:false,
    };

    const pos = entity.component.Position.data;
    for (let i=0;i<removingList.length;)
    {
        const [cube, filter] = removingList[i];
        if (!cube.contains(pos))
        {
            i++;
            continue;
        }

        filter(ev);
        if (ev.removeArea)
        {
            ev.removeArea = false;
            const last = removingList.pop();
            if (i < removingList.length) removingList[i] = last!;
        }
        else
        {
            i++;
        }
        if (ev.removeEntity)
        {
            ev.removeEntity = false;
            entity.destroy();
            return;
        }
    }
    
    if (removingList.length === 0)
    {
        callAtNextTick(()=>{
            removingList.length = 0;
            temporalEntities.length = 0;
        });
    }
    temporalEntities.push([pos, entity]);
}

export enum EntityType
{
    Entity,
    Item,
    Unknown,
}

export class Entity
{
    public readonly entityId:number;
    public readonly component:ComponentAccessor;

    constructor(
        public readonly raw:IEntity,
        public readonly type:EntityType,
        public readonly id:Identifier
    )
    {
        this.entityId = raw.id;
        this.id = Identifier.get(raw.__identifier__);
        all.set(this.entityId, this);
        this.component = ComponentAccessor(raw);

        switch (this.id)
        {
        case ID.chest_minecart:
            const inter = this.component.Interact;
            inter.data.on_interact = 'extra:entity_interect';
            this.component.Interact = inter;
            break;
        case ID.hopper_minecart:
            break;
        }
    }

    get typeText():string
    {
        return EntityType[this.type];
    }

    destroy():void
    {
        system.destroyEntity(this.raw);
        this.fireDestroy();
    }

    fireDestroy():void
    {
        all.delete(this.entityId);
        
        const listenerTypeMap = entityListeners.get(this.id);
        if (!listenerTypeMap) return;
        const ev = listenerTypeMap[this.type];
        if (!ev) return;
        if (!ev.onDestroy) return;
        ev.onDestroy.fire(this);
    }

    tick():void
    {
    }

    toString():string
    {
        return Entity.toString(this.raw);
    }

    static toString(entity:IEntity):string
    {
        const id = entity.__identifier__;
        if (id.startsWith('minecraft:')) return '#'+id.substr(10, 14);
        return '#'+id.substr(0, 14);
    }

    static get(entity:IEntity):Entity|undefined
    {
        return all.get(entity.id);
    }

    static setAutoDestroy(type:EntityType, id:Identifier):void
    {
        Entity.onNew(type, id, autoDestroy);
    }
    
    static setCapture(type:EntityType, id:Identifier):void
    {
        Entity.onNew(type, id, registEntityCatch);
    }
    
    static onNew(type:EntityType, id:Identifier, cb:(entity:Entity)=>(boolean|void)):void
    {
        const arr = entityListeners.gen(id);
        let listener = arr[type];
        if (!listener) arr[type] = listener = {};
        if (!listener.onNew) listener.onNew = new Event;
        listener.onNew.on(cb);
    }
        
    static onDestroy(type:EntityType, id:Identifier, cb:(entity:Entity)=>(boolean|void)):void
    {
        const arr = entityListeners.gen(id);
        let listener = arr[type];
        if (!listener) arr[type] = listener = {};
        if (!listener.onDestroy) listener.onDestroy = new Event;
        listener.onDestroy.on(cb);
    }
        
    static catchPost(cube:Box, filter:Filter):void
    {
        if (removingList.length === 0)
        {
            callAtNextTick(()=>{
                removingList.length = 0;
                temporalEntities.length = 0;
            });
        }
        removingList.push([cube, filter]);
    }

    static catchPre(cube:Box, filter:Filter):void
    {
        const ev:EntityEvent = {
            entity:null as any as Entity,
            removeArea:false,
            removeEntity:false,
        };

        for (let i=0;i<temporalEntities.length;)
        {
            const [pos, entity] = temporalEntities[i];
            if (!cube.contains(pos))
            {
                i++;
                continue;
            }
            ev.entity = entity;
            filter(ev);
            if (ev.removeEntity)
            {
                ev.removeEntity = false;
                entity.destroy();
                const last = temporalEntities.pop();
                if (i < temporalEntities.length) temporalEntities[i] = last!;
            }
            else
            {
                i++;
            }
            if (ev.removeArea)
            {
                ev.removeArea = false;
                return;
            }
        }
    }
}

interface EntityListener
{
    onNew?:Event<(entity:Entity)=>(boolean|void)>;
    onDestroy?:Event<(entity:Entity)=>(boolean|void)>;
}

const entityListeners = new ArrayMap<Identifier, EntityListener|undefined>();

Entity.setCapture(EntityType.Entity, ID.xp_orb);

events.listen.EntityCreated(data=>{
    const id = Identifier.get(data.entity.__identifier__);
    // krlog.verbose(`entity created ${data.entity.__type__} ${id}:${data.entity.id}`);
    
    let type:EntityType;
    let entity:Entity|null = null;
    
    switch (data.entity.__type__)
    {
    case 'item_entity':
        type = EntityType.Item;
        entity = new Entity(data.entity, type, id);
        registEntityCatch(entity);
        break;
    case 'entity':
        type = EntityType.Entity;
        break;
    default:
        type = EntityType.Unknown;
        break;
    }
    
    const listenerTypeMap = entityListeners.get(id);
    if (!listenerTypeMap) return;
    const ev = listenerTypeMap[type];
    if (!ev) return;
    if (!ev.onNew) return;
    if (!entity) entity = new Entity(data.entity, type, id);
    ev.onNew.fire(entity);
});
events.listen.EntityDeath(data=>{
    const entity = Entity.get(data.entity);
    if (entity) entity.fireDestroy();
});
