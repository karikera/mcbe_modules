
import { Vector3, IVector3 } from "krgeometry";

import Identifier from "@mcbe/identifier";
import ID from "@mcbe/identifier/id";
import { NextTick, callAtNextTick } from "@mcbe/nexttick";
import { entiresOf } from "@mcbe/ruakr_util";
import { system, command, tellraw } from "@mcbe/system_server";
import { kill, title, clear, give, titleTimes, titleReset, clears } from "@mcbe/command";
import { Storage, Store } from "@mcbe/store";
import events from "@mcbe/event_server";
import { AcquationMethod, UseMethod } from "@mcbe/ruakr_const";
import { ComponentAccessor, NoComponentError, component } from "@mcbe/component";
import { signItems, doorItems, slabItems } from "@mcbe/ruakr_itemgroup";
import { Entity, EntityType } from "@mcbe/entity";

import { DimensionId } from "bdsx/common";
import { Actor, NetworkIdentifier, chat } from "bdsx";

import { Position } from "@bdsx/position";
import { TickingArea, UserLike, Block } from "@bdsx/block";
import { LoginInfo } from "@bdsx/logininfo";

import { Container } from "./container";
import { blockEvent } from "./blockevent";

const all = new Map<string, User>();

const INTERECTING_DISTANCE = 8; // 6;
const MOVED_START_DISTANCE = 2;

let looping:User[] = [];

const VAR_FIRST_OLD = '#first';
const VAR_UID = '#uid';

const VAR_SPAWN_X_OLD = 'sx';
const VAR_SPAWN_Y_OLD = 'sy';
const VAR_SPAWN_Z_OLD = 'sz';

const VAR_SPAWN_X = '#sx';
const VAR_SPAWN_Y = '#sy';
const VAR_SPAWN_Z = '#sz';

export const ThrowKickUser = {};

export interface AttackEvent
{
    target:IEntity;
    targetUser?:User|null;
    targetName:string;
    targetPosition?:Vector3|null;
}

export interface UserExtra
{
    onNew?():void;
    onFirstLogin?():void;
    onMoveStart?():void;
    onDeath?():void;
    onUpdateReal?():void;
    onUpdateRealEnd?():void;
    onUpdateSlow?():void;
    onPlace?(block:Block, hand:Identifier):boolean;
    onPlaceBefore?(block:Block):boolean;
    onAttack?(ev:AttackEvent):void;
    onInterect?(block:Block):boolean;
    onInterectEnd?(block:Block):void;
    onDestroyStart?(block:Block):void;
    onDestroy?(block:Block):boolean;
    onDispose?():void;
    onItemChange?(now:Identifier, prev:Identifier, nowCount:number, prevCount:number):void;
    onUseItem?(method:UseMethod, item:Identifier, count:number):void;
    onAcquireItem?(method:AcquationMethod, item:Identifier, count:number, secondary_entity?:IEntity):void;
    onTakeItem?(item:Identifier, count:number):void;
    onGiveItem?(item:Identifier, count:number):void;
    onDropItem?(item:Identifier, count:number):void;
    onChat?(ev:UserChatEvent):void;
}

type ToCompMethod<T> = T extends (...args:infer ARGS)=>infer RET ? (this:UserExtra, ...args:ARGS)=>RET : never;
class UserEvent<T extends (...args:any[])=>(boolean|void)>
{
    private readonly fns:[number, ToCompMethod<T>][] = [];

    constructor()
    {
    }

    regist(componentId:number, fn:ToCompMethod<T>):void
    {
        this.fns.push([componentId, fn]);
    }

    fire(user:User, ...args:T extends (...args:infer ARGS)=>any ? ARGS : never):boolean
    {
        for (const [id, fn] of this.fns)
        {
            if (fn.apply(user.extras[id], args) === true) return true;
        }
        return false;
    }
    
}

type Events = {
    [key in keyof UserExtra]-?: 
        Diff<UserExtra[key], undefined> extends (...args:infer ARGS)=>infer RET ? 
        UserEvent<(...args:ARGS)=>Filter<RET, boolean|void>> : never;
};
const extraEvents:Events = {
    onNew: new UserEvent,
    onFirstLogin: new UserEvent,
    onMoveStart: new UserEvent,
    onDeath: new UserEvent,
    onUpdateReal: new UserEvent,
    onUpdateRealEnd: new UserEvent,
    onUpdateSlow: new UserEvent,
    onPlaceBefore: new UserEvent,
    onPlace: new UserEvent,
    onAttack: new UserEvent,
    onInterect: new UserEvent,
    onInterectEnd: new UserEvent,
    onDestroyStart: new UserEvent,
    onDestroy: new UserEvent,
    onDispose: new UserEvent,
    onItemChange: new UserEvent,
    onUseItem: new UserEvent,
    onAcquireItem: new UserEvent,
    onTakeItem: new UserEvent,
    onGiveItem: new UserEvent,
    onDropItem: new UserEvent,
    onChat: new UserEvent,
};

type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never; 

export interface UserComponentConstructor<T extends UserExtra>
{
    new(user:User):T;
    ID?:number;
    NO_EXTRA?:boolean;
    onInstall?():void;
}

export type UserModuleA = {
    onPlace?:[Identifier, (user:User, pos:Vector3, block:Identifier, hand:Identifier)=>boolean][],
    onDestroy?:[Identifier, (user:User, pos:Vector3, block:Identifier, hand:Identifier)=>void][],
    onInterect?:[Identifier, (user:User, pos:Vector3, block:Identifier, hand:Identifier)=>boolean][],
    onPistonPush?:[Identifier, (user:User, pistonPos:Vector3, newpos:Vector3, oldpos:Vector3, block:Identifier)=>boolean][],
};

const extras:UserComponentConstructor<any>[] = [];

interface PlacingItem
{
    item:Identifier;
    placeBlock:Block|null;
}

class Placings
{
    private readonly placings:PlacingItem[] = [];

    private item:Identifier|null = null;
    private placeBlock:Block|null = null;

    constructor(public readonly user:User)
    {
    }

    empty():boolean
    {
        return this.placings.length === 0 && this.item === null;
    }

    static isReversed(hand:Identifier):boolean
    {
        switch (hand)
        {
        case ID.bed:
        case ID.reeds:
        case ID.string:
        case ID.repeater:
        case ID.comparator:
        case ID.frame:
        case ID.banner:
        case ID.flower_pot:
        case ID.hopper:
        case ID.kelp:
        case ID.campfire:
        case ID.cauldron:
        case ID.brewing_stand:
        case ID.dye: // must be cocoa
        case ID.cake:
        // case ID.TripWire:
        // case ID.UnpoweredComparator:
        // case ID.UnpoweredRepeater:
        // case ID.StandingBanner:
        // case ID.WallBanner:
            return true;
        default:
            if (signItems.has(hand)) return true;
            return false;
        }
    }

    static isUseOnly(id:Identifier):boolean
    {
        return slabItems.has(id) || 
            doorItems.has(id) || 
            id === ID.skull ||
            id === ID.fireball;
    }

    cancel():void
    {
        this.item = null;
        this.placeBlock = null;
    }

    setPlace(hand:Identifier, block:Block):void
    {
        if (this.placeBlock)
        {
            console.error(`${this.user}: Already have place (already=${this.placeBlock}, new=${block})`);
            this.placeBlock = null;
        }

        if (Placings.isReversed(hand))
        {
            this.placeBlock = block;
        }
        else
        {
            if (this.item)
            {
                if (hand !== this.item)
                {
                    console.error(`${this.user}: Hand item unmatch (item=${this.item}, hand=${hand}, block=${block})`);
                    hand = this.item;
                }
                this.item = null;
            }
            else
            {
                if (hand === ID.bamboo)
                {
                    if (block.id !== ID.bamboo) block = Block.make(ID.bamboo_sapling, 0, block.pos, this.user);
                    hand = ID.bamboo;
                }
                else
                {
                    console.error(`${this.user}: No item when place (block=${block})`);
                    return;
                }
            }
            
            this.placings.push({
                item:hand, 
                placeBlock:block,
            });
        }
    }
    
    setUse(item:Identifier):void
    {
        if (this.item)
        {
            this.placings.push({
                item: this.item,
                placeBlock: null,
            });
        }
        if (Placings.isReversed(item)) {
            if (!this.placeBlock) {
                console.error(`${this.user}: No item when use (item=${item})`);
                return;
            }
            this.placings.push({
                item,
                placeBlock: this.placeBlock,
            });
            this.item = null;
            this.placeBlock = null;
        }
        else
        {
            this.item = item;
        }
    }

    setInterect(interectBlock:Block):void
    {
        if (this.placeBlock)
        {
            console.error(`${this.user}: PlaceBlock exists when interect (block=${this.placeBlock}, interect=${interectBlock})`);
            this.placeBlock = null;
        }
        if (!this.item) return;

        let placeBlock:Block;
        if (doorItems.has(this.item) || this.item === ID.skull)
        {
            placeBlock = Block.make(this.item, 0, interectBlock.pos.add(Vector3.Y), this.user);
        }
        else if (interectBlock.isSlab() && (
            this.item === interectBlock.id ||
                (this.item === ID.wooden_slab && interectBlock.id === ID.double_wooden_slab)
        ))
        {
            placeBlock = interectBlock;
        }
        else
        {
            return;
        }
         
        this.placings.push({
            item:this.item, 
            placeBlock
        });
        this.item = null;
    }

    *poll():IterableIterator<PlacingItem>
    {
        if (this.item)
        {
            this.placings.push({
                item:this.item, 
                placeBlock:null,
            });
            this.item = null;
        }
        if (this.placeBlock)
        {
            console.error(`${this.user}: place without use(placeBlock=${this.placeBlock})`);
            this.placeBlock = null;
        }
        yield * this.placings;
        this.placings.length = 0;
    }
}

enum DestructingState
{
    Ended,
    Started,
    Destroyed,
}

export class UserChatEvent
{
    constructor(private readonly ev:{message:string, setMessage(msg:string):void})
    {
    }
    get message():string
    {
        return this.ev.message;
    }
    set message(msg:string)
    {
        this.ev.setMessage(msg);
    }
}

export class User implements UserLike
{
    public readonly uid:number;
    public readonly actor:Actor;

    public interectingBlock:Block|null = null;
    public disposed = false;

    public readonly component:ComponentAccessor;
    public readonly storage:Storage;

    // current
    public riding:IEntity|null = null;
    public ridingId:Identifier = ID.undefined;
    
    // admin
    private adminMode = false;
    public readonly isAdminAccount:boolean;

    // position
    public position:Position;
    public movedStartTest = 0;

    public hand:Identifier = ID.undefined;
    private cancelIterectRequested:NextTick|null = null;

    public readonly placings = new Placings(this);

    public readonly extras:UserExtra[] = [];
    public readonly xuid:string;
    public readonly ip:string;
    public readonly ni:NetworkIdentifier;

    private destructingBlock:Block|null = null;
    private destructingPos = Position.NULL;
    private destructing = DestructingState.Ended;

    constructor(
        public entity:IEntity, 
        public readonly name:string, 
        loginInfo:LoginInfo)
    {
        this.actor = Actor.fromEntity(this.entity);
        this.component = ComponentAccessor(entity);
        this.isAdminAccount = User.admins.has(name);
        this.position = Position.make(this.component.Position.data, this.actor.getDimension());
        this.storage = User.store.create(name);
        this.xuid = loginInfo.xuid;
        this.ip = loginInfo.ip;
        this.ni = loginInfo.ni as NetworkIdentifier;

        if (this.actor === null) throw Error(`${this} Actor not found`);
        
        this.extras = extras.map(ctor=>new ctor(this));
        extraEvents.onNew.fire(this);
        
        let uid = this.storage.get(VAR_UID);
        if (!uid)
        {
            uid = ++lastUid;
            this.storage.set(VAR_UID, uid);
            extraEvents.onFirstLogin.fire(this);
        }
        this.uid = uid;
        
        const handitem = this.component.HandContainer.data[0];
        const handnow = Identifier.get(handitem.__identifier__);
        this.onCarriedItemChanged(handnow, this.hand, handitem.count, 0);
    }

    get dimension():DimensionId
    {
        return this.actor.getDimension();
    }

    checkDestructingHack(block:Block):boolean
    {
        return this.destructing === DestructingState.Ended || !block.pos.equals(this.destructingPos);
    }

    getDestructingBlock():Block|null
    {
        return this.destructingBlock;
    }

    extra<T>(ctor:UserComponentConstructor<T>):T
    {
        if (ctor.ID === undefined) throw Error('Component is not installed: '+ctor.name);
        return this.extras[ctor.ID] as T;
    }

    getTickingArea():TickingArea
    {
        return new TickingArea(this, this.component.TickWorld.data.ticking_area, this.dimension);
    }

    requestCancelInterect():void
    {
        if (this.cancelIterectRequested) return;
        this.cancelIterectRequested = callAtNextTick(()=>{
            this.cancelIterectRequested = null;
            this.cancelInterect();
        });
    }

    isAdminMode():boolean
    {
        return this.adminMode;
    }

    setAdminMode(mode:boolean):void
    {
        if (this.adminMode === mode) return;
        if (!this.isAdminAccount)
        {
            console.error(`${this}: set admin mode without admin account`);
            return;
        }
        this.adminMode = mode;
        if (mode)
        {
            this.tellraw(this.name+' Admin Mode Enabled');
        }
        else
        {
            this.tellraw(this.name+' Admin Mode Disabled');
        }
    }

    kick():void
    {
        if (!this.isAdminAccount)
        {
            system.destroyEntity(this.entity);
            this.dispose();
        }
    }

    tp(to:IVector3):void
    {
        this.position = Position.make(to, this.dimension);
        if (this.riding)
        {
            const comp = component.Position.get(this.riding);
            comp.data = to;
            component.Position.set(this.riding, comp);
        }
        else
        {
            const comp = this.component.Position;
            comp.data = to;
            this.component.Position = comp;
        }
    }

    async takeItem(id:Identifier, dataValue:number, count:number):Promise<number>
    {
        const cleared = await clear(this.name, id, dataValue, count);
        extraEvents.onTakeItem.fire(this, id, cleared);
        return cleared;
    }

    async takeItems(id:Identifier, dataValue:number[], count?:number):Promise<number>
    {
        const cleared = await clears(this.name, id, dataValue, count);
        extraEvents.onTakeItem.fire(this, id, cleared);
        return cleared;
    }

    giveItem(id:Identifier, dataValue:number, count:number):Promise<void>
    {
        const res = give(this.name, id, count, dataValue);
        extraEvents.onGiveItem.fire(this, id, count);
        return res;
    }

    dispose():void
    {
        if (this.disposed) return;
        this.disposed = true;
        this.cancelInterect();

        extraEvents.onDispose.fire(this);
        this.setAdminMode(false);
        all.delete(this.name);
    }

    updateSlow():void
    {
        // position update        
        extraEvents.onUpdateSlow.fire(this);

        for (const place of this.placings.poll())
        {
            if (place.placeBlock)
            {
                this.onPlaceBlockFinal(place.placeBlock, place.item);
            }
        }
    }

    updateReal():void
    {
        const poscomp = component.Position.getOrNull(this.entity);
        if (!poscomp)
        {
            this.dispose();
            return;
        }

        // name check
        const name = this.component.Nameable.data.name;
        if (name !== this.name)
        {
            console.error(`${this}: User name unmatch(now=${name}, prev=${this.name}`);
            this.dispose();
            return;
        }

        const newpos = Position.make(poscomp.data, this.dimension);
        
        // start test
        if (this.movedStartTest < MOVED_START_DISTANCE)
        {
            const moveDelta = this.position.distanceXZ(newpos);
            this.movedStartTest += moveDelta;
            if (this.movedStartTest >= MOVED_START_DISTANCE)
            {
                extraEvents.onMoveStart.fire(this);
            }
        }

        // interect test
        if (this.interectingBlock)
        {
            if (this.interectingBlock.pos.add(Vector3.HALF).distance(this.position) >= INTERECTING_DISTANCE)
            {
                this.cancelInterect();
            }
        }

        this.position = newpos;

        extraEvents.onUpdateReal.fire(this);
    }

    updateRealEnd():void
    {
        extraEvents.onUpdateRealEnd.fire(this);
    }

    kill():void
    {
        command('gamemode s "'+this.name+'"');
        kill(this.name);
    }

    tellraw(...message:string[]):void
    {
        tellraw(this.name, message);
    }

    info(message:string):void
    {
        title(this.name, "title", "§0");
        title(this.name, "subtitle", message);
    }
    
    infoFast(message:string):void
    {
        this.infoWith(message, 0, 70, 20);
    }
    
    infoWith(message:string, fadeIn:number, stay:number, fadeOut:number):void
    {
        titleTimes(this.name, fadeIn, stay, fadeOut);
        title(this.name, "title", "§0");
        title(this.name, "subtitle", message);
        titleReset(this.name);
    }
    
    actionbar(message:string):void
    {
        title(this.name, "actionbar", message);
    }

    cancelInterect():void
    {
        if (this.interectingBlock)
        {
            this.onBlockInteractEnd(this.interectingBlock);
            this.interectingBlock = null;
        }
    }

    onChat(ev:UserChatEvent):void
    {
        extraEvents.onChat.fire(this, ev);
    }

    onBlockDestructionStarted(pos:Vector3):void
    {
        const block = this.getTickingArea().getBlock(pos);
        if (!block)
        {
            console.error(`${this}: Cannot read block on destr start(pos=${pos})`);
            return;
        }
        extraEvents.onDestroyStart.fire(this, block);
        this.destructingBlock = block;
        this.destructingPos = block.pos;
        this.destructing = DestructingState.Started;
    }

    onBlockDestructionStopped(pos:Vector3, progress:number):void
    {
        if (!pos.equals(this.destructingPos)) return;
        if (Vector3.ZERO.equals(this.destructingPos)) return;
        if (this.destructing === DestructingState.Ended) return;
        if (progress === 0 && this.destructing === DestructingState.Started)
        {
            // when unmatched breaking
            const block = this.getTickingArea().getBlock(pos);
            if (block && block.id === ID.air)
            {
                this.onBlockDestroyed(this.destructingBlock!);
            }
        }
        this.destructing = DestructingState.Ended;
    }

    onBlockDestroyed(block:Block):void
    {
        this.destructing = DestructingState.Destroyed;
        if (!this.destructingBlock || this.destructingBlock.id === ID.air) return;

        this.requestCancelInterect();

        // 컨테이너 파괴
        const flags = Container.getFlags(block.id);
        if (flags !== Container.INVALID && flags != Container.CHEST_ENDER)
        {
            Container.onDestroy(this, flags, block.pos);
        }

        if (extraEvents.onDestroy.fire(this, block)) return;
        if (blockEvent.onDestroy.fire(this, block)) return;
    }

    onPlaceBlock(pos:Vector3):void
    {
        // 테스트 클릭        
        const block = this.getTickingArea().getBlock(pos);
        if (!block)
        {
            console.error(`${this}: Cannot read block on place(pos=${pos})`);
            return;
        }
        if (extraEvents.onPlaceBefore.fire(this, block)) return;
        this.placings.setPlace(this.hand, block);
    }
    
    onPlaceBlockFinal(block:Block, hand:Identifier):void
    {  
        // 이벤트
        if (extraEvents.onPlace.fire(this, block, hand)) return;
        if (blockEvent.onPlace.fire(this, block, hand)) return;
        
        // 컨테이너 생성
        const flags = Container.getFlags(block.id);
        switch (flags)
        {
        case Container.CHEST_YES:
            const checked:boolean[] = [
                false, false, false, false, false, 
                false ,false, false, false, false,
                false ,false, true, false, false,
                false ,false, false, false, false,
                false ,false, false, false, false,
            ];
        
            const area = this.getTickingArea();
            const leftTop = block.pos.add({x:-2, y:0, z:-2});
            const countChest = (x:number, z:number, count:number):boolean=>{
                if (x < 0) return false;
                if (z < 0) return false;
                if (x >= 5) return false;
                if (z >= 5) return false;
                const idx = z * 5 + x;
                if (checked[idx]) return false;
                checked[idx] = true;
                const block = area.getBlock(leftTop.add(new Vector3(x, 0, z)));
                if (!block || !Container.isChest(block.id)) return false;
                count --;
                if (count === 0) return true;
                return countChestArround(x, z, count);
            };
            const countChestArround = (x:number, z:number, count:number):boolean=>{
                return countChest(x-1, z, count) || 
                    countChest(x+1, z, count) ||
                    countChest(x, z-1, count) ||
                    countChest(x, z+1, count);
            };
            if (countChestArround(2, 2, 2))
            {
                this.info("상자 2개 옆에 다른 상자를 붙일 수 없어요");
                block.destroy();
                return;
            }
            Container.create(flags, block.pos);
            break;
        case Container.CHEST_NO:
            Container.create(flags, block.pos);
            break;
        }
    }

    onBlockInteractEnd(block:Block):void
    {
        extraEvents.onInterectEnd.fire(this, block);
    }

    onBlockInteractedWith(pos:Vector3):void
    {
        const block = this.getTickingArea().getBlock(pos);
        if (!block)
        {
            console.error(`${this}: Cannot read block on interect(pos=${pos})`);
            return;
        }
        
        this.placings.setInterect(block);
        this.cancelInterect();

        if (this.cancelIterectRequested)
        {
            this.cancelIterectRequested.cancel();
            this.cancelIterectRequested = null;
        }
        this.interectingBlock = block;

        if (extraEvents.onInterect.fire(this, block)) return;
        blockEvent.onInterect.fire(this, block);
    }

    onCarriedItemChanged(now:Identifier, prev:Identifier, nowCount:number, prevCount:number):void
    {
        this.hand = now;
        extraEvents.onItemChange.fire(this, now, prev, nowCount, prevCount);
    }

    onAcquiredItem(item:Identifier, count:number, method:AcquationMethod, secondary_entity?:IEntity):void
    {
        if (User.unacquirable.has(item))
        {
            clear(this.name, item);
            return;
        }

        extraEvents.onAcquireItem.fire(this, method, item, count, secondary_entity);
    }

    onDroppedItem(item:Identifier, count:number):void
    {
        extraEvents.onDropItem.fire(this, item, count);
    }

    onUseItem(method:UseMethod, item:Identifier, count:number):void
    {
        this.requestCancelInterect();

        if (method === UseMethod.Place)
        {
            if (item === ID.armor_stand ||
                item === ID.fireworks || 
                item === ID.boat ||
                item === ID.waterlily ||
                item === ID.standing_banner ||
                item.mini.endsWith('minecart') ||
                item.mini.startsWith('record_'))
            {
            }
            else
            {
                method = UseMethod.BlockPlace;
                this.placings.setUse(item);
            }
        }
        extraEvents.onUseItem.fire(this, method, item, count);
    }

    onDeath():void
    {
        this.requestCancelInterect();

        extraEvents.onDeath.fire(this);
    }

    onAttacked(entity:IEntity):void
    {
        this.cancelInterect();
        
        let targetPosition:Vector3|null;
        let targetName:string;
        const targetUser = User.getInstance(entity);
        if (targetUser)
        {
            targetPosition = targetUser.position;
            targetName = targetUser.toString();
        }
        else
        {
            const posdata = component.Position.get(entity);
            targetPosition = posdata ? Vector3.make(posdata.data) : null;
            targetName = Entity.toString(entity);
        }

        extraEvents.onAttack.fire(this, {
            target: entity,
            targetUser,
            targetName,
            targetPosition,
        });
    }

    onStartRiding(ride:IEntity):void
    {
        this.riding = ride;
        this.ridingId = Identifier.get(ride.__identifier__);
    }
    
    onStopRiding(entity_is_being_destroyed:boolean, exit_from_rider:boolean, switching_rides:boolean):void
    {
        this.riding = null;
        this.ridingId = ID.undefined;
    }

    toString():string
    {
        return '@'+this.name+'('+this.position+')';
    }

    static getNearst(pos:VectorXYZ):{user:User|null, distance:number}
    {
        let min = Infinity;
        let minuser:User|null = null;
        for (const user of all.values())
        {
            const dist = Vector3.distance(pos, user.position);
            if (dist < min)
            {
                min = dist;
                minuser = user;
            }
        }
        return {user: minuser, distance: min};
    }

    static getNearstWithout(pos:Vector3, without:User):{user:User|null, distance:number}
    {
        let min = Infinity;
        let minuser:User|null = null;
        for (const user of all.values())
        {
            if (user === without) continue;
            try
            {
                const dist = pos.distance(user.component.Position.data);
                if (dist < min)
                {
                    min = dist;
                    minuser = user;
                }   
            }
            catch (err)
            {
            }
        }
        return {user: minuser, distance: min};
    }

    static getAt(pos:Vector3, radius:number, without:User):User|null
    {
        let min = Infinity;
        let minuser:User|null = null;
        for (const user of all.values())
        {
            if (user === without) continue;
            try
            {
                const dist = pos.distance(user.component.Position.data);
                if (dist > radius) continue;
                
                if (dist < min)
                {
                    min = dist;
                    minuser = user;
                }   
            }
            catch (err)
            {
            }
        }
        return minuser;
    }

    static all():IterableIterator<User>
    {
        return all.values();
    }

    static getInstance(entity:IEntity):User|null
    {
        if (entity.__identifier__ !== 'minecraft:player') return null;
        const name = component.Nameable.get(entity).data.name;
        let user = all.get(name);
        if (!user)
        {
            try
            {
                const loginInfo = LoginInfo.get(name);
                if (!loginInfo) throw Error('no login info: '+ name);
                all.set(name, user = new User(entity, name, loginInfo));
            }
            catch (err)
            {            
                if (err !== ThrowKickUser)
                {
                    console.error(err);
                }
                system.destroyEntity(entity);
                return null;
            }
        }
        else
        {
            if (user.entity.id !== entity.id)
            {
                console.error(`entity id changed: ${user.entity.id} -> ${entity.id}`);
                user.entity = entity;
            }
        }
        return user;
    }

    static getByName(name:string):User|undefined
    {
        return all.get(name);
    }

    static isInstalled(m:UserComponentConstructor<any>):boolean
    {
        return m.ID !== undefined;
    }

    static install(m:UserComponentConstructor<any>):void
    {
        if (all.size !== 0)
        {
            const msg = `Please install module before user spawning: ${m.name}`;
            console.error(msg);
            throw Error(msg);
        }
        
        if (m.ID !== undefined)
        {
            const msg = `Module installed already: ${m.name}`;
            console.error(msg);
            throw Error(msg);
        }
        m.ID = -1;
        
        const id = extras.length;
        if (m.onInstall) m.onInstall();
        
        if (m.NO_EXTRA) return;
        m.ID = id;
        extras.push(m);

        for (const [name, event] of entiresOf(extraEvents))
        {
            const func = m.prototype[name];
            if (func) event.regist(id, func);
        }
    }

    public static readonly admins = new Set<string>();
    public static readonly unacquirable = new Set<Identifier>();
    public static readonly store = new Store('p');
    
}

events.listen.EntityCarriedItemChanged(data=>{
    const user = User.getInstance(data.entity);
    if (!user) return;
    const prev = Identifier.get(data.previous_carried_item.item);
    const now = Identifier.get(data.carried_item.item);
    const nowCount = data.carried_item.count;
    const prevCount = data.previous_carried_item.count;
    user.onCarriedItemChanged(now, prev, nowCount, prevCount);
});
events.listen.EntityAcquiredItem(data=>{
    const user = User.getInstance(data.entity);
    if (!user) return;
    const item = Identifier.get(data.item_stack.item);
    if (data.item_stack.count !== data.acquired_amount)
    {
        console.error(`${user}: acquire count unmatch: ${data.item_stack.count} != ${data.acquired_amount}`);
    }
    user.onAcquiredItem(item, data.acquired_amount, data.acquisition_method as AcquationMethod, data.secondary_entity);
});
events.listen.BlockInteractedWith(data=>{
    const user = User.getInstance(data.player)!;
    user.onBlockInteractedWith(Vector3.make(data.block_position));
});
events.listen.EntityDroppedItem(data=>{
    const user = User.getInstance(data.entity);
    if (!user) return;
    user.onDroppedItem(Identifier.get(data.item_stack.item), data.item_stack.count);
});
events.listen.BlockDestructionStarted(data=>{
    const user = User.getInstance(data.player);
    if (!user) return;
    const pos = Vector3.make(data.block_position);
    user.onBlockDestructionStarted(pos);
});
events.listen.BlockDestructionStopped(data=>{
    const user = User.getInstance(data.player);
    if (!user) return;
    const pos = Vector3.make(data.block_position);
    user.onBlockDestructionStopped(pos, data.destruction_progress);
});
events.listen.PlayerPlacedBlock(data=>{
    const user = User.getInstance(data.player);
    if (!user) return;
    user.onPlaceBlock(Vector3.make(data.block_position));
});
events.listen.PlayerDestroyedBlock(data=>{
    const user = User.getInstance(data.player);
    if (!user) return;
    const blockId = Identifier.get(data.block_identifier);
    const pos = Position.make(data.block_position, user.dimension);
    user.onBlockDestroyed(Block.make(blockId, 0, pos, user));
});
events.listen.PlayerAttackedEntity(data=>{
    const user = User.getInstance(data.player);
    if (!user) return;
    const entity = data.attacked_entity;
    user.onAttacked(entity);
});
events.listen.EntityStartRiding(data=>{
    const user = User.getInstance(data.entity);
    if (!user) return;
    user.onStartRiding(data.ride);
});
events.listen.EntityStopRiding(data=>{
    const d = data;
    const user = User.getInstance(d.entity);
    if (!user) return;
    user.onStopRiding(d.entity_is_being_destroyed, d.exit_from_rider, d.switching_rides);
});

Entity.onNew(EntityType.Entity, ID.player, entity=>{
    User.getInstance(entity.raw);
});
Entity.onDestroy(EntityType.Entity, ID.player, entity=>{
    const user = User.getInstance(entity.raw); 
    if (user)
    {
        user.onDeath();
    }
});

chat.on((ev)=>{
    const user = User.getByName(ev.name);
    if (user) user.onChat(new UserChatEvent(ev));
    else
    {
        console.error(`${ev.name}(${ev.networkIdentifier.getAddress()}): message without login(message=${ev.message})`);
        ev.setMessage('');
    }
});

events.update.on(()=>{
    for (const user of all.values())
    {
        try
        {
            user.updateReal();
        }
        catch (err)
        {
            console.error(err);
            if (err instanceof NoComponentError)
            {
                user.dispose();
            }
        }
    }

    if (looping.length === 0)
    {
        looping = [...all.values()];
    }

    const user = looping.pop();
    if (user && !user.disposed)
    {
        try
        {
            user.updateSlow();
        }
        catch (err)
        {
            console.error(err);
            if (err instanceof NoComponentError)
            {
                user.dispose();
            }
        }
    }
    
    for (const user of all.values())
    {
        try
        {
            user.updateRealEnd();
        }
        catch (err)
        {
            console.error(err);
            if (err instanceof NoComponentError)
            {
                user.dispose();
            }
        }
    }
});

let lastUid = 0;

Store.onLoad.then(()=>{
    
    for (const s of User.store.values())
    {
        const uid = s.get(VAR_UID);
        if (uid !== undefined)
        {
            if (uid > lastUid)
            {
                lastUid = uid;
            }
        }

        s.delete(VAR_SPAWN_X_OLD);
        s.delete(VAR_SPAWN_Y_OLD);
        s.delete(VAR_SPAWN_Z_OLD);
        s.delete(VAR_SPAWN_X);
        s.delete(VAR_SPAWN_Y);
        s.delete(VAR_SPAWN_Z);
    }

    for (const s of User.store.values())
    {
        if (s.get(VAR_UID) !== undefined)
        {
            s.set(VAR_UID, ++lastUid);
        }
        s.delete(VAR_FIRST_OLD);
    }
});
