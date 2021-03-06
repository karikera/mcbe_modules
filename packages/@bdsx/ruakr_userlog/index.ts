
import LOG from '@mcbe/ruakr_log';
import ID from '@mcbe/identifier/id';
import Identifier from '@mcbe/identifier';
import { containerItems } from '@mcbe/ruakr_itemgroup';

import { User, UserExtra, AttackEvent, UserChatEvent } from '@bdsx/ruakr_user';
import { Block } from '@bdsx/block';
import { AcquationMethod, UseMethod } from '@mcbe/ruakr_const';
import { Position } from '@bdsx/position';
import { DimensionId } from 'bdsx/common';
import events from '@mcbe/event_server';
import { component } from '@mcbe/component';
import { Entity } from '@mcbe/entity';

export class LogExtra implements UserExtra
{
    private loggedPosition:Position = Position.NULL;
    
    constructor(public readonly user:User)
    {
        LOG.message({user, msg:`IP=${user.ip}, XUID=${user.xuid}`, action: LOG.Action.Login});
    }

    onDispose():void
    {
        LOG.message({user:this.user, msg:`IP=${this.user.ip}, XUID=${this.user.xuid}`, action:LOG.Action.Logout});
    }
    
    onDeath():void
    {
        LOG.verbose({user:this.user, action:LOG.Action.Death});
    }
    
    onItemChange(now:Identifier, prev:Identifier, nowCount:number, prevCount:number):void
    {
        LOG.verbose({user:this.user, action:LOG.Action.Hand, item:now, count:nowCount, item2:prev, count2:prevCount});
    }
    
    onPlace(block:Block, hand:Identifier):boolean
    {
        LOG.verbose({user:this.user, action:LOG.Action.Place, block, item2:hand});
        return false;
    }

    onInterect(block:Block):boolean
    {
        if (!this.user.isAdminMode())
        {
            LOG.verbose({user:this.user, action:LOG.Action.Interact, block, msg:this.user.hand.name});
        }
        return false;
    }

    onDestroy(block:Block):boolean
    {
        LOG.verbose({user:this.user, block, action:LOG.Action.Destroy});
        if (block.id !== ID.ender_chest && containerItems.has(block.id))
        {
            LOG.message({user:this.user, block, action: LOG.Action.DestroyContainer});
        }
        return false;
    }
    
    onUseItem(method:UseMethod, item:Identifier, count:number):void
    {
        LOG.verbose({user:this.user, action:LOG.Action.Use, item, count, msg:method});
    }

    onDroppedItem(item:Identifier, count:number):void
    {
        LOG.verbose({user:this.user, action:LOG.Action.Drop, item, count});
    }

    onAcquiredItem(item:Identifier, count:number, method:AcquationMethod, secondary_entity?:IEntity):void
    {
        let msg:string = method;
        if (secondary_entity)
        {
            msg += ' from ';
            msg += User.getInstance(secondary_entity) || '#'+secondary_entity.__identifier__;
        }
        LOG.verbose({user:this.user, action:LOG.Action.Acquire, item, count, msg});
    }
    
    onAttacked(ev:AttackEvent):void
    {
        LOG.verbose({user:this.user, action:LOG.Action.Attack, pos:ev.targetPosition, msg:ev.targetName});
    }

    onChat(ev:UserChatEvent):void
    {
        LOG.message({user:this.user, action: LOG.Action.Chat, msg: ev.message});
    }

    private _logPosition():void
    {
        const pos = this.user.position.floor();
        if (pos.equals(this.loggedPosition)) return;
        this.loggedPosition = pos;
        LOG.verbose({
            user:this.user,
            action:LOG.Action.Move,
            msg:DimensionId[pos.dimension],
        });
    }

    static onInstall():void
    {
        setInterval(()=>{
            for (const user of User.all())
            {
                user.extra(LogExtra)._logPosition();
            }
        }, 2000);
    }
}

events.listen.EntityDeath(data=>{
    const pos = component.Position.get(data.entity);
    LOG.verbose({user: Entity.toString(data.entity), pos: pos ? pos.data : null, action:LOG.Action.Death});
});
