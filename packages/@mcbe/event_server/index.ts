import "@mcbe/system_server";
import { createBroadcast, evitem, createListener, sharedEvents } from "@mcbe/event";

const events = {
    initialize:sharedEvents.initialize,
    shutdown:sharedEvents.shutdown,
    update:sharedEvents.update,
    broadcast:createBroadcast({
        DisplayChat: evitem<IDisplayChatParameters>(SendToMinecraftServer.DisplayChat),
        ExecuteCommand: evitem<IExecuteCommandParameters>(SendToMinecraftServer.ExecuteCommand),
        PlaySound: evitem<IPlaySoundParameters>(SendToMinecraftServer.PlaySound),
        ScriptLoggerConfig: evitem<IScriptLoggerConfigParameters>(SendToMinecraftServer.ScriptLoggerConfig),
        SpawnParticleAttachedEntity: evitem<ISpawnParticleAttachedEntityParameters>(SendToMinecraftServer.SpawnParticleAttachedEntity),
        SpawnParticleInWorld: evitem<ISpawnParticleInWorldParameters>(SendToMinecraftServer.SpawnParticleInWorld),
    }),    
    listen:createListener({
        BlockDestructionStarted: evitem<IBlockDestructionStartedEventData>(ReceiveFromMinecraftServer.BlockDestructionStarted),
        BlockDestructionStopped: evitem<IBlockDestructionStoppedEventData>(ReceiveFromMinecraftServer.BlockDestructionStopped),
        BlockInteractedWith: evitem<IBlockInteractedWithEventData>(ReceiveFromMinecraftServer.BlockInteractedWith),
        EntityAcquiredItem: evitem<IEntityAcquiredItemEventData>(ReceiveFromMinecraftServer.EntityAcquiredItem),
        EntityCarriedItemChanged: evitem<IEntityCarriedItemChangedEventData>(ReceiveFromMinecraftServer.EntityCarriedItemChanged),
        EntityCreated: evitem<IEntityCreatedEventData>(ReceiveFromMinecraftServer.EntityCreated),
        EntityDeath: evitem<IEntityDeathEventData>(ReceiveFromMinecraftServer.EntityDeath),
        EntityDroppedItem: evitem<IEntityDroppedItemEventData>(ReceiveFromMinecraftServer.EntityDroppedItem),
        EntityEquippedArmor: evitem<IEntityEquippedArmorEventData>(ReceiveFromMinecraftServer.EntityEquippedArmor),
        EntityStartRiding: evitem<IEntityStartRidingEventData>(ReceiveFromMinecraftServer.EntityStartRiding),
        EntityStopRiding: evitem<IEntityStopRidingEventData>(ReceiveFromMinecraftServer.EntityStopRiding),
        EntityTick: evitem<IEntityTickEventData>(ReceiveFromMinecraftServer.EntityTick),
        EntityUseItem: evitem<IEntityUseItemEventData>(ReceiveFromMinecraftServer.EntityUseItem),
        PistonMovedBlock: evitem<IPistonMovedBlockEventData>(ReceiveFromMinecraftServer.PistonMovedBlock),
        PlaySound: evitem<IPlaySoundEventData>(ReceiveFromMinecraftServer.PlaySound),
        PlayerAttackedEntity: evitem<IPlayerAttackedEntityEventData>(ReceiveFromMinecraftServer.PlayerAttackedEntity),
        PlayerDestroyedBlock: evitem<IPlayerDestroyedBlockEventData>(ReceiveFromMinecraftServer.PlayerDestroyedBlock),
        PlayerPlacedBlock: evitem<IPlayerPlacedBlockEventData>(ReceiveFromMinecraftServer.PlayerPlacedBlock),
        WeatherChangekey: evitem<IWeatherChangedEventData>(ReceiveFromMinecraftServer.WeatherChanged)
    }),
};
Object.freeze(events);

export default events;
