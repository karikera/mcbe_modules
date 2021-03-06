import { OBJECTIVE_MAX_LENGTH } from "@mcbe/ruakr_const";

const heads = [
    'stained_',
    'smooth_',
    'redstone_',
    'rabbit_',
    'element_',
    'double_',
    'chorus_',
    'cobblestone_',
    'command_',
    'cooked_',
    'coral_',
    'mossy_',
    'nether_',
    'stripped_',

    'acacia_',
    'oak_',
    'dark_oak_',
    'jungle_',
    'spruce_',

    'wooden_',
    'stone_',
    'iron_',
    'chainmail_',
    'diamond_',
    'golden_',

    'dark_prismarine_',
    'enchanting_',
    'end_',
    'ender_',
    'fermented_',
    'prismarine_',
    'horsearmor',
    'leather_',
    'lingering_',
    'heavy_weighted_',
    'light_weighted_',
    'polished_',

    'red_',
    'black_',
    'blue_',
    'brown_',
    'cyan_',
    'pink_',
    'orange_',
    'silver_',
    'purple_',
    'white_',
    'yellow_',
    'gray_',
    'green_',
    'light_',
    'lime_',

    'concrete_',
    'turtle_',
    'flint_',
    'lit_',
    'birch_',
    'darkoak_',
    'zomebie_',
    'pistonArm',
    'unpowered_',
    'unlit_',
    'powered_',
    'area_',
    'eye_of_ender_',
    'experience_',
    'daylight_',
    'element_',
    'wither_',
    'stickyPiston',
    'cracked_',
    'chiseled_',
    'netherite_',
    'warped_',
    'lodestone_'
];

const tails = [
    '_command_block',
    '_membrane',
    '_shulker_box',
    '_hardened_clay',
    '_popped',
    '_potion',
    '_pressure_plate',
    '_fence_gate',
    '_stairs',
    '_pattern',
    '_glazed_terracotta',
    '_terracotta',
    '_table',
    '_block',
    '_wall',
    '_minecart',
    '_dead',
    '_nether_brick',
    '_cobblestone',
    '_sandstone',
    '_powder',
    '_of_the_sea',
    '_steel',
    '_furnace',
    '_sign',
    '_repeater',
    '_torch',
    '_comparator',
    '_cloud',
    '_bottle',
    '_detector',
    '_inverted',
    '_dangerous',
    '_illager',
    '_bricks',
    '_blackstone',
    '_chestplate',
    '_on_a_stick',
    '_spawn_egg',
];

const middles = [
    '_glazed_',
    '_sandstone_',
    '_nether_',
    '_brick_',
    '_shell_',
    '_cobblestone_',
    '_blast_',
    '_standing_',
    '_wall_',
    '_villager_',
    '_redstone_',
    '_effect_',
    '_detector_',
    '_blackstone_',
    '_polished_',
];

function pack(name:string):string
{
    let n = name;
    for (let i=0;i<heads.length;i++)
    {
        const h = heads[i];
        if (n.startsWith(h))
        {
            n = i.toString(36) + '_' + n.substr(h.length);
        }
    }

    for (let i=0;i<middles.length;i++)
    {
        n = n.replace(middles[i], '_'+i.toString(36)+'_');
    }

    for (let i=0;i<tails.length;i++)
    {
        const t = tails[i];
        if (n.endsWith(t))
        {
            n = n.substr(0, n.length - t.length) + '_' + i.toString(36);
        }
    }

    if (n.length > OBJECTIVE_MAX_LENGTH)
    {
        throw Error(`pack failed: ${name} -> ${n} (${n.length})`);
    }
    return n;
}

function unpack(minified:string):string
{
    let n = minified;
    for (let i=0;i<heads.length;i++)
    {
        const from = i.toString(36) + '_';
        if (n.startsWith(from))
        {
            n = heads[i] + n.substr(from.length);
        }
    }

    for (let i=0;i<middles.length;i++)
    {
        n = n.replace('_'+i.toString(36)+'_', middles[i]);
    }

    for (let i=0;i<tails.length;i++)
    {
        const from = '_' + i.toString(36);
        if (n.endsWith(from))
        {
            n = n.substr(0, n.length - from.length) + tails[i];
        }
    }
    return n;
}

const NAMESPACE = new Map<string, string>([
    ['minecraft', ''],
    ['ruarule', 'R'],
]);

const NAMESPACE_REVERSE = new Map<string, string>();
for (const [key, value] of NAMESPACE)
{
    NAMESPACE_REVERSE.set(value, key);
}

export default class Identifier
{
    private static readonly map = new Map<string, Identifier>();   
    private static readonly fromMinified = new Map<string, Identifier>();

    public static readonly undefined = new Identifier('minecraft:undefined');
    
    /** 
     * name without namespace
     * but custom namespace is remained
     */
    public readonly name:string;

    /** minified name under 16 characters for using as objective name */
    public readonly minified:string;

    /**
     * @param full full identifier, it contains namespace
     */
    private constructor(
        public readonly full:string)
    {
        const [ns, name] = full.split(':', 2);
        const minins = NAMESPACE.get(ns);
        if (minins === '')
        {
            this.name = name;
            this.minified = pack(name);
        }
        else
        {
            this.name = full;
            this.minified = (minins || ns) + ':' + pack(name);
        }
        Identifier.fromMinified.set(this.minified, this);
        Identifier.map.set(full, this);
    }

    /** @deprecated It renamed to Identifier.name */
    get mini():string
    {
        return this.name;
    }

    /** @deprecated It renamed to Identifier.minified */
    get short():string
    {
        return this.minified;
    }

    /**
     * it returns this.name
     */
    toString():string
    {
        return this.name;
    }

    static all():IterableIterator<Identifier>
    {
        return Identifier.map.values();
    }

    /**
     * @param name it must not contain 'minecraft:'
     */
    static getFromName(name:string):Identifier
    {
        const ns = name.indexOf(':');
        if (ns === -1) return Identifier.get('minecraft:'+name);
        else return Identifier.get(name);
    }

    /** 
     * @deprecated It renamed to getFromName
     */
    static getFromMini(name:string):Identifier
    {
        return Identifier.getFromName(name);
    }

    /**
     * get identifier from minified id
     */
    static getFromMinified(minified:string):Identifier
    {
        const cache = Identifier.fromMinified.get(minified);
        if (cache) return cache;

        let [ns, name] = minified.split(':', 2);
        if (name === undefined)
        {
            return new Identifier('minecraft:' + unpack(ns));
        }
        const longns = NAMESPACE_REVERSE.get(ns);
        return Identifier.get((longns || ns) + unpack(name));
    }

    /** 
     * @deprecated It renamed to getFromMinified
     */
    static getFromShort(minified:string):Identifier
    {
        return Identifier.getFromMinified(minified);
    }

    /**
     * get identifier from full name
     * @param full it contains namespace
     */
    static get(full:string):Identifier
    {
        const cache = Identifier.map.get(full);
        if (cache) return cache;
        return new Identifier(full);
    }
}
