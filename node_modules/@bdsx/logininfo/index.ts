import { netevent, PacketId, NetworkIdentifier } from "bdsx";
import Event from 'krevent';

const fromNi = new WeakMap<NetworkIdentifier, LoginInfo>();
const fromName = new Map<string, LoginInfo>();

export class LoginInfo
{
    constructor(
        public readonly xuid:string,
        public readonly name:string,
        public readonly ip:string,
        public readonly ni:NetworkIdentifier)
    {
    }
        
    static get(name:string):LoginInfo|undefined
    {
        return fromName.get(name);
    }
    
    static getFromNi(name:NetworkIdentifier):LoginInfo|undefined
    {
        return fromNi.get(name);
    }

    public static readonly onLogin = new Event<(loginInfo:LoginInfo)=>void>();
    public static readonly onLogout = new Event<(loginInfo:LoginInfo)=>void>();
}

netevent.after(PacketId.Login).on((ptr, ni, packetId)=>{
    let ip = ni.getAddress();
    const [xuid, name] = netevent.readLoginPacket(ptr);
    if (name && xuid)
    {
        ip = ip.split('|')[0];
        const info = new LoginInfo(xuid, name, ip, ni);
        fromName.set(name, info);
        fromNi.set(ni, info);
        LoginInfo.onLogin.fire(info);
    }
});
netevent.close.on(ni=>{
    const info = fromNi.get(ni);
    fromNi.delete(ni);
    if (info)
    {
        fromName.delete(info.name);
        LoginInfo.onLogout.fire(info);
    }
});
