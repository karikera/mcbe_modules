import "@mcbe/system_client";
import { createBroadcast, evitem, createListener, sharedEvents } from "@mcbe/event";

const events = {
    initialize:sharedEvents.initialize,
    shutdown:sharedEvents.shutdown,
    update:sharedEvents.update,
    broadcast: createBroadcast({
        DisplayChat: evitem<IDisplayChatParameters>(SendToMinecraftClient.DisplayChat),
        LoadUI: evitem<ILoadUIParameters>(SendToMinecraftClient.LoadUI),
        ScriptLoggerConfig: evitem<IScriptLoggerConfigParameters>(SendToMinecraftClient.ScriptLoggerConfig),
        SendUIEvent: evitem<ISendUIEventParameters>(SendToMinecraftClient.SendUIEvent),
        SpawnParticleAttachedEntity: evitem<ISpawnParticleAttachedEntityParameters>(SendToMinecraftClient.SpawnParticleAttachedEntity),
        SpawnParticleInWorld: evitem<ISpawnParticleInWorldParameters>(SendToMinecraftClient.SpawnParticleInWorld),
        UnloadUI: evitem<IUnloadUIParameters>(SendToMinecraftClient.UnloadUI),
    }),
    listen: createListener({
        ClientEnteredWorld: evitem<IClientEnteredWorldEventData>(ReceiveFromMinecraftClient.ClientEnteredWorld),
        HitResultChanged: evitem<IHitResultChangedEventData>(ReceiveFromMinecraftClient.HitResultChanged),
        HitResultContinuous: evitem<IHitResultContinuousEventData>(ReceiveFromMinecraftClient.HitResultContinuous),
        PickHitResultChanged: evitem<IPickHitResultChangedEventData>(ReceiveFromMinecraftClient.PickHitResultChanged),
        PickHitResultContinuous: evitem<IPickHitResultContinuousEventData>(ReceiveFromMinecraftClient.PickHitResultContinuous),
        UIEvent: evitem<string>(ReceiveFromMinecraftClient.UIEvent),
    }),
};
Object.freeze(events);

export default events;