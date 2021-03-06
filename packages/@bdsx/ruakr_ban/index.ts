

import { tellrawAll } from "@mcbe/system_server";
import { Store } from "@mcbe/store";
import LOG from "@mcbe/ruakr_log";
import { Damper } from "@mcbe/damper";
import { invincibleBlocks } from "@mcbe/ruakr_itemgroup";
import Identifier from "@mcbe/identifier";

import { ipfilter } from "bdsx";

import { JsonWatcher } from "krjsonwatcher";
import { loginInfoTables } from "@bdsx/logininfo-db";
import { User, ThrowKickUser, UserExtra, AttackEvent, UserChatEvent } from "@bdsx/ruakr_user";
import { Block } from "@bdsx/block";
import { restoreBlock } from "@bdsx/restoreblock";


interface BanListJson
{
    [key:string]:boolean;
}

interface BanListXUID
{
    [key:string]:number;
}

const KEY_PER_MINUTE = 2000;
const MS_PER_CHAR = 60*1000 / KEY_PER_MINUTE / 3;

export class BanExtra implements UserExtra
{
    public banned = false;
    public banReduce:NodeJS.Timeout|null = null;

    private readonly chattingDamper = new Damper(5000);
    private readonly clickDamper = new Damper(3000);
    private readonly clickDamperHard = new Damper(1000);

    constructor(public readonly user:User)
    {
        let value = banlist_xuid.data[user.xuid];
        const value_name = banlist_xuid.data[user.name];
        if (value_name !== undefined)
        {
            value = value !== undefined ? value + value_name : value_name;
            banlist_xuid.data[user.xuid] = value;
            delete banlist_xuid.data[user.name];
        }
        if (value !== undefined)
        {
            if (value >= banlist.warningLimit && !user.isAdminAccount)
            {
                this.banned = true;
                LOG.message({user, action:LOG.Action.Banned});
                throw ThrowKickUser;
            }
            else
            {
                this.setBanReducing();
            }
        }
    }
    
    setBanReducing():void
    {
        if (this.banReduce) return;
        this.banReduce = setInterval(()=>{
            banlist.reduceBanByXuid(this.user.xuid, 1);
        }, banlist.banReducingInterval);
    }

    onPlace(block:Block, hand:Identifier):boolean
    {
        if (this.testClick({action:LOG.Action.ImpossiblePlace, block, msg:'Too fast place'}))
        {
            block.destroy();
        }
        return false;
    }

    onDestroy(block:Block):boolean
    {
        this.testClick({
            block,
            item2: this.user.hand,
            action:LOG.Action.ImpossibleDestroy, 
            msg:`Too fast`
        });
        // 무적 블럭 파괴
        if (invincibleBlocks.has(block.id))
        {
            restoreBlock(this.user, block);
            banlist.ban(this.user, {action:LOG.Action.ImpossibleDestroy, block, msg:`destroy invincible block`}); 
            return true;
        }

        if (this.user.checkDestructingHack(block))
        {
            restoreBlock(this.user, block);
            banlist.warning(this.user, 15, {action:LOG.Action.ImpossibleDestroy, block, item2: this.user.hand, msg: `destructing without start`});
            return true;
        }
        const destructing = this.user.getDestructingBlock();
        if (!destructing || destructing.id !== block.id)
        {
            LOG.error({user: this.user, action: LOG.Action.Assertion, block, msg: `destructing block unmatch(destucting=${destructing})`});
        }
        return false;
    }

    onDispose():void
    {
        if (this.banReduce)
        {
            clearInterval(this.banReduce);
            this.banReduce = null;
        }
    }
    
    testClick(args:LOG.Arguments):boolean
    {
        if (!this.clickDamper.use(100))
        {
            if (!this.clickDamperHard.use(100))
            {
                banlist.ban(this.user, args);
                return true;
            }
            this.user.kill();
            banlist.warning(this.user, 30, args);
        }
        return false;
    }
    
    onAttacked(ev:AttackEvent):void
    {        
        this.testClick({action:LOG.Action.ImpossibleAttack, pos:ev.targetPosition, msg:ev.targetName + ', Too fast'});
    }

    onChat(ev:UserChatEvent):void
    {
        if (!this.chattingDamper.use(MS_PER_CHAR))
        {
            ev.message = '';
            LOG.error({user:this.user, action:LOG.Action.Assertion, msg:'Too long chatting without user'});
        }
    }
}

export const banlist ={
    warningLimit: 50,
    warningBan: 100,
    banReducingInterval: 60000 * 20,

    async report():Promise<string>
    {
        const namemap = await loginInfoTables.getNameFromXuids(Object.keys(banlist_xuid.data));
    
        let out = '';
        for (const xuid in banlist_xuid.data)
        {
            const value = banlist_xuid.data[xuid];
            let names = namemap.get(xuid);
            if (names === undefined) names = [xuid];
    
            out += names.join(', ')+': '+value;
            out += '\n';
        }
        return out;
    },
    async toString():Promise<string>
    {
        return banlist.report();
    },
    reportIpBan():string
    {
        let out = '';
        for (const ipaddr in banlist_ip.data)
        {
            out += `${ipaddr}: ${banlist_ip.data[ipaddr]}\n`;
        }
        return out;
    },
    hasXuid(xuid:string):boolean
    {
        const value = banlist_xuid.data[xuid];
        return value >= banlist.warningLimit;
    },    
    reduceBanByXuid(xuid:string, value:number):boolean
    {
        if (!banlist_xuid) return false;
        const old = banlist_xuid.data[xuid];
        if (old === undefined) return false;
    
        const reduced = old - value;
        if (reduced <= 0)
        {
            delete banlist_xuid.data[xuid];
            banlist_xuid.save();
            return true;
        }
        else
        {
            banlist_xuid.data[xuid] = reduced;
            banlist_xuid.save();
        }
        return false;
    },
    banWithIp(ipaddr:string):boolean
    {
        ipfilter.add(ipaddr);
        const banvalue = banlist_ip.data[ipaddr];
        if (banvalue)
        {
            return false;
        }
        else
        {
            banlist_ip.data[ipaddr] = true;
            banlist_ip.save();
            return true;
        }
    },
    unbanWithIp(ipaddr:string):boolean
    {
        ipfilter.remove(ipaddr);
        const banvalue = banlist_ip.data[ipaddr];
        delete banlist_ip.data[ipaddr];
        if (!banvalue)
        {
            return false;
        }
        else
        {
            delete banlist_ip.data[ipaddr];
            banlist_xuid.save();
            return true;
        }
    },
    ban(user:User, args:LOG.Arguments):void
    {
        args.user = user;
        const extra = user.extra(BanExtra);
        LOG.append(args, '(BAN)');
        LOG.error(args);
        if (!user.isAdminAccount && !extra.banned)
        {
            extra.banned = true;
            if (banlist_xuid)
            {
                banlist_xuid.data[user.xuid] = banlist.warningBan;
                banlist_xuid.save();
            }
            tellrawAll(['§e'+user.name+'님이 게임을 떠났습니다']);
        }
        user.kick();
    },
    banByXuid(xuid:string):boolean
    {
        const banvalue = banlist_xuid.data[xuid];
        if (banvalue !== undefined && banvalue >= banlist.warningLimit)
        {
            if (banvalue < banlist.warningBan)
            {
                banlist_xuid.data[xuid] = banlist.warningBan;
                banlist_xuid.save();
            }
            return false;
        }
        else
        {
            banlist_xuid.data[xuid] = banlist.warningLimit;
            banlist_xuid.save();
            return true;
        }
    },
    unbanByXuid(xuid:string):boolean
    {
        if (xuid in banlist_xuid.data)
        {
            delete banlist_xuid.data[xuid];
            banlist_xuid.save();
            return true;
        }
        return false;
    },
    warning(user:User, score:number, args?:LOG.Arguments):void
    {
        if (args) 
        {
            args.user = user;
            LOG.warning(args);
        }
        if (banlist_xuid)
        {
            const oldval = banlist_xuid.data[user.xuid];
            score = oldval === undefined ? score : oldval + score;
            banlist_xuid.data[user.xuid] = score;
            banlist_xuid.save();
        }
        const extra = user.extra(BanExtra);
    
        if (score >= banlist.warningLimit)
        {
            user.kick();
            if (!args) args = {user, action:LOG.Action.Ban};
            LOG.append(args, `[ban]`);
            
            if (!user.isAdminAccount && !extra.banned)
            {
                extra.banned = true;
                tellrawAll(['§e'+user.name+'님이 게임을 떠났습니다']);
            }
        }
        else
        {
            extra.setBanReducing();
        }
    
        // if (user.msg)
        // {
        //     title(user.name, 'title', `경고 ${value}/${WARNING_LIMIT} 회`);
        //     title(user.name, 'subtitle', message);
        // }
    },
    reset(user:User):void
    {
        const extra = user.extra(BanExtra);
        extra.banned = false;
        if (extra.banReduce)
        {
            clearInterval(extra.banReduce);
            extra.banReduce = null;
        }
        delete banlist_xuid.data[user.xuid];
        banlist_xuid.save();
    },
}

Store.onLoad.then(store=>{
    const VAR_USER_BANNED = '#banned';
    for (const s of User.store.values())
    {
        const v = s.get(VAR_USER_BANNED);
        s.delete(VAR_USER_BANNED);
        if (v) banlist_xuid.data[s.name] = v;
    }
    banlist_xuid.save();
});

const moduleRoot = process.argv[1];
const banlist_ip = new JsonWatcher<BanListJson>(moduleRoot+'/banlist_ip.json', {});
banlist_ip.onUpdate.on((data, old)=>{
    for (const ip in old)
    {
        if (old[ip] && !data[ip]) ipfilter.remove(ip);
    }
    for (const ip in data)
    {
        if (data[ip] && !old[ip]) ipfilter.add(ip);
    }
});    

const banlist_xuid = new JsonWatcher<BanListXUID>(moduleRoot+'/banlist_xuid.json', {});