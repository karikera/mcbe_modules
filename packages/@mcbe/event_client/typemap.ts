
function exact<T extends string>(value:T):T
{
    return value;
}

export const SendToMap = {
    DisplayChat: {value: {} as IDisplayChatParameters, key: exact(SendToMinecraftClient.DisplayChat) },
    LoadUI: {value: {} as ILoadUIParameters, key: exact(SendToMinecraftClient.LoadUI) },
    ScriptLoggerConfig: {value: {} as IScriptLoggerConfigParameters, key: exact(SendToMinecraftClient.ScriptLoggerConfig) },
    SendUIEvent: {value: {} as ISendUIEventParameters, key: exact(SendToMinecraftClient.SendUIEvent) },
    SpawnParticleAttachedEntity: {value: {} as ISpawnParticleAttachedEntityParameters, key: exact(SendToMinecraftClient.SpawnParticleAttachedEntity) },
    SpawnParticleInWorld: {value: {} as ISpawnParticleInWorldParameters, key: exact(SendToMinecraftClient.SpawnParticleInWorld) },
    UnloadUI: {value: {} as IUnloadUIParameters, key: exact(SendToMinecraftClient.UnloadUI) },
};

export const ReceiveFromMap = {
    ClientEnteredWorld: {value: {} as IClientEnteredWorldEventData, key: exact(ReceiveFromMinecraftClient.ClientEnteredWorld) },
    HitResultChanged: {value: {} as IHitResultChangedEventData, key: exact(ReceiveFromMinecraftClient.HitResultChanged) },
    HitResultContinuous: {value: {} as IHitResultContinuousEventData, key: exact(ReceiveFromMinecraftClient.HitResultContinuous) },
    PickHitResultChanged: {value: {} as IPickHitResultChangedEventData, key: exact(ReceiveFromMinecraftClient.PickHitResultChanged) },
    PickHitResultContinuous: {value: {} as IPickHitResultContinuousEventData, key: exact(ReceiveFromMinecraftClient.PickHitResultContinuous) },
    UIEvent: {value: {} as string, key: exact(ReceiveFromMinecraftClient.UIEvent) },
};

export type SendToMap = typeof SendToMap;
export type ReceiveFromMap = typeof ReceiveFromMap;