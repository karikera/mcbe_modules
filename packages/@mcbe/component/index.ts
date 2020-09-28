import '@mcbe/dummy-console';
import { getSystem } from "@mcbe/system_shared";
import { CompMap } from './typemap';

const system = getSystem();

export class NoComponentError extends Error
{
    constructor(public readonly entity:IEntity, public readonly component:string)
    {
        super('Component not found');
    }
}

export type ComponentAccessor = {
    [key in keyof CompMap]:IComponent<CompMap[key]['value']>
} & {entity:IEntity};

class Component<T extends keyof CompMap>
{
    public readonly key:string;

    constructor(public readonly name:T)
    {
        this.key = CompMap[name].key;
    }

    /**
     * get the component from a entity
     * it returns null if the component does not found
     * @param entity
     */
    getOrNull(entity:IEntity):IComponent<CompMap[T]['value']>|null
    {
        return system.getComponent(entity, this.key);
    }

    /**
     * get the component from a entity
     * it will throw NoComponentError if the component does not found
     * @param entity
     */
    get(entity:IEntity):IComponent<CompMap[T]['value']>
    {
        const data = system.getComponent(entity, this.key);
        if (!data) throw new NoComponentError(entity, this.name);
        return data as any;
    }
    
    /**
     * set the component to a entity
     * @param entity 
     * @param value 
     */
    set(entity:IEntity, value:IComponent<CompMap[T]['value']>):void
    {
        if (!system.applyComponentChanges(entity, value))
        {
            console.error(`#${entity.__identifier__}.${this.key}: Set component failed`);
            return;
        }
    }

    /**
     * create component to entity
     * @param entity 
     */
    create(entity:IEntity):IComponent<CompMap[T]['value']>|null
    {
        return system.createComponent(entity, this.key);
    }
}

export const component:{[key in keyof CompMap]:Component<key>} = {} as any;
for (const name in CompMap)
{
    component[name as keyof CompMap] = new Component(name as any) as any;
}

export function ComponentAccessor(entity:IEntity):ComponentAccessor
{
    return {entity, __proto__:ComponentAccessor.prototype} as any;
}

for (const comp of Object.values(component))
{
    Object.defineProperty(ComponentAccessor.prototype, comp.name, {
        get(this:ComponentAccessor){ return comp.get(this.entity); },
        set(value){ comp.set(this.entity, value); },
    });
}

/**
 * get name from entity
 * if the entity is undefined or null then it returns 'null'
 * if the entity does not have the name component, it returns '[#identifier:id]'
 *  
 * @param entity
 */
export function getName(entity?:IEntity):string
{
    if (!entity) return "null";
    try
    {
        return component.Nameable.get(entity).data.name;
    }
    catch (err)
    {
        return '[#'+entity.__identifier__+':'+entity.id+']';
    }
}
