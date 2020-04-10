import '@mcbe/dummy-console';
import { getSystem } from "@mcbe/system_shared";

const system = getSystem();

function exact<T extends string>(value:T):T
{
    return value;
}

export class NoComponentError extends Error
{
    constructor(public readonly entity:IEntity, public readonly component:string)
    {
        super('Component not found');
    }
}

const compMap = {
    ArmorContainer: {key: exact(MinecraftComponent.ArmorContainer), value: <IArmorContainerComponent><any>null},
    Attack: {key: exact(MinecraftComponent.Attack), value: <IAttackComponent><any>null},
    CollisionBox: {key: exact(MinecraftComponent.CollisionBox), value: <ICollisionBoxComponent><any>null},
    DamageSensor: {key: exact(MinecraftComponent.DamageSensor), value: <IDamageSensorComponent><any>null},
    Equipment: {key: exact(MinecraftComponent.Equipment), value: <IEquipmentComponent><any>null},
    Equippable: {key: exact(MinecraftComponent.Equippable), value: <IEquippableComponent><any>null},
    Explode: {key: exact(MinecraftComponent.Explode), value: <IExplodeComponent><any>null},
    HandContainer: {key: exact(MinecraftComponent.HandContainer), value: <IHandContainerComponent><any>null},
    Healable: {key: exact(MinecraftComponent.Healable), value: <IHealableComponent><any>null},
    Health: {key: exact(MinecraftComponent.Health), value: <IHealthComponent><any>null},
    HotbarContainer: {key: exact(MinecraftComponent.HotbarContainer), value: <IHotbarContainerComponent><any>null},
    Interact: {key: exact(MinecraftComponent.Interact), value: <IInteractComponent><any>null},
    Inventory: {key: exact(MinecraftComponent.Inventory), value: <IInventoryComponent><any>null},
    InventoryContainer: {key: exact(MinecraftComponent.InventoryContainer), value: <IInventoryContainerComponent><any>null},
    LookAt: {key: exact(MinecraftComponent.LookAt), value: <ILookAtComponent><any>null},
    Nameable: {key: exact(MinecraftComponent.Nameable), value: <INameableComponent><any>null},
    Position: {key: exact(MinecraftComponent.Position), value: <IPositionComponent><any>null},
    Rotation: {key: exact(MinecraftComponent.Rotation), value: <IRotationComponent><any>null},
    Shooter: {key: exact(MinecraftComponent.Shooter), value: <IShooterComponent><any>null},
    SpawnEntity: {key: exact(MinecraftComponent.SpawnEntity), value: <ISpawnEntityComponent><any>null},
    Teleport: {key: exact(MinecraftComponent.Teleport), value: <ITeleportComponent><any>null},
    TickWorld: {key: exact(MinecraftComponent.TickWorld), value: <ITickWorldComponent><any>null},
    MoLang: {key: exact(MinecraftComponent.MoLang), value: <IMoLangComponent><any>null},
};

type CompMap = {[key in keyof typeof compMap]:key extends string ? (typeof compMap)[key] : never};

export type ComponentAccessor = {
    [key in keyof CompMap]:IComponent<CompMap[key]['value']>
} & {entity:IEntity};

class Component<T extends keyof CompMap>
{
    public readonly key:string;

    constructor(public readonly name:T)
    {
        this.key = compMap[name].key;
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
for (const name in compMap)
{
    component[name as keyof CompMap] = new Component(name as any);
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
