
import { Recipe } from ".";
import ID from "@mcbe/identifier/id";

export const recipes = new Map([
    [ID.chest,[
        new Recipe([ID.crafting_table],[[ID.planks, 8],],[[ID.chest, 1],])
    ]],
    [ID.crafting_table,[
        new Recipe([],[[ID.planks, 4],],[[ID.crafting_table, 1],])
    ]],
    [ID.stick,[
        new Recipe([],[[ID.planks, 2],],[[ID.stick, 4],]),
        new Recipe([],[[ID.bamboo, 2],],[[ID.stick, 1],])
    ]],
    [ID.torch,[
        new Recipe([],[[ID.stick, 1],[ID.coal, 1],],[[ID.torch, 4],])
    ]],
    [ID.wooden_sword,[
        new Recipe([ID.crafting_table],[[ID.planks, 2],[ID.stick, 1],],[[ID.wooden_sword, 1],])
    ]],
    [ID.wooden_axe,[
        new Recipe([ID.crafting_table],[[ID.planks, 3],[ID.stick, 2],],[[ID.wooden_axe, 1],])
    ]],
    [ID.wooden_pickaxe,[
        new Recipe([ID.crafting_table],[[ID.planks, 3],[ID.stick, 2],],[[ID.wooden_pickaxe, 1],])
    ]],
    [ID.wooden_shovel,[
        new Recipe([ID.crafting_table],[[ID.planks, 1],[ID.stick, 2],],[[ID.wooden_shovel, 1],])
    ]],
    [ID.wooden_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.wooden_pressure_plate, 1],])
    ]],
    [ID.oak_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.oak_pressure_plate, 1],])
    ]],
    [ID.acacia_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.acacia_pressure_plate, 1],])
    ]],
    [ID.birch_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.birch_pressure_plate, 1],])
    ]],
    [ID.dark_oak_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.dark_oak_pressure_plate, 1],])
    ]],
    [ID.jungle_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.jungle_pressure_plate, 1],])
    ]],
    [ID.spruce_pressure_plate,[
        new Recipe([],[[ID.planks, 2],],[[ID.spruce_pressure_plate, 1],])
    ]],
    [ID.trapdoor,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.trapdoor, 2],])
    ]],
    [ID.acacia_trapdoor,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.acacia_trapdoor, 2],])
    ]],
    [ID.birch_trapdoor,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.birch_trapdoor, 2],])
    ]],
    [ID.dark_oak_trapdoor,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.dark_oak_trapdoor, 2],])
    ]],
    [ID.jungle_trapdoor,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.jungle_trapdoor, 2],])
    ]],
    [ID.spruce_trapdoor,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.spruce_trapdoor, 2],])
    ]],
    [ID.wooden_button,[
        new Recipe([],[[ID.planks, 1],],[[ID.wooden_button, 1],])
    ]],
    [ID.dark_oak_button,[
        new Recipe([],[[ID.planks, 1],],[[ID.dark_oak_button, 1],])
    ]],
    [ID.jungle_button,[
        new Recipe([],[[ID.planks, 1],],[[ID.jungle_button, 1],])
    ]],
    [ID.spruce_button,[
        new Recipe([],[[ID.planks, 1],],[[ID.spruce_button, 1],])
    ]],
    [ID.acacia_button,[
        new Recipe([],[[ID.planks, 1],],[[ID.acacia_button, 1],])
    ]],
    [ID.birch_button,[
        new Recipe([],[[ID.planks, 1],],[[ID.birch_button, 1],])
    ]],
    [ID.wooden_hoe,[
        new Recipe([ID.crafting_table],[[ID.planks, 2],[ID.stick, 2],],[[ID.wooden_hoe, 1],])
    ]],
    [ID.bowl,[
        new Recipe([ID.crafting_table],[[ID.planks, 3],],[[ID.bowl, 4],])
    ]],
    [ID.map,[
        new Recipe([ID.cartography_table],[[ID.emptymap, 1],],[[ID.map, 1],])
    ]],
    [ID.written_book,[
        new Recipe([],[[ID.writable_book, 1],],[[ID.written_book, 1],])
    ]],
    [ID.campfire,[
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.coal, 1],[ID.log, 3],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.log2, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_acacia_log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_birch_log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_dark_oak_log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_jungle_log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_oak_log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_spruce_log, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.log2, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_acacia_log, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_birch_log, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_dark_oak_log, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_jungle_log, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_oak_log, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.stripped_spruce_log, 3],[ID.coal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.wood, 3],[ID.charcoal, 1],],[[ID.campfire, 1],]),
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.wood, 3],[ID.coal, 1],],[[ID.campfire, 1],])
    ]],
    [ID.cake,[
        new Recipe([ID.crafting_table],[[ID.sugar, 2],[ID.wheat, 3],[ID.egg, 1],],[[ID.cake, 1],])
    ]],
    [ID.fletching_table,[
        new Recipe([ID.crafting_table],[[ID.flint, 2],[ID.planks, 4],],[[ID.fletching_table, 1],])
    ]],
    [ID.smithing_table,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 2],[ID.planks, 4],],[[ID.smithing_table, 1],])
    ]],
    [ID.dye,[
        new Recipe([],[[ID.bone_block, 1],],[[ID.dye, 9],]),
        new Recipe([],[[ID.lapis_block, 1],],[[ID.dye, 9],]),
        new Recipe([],[[ID.bone, 1],],[[ID.dye, 3],]),
        new Recipe([],[[ID.double_plant, 1],],[[ID.dye, 2],]),
        new Recipe([],[[ID.wither_rose, 1],],[[ID.dye, 1],]),
        new Recipe([],[[ID.red_flower, 1],],[[ID.dye, 1],]),
        new Recipe([ID.furnace],[[ID.cactus, 1],],[[ID.dye, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.lapis_ore, 1],],[[ID.dye, 1],]),
        new Recipe([ID.furnace],[[ID.sea_pickle, 1],],[[ID.dye, 1],]),
        new Recipe([],[[ID.beetroot, 1],],[[ID.dye, 1],]),
        new Recipe([],[[ID.yellow_flower, 1],],[[ID.dye, 1],])
    ]],
    [ID.bed,[
        new Recipe([ID.crafting_table],[[ID.wool, 3],[ID.planks, 3],],[[ID.bed, 1],])
    ]],
    [ID.double_stone_slab,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.cobblestone, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.stonebrick, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.smooth_stone, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.sandstone, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.quartz_block, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.red_nether_brick, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.brick_block, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.nether_brick, 1],],[[ID.double_stone_slab, 2],]),
        new Recipe([ID.crafting_table],[[ID.stone, 3],],[[ID.double_stone_slab, 6],]),
        new Recipe([ID.crafting_table],[[ID.cobblestone, 3],],[[ID.double_stone_slab, 6],]),
        new Recipe([ID.crafting_table],[[ID.stonebrick, 3],],[[ID.double_stone_slab, 6],]),
        new Recipe([ID.crafting_table],[[ID.smooth_stone, 3],],[[ID.double_stone_slab, 6],]),
        new Recipe([ID.crafting_table],[[ID.sandstone, 3],],[[ID.double_stone_slab, 6],]),
        new Recipe([ID.crafting_table],[[ID.quartz_block, 3],],[[ID.double_stone_slab, 6],]),
        new Recipe([ID.crafting_table],[[ID.red_nether_brick, 3],],[[ID.double_stone_slab, 6],])
    ]],
    [ID.double_stone_slab2,[
        new Recipe([ID.stonecutter_block],[[ID.mossy_cobblestone, 1],],[[ID.double_stone_slab2, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.prismarine, 1],],[[ID.double_stone_slab2, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.sandstone, 1],],[[ID.double_stone_slab2, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.red_sandstone, 1],],[[ID.double_stone_slab2, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.purpur_block, 1],],[[ID.double_stone_slab2, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.red_nether_brick, 1],],[[ID.double_stone_slab2, 2],]),
        new Recipe([ID.crafting_table],[[ID.mossy_cobblestone, 3],],[[ID.double_stone_slab2, 6],]),
        new Recipe([ID.crafting_table],[[ID.prismarine, 3],],[[ID.double_stone_slab2, 6],]),
        new Recipe([ID.crafting_table],[[ID.sandstone, 3],],[[ID.double_stone_slab2, 6],]),
        new Recipe([ID.crafting_table],[[ID.red_sandstone, 3],],[[ID.double_stone_slab2, 6],]),
        new Recipe([ID.crafting_table],[[ID.purpur_block, 3],],[[ID.double_stone_slab2, 6],])
    ]],
    [ID.double_stone_slab3,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.double_stone_slab3, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.red_sandstone, 1],],[[ID.double_stone_slab3, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.end_stone, 1],],[[ID.double_stone_slab3, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.end_bricks, 1],],[[ID.double_stone_slab3, 2],]),
        new Recipe([ID.crafting_table],[[ID.stone, 3],],[[ID.double_stone_slab3, 6],]),
        new Recipe([ID.crafting_table],[[ID.red_sandstone, 3],],[[ID.double_stone_slab3, 6],])
    ]],
    [ID.double_stone_slab4,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.double_stone_slab4, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.sandstone, 1],],[[ID.double_stone_slab4, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.red_sandstone, 1],],[[ID.double_stone_slab4, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.quartz_block, 1],],[[ID.double_stone_slab4, 2],]),
        new Recipe([ID.stonecutter_block],[[ID.stonebrick, 1],],[[ID.double_stone_slab4, 2],]),
        new Recipe([ID.crafting_table],[[ID.stone, 3],],[[ID.double_stone_slab4, 6],]),
        new Recipe([ID.crafting_table],[[ID.sandstone, 3],],[[ID.double_stone_slab4, 6],]),
        new Recipe([ID.crafting_table],[[ID.red_sandstone, 3],],[[ID.double_stone_slab4, 6],]),
        new Recipe([ID.crafting_table],[[ID.quartz_block, 3],],[[ID.double_stone_slab4, 6],]),
        new Recipe([ID.crafting_table],[[ID.stonebrick, 3],],[[ID.double_stone_slab4, 6],])
    ]],
    [ID.piston,[
        new Recipe([ID.crafting_table],[[ID.planks, 3],[ID.cobblestone, 4],[ID.iron_ingot, 1],[ID.redstone, 1],],[[ID.piston, 1],])
    ]],
    [ID.bookshelf,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.book, 3],],[[ID.bookshelf, 1],])
    ]],
    [ID.loom,[
        new Recipe([ID.crafting_table],[[ID.planks, 2],[ID.string, 2],],[[ID.loom, 1],])
    ]],
    [ID.muttoncooked,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.muttonraw, 1],],[[ID.muttoncooked, 1],])
    ]],
    [ID.powered_rail,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 6],[ID.stick, 1],[ID.redstone, 1],],[[ID.powered_rail, 1],])
    ]],
    [ID.stonecutter_block,[
        new Recipe([ID.crafting_table],[[ID.stone, 3],[ID.iron_ingot, 1],],[[ID.stonecutter_block, 1],])
    ]],
    [ID.noteblock,[
        new Recipe([ID.crafting_table],[[ID.redstone, 1],[ID.planks, 8],],[[ID.noteblock, 1],])
    ]],
    [ID.jukebox,[
        new Recipe([ID.crafting_table],[[ID.diamond, 1],[ID.planks, 8],],[[ID.jukebox, 1],])
    ]],
    [ID.itemframe,[
        new Recipe([ID.crafting_table],[[ID.stick, 8],[ID.leather, 1],],[[ID.itemframe, 1],])
    ]],
    [ID.painting,[
        new Recipe([ID.crafting_table],[[ID.stick, 8],[ID.wool, 1],],[[ID.painting, 1],])
    ]],
    [ID.splash_potion,[
        new Recipe([ID.brewing_stand],[[ID.potion, 1],],[[ID.splash_potion, 1],])
    ]],
    [ID.lingering_potion,[
        new Recipe([ID.brewing_stand],[[ID.splash_potion, 1],],[[ID.lingering_potion, 1],])
    ]],
    [ID.enchanted_book,[
        new Recipe([ID.enchanting_table],[[ID.book, 1],[ID.dye, 1],],[[ID.enchanted_book, 1],])
    ]],
    [ID.book,[
        new Recipe([ID.grindstone],[[ID.enchanted_book, 1],],[[ID.book, 1],]),
        new Recipe([],[[ID.paper, 3],[ID.leather, 1],],[[ID.book, 1],])
    ]],
    [ID.fireworks,[
        new Recipe([],[[ID.gunpowder, 1],[ID.paper, 1],],[[ID.fireworks, 3],])
    ]],
    [ID.fireworkscharge,[
        new Recipe([],[[ID.gunpowder, 1],[ID.dye, 1],],[[ID.fireworkscharge, 1],])
    ]],
    [ID.blaze_powder,[
        new Recipe([],[[ID.blaze_rod, 1],],[[ID.blaze_powder, 2],])
    ]],
    [ID.shulker_box,[
        new Recipe([],[[ID.undyed_shulker_box, 1],[ID.dye, 1],],[[ID.shulker_box, 1],])
    ]],
    [ID.daylight_detector,[
        new Recipe([ID.crafting_table],[[ID.glass, 3],[ID.quartz, 3],[ID.wooden_slab, 3],],[[ID.daylight_detector, 1],])
    ]],
    [ID.fireball,[
        new Recipe([],[[ID.blaze_powder, 1],[ID.coal, 1],[ID.gunpowder, 1],],[[ID.fireball, 3],])
    ]],
    [ID.tripwire_hook,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 1],[ID.stick, 1],[ID.planks, 1],],[[ID.tripwire_hook, 2],])
    ]],
    [ID.tnt,[
        new Recipe([],[[ID.sand, 4],[ID.gunpowder, 5],],[[ID.tnt, 1],])
    ]],
    [ID.suspicious_stew,[
        new Recipe([ID.crafting_table],[[ID.red_mushroom, 1],[ID.brown_mushroom, 1],[ID.bowl, 1],[ID.double_plant, 1],],[[ID.suspicious_stew, 1],]),
        new Recipe([],[[ID.brown_mushroom, 1],[ID.red_mushroom, 1],[ID.bowl, 1],[ID.red_flower, 1],],[[ID.suspicious_stew, 1],]),
        new Recipe([],[[ID.brown_mushroom, 1],[ID.red_mushroom, 1],[ID.bowl, 1],[ID.yellow_flower, 1],],[[ID.suspicious_stew, 1],]),
        new Recipe([],[[ID.brown_mushroom, 1],[ID.red_mushroom, 1],[ID.bowl, 1],[ID.wither_rose, 1],],[[ID.suspicious_stew, 1],])
    ]],
    [ID.sugar,[
        new Recipe([],[[ID.honey_bottle, 1],],[[ID.sugar, 3],[ID.glass_bottle, 1],]),
        new Recipe([],[[ID.reeds, 1],],[[ID.sugar, 1],])
    ]],
    [ID.beehive,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.honeycomb, 3],],[[ID.beehive, 1],])
    ]],
    [ID.honeycomb_block,[
        new Recipe([],[[ID.honeycomb, 4],],[[ID.honeycomb_block, 1],])
    ]],
    [ID.honey_block,[
        new Recipe([],[[ID.honey_bottle, 4],],[[ID.honey_block, 1],])
    ]],
    [ID.honey_bottle,[
        new Recipe([],[[ID.honey_block, 1],[ID.glass_bottle, 4],],[[ID.honey_bottle, 1],])
    ]],
    [ID.netherite_scrap,[
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.ancient_debris, 1],],[[ID.netherite_scrap, 1],])
    ]],
    [ID.netherite_ingot,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 4],[ID.netherite_scrap, 4],],[[ID.netherite_ingot, 1],])
    ]],
    [ID.netherite_block,[
        new Recipe([ID.crafting_table],[[ID.netherite_ingot, 9],],[[ID.netherite_block, 1],])
    ]],
    [ID.chain,[
        new Recipe([ID.crafting_table],[[ID.iron_nugget, 2],[ID.iron_ingot, 1],],[[ID.chain, 1],])
    ]],
    [ID.nether_brick,[
        new Recipe([],[[ID.double_stone_slab, 2],],[[ID.nether_brick, 1],]),
        new Recipe([],[[ID.netherbrick, 4],],[[ID.nether_brick, 1],])
    ]],
    [ID.lodestone,[
        new Recipe([],[[ID.netherite_ingot, 1],[ID.stonebrick, 8],],[[ID.lodestone, 1],])
    ]],
    [ID.lodestonecompass,[
        new Recipe([],[[ID.compass, 1],],[[ID.lodestonecompass, 1],])
    ]],
    [ID.gold,[
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.nether_gold_ore, 1],],[[ID.gold, 1],])
    ]],
    [ID.polished_basalt,[
        new Recipe([],[[ID.basalt, 4],],[[ID.polished_basalt, 4],])
    ]],
    [ID.polished_blackstone,[
        new Recipe([],[[ID.blackstone, 4],],[[ID.polished_blackstone, 4],])
    ]],
    [ID.polished_blackstone_bricks,[
        new Recipe([],[[ID.polished_blackstone, 4],],[[ID.polished_blackstone_bricks, 4],])
    ]],
    [ID.cracked_polished_blackstone_bricks,[
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.polished_blackstone_bricks, 1],],[[ID.cracked_polished_blackstone_bricks, 1],])
    ]],
    [ID.chiseled_polished_blackstone,[
        new Recipe([],[[ID.polished_blackstone_slab, 2],],[[ID.chiseled_polished_blackstone, 1],])
    ]],
    [ID.blackstone_slab,[
        new Recipe([ID.stonecutter_block],[[ID.blackstone, 1],],[[ID.blackstone_slab, 2],]),
        new Recipe([ID.crafting_table],[[ID.blackstone, 3],],[[ID.blackstone_slab, 6],])
    ]],
    [ID.polished_blackstone_slab,[
        new Recipe([ID.stonecutter_block],[[ID.polished_blackstone, 1],],[[ID.polished_blackstone_slab, 2],]),
        new Recipe([ID.crafting_table],[[ID.polished_blackstone, 3],],[[ID.polished_blackstone_slab, 6],])
    ]],
    [ID.polished_blackstone_brick_slab,[
        new Recipe([ID.stonecutter_block],[[ID.polished_blackstone_brick, 1],],[[ID.polished_blackstone_brick_slab, 2],]),
        new Recipe([ID.crafting_table],[[ID.polished_blackstone_brick, 3],],[[ID.polished_blackstone_brick_slab, 6],])
    ]],
    [ID.quartz_bricks,[
        new Recipe([],[[ID.quartz_block, 4],],[[ID.quartz_bricks, 4],])
    ]],
    [ID.respawn_anchor,[
        new Recipe([],[[ID.glowstone, 3],[ID.crying_obsidian, 6],],[[ID.respawn_anchor, 1],])
    ]],
    [ID.soul_campfire,[
        new Recipe([],[[ID.wood, 3],[ID.stick, 3],[ID.soul_sand, 1],],[[ID.soul_campfire, 1],]),
        new Recipe([],[[ID.wood, 3],[ID.stick, 3],[ID.soul_soil, 1],],[[ID.soul_campfire, 1],])
    ]],
    [ID.soul_lantern,[
        new Recipe([],[[ID.iron_ingot, 8],[ID.soul_torch, 1],],[[ID.soul_lantern, 1],])
    ]],
    [ID.soul_torch,[
        new Recipe([],[[ID.coal, 1],[ID.stick, 1],[ID.soul_sand, 1],],[[ID.soul_torch, 1],])
    ]],
    [ID.target,[
        new Recipe([],[[ID.hay_block, 1],[ID.redstone, 4],],[[ID.target, 1],])
    ]],
    [ID.netherite_helmet,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_helmet, 1],],[[ID.netherite_helmet, 1],])
    ]],
    [ID.netherite_chestplate,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_chestplate, 1],],[[ID.netherite_chestplate, 1],])
    ]],
    [ID.netherite_leggings,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_leggings, 1],],[[ID.netherite_leggings, 1],])
    ]],
    [ID.netherite_boots,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_boots, 1],],[[ID.netherite_boots, 1],])
    ]],
    [ID.netherite_axe,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_axe, 1],],[[ID.netherite_axe, 1],])
    ]],
    [ID.netherite_hoe,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_hoe, 1],],[[ID.netherite_hoe, 1],])
    ]],
    [ID.netherite_pickaxe,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_pickaxe, 1],],[[ID.netherite_pickaxe, 1],])
    ]],
    [ID.netherite_shovel,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_shovel, 1],],[[ID.netherite_shovel, 1],])
    ]],
    [ID.netherite_sword,[
        new Recipe([ID.smithing_table],[[ID.netherite_ingot, 1],[ID.diamond_sword, 1],],[[ID.netherite_sword, 1],])
    ]],
    [ID.warped_fungus_on_a_stick,[
        new Recipe([],[[ID.fishing_rod, 1],[ID.warped_fungus, 1],],[[ID.warped_fungus_on_a_stick, 1],])
    ]],
    [ID.boat,[
        new Recipe([ID.crafting_table],[[ID.wooden_shovel, 1],[ID.planks, 5],],[[ID.boat, 1],])
    ]],
    [ID.acacia_door,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.acacia_door, 3],])
    ]],
    [ID.fence,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.planks, 4],],[[ID.fence, 3],])
    ]],
    [ID.acacia_fence_gate,[
        new Recipe([ID.crafting_table],[[ID.stick, 4],[ID.planks, 2],],[[ID.acacia_fence_gate, 1],])
    ]],
    [ID.planks,[
        new Recipe([],[[ID.log2, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.stripped_acacia_log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.stripped_birch_log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.stripped_dark_oak_log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.stripped_jungle_log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.stripped_oak_log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.stripped_spruce_log, 1],],[[ID.planks, 4],]),
        new Recipe([],[[ID.wood, 1],],[[ID.planks, 4],])
    ]],
    [ID.acacia_stairs,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.acacia_stairs, 4],])
    ]],
    [ID.wood,[
        new Recipe([],[[ID.log2, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.stripped_acacia_log, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.log, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.stripped_birch_log, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.stripped_dark_oak_log, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.stripped_jungle_log, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.stripped_oak_log, 4],],[[ID.wood, 3],]),
        new Recipe([],[[ID.stripped_spruce_log, 4],],[[ID.wood, 3],])
    ]],
    [ID.wooden_slab,[
        new Recipe([ID.crafting_table],[[ID.planks, 3],],[[ID.wooden_slab, 6],])
    ]],
    [ID.activator_rail,[
        new Recipe([ID.crafting_table],[[ID.redstone_torch, 1],[ID.stick, 2],[ID.iron_ingot, 6],],[[ID.activator_rail, 6],])
    ]],
    [ID.stone,[
        new Recipe([],[[ID.cobblestone, 1],],[[ID.stone, 1],]),
        new Recipe([],[[ID.quartz, 2],[ID.cobblestone, 2],],[[ID.stone, 2],])
    ]],
    [ID.andesite_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.andesite_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.andesite_stairs, 4],])
    ]],
    [ID.cobblestone_wall,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.brick_block, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.cobblestone, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.end_stone, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.end_bricks, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.mossy_cobblestone, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.stonebrick, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.nether_brick, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.prismarine, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.red_nether_brick, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.red_sandstone, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.sandstone, 1],],[[ID.cobblestone_wall, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.brick_block, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.cobblestone, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.end_bricks, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.mossy_cobblestone, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.stonebrick, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.nether_brick, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.prismarine, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.red_nether_brick, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.red_sandstone, 6],],[[ID.cobblestone_wall, 6],]),
        new Recipe([ID.crafting_table],[[ID.sandstone, 6],],[[ID.cobblestone_wall, 6],])
    ]],
    [ID.anvil,[
        new Recipe([ID.crafting_table],[[ID.iron_block, 3],[ID.iron_ingot, 4],],[[ID.anvil, 1],])
    ]],
    [ID.armor_stand,[
        new Recipe([ID.crafting_table],[[ID.stick, 6],[ID.double_stone_slab, 1],],[[ID.armor_stand, 1],])
    ]],
    [ID.arrow,[
        new Recipe([ID.crafting_table],[[ID.stick, 1],[ID.flint, 1],[ID.feather, 1],],[[ID.arrow, 4],])
    ]],
    [ID.banner_pattern,[
        new Recipe([],[[ID.paper, 1],[ID.brick_block, 1],],[[ID.banner_pattern, 1],]),
        new Recipe([],[[ID.paper, 1],[ID.skull, 1],],[[ID.banner_pattern, 1],]),
        new Recipe([],[[ID.paper, 1],[ID.red_flower, 1],],[[ID.banner_pattern, 1],]),
        new Recipe([],[[ID.paper, 1],[ID.appleenchanted, 1],],[[ID.banner_pattern, 1],]),
        new Recipe([],[[ID.paper, 1],[ID.vine, 1],],[[ID.banner_pattern, 1],])
    ]],
    [ID.barrel,[
        new Recipe([ID.crafting_table],[[ID.stick, 6],[ID.wooden_slab, 2],],[[ID.barrel, 1],])
    ]],
    [ID.beacon,[
        new Recipe([ID.crafting_table],[[ID.netherstar, 1],[ID.glass, 5],[ID.obsidian, 3],],[[ID.beacon, 1],])
    ]],
    [ID.beetroot_soup,[
        new Recipe([],[[ID.bowl, 1],[ID.beetroot, 6],],[[ID.beetroot_soup, 1],])
    ]],
    [ID.birch_door,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.birch_door, 3],])
    ]],
    [ID.birch_fence_gate,[
        new Recipe([ID.crafting_table],[[ID.stick, 4],[ID.planks, 2],],[[ID.birch_fence_gate, 1],])
    ]],
    [ID.birch_stairs,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.birch_stairs, 4],])
    ]],
    [ID.banner,[
        new Recipe([ID.crafting_table],[[ID.wool, 6],[ID.stick, 1],],[[ID.banner, 1],])
    ]],
    [ID.carpet,[
        new Recipe([],[[ID.wool, 2],],[[ID.carpet, 3],])
    ]],
    [ID.concrete_powder,[
        new Recipe([],[[ID.dye, 1],[ID.sand, 4],[ID.gravel, 4],],[[ID.concrete_powder, 8],])
    ]],
    [ID.stained_glass,[
        new Recipe([ID.crafting_table],[[ID.glass, 8],[ID.dye, 1],],[[ID.stained_glass, 8],])
    ]],
    [ID.stained_glass_pane,[
        new Recipe([ID.crafting_table],[[ID.stained_glass, 6],],[[ID.stained_glass_pane, 16],]),
        new Recipe([ID.crafting_table],[[ID.glass_pane, 8],[ID.dye, 1],],[[ID.stained_glass_pane, 8],])
    ]],
    [ID.stained_hardened_clay,[
        new Recipe([ID.crafting_table],[[ID.hardened_clay, 8],[ID.dye, 1],],[[ID.stained_hardened_clay, 8],])
    ]],
    [ID.blast_furnace,[
        new Recipe([ID.crafting_table],[[ID.smooth_stone, 3],[ID.iron_ingot, 5],[ID.furnace, 1],],[[ID.blast_furnace, 1],])
    ]],
    [ID.blue_ice,[
        new Recipe([ID.crafting_table],[[ID.packed_ice, 9],],[[ID.blue_ice, 1],])
    ]],
    [ID.bone_block,[
        new Recipe([ID.crafting_table],[[ID.dye, 9],],[[ID.bone_block, 1],])
    ]],
    [ID.bow,[
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.string, 3],],[[ID.bow, 1],])
    ]],
    [ID.bread,[
        new Recipe([ID.crafting_table],[[ID.wheat, 3],],[[ID.bread, 1],])
    ]],
    [ID.brewing_stand,[
        new Recipe([ID.crafting_table],[[ID.blaze_rod, 1],[ID.cobblestone, 3],],[[ID.brewing_stand, 1],])
    ]],
    [ID.brick_block,[
        new Recipe([],[[ID.brick, 4],],[[ID.brick_block, 1],])
    ]],
    [ID.brick_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.brick_block, 1],],[[ID.brick_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.brick_block, 6],],[[ID.brick_stairs, 4],])
    ]],
    [ID.bucket,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 3],],[[ID.bucket, 1],])
    ]],
    [ID.carrotonastick,[
        new Recipe([],[[ID.fishing_rod, 1],[ID.carrot, 1],],[[ID.carrotonastick, 1],])
    ]],
    [ID.cartography_table,[
        new Recipe([ID.crafting_table],[[ID.paper, 2],[ID.planks, 4],],[[ID.cartography_table, 1],])
    ]],
    [ID.emptymap,[
        new Recipe([ID.cartography_table],[[ID.paper, 1],],[[ID.emptymap, 1],]),
        new Recipe([ID.crafting_table],[[ID.paper, 8],[ID.compass, 1],],[[ID.emptymap, 1],]),
        new Recipe([ID.crafting_table],[[ID.paper, 9],],[[ID.emptymap, 1],])
    ]],
    [ID.cauldron,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 7],],[[ID.cauldron, 1],])
    ]],
    [ID.chest_minecart,[
        new Recipe([],[[ID.chest, 1],[ID.minecart, 1],],[[ID.chest_minecart, 1],])
    ]],
    [ID.clay,[
        new Recipe([],[[ID.clay_ball, 4],],[[ID.clay, 1],])
    ]],
    [ID.clock,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 4],[ID.redstone, 1],],[[ID.clock, 1],])
    ]],
    [ID.coal,[
        new Recipe([],[[ID.coal_block, 1],],[[ID.coal, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.coal_ore, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.log2, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.stripped_acacia_log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.stripped_birch_log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.stripped_dark_oak_log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.stripped_jungle_log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.stripped_oak_log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.stripped_spruce_log, 1],],[[ID.coal, 1],]),
        new Recipe([ID.furnace],[[ID.wood, 1],],[[ID.coal, 1],])
    ]],
    [ID.coal_block,[
        new Recipe([ID.crafting_table],[[ID.coal, 9],],[[ID.coal_block, 1],])
    ]],
    [ID.dirt,[
        new Recipe([],[[ID.gravel, 2],],[[ID.dirt, 2],])
    ]],
    [ID.stone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.cobblestone, 1],],[[ID.stone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.cobblestone, 6],],[[ID.stone_stairs, 4],])
    ]],
    [ID.string,[
        new Recipe([],[[ID.web, 1],],[[ID.string, 9],])
    ]],
    [ID.comparator,[
        new Recipe([ID.crafting_table],[[ID.redstone_torch, 3],[ID.quartz, 1],[ID.stone, 3],],[[ID.comparator, 1],])
    ]],
    [ID.compass,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 4],[ID.redstone, 1],],[[ID.compass, 1],])
    ]],
    [ID.composter,[
        new Recipe([ID.crafting_table],[[ID.wooden_slab, 7],],[[ID.composter, 1],])
    ]],
    [ID.conduit,[
        new Recipe([ID.crafting_table],[[ID.nautilus_shell, 8],[ID.heart_of_the_sea, 1],],[[ID.conduit, 1],])
    ]],
    [ID.cookie,[
        new Recipe([ID.crafting_table],[[ID.wheat, 2],[ID.dye, 1],],[[ID.cookie, 8],])
    ]],
    [ID.crossbow,[
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.string, 2],[ID.iron_ingot, 1],[ID.tripwire_hook, 1],],[[ID.crossbow, 1],])
    ]],
    [ID.dark_oak_door,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.dark_oak_door, 3],])
    ]],
    [ID.dark_oak_fence_gate,[
        new Recipe([ID.crafting_table],[[ID.stick, 4],[ID.planks, 2],],[[ID.dark_oak_fence_gate, 1],])
    ]],
    [ID.dark_oak_stairs,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.dark_oak_stairs, 4],])
    ]],
    [ID.prismarine,[
        new Recipe([],[[ID.prismarine_shard, 4],],[[ID.prismarine, 1],])
    ]],
    [ID.detector_rail,[
        new Recipe([ID.crafting_table],[[ID.redstone, 1],[ID.stone_pressure_plate, 1],[ID.iron_ingot, 6],],[[ID.detector_rail, 6],])
    ]],
    [ID.diamond,[
        new Recipe([],[[ID.diamond_block, 1],],[[ID.diamond, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.diamond_ore, 1],],[[ID.diamond, 1],])
    ]],
    [ID.diamond_axe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.diamond, 3],],[[ID.diamond_axe, 1],])
    ]],
    [ID.diamond_block,[
        new Recipe([ID.crafting_table],[[ID.diamond, 9],],[[ID.diamond_block, 1],])
    ]],
    [ID.diamond_boots,[
        new Recipe([ID.crafting_table],[[ID.diamond, 4],],[[ID.diamond_boots, 1],])
    ]],
    [ID.diamond_chestplate,[
        new Recipe([ID.crafting_table],[[ID.diamond, 8],],[[ID.diamond_chestplate, 1],])
    ]],
    [ID.diamond_helmet,[
        new Recipe([ID.crafting_table],[[ID.diamond, 5],],[[ID.diamond_helmet, 1],])
    ]],
    [ID.diamond_hoe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.diamond, 2],],[[ID.diamond_hoe, 1],])
    ]],
    [ID.diamond_leggings,[
        new Recipe([ID.crafting_table],[[ID.diamond, 7],],[[ID.diamond_leggings, 1],])
    ]],
    [ID.diamond_pickaxe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.diamond, 3],],[[ID.diamond_pickaxe, 1],])
    ]],
    [ID.diamond_shovel,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.diamond, 1],],[[ID.diamond_shovel, 1],])
    ]],
    [ID.diamond_sword,[
        new Recipe([ID.crafting_table],[[ID.stick, 1],[ID.diamond, 2],],[[ID.diamond_sword, 1],])
    ]],
    [ID.diorite_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.diorite_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.diorite_stairs, 4],])
    ]],
    [ID.dispenser,[
        new Recipe([ID.crafting_table],[[ID.redstone, 1],[ID.cobblestone, 7],[ID.bow, 1],],[[ID.dispenser, 1],])
    ]],
    [ID.dried_kelp,[
        new Recipe([],[[ID.dried_kelp_block, 1],],[[ID.dried_kelp, 9],]),
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.kelp, 1],],[[ID.dried_kelp, 1],])
    ]],
    [ID.dried_kelp_block,[
        new Recipe([ID.crafting_table],[[ID.dried_kelp, 9],],[[ID.dried_kelp_block, 1],])
    ]],
    [ID.dropper,[
        new Recipe([ID.crafting_table],[[ID.redstone, 1],[ID.cobblestone, 7],],[[ID.dropper, 1],])
    ]],
    [ID.emerald,[
        new Recipe([],[[ID.emerald_block, 1],],[[ID.emerald, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.emerald_ore, 1],],[[ID.emerald, 1],])
    ]],
    [ID.emerald_block,[
        new Recipe([ID.crafting_table],[[ID.emerald, 9],],[[ID.emerald_block, 1],])
    ]],
    [ID.enchanting_table,[
        new Recipe([ID.crafting_table],[[ID.book, 1],[ID.obsidian, 4],[ID.diamond, 2],],[[ID.enchanting_table, 1],])
    ]],
    [ID.ender_chest,[
        new Recipe([ID.crafting_table],[[ID.obsidian, 8],[ID.ender_eye, 1],],[[ID.ender_chest, 1],])
    ]],
    [ID.ender_eye,[
        new Recipe([],[[ID.ender_pearl, 1],[ID.blaze_powder, 1],],[[ID.ender_eye, 1],])
    ]],
    [ID.end_bricks,[
        new Recipe([ID.stonecutter_block],[[ID.end_stone, 1],],[[ID.end_bricks, 1],]),
        new Recipe([],[[ID.end_stone, 4],],[[ID.end_bricks, 4],])
    ]],
    [ID.end_brick_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.end_stone, 1],],[[ID.end_brick_stairs, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.end_bricks, 1],],[[ID.end_brick_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.end_bricks, 6],],[[ID.end_brick_stairs, 4],])
    ]],
    [ID.end_crystal,[
        new Recipe([ID.crafting_table],[[ID.ghast_tear, 1],[ID.ender_eye, 1],[ID.glass, 7],],[[ID.end_crystal, 1],])
    ]],
    [ID.end_rod,[
        new Recipe([],[[ID.chorus_fruit_popped, 1],[ID.blaze_rod, 1],],[[ID.end_rod, 4],])
    ]],
    [ID.fence_gate,[
        new Recipe([ID.crafting_table],[[ID.stick, 4],[ID.planks, 2],],[[ID.fence_gate, 1],])
    ]],
    [ID.fermented_spider_eye,[
        new Recipe([],[[ID.spider_eye, 1],[ID.brown_mushroom, 1],[ID.sugar, 1],],[[ID.fermented_spider_eye, 1],])
    ]],
    [ID.fishing_rod,[
        new Recipe([ID.crafting_table],[[ID.stick, 3],[ID.string, 2],],[[ID.fishing_rod, 1],])
    ]],
    [ID.flint_and_steel,[
        new Recipe([],[[ID.iron_ingot, 1],[ID.flint, 1],],[[ID.flint_and_steel, 1],])
    ]],
    [ID.flower_pot,[
        new Recipe([ID.crafting_table],[[ID.brick, 3],],[[ID.flower_pot, 1],])
    ]],
    [ID.furnace,[
        new Recipe([ID.crafting_table],[[ID.cobblestone, 8],],[[ID.furnace, 1],])
    ]],
    [ID.cooked_beef,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.beef, 1],],[[ID.cooked_beef, 1],])
    ]],
    [ID.iron_nugget,[
        new Recipe([],[[ID.iron_ingot, 1],],[[ID.iron_nugget, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.chainmail_boots, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.chainmail_chestplate, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.chainmail_helmet, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.chainmail_leggings, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.horsearmoriron, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_axe, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_boots, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_chestplate, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_helmet, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_hoe, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_leggings, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_pickaxe, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_shovel, 1],],[[ID.iron_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_sword, 1],],[[ID.iron_nugget, 1],])
    ]],
    [ID.cooked_chicken,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.chicken, 1],],[[ID.cooked_chicken, 1],])
    ]],
    [ID.chorus_fruit_popped,[
        new Recipe([ID.furnace],[[ID.chorus_fruit, 1],],[[ID.chorus_fruit_popped, 1],])
    ]],
    [ID.hardened_clay,[
        new Recipe([ID.furnace],[[ID.clay, 1],],[[ID.hardened_clay, 1],])
    ]],
    [ID.brick,[
        new Recipe([ID.furnace],[[ID.clay_ball, 1],],[[ID.brick, 1],])
    ]],
    [ID.cooked_fish,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.fish, 1],],[[ID.cooked_fish, 1],])
    ]],
    [ID.gold_nugget,[
        new Recipe([],[[ID.gold_ingot, 1],],[[ID.gold_nugget, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_axe, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_boots, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_chestplate, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_helmet, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_hoe, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_leggings, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_pickaxe, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_shovel, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.golden_sword, 1],],[[ID.gold_nugget, 1],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.horsearmorgold, 1],],[[ID.gold_nugget, 1],])
    ]],
    [ID.gold_ingot,[
        new Recipe([],[[ID.gold_block, 1],],[[ID.gold_ingot, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.gold_ore, 1],],[[ID.gold_ingot, 1],]),
        new Recipe([ID.crafting_table],[[ID.gold_nugget, 9],],[[ID.gold_ingot, 1],])
    ]],
    [ID.iron_ingot,[
        new Recipe([],[[ID.iron_block, 1],],[[ID.iron_ingot, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.iron_ore, 1],],[[ID.iron_ingot, 1],]),
        new Recipe([ID.crafting_table],[[ID.iron_nugget, 9],],[[ID.iron_ingot, 1],])
    ]],
    [ID.netherbrick,[
        new Recipe([ID.furnace],[[ID.netherrack, 1],],[[ID.netherbrick, 1],])
    ]],
    [ID.cooked_porkchop,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.porkchop, 1],],[[ID.cooked_porkchop, 1],])
    ]],
    [ID.baked_potato,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.potato, 1],],[[ID.baked_potato, 1],])
    ]],
    [ID.quartz,[
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.quartz_ore, 1],],[[ID.quartz, 1],])
    ]],
    [ID.cooked_rabbit,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.rabbit, 1],],[[ID.cooked_rabbit, 1],])
    ]],
    [ID.redstone,[
        new Recipe([],[[ID.redstone_block, 1],],[[ID.redstone, 9],]),
        new Recipe([ID.furnace, ID.blast_furnace],[[ID.redstone_ore, 1],],[[ID.redstone, 1],])
    ]],
    [ID.cooked_salmon,[
        new Recipe([ID.furnace, ID.smoker, ID.campfire],[[ID.salmon, 1],],[[ID.cooked_salmon, 1],])
    ]],
    [ID.glass,[
        new Recipe([ID.furnace],[[ID.sand, 1],],[[ID.glass, 1],])
    ]],
    [ID.white_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.white_glazed_terracotta, 1],])
    ]],
    [ID.orange_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.orange_glazed_terracotta, 1],])
    ]],
    [ID.purple_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.purple_glazed_terracotta, 1],])
    ]],
    [ID.blue_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.blue_glazed_terracotta, 1],])
    ]],
    [ID.brown_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.brown_glazed_terracotta, 1],])
    ]],
    [ID.green_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.green_glazed_terracotta, 1],])
    ]],
    [ID.red_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.red_glazed_terracotta, 1],])
    ]],
    [ID.black_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.black_glazed_terracotta, 1],])
    ]],
    [ID.magenta_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.magenta_glazed_terracotta, 1],])
    ]],
    [ID.light_blue_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.light_blue_glazed_terracotta, 1],])
    ]],
    [ID.yellow_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.yellow_glazed_terracotta, 1],])
    ]],
    [ID.lime_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.lime_glazed_terracotta, 1],])
    ]],
    [ID.pink_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.pink_glazed_terracotta, 1],])
    ]],
    [ID.gray_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.gray_glazed_terracotta, 1],])
    ]],
    [ID.silver_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.silver_glazed_terracotta, 1],])
    ]],
    [ID.cyan_glazed_terracotta,[
        new Recipe([ID.furnace],[[ID.stained_hardened_clay, 1],],[[ID.cyan_glazed_terracotta, 1],])
    ]],
    [ID.smooth_stone,[
        new Recipe([ID.furnace],[[ID.stone, 1],],[[ID.smooth_stone, 1],])
    ]],
    [ID.glass_bottle,[
        new Recipe([ID.crafting_table],[[ID.glass, 3],],[[ID.glass_bottle, 3],])
    ]],
    [ID.glass_pane,[
        new Recipe([ID.crafting_table],[[ID.glass, 6],],[[ID.glass_pane, 16],])
    ]],
    [ID.glowstone,[
        new Recipe([],[[ID.glowstone_dust, 4],],[[ID.glowstone, 1],])
    ]],
    [ID.golden_apple,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 8],[ID.apple, 1],],[[ID.golden_apple, 1],])
    ]],
    [ID.golden_axe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.gold_ingot, 3],],[[ID.golden_axe, 1],])
    ]],
    [ID.golden_boots,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 4],],[[ID.golden_boots, 1],])
    ]],
    [ID.golden_carrot,[
        new Recipe([ID.crafting_table],[[ID.gold_nugget, 8],[ID.carrot, 1],],[[ID.golden_carrot, 1],])
    ]],
    [ID.golden_chestplate,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 8],],[[ID.golden_chestplate, 1],])
    ]],
    [ID.golden_helmet,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 5],],[[ID.golden_helmet, 1],])
    ]],
    [ID.golden_hoe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.gold_ingot, 2],],[[ID.golden_hoe, 1],])
    ]],
    [ID.golden_leggings,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 7],],[[ID.golden_leggings, 1],])
    ]],
    [ID.golden_pickaxe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.gold_ingot, 3],],[[ID.golden_pickaxe, 1],])
    ]],
    [ID.golden_rail,[
        new Recipe([ID.crafting_table],[[ID.redstone, 1],[ID.stick, 1],[ID.gold_ingot, 6],],[[ID.golden_rail, 6],])
    ]],
    [ID.golden_shovel,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.gold_ingot, 1],],[[ID.golden_shovel, 1],])
    ]],
    [ID.golden_sword,[
        new Recipe([ID.crafting_table],[[ID.stick, 1],[ID.gold_ingot, 2],],[[ID.golden_sword, 1],])
    ]],
    [ID.gold_block,[
        new Recipe([ID.crafting_table],[[ID.gold_ingot, 9],],[[ID.gold_block, 1],])
    ]],
    [ID.granite_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.granite_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.granite_stairs, 4],])
    ]],
    [ID.grindstone,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.planks, 2],[ID.double_stone_slab4, 1],],[[ID.grindstone, 1],])
    ]],
    [ID.hay_block,[
        new Recipe([ID.crafting_table],[[ID.wheat, 9],],[[ID.hay_block, 1],])
    ]],
    [ID.heavy_weighted_pressure_plate,[
        new Recipe([],[[ID.iron_ingot, 2],],[[ID.heavy_weighted_pressure_plate, 1],])
    ]],
    [ID.hopper,[
        new Recipe([ID.crafting_table],[[ID.chest, 1],[ID.iron_ingot, 5],],[[ID.hopper, 1],])
    ]],
    [ID.hopper_minecart,[
        new Recipe([],[[ID.hopper, 1],[ID.minecart, 1],],[[ID.hopper_minecart, 1],])
    ]],
    [ID.iron_axe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.iron_ingot, 3],],[[ID.iron_axe, 1],])
    ]],
    [ID.iron_bars,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 6],],[[ID.iron_bars, 16],])
    ]],
    [ID.iron_block,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 9],],[[ID.iron_block, 1],])
    ]],
    [ID.iron_boots,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 4],],[[ID.iron_boots, 1],])
    ]],
    [ID.iron_chestplate,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 8],],[[ID.iron_chestplate, 1],])
    ]],
    [ID.iron_door,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 6],],[[ID.iron_door, 3],])
    ]],
    [ID.iron_helmet,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 5],],[[ID.iron_helmet, 1],])
    ]],
    [ID.iron_hoe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.iron_ingot, 2],],[[ID.iron_hoe, 1],])
    ]],
    [ID.iron_leggings,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 7],],[[ID.iron_leggings, 1],])
    ]],
    [ID.iron_pickaxe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.iron_ingot, 3],],[[ID.iron_pickaxe, 1],])
    ]],
    [ID.iron_shovel,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.iron_ingot, 1],],[[ID.iron_shovel, 1],])
    ]],
    [ID.iron_sword,[
        new Recipe([ID.crafting_table],[[ID.stick, 1],[ID.iron_ingot, 2],],[[ID.iron_sword, 1],])
    ]],
    [ID.iron_trapdoor,[
        new Recipe([],[[ID.iron_ingot, 4],],[[ID.iron_trapdoor, 1],])
    ]],
    [ID.frame,[
        new Recipe([ID.crafting_table],[[ID.stick, 8],[ID.leather, 1],],[[ID.frame, 1],])
    ]],
    [ID.jungle_door,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.jungle_door, 3],])
    ]],
    [ID.jungle_fence_gate,[
        new Recipe([ID.crafting_table],[[ID.stick, 4],[ID.planks, 2],],[[ID.jungle_fence_gate, 1],])
    ]],
    [ID.jungle_stairs,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.jungle_stairs, 4],])
    ]],
    [ID.ladder,[
        new Recipe([ID.crafting_table],[[ID.stick, 7],],[[ID.ladder, 3],])
    ]],
    [ID.lantern,[
        new Recipe([ID.crafting_table],[[ID.iron_nugget, 8],[ID.torch, 1],],[[ID.lantern, 1],])
    ]],
    [ID.lapis_block,[
        new Recipe([ID.crafting_table],[[ID.dye, 9],],[[ID.lapis_block, 1],])
    ]],
    [ID.lead,[
        new Recipe([ID.crafting_table],[[ID.string, 4],[ID.slime_ball, 1],],[[ID.lead, 2],])
    ]],
    [ID.leather,[
        new Recipe([],[[ID.rabbit_hide, 4],],[[ID.leather, 1],])
    ]],
    [ID.leather_boots,[
        new Recipe([ID.crafting_table],[[ID.leather, 4],],[[ID.leather_boots, 1],])
    ]],
    [ID.leather_chestplate,[
        new Recipe([ID.crafting_table],[[ID.leather, 8],],[[ID.leather_chestplate, 1],])
    ]],
    [ID.leather_helmet,[
        new Recipe([ID.crafting_table],[[ID.leather, 5],],[[ID.leather_helmet, 1],])
    ]],
    [ID.horsearmorleather,[
        new Recipe([ID.crafting_table],[[ID.leather, 7],],[[ID.horsearmorleather, 1],])
    ]],
    [ID.leather_leggings,[
        new Recipe([ID.crafting_table],[[ID.leather, 7],],[[ID.leather_leggings, 1],])
    ]],
    [ID.lectern,[
        new Recipe([ID.crafting_table],[[ID.wooden_slab, 4],[ID.bookshelf, 1],],[[ID.lectern, 1],])
    ]],
    [ID.lever,[
        new Recipe([],[[ID.cobblestone, 1],[ID.stick, 1],],[[ID.lever, 1],])
    ]],
    [ID.light_weighted_pressure_plate,[
        new Recipe([],[[ID.gold_ingot, 2],],[[ID.light_weighted_pressure_plate, 1],])
    ]],
    [ID.lit_pumpkin,[
        new Recipe([],[[ID.carved_pumpkin, 1],[ID.torch, 1],],[[ID.lit_pumpkin, 1],])
    ]],
    [ID.magma,[
        new Recipe([],[[ID.magma_cream, 4],],[[ID.magma, 1],])
    ]],
    [ID.magma_cream,[
        new Recipe([],[[ID.blaze_powder, 1],[ID.slime_ball, 1],],[[ID.magma_cream, 1],])
    ]],
    [ID.melon_block,[
        new Recipe([ID.crafting_table],[[ID.melon, 9],],[[ID.melon_block, 1],])
    ]],
    [ID.melon_seeds,[
        new Recipe([],[[ID.melon, 1],],[[ID.melon_seeds, 1],])
    ]],
    [ID.minecart,[
        new Recipe([ID.crafting_table],[[ID.iron_ingot, 5],],[[ID.minecart, 1],])
    ]],
    [ID.mossy_cobblestone,[
        new Recipe([],[[ID.cobblestone, 1],[ID.vine, 1],],[[ID.mossy_cobblestone, 1],])
    ]],
    [ID.mossy_cobblestone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.mossy_cobblestone, 1],],[[ID.mossy_cobblestone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.mossy_cobblestone, 6],],[[ID.mossy_cobblestone_stairs, 4],])
    ]],
    [ID.mossy_stone_brick_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stonebrick, 1],],[[ID.mossy_stone_brick_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stonebrick, 6],],[[ID.mossy_stone_brick_stairs, 4],])
    ]],
    [ID.mushroom_stew,[
        new Recipe([],[[ID.brown_mushroom, 1],[ID.red_mushroom, 1],[ID.bowl, 1],],[[ID.mushroom_stew, 1],])
    ]],
    [ID.nether_brick_fence,[
        new Recipe([ID.crafting_table],[[ID.netherbrick, 2],[ID.nether_brick, 4],],[[ID.nether_brick_fence, 6],])
    ]],
    [ID.nether_brick_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.nether_brick, 1],],[[ID.nether_brick_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.nether_brick, 6],],[[ID.nether_brick_stairs, 4],])
    ]],
    [ID.nether_wart_block,[
        new Recipe([ID.crafting_table],[[ID.nether_wart, 9],],[[ID.nether_wart_block, 1],])
    ]],
    [ID.oak_stairs,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.oak_stairs, 4],])
    ]],
    [ID.observer,[
        new Recipe([ID.crafting_table],[[ID.quartz, 1],[ID.redstone, 2],[ID.cobblestone, 6],],[[ID.observer, 1],])
    ]],
    [ID.packed_ice,[
        new Recipe([ID.crafting_table],[[ID.ice, 9],],[[ID.packed_ice, 1],])
    ]],
    [ID.paper,[
        new Recipe([ID.crafting_table],[[ID.reeds, 3],],[[ID.paper, 3],])
    ]],
    [ID.polished_andesite_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.polished_andesite_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.polished_andesite_stairs, 4],])
    ]],
    [ID.polished_diorite_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.polished_diorite_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.polished_diorite_stairs, 4],])
    ]],
    [ID.polished_granite_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.polished_granite_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.polished_granite_stairs, 4],])
    ]],
    [ID.prismarine_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.prismarine, 1],],[[ID.prismarine_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.prismarine, 6],],[[ID.prismarine_stairs, 4],])
    ]],
    [ID.prismarine_bricks_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.prismarine, 1],],[[ID.prismarine_bricks_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.prismarine, 6],],[[ID.prismarine_bricks_stairs, 4],])
    ]],
    [ID.dark_prismarine_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.prismarine, 1],],[[ID.dark_prismarine_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.prismarine, 6],],[[ID.dark_prismarine_stairs, 4],])
    ]],
    [ID.pumpkin_pie,[
        new Recipe([],[[ID.pumpkin, 1],[ID.sugar, 1],[ID.egg, 1],],[[ID.pumpkin_pie, 1],])
    ]],
    [ID.pumpkin_seeds,[
        new Recipe([],[[ID.pumpkin, 1],],[[ID.pumpkin_seeds, 4],])
    ]],
    [ID.purpur_block,[
        new Recipe([],[[ID.chorus_fruit_popped, 4],],[[ID.purpur_block, 4],])
    ]],
    [ID.purpur_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.purpur_block, 1],],[[ID.purpur_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.purpur_block, 6],],[[ID.purpur_stairs, 4],])
    ]],
    [ID.quartz_block,[
        new Recipe([],[[ID.quartz, 4],],[[ID.quartz_block, 1],])
    ]],
    [ID.quartz_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.quartz_block, 1],],[[ID.quartz_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.quartz_block, 6],],[[ID.quartz_stairs, 4],])
    ]],
    [ID.rabbit_stew,[
        new Recipe([],[[ID.bowl, 1],[ID.baked_potato, 1],[ID.carrot, 1],[ID.brown_mushroom, 1],[ID.cooked_rabbit, 1],],[[ID.rabbit_stew, 1],]),
        new Recipe([],[[ID.bowl, 1],[ID.baked_potato, 1],[ID.carrot, 1],[ID.red_mushroom, 1],[ID.cooked_rabbit, 1],],[[ID.rabbit_stew, 1],])
    ]],
    [ID.rail,[
        new Recipe([ID.crafting_table],[[ID.stick, 1],[ID.iron_ingot, 6],],[[ID.rail, 16],])
    ]],
    [ID.redstone_block,[
        new Recipe([ID.crafting_table],[[ID.redstone, 9],],[[ID.redstone_block, 1],])
    ]],
    [ID.redstone_lamp,[
        new Recipe([ID.crafting_table],[[ID.redstone, 4],[ID.glowstone, 1],],[[ID.redstone_lamp, 1],])
    ]],
    [ID.redstone_torch,[
        new Recipe([],[[ID.stick, 1],[ID.redstone, 1],],[[ID.redstone_torch, 1],])
    ]],
    [ID.red_nether_brick,[
        new Recipe([],[[ID.nether_wart, 2],[ID.netherbrick, 2],],[[ID.red_nether_brick, 1],])
    ]],
    [ID.red_nether_brick_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.red_nether_brick, 1],],[[ID.red_nether_brick_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.red_nether_brick, 6],],[[ID.red_nether_brick_stairs, 4],])
    ]],
    [ID.red_sandstone,[
        new Recipe([],[[ID.sand, 4],],[[ID.red_sandstone, 1],])
    ]],
    [ID.red_sandstone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.red_sandstone, 1],],[[ID.red_sandstone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.red_sandstone, 6],],[[ID.red_sandstone_stairs, 4],])
    ]],
    [ID.repeater,[
        new Recipe([ID.crafting_table],[[ID.redstone_torch, 2],[ID.redstone, 1],[ID.stone, 3],],[[ID.repeater, 1],])
    ]],
    [ID.sandstone,[
        new Recipe([],[[ID.sand, 4],],[[ID.sandstone, 1],])
    ]],
    [ID.sandstone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.sandstone, 1],],[[ID.sandstone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.sandstone, 6],],[[ID.sandstone_stairs, 4],])
    ]],
    [ID.scaffolding,[
        new Recipe([ID.crafting_table],[[ID.bamboo, 6],[ID.string, 1],],[[ID.scaffolding, 6],])
    ]],
    [ID.sealantern,[
        new Recipe([ID.crafting_table],[[ID.prismarine_shard, 4],[ID.prismarine_crystals, 5],],[[ID.sealantern, 1],])
    ]],
    [ID.shears,[
        new Recipe([],[[ID.iron_ingot, 2],],[[ID.shears, 1],])
    ]],
    [ID.shield,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.iron_ingot, 1],],[[ID.shield, 1],])
    ]],
    [ID.undyed_shulker_box,[
        new Recipe([ID.crafting_table],[[ID.chest, 1],[ID.shulker_shell, 2],],[[ID.undyed_shulker_box, 1],])
    ]],
    [ID.acacia_sign,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.stick, 1],],[[ID.acacia_sign, 3],])
    ]],
    [ID.birch_sign,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.stick, 1],],[[ID.birch_sign, 3],])
    ]],
    [ID.darkoak_sign,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.stick, 1],],[[ID.darkoak_sign, 3],])
    ]],
    [ID.jungle_sign,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.stick, 1],],[[ID.jungle_sign, 3],])
    ]],
    [ID.sign,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.stick, 1],],[[ID.sign, 3],])
    ]],
    [ID.spruce_sign,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],[ID.stick, 1],],[[ID.spruce_sign, 3],])
    ]],
    [ID.slime,[
        new Recipe([ID.crafting_table],[[ID.slime_ball, 9],],[[ID.slime, 1],])
    ]],
    [ID.slime_ball,[
        new Recipe([],[[ID.slime, 1],],[[ID.slime_ball, 9],])
    ]],
    [ID.smoker,[
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.log, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.log2, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.stripped_acacia_log, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.stripped_birch_log, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.stripped_dark_oak_log, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.stripped_jungle_log, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.stripped_oak_log, 4],],[[ID.smoker, 1],]),
        new Recipe([ID.crafting_table],[[ID.furnace, 1],[ID.stripped_spruce_log, 4],],[[ID.smoker, 1],])
    ]],
    [ID.smooth_quartz_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.quartz_block, 1],],[[ID.smooth_quartz_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.quartz_block, 6],],[[ID.smooth_quartz_stairs, 4],])
    ]],
    [ID.smooth_red_sandstone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.red_sandstone, 1],],[[ID.smooth_red_sandstone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.red_sandstone, 6],],[[ID.smooth_red_sandstone_stairs, 4],])
    ]],
    [ID.smooth_sandstone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.sandstone, 1],],[[ID.smooth_sandstone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.sandstone, 6],],[[ID.smooth_sandstone_stairs, 4],])
    ]],
    [ID.snow,[
        new Recipe([],[[ID.snowball, 4],],[[ID.snow, 1],])
    ]],
    [ID.snow_layer,[
        new Recipe([ID.crafting_table],[[ID.snow, 3],],[[ID.snow_layer, 6],])
    ]],
    [ID.speckled_melon,[
        new Recipe([ID.crafting_table],[[ID.gold_nugget, 8],[ID.melon, 1],],[[ID.speckled_melon, 1],])
    ]],
    [ID.spruce_door,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.spruce_door, 3],])
    ]],
    [ID.spruce_fence_gate,[
        new Recipe([ID.crafting_table],[[ID.stick, 4],[ID.planks, 2],],[[ID.spruce_fence_gate, 1],])
    ]],
    [ID.spruce_stairs,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.spruce_stairs, 4],])
    ]],
    [ID.sticky_piston,[
        new Recipe([],[[ID.piston, 1],[ID.slime_ball, 1],],[[ID.sticky_piston, 1],])
    ]],
    [ID.stonebrick,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.stonebrick, 1],]),
        new Recipe([],[[ID.stone, 4],],[[ID.stonebrick, 4],])
    ]],
    [ID.stone_brick_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.stone_brick_stairs, 1],]),
        new Recipe([ID.stonecutter_block],[[ID.stonebrick, 1],],[[ID.stone_brick_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stonebrick, 6],],[[ID.stone_brick_stairs, 4],])
    ]],
    [ID.normal_stone_stairs,[
        new Recipe([ID.stonecutter_block],[[ID.stone, 1],],[[ID.normal_stone_stairs, 1],]),
        new Recipe([ID.crafting_table],[[ID.stone, 6],],[[ID.normal_stone_stairs, 4],])
    ]],
    [ID.stone_axe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.cobblestone, 3],],[[ID.stone_axe, 1],])
    ]],
    [ID.stone_button,[
        new Recipe([],[[ID.stone, 1],],[[ID.stone_button, 1],])
    ]],
    [ID.stone_hoe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.cobblestone, 2],],[[ID.stone_hoe, 1],])
    ]],
    [ID.stone_pickaxe,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.cobblestone, 3],],[[ID.stone_pickaxe, 1],])
    ]],
    [ID.stone_pressure_plate,[
        new Recipe([],[[ID.stone, 2],],[[ID.stone_pressure_plate, 1],])
    ]],
    [ID.stone_shovel,[
        new Recipe([ID.crafting_table],[[ID.stick, 2],[ID.cobblestone, 1],],[[ID.stone_shovel, 1],])
    ]],
    [ID.stone_sword,[
        new Recipe([ID.crafting_table],[[ID.stick, 1],[ID.cobblestone, 2],],[[ID.stone_sword, 1],])
    ]],
    [ID.wool,[
        new Recipe([],[[ID.string, 4],],[[ID.wool, 1],])
    ]],
    [ID.tnt_minecart,[
        new Recipe([],[[ID.tnt, 1],[ID.minecart, 1],],[[ID.tnt_minecart, 1],])
    ]],
    [ID.trapped_chest,[
        new Recipe([],[[ID.chest, 1],[ID.tripwire_hook, 1],],[[ID.trapped_chest, 1],])
    ]],
    [ID.turtle_helmet,[
        new Recipe([ID.crafting_table],[[ID.turtle_shell_piece, 5],],[[ID.turtle_helmet, 1],])
    ]],
    [ID.wheat,[
        new Recipe([],[[ID.hay_block, 1],],[[ID.wheat, 9],])
    ]],
    [ID.wooden_door,[
        new Recipe([ID.crafting_table],[[ID.planks, 6],],[[ID.wooden_door, 3],])
    ]],
    [ID.writable_book,[
        new Recipe([],[[ID.book, 1],[ID.dye, 1],[ID.feather, 1],],[[ID.writable_book, 1],])
    ]],
]);
