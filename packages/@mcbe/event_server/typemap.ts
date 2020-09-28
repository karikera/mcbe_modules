
function exact<T extends string>(value:T):T
{
    return value;
}

export const SendToMap = {
    DisplayChat: {value: {} as IDisplayChatParameters, key: exact(SendToMinecraftServer.DisplayChat)},
    ExecuteCommand: {value: {} as IExecuteCommandParameters, key: exact(SendToMinecraftServer.ExecuteCommand)},
    PlaySound: {value: {} as IPlaySoundParameters, key: exact(SendToMinecraftServer.PlaySound)},
    ScriptLoggerConfig: {value: {} as IScriptLoggerConfigParameters, key: exact(SendToMinecraftServer.ScriptLoggerConfig)},
    SpawnParticleAttachedEntity: {value: {} as ISpawnParticleAttachedEntityParameters, key: exact(SendToMinecraftServer.SpawnParticleAttachedEntity)},
    SpawnParticleInWorld: {value: {} as ISpawnParticleInWorldParameters, key: exact(SendToMinecraftServer.SpawnParticleInWorld)},
};

export const ReceiveFromMap = {
    BlockDestructionStarted: {value: {} as IBlockDestructionStartedEventData, key: exact(ReceiveFromMinecraftServer.BlockDestructionStarted)},
    BlockDestructionStopped: {value: {} as IBlockDestructionStoppedEventData, key: exact(ReceiveFromMinecraftServer.BlockDestructionStopped)},
    BlockInteractedWith: {value: {} as IBlockInteractedWithEventData, key: exact(ReceiveFromMinecraftServer.BlockInteractedWith)},
    EntityAcquiredItem: {value: {} as IEntityAcquiredItemEventData, key: exact(ReceiveFromMinecraftServer.EntityAcquiredItem)},
    EntityCarriedItemChanged: {value: {} as IEntityCarriedItemChangedEventData, key: exact(ReceiveFromMinecraftServer.EntityCarriedItemChanged)},
    EntityCreated: {value: {} as IEntityCreatedEventData, key: exact(ReceiveFromMinecraftServer.EntityCreated)},
    EntityDeath: {value: {} as IEntityDeathEventData, key: exact(ReceiveFromMinecraftServer.EntityDeath)},
    EntityDroppedItem: {value: {} as IEntityDroppedItemEventData, key: exact(ReceiveFromMinecraftServer.EntityDroppedItem)},
    EntityEquippedArmor: {value: {} as IEntityEquippedArmorEventData, key: exact(ReceiveFromMinecraftServer.EntityEquippedArmor)},
    EntityStartRiding: {value: {} as IEntityStartRidingEventData, key: exact(ReceiveFromMinecraftServer.EntityStartRiding)},
    EntityStopRiding: {value: {} as IEntityStopRidingEventData, key: exact(ReceiveFromMinecraftServer.EntityStopRiding)},
    EntityTick: {value: {} as IEntityTickEventData, key: exact(ReceiveFromMinecraftServer.EntityTick)},
    EntityUseItem: {value: {} as IEntityUseItemEventData, key: exact(ReceiveFromMinecraftServer.EntityUseItem)},
    PistonMovedBlock: {value: {} as IPistonMovedBlockEventData, key: exact(ReceiveFromMinecraftServer.PistonMovedBlock)},
    PlaySound: {value: {} as IPlaySoundEventData, key: exact(ReceiveFromMinecraftServer.PlaySound)},
    PlayerAttackedEntity: {value: {} as IPlayerAttackedEntityEventData, key: exact(ReceiveFromMinecraftServer.PlayerAttackedEntity)},
    PlayerDestroyedBlock: {value: {} as IPlayerDestroyedBlockEventData, key: exact(ReceiveFromMinecraftServer.PlayerDestroyedBlock)},
    PlayerPlacedBlock: {value: {} as IPlayerPlacedBlockEventData, key: exact(ReceiveFromMinecraftServer.PlayerPlacedBlock)},
    WeatherChanged: {value: {} as IWeatherChangedEventData, key: exact(ReceiveFromMinecraftServer.WeatherChanged)},
};
export type SendToMap = typeof SendToMap;
export type ReceiveFromMap = typeof ReceiveFromMap;