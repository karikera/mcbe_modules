
function exact<T extends string>(value:T):T
{
    return value;
}

export const CompMap = {
    ArmorContainer: {key: exact(MinecraftComponent.ArmorContainer), value: {} as IArmorContainerComponent},
    Attack: {key: exact(MinecraftComponent.Attack), value: {} as IAttackComponent},
    CollisionBox: {key: exact(MinecraftComponent.CollisionBox), value: {} as ICollisionBoxComponent},
    DamageSensor: {key: exact(MinecraftComponent.DamageSensor), value: {} as IDamageSensorComponent},
    Equipment: {key: exact(MinecraftComponent.Equipment), value: {} as IEquipmentComponent},
    Equippable: {key: exact(MinecraftComponent.Equippable), value: {} as IEquippableComponent},
    Explode: {key: exact(MinecraftComponent.Explode), value: {} as IExplodeComponent},
    HandContainer: {key: exact(MinecraftComponent.HandContainer), value: {} as IHandContainerComponent},
    Healable: {key: exact(MinecraftComponent.Healable), value: {} as IHealableComponent},
    Health: {key: exact(MinecraftComponent.Health), value: {} as IHealthComponent},
    HotbarContainer: {key: exact(MinecraftComponent.HotbarContainer), value: {} as IHotbarContainerComponent},
    Interact: {key: exact(MinecraftComponent.Interact), value: {} as IInteractComponent},
    Inventory: {key: exact(MinecraftComponent.Inventory), value: {} as IInventoryComponent},
    InventoryContainer: {key: exact(MinecraftComponent.InventoryContainer), value: {} as IInventoryContainerComponent},
    LookAt: {key: exact(MinecraftComponent.LookAt), value: {} as ILookAtComponent},
    Nameable: {key: exact(MinecraftComponent.Nameable), value: {} as INameableComponent},
    Position: {key: exact(MinecraftComponent.Position), value: {} as IPositionComponent},
    Rotation: {key: exact(MinecraftComponent.Rotation), value: {} as IRotationComponent},
    Shooter: {key: exact(MinecraftComponent.Shooter), value: {} as IShooterComponent},
    SpawnEntity: {key: exact(MinecraftComponent.SpawnEntity), value: {} as ISpawnEntityComponent},
    Teleport: {key: exact(MinecraftComponent.Teleport), value: {} as ITeleportComponent},
    TickWorld: {key: exact(MinecraftComponent.TickWorld), value: {} as ITickWorldComponent},
    MoLang: {key: exact(MinecraftComponent.MoLang), value: {} as IMoLangComponent},
};

export type CompMap = typeof CompMap;
