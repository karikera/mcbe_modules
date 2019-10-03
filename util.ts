
import https = require('https');

export function firstLine(line:string):string
{
    const idx = line.indexOf('\n');
    if (idx === -1) return line;
    return line.substr(0, idx);
}

export function webNameToId(webName:string):string[]
{
    switch(webName)
    {
    case 'Tripwire': return ['tripWire'];
    case 'Nether Portal': return ['portal'];
    case 'Enchantment Table': return ['enchanting_table'];
    case 'Monster Spawner': return ['mob_spawner'];
    case 'Cobweb': return ['web'];
    case 'Lapis Lazuli Block': return ['lapis_block'];
    case 'Lapis Lazuli Ore': return ['lapis_ore'];
    case 'Nether Quartz Ore': return ['quartz_ore'];
    case 'Wooden Trapdoors': return ['trapdoor'];
    case 'Wooden Doors': return ['wooden_door'];
    case 'Bricks': return ['brick_block'];
    case 'TNT': return ['tnt'];
    case 'Cobblestone Stairs': return ['stone_stairs'];
    case 'Fences': return ['fence'];
    case 'Fence Gates': return ['fence_gate', 'spruce_fence_gate', 'birch_fence_gate', 'jungle_fence_gate', 'acacia_fence_gate', 'dark_oak_fence_gate'];
    case 'Nether Bricks': return ['nether_brick'];
    case 'Red Nether Bricks': return ['red_nether_brick'];
    case 'Stone Slabs': return ['double_stone_slab','double_stone_slab2','double_stone_slab3','double_stone_slab4'];
    case 'Logs': return ['log','log2','stripped_spruce_log','stripped_birch_log','stripped_jungle_log','stripped_acacia_log','stripped_dark_oak_log','stripped_oak_log'];
    case 'Wooden Slabs': return ['wooden_slab'];
    case 'Andesite': return ['stone'];
    case 'Dark Prismarine': return ['prismarine'];
    case 'Diorite': return ['stone'];
    case 'Granite': return ['stone'];
    case 'Prismarine Bricks': return ['prismarine'];
    case 'Stone Bricks': return ['stonebrick'];
    case 'Glazed Terracotta': return ['white_glazed_terracotta', 'orange_glazed_terracotta', 'magenta_glazed_terracotta', 'light_blue_glazed_terracotta', 'yellow_glazed_terracotta', 'lime_glazed_terracotta', 'pink_glazed_terracotta', 'gray_glazed_terracotta', 'silver_glazed_terracotta', 'cyan_glazed_terracotta', 'purple_glazed_terracotta', 'blue_glazed_terracotta', 'brown_glazed_terracotta', 'green_glazed_terracotta', 'red_glazed_terracotta', 'black_glazed_terracotta']; 
    case 'Terracotta': return ['hardened_clay', 'stained_hardened_clay'];
    case 'Sugar Cane': return ['reeds'];
    case 'Slime Block': return ['slime'];
    case 'Saplings': return ['sapling'];
    case 'Redstone Repeater': return ['unpowered_repeater', 'powered_repeater'];
    case 'Redstone Comparator': return ['unpowered_comparator', 'powered_comparator'];
    case 'Redstone Torch': return ['redstone_torch', 'unlit_redstone_torch'];
    case 'Mushrooms': return ['brown_mushroom', 'red_mushroom'];
    case 'Structure Void': return [];
    case 'Lily Pad': return ['waterlily'];
    case 'Flowers': return ['yellow_flower', 'red_flower', 'double_plant'];
    case 'Dead Bush': return ['deadbush'];
    case 'Vines': return ['vine'];
    case 'Snow Block': return ['snow'];
    case 'Leaves': return ['leaves', 'leaves2'];
    case 'Mushroom Blocks': return ['brown_mushroom_block', 'red_mushroom_block'];
    case 'Wooden Stairs': return ['oak_stairs', 'spruce_stairs', 'birch_stairs', 'jungle_stairs', 'acacia_stairs', 'dark_oak_stairs', ];
    case 'Banners': return ['standing_banner', 'wall_banner'];
    case "Jack o'Lantern": return ['lit_pumpkin'];
    case 'Mob Head': return ['skull'];
    case 'Note Block': return ['noteblock'];
    case 'Infested Block': return ['monster_egg'];
    case 'Grass Block': return ['grass'];
    case 'Wet Sponge': return ['sponge'];
    case 'Coarse Dirt': return ['dirt'];
    case 'Hay Bale': return ['hay_block'];
    case 'Magma Block': return ['magma'];
    case 'Weighted Pressure Plates': return ['heavy_weighted_pressure_plate', 'light_weighted_pressure_plate'];
    case 'Wooden Pressure Plates': return ['oak_pressure_plate', 'acacia_pressure_plate', 'birch_pressure_plate', 'dark_oak_pressure_plate', 'jungle_pressure_plate', 'spruce_pressure_plate'];
    case 'Sea Lantern': return ['sealantern'];
    case 'Stained Glass Panes': return ['stained_glass_pane'];
    default:
        if (webName.startsWith('Block of '))
        {
            webName = webName.substr(9) + ' Block';
        }
        return [webName.replace(/ ([A-Z])/g, (_, chr:string)=>{
            return '_'+chr;
        }).toLowerCase()];
    }
}

export function wget(url:string):Promise<string>
{
    return new Promise(resolve=>{
        const req = https.get(url, res=>{
            res.setEncoding('utf8');
            let data = '';
            res.on('data',  chunk=>{
                data += chunk;
            });
            res.on('end', ()=>{
                resolve(data);
            });
        });
        req.on('error', (e)=>{
            console.log('problem with request: ' + e.message);
        });
        req.end();
    })
}
