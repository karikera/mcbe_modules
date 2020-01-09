
import { Recipe, DeleteTarget } from "@mcbe/recipe";
import Identifier from "@mcbe/identifier";
import MAKEID from "@mcbe/identifier/make";
import { getMainItemForCraft } from "@mcbe/recipe/sort";

export const recipes_data = new Map<Identifier, Recipe[]>();

function addRecipe(outputs: [Identifier, number][] | Identifier, tools: Identifier[], inputs: [Identifier, number][]) {
    let id: Identifier;
    if (outputs instanceof Identifier) {
        id = outputs;
        outputs = [[id, 1]];
    }
    else {
        id = outputs[0][0];
    }
    let list = recipes_data.get(id);
    if (!list) recipes_data.set(id, list = []);
    list.push(new Recipe(tools, inputs, outputs));
}

addRecipe(MAKEID.chest, [MAKEID.crafting_table], [[MAKEID.planks, 8]]);
addRecipe(MAKEID.crafting_table, [], [[MAKEID.planks, 4]]);
addRecipe([[MAKEID.stick, 4]], [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.stick, [], [[MAKEID.bamboo, 2]]);
addRecipe([[MAKEID.torch, 4]], [], [[MAKEID.stick, 1], [MAKEID.coal, 1]]);
addRecipe(MAKEID.wooden_sword, [MAKEID.crafting_table], [[MAKEID.planks, 2], [MAKEID.stick, 1]]);
addRecipe(MAKEID.wooden_axe, [MAKEID.crafting_table], [[MAKEID.planks, 3], [MAKEID.stick, 2]]);
addRecipe(MAKEID.wooden_pickaxe, [MAKEID.crafting_table], [[MAKEID.planks, 3], [MAKEID.stick, 2]]);
addRecipe(MAKEID.wooden_shovel, [MAKEID.crafting_table], [[MAKEID.planks, 1], [MAKEID.stick, 2]]);
addRecipe(MAKEID.wooden_pressure_plate, [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.oak_pressure_plate, [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.acacia_pressure_plate, [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.birch_pressure_plate, [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.dark_oak_pressure_plate, [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.jungle_pressure_plate, [], [[MAKEID.planks, 2]]);
addRecipe(MAKEID.spruce_pressure_plate, [], [[MAKEID.planks, 2]]);

addRecipe([[MAKEID.trapdoor, 2]], [MAKEID.crafting_table], [[MAKEID.planks, 6]]);
addRecipe([[MAKEID.acacia_trapdoor, 2]], [MAKEID.crafting_table], [[MAKEID.planks, 6]]);
addRecipe([[MAKEID.birch_trapdoor, 2]], [MAKEID.crafting_table], [[MAKEID.planks, 6]]);
addRecipe([[MAKEID.dark_oak_trapdoor, 2]], [MAKEID.crafting_table], [[MAKEID.planks, 6]]);
addRecipe([[MAKEID.jungle_trapdoor, 2]], [MAKEID.crafting_table], [[MAKEID.planks, 6]]);
addRecipe([[MAKEID.spruce_trapdoor, 2]], [MAKEID.crafting_table], [[MAKEID.planks, 6]]);

addRecipe(MAKEID.wooden_button, [], [[MAKEID.planks, 1]]);
addRecipe(MAKEID.dark_oak_button, [], [[MAKEID.planks, 1]]);
addRecipe(MAKEID.jungle_button, [], [[MAKEID.planks, 1]]);
addRecipe(MAKEID.spruce_button, [], [[MAKEID.planks, 1]]);
addRecipe(MAKEID.acacia_button, [], [[MAKEID.planks, 1]]);
addRecipe(MAKEID.birch_button, [], [[MAKEID.planks, 1]]);

addRecipe(MAKEID.wooden_hoe, [MAKEID.crafting_table], [[MAKEID.planks, 2], [MAKEID.stick, 2]]);
addRecipe([[MAKEID.bowl, 4]], [MAKEID.crafting_table], [[MAKEID.planks, 3]]);
addRecipe(MAKEID.map, [MAKEID.cartography_table], [[MAKEID.emptymap, 1]]); // [MAKEID.Map, 1]

addRecipe(MAKEID.written_book, [], [[MAKEID.writable_book, 1]]);
addRecipe(MAKEID.campfire, [MAKEID.crafting_table], [[MAKEID.stick, 3], [MAKEID.coal, 1], [MAKEID.log, 3]]);
addRecipe(MAKEID.cake, [MAKEID.crafting_table], [[MAKEID.sugar, 2], [MAKEID.wheat, 3], [MAKEID.egg, 1]]); // [MAKEID.bucket, 3], 
addRecipe(MAKEID.fletching_table, [MAKEID.crafting_table], [[MAKEID.flint, 2], [MAKEID.planks, 4]]);
addRecipe(MAKEID.smithing_table, [MAKEID.crafting_table], [[MAKEID.iron_ingot, 2], [MAKEID.planks, 4]]);
addRecipe([[MAKEID.dye, 3]], [], [[MAKEID.bone, 1],]);
addRecipe(MAKEID.bed, [MAKEID.crafting_table], [
    [MAKEID.wool, 3],
    [MAKEID.planks, 3]]);

addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.stone, 1]]);
addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.cobblestone, 1]]);
addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.stonebrick, 1]]);
addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.smooth_stone, 1]]);
addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.sandstone, 1]]);
addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.quartz_block, 1]]);
addRecipe([[MAKEID.double_stone_slab, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.red_nether_brick, 1]]);

addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.stone, 3]]);
addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.cobblestone, 3]]);
addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.stonebrick, 3]]);
addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.smooth_stone, 3]]);
addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.sandstone, 3]]);
addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.quartz_block, 3]]);
addRecipe([[MAKEID.double_stone_slab, 6]], [MAKEID.crafting_table], [
    [MAKEID.red_nether_brick, 3]]);

addRecipe([[MAKEID.double_stone_slab2, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.mossy_cobblestone, 1]]);
addRecipe([[MAKEID.double_stone_slab2, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.prismarine, 1]]);
addRecipe([[MAKEID.double_stone_slab2, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.sandstone, 1],]);
addRecipe([[MAKEID.double_stone_slab2, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.red_sandstone, 1]]);
addRecipe([[MAKEID.double_stone_slab2, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.purpur_block, 1]]);

addRecipe([[MAKEID.double_stone_slab2, 6]], [MAKEID.crafting_table], [
    [MAKEID.mossy_cobblestone, 3]]);
addRecipe([[MAKEID.double_stone_slab2, 6]], [MAKEID.crafting_table], [
    [MAKEID.prismarine, 3]]);
addRecipe([[MAKEID.double_stone_slab2, 6]], [MAKEID.crafting_table], [
    [MAKEID.sandstone, 3],]);
addRecipe([[MAKEID.double_stone_slab2, 6]], [MAKEID.crafting_table], [
    [MAKEID.red_sandstone, 3]]);
addRecipe([[MAKEID.double_stone_slab2, 6]], [MAKEID.crafting_table], [
    [MAKEID.purpur_block, 3]]);

addRecipe([[MAKEID.double_stone_slab3, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.stone, 1]
]);
addRecipe([[MAKEID.double_stone_slab3, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.red_sandstone, 1]
]);

addRecipe([[MAKEID.double_stone_slab3, 6]], [MAKEID.crafting_table], [
    [MAKEID.stone, 3]
]);
addRecipe([[MAKEID.double_stone_slab3, 6]], [MAKEID.crafting_table], [
    [MAKEID.red_sandstone, 3]
]);

addRecipe([[MAKEID.double_stone_slab4, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.stone, 1],
]);
addRecipe([[MAKEID.double_stone_slab4, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.sandstone, 1],
]);
addRecipe([[MAKEID.double_stone_slab4, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.red_sandstone, 1],
]);
addRecipe([[MAKEID.double_stone_slab4, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.quartz_block, 1],
]);
addRecipe([[MAKEID.double_stone_slab4, 2]], [MAKEID.stonecutter_block], [
    [MAKEID.stonebrick, 1],
]);

addRecipe([[MAKEID.double_stone_slab4, 6]], [MAKEID.crafting_table], [
    [MAKEID.stone, 3],
]);
addRecipe([[MAKEID.double_stone_slab4, 6]], [MAKEID.crafting_table], [
    [MAKEID.sandstone, 3],
]);
addRecipe([[MAKEID.double_stone_slab4, 6]], [MAKEID.crafting_table], [
    [MAKEID.red_sandstone, 3],
]);
addRecipe([[MAKEID.double_stone_slab4, 6]], [MAKEID.crafting_table], [
    [MAKEID.quartz_block, 3],
]);
addRecipe([[MAKEID.double_stone_slab4, 6]], [MAKEID.crafting_table], [
    [MAKEID.stonebrick, 3],
]);

addRecipe(MAKEID.piston, [MAKEID.crafting_table], [
    [MAKEID.planks, 3],
    [MAKEID.cobblestone, 4],
    [MAKEID.iron_ingot, 1],
    [MAKEID.redstone, 1]
]);

addRecipe(MAKEID.bookshelf, [MAKEID.crafting_table], [
    [MAKEID.planks, 6],
    [MAKEID.book, 3],
]);

addRecipe(MAKEID.loom, [MAKEID.crafting_table], [
    [MAKEID.planks, 2],
    [MAKEID.string, 2],
]);

addRecipe(MAKEID.muttoncooked,
    [MAKEID.furnace, MAKEID.smoker, MAKEID.campfire],
    [[MAKEID.muttonraw, 1]]);

addRecipe(MAKEID.powered_rail,
    [MAKEID.crafting_table],
    [
        [MAKEID.gold_ingot, 6],
        [MAKEID.stick, 1],
        [MAKEID.redstone, 1],
    ]);
addRecipe(MAKEID.stonecutter_block, [MAKEID.crafting_table],
    [
        [MAKEID.stone, 3],
        [MAKEID.iron_ingot, 1],
    ]);
addRecipe(MAKEID.noteblock, [MAKEID.crafting_table],
    [
        [MAKEID.redstone, 1],
        [MAKEID.planks, 8],
    ]);
addRecipe(MAKEID.jukebox, [MAKEID.crafting_table],
    [
        [MAKEID.diamond, 1],
        [MAKEID.planks, 8],
    ]);
addRecipe(MAKEID.itemframe, [MAKEID.crafting_table],
    [
        [MAKEID.stick, 8],
        [MAKEID.leather, 1],
    ]);
addRecipe(MAKEID.painting, [MAKEID.crafting_table],
    [
        [MAKEID.stick, 8],
        [MAKEID.wool, 1],
    ]);
addRecipe(MAKEID.splash_potion,
    [MAKEID.brewing_stand],
    [
        [MAKEID.potion, 1],
    ],);
addRecipe(MAKEID.lingering_potion,
    [MAKEID.brewing_stand],
    [
        [MAKEID.splash_potion, 1],
    ],);

addRecipe(MAKEID.enchanted_book,
    [MAKEID.enchanting_table],
    [
        [MAKEID.book, 1],
        [MAKEID.dye, 1],
    ]);
addRecipe(MAKEID.book,
    [MAKEID.grindstone],
    [
        [MAKEID.enchanted_book, 1],
    ]);
addRecipe([[MAKEID.fireworks, 3]],
    [],
    [
        [MAKEID.gunpowder, 1],
        [MAKEID.paper, 1],
    ]);
addRecipe(MAKEID.fireworkscharge,
    [], [
        [MAKEID.gunpowder, 1], [MAKEID.dye, 1],
    ]);
addRecipe([[MAKEID.blaze_powder, 2]],
    [], [[MAKEID.blaze_rod, 1]]);
addRecipe(MAKEID.shulker_box, [], [[MAKEID.undyed_shulker_box, 1], [MAKEID.dye, 1]]);
addRecipe(MAKEID.daylight_detector, [MAKEID.crafting_table], [[MAKEID.glass, 3], [MAKEID.quartz, 3], [MAKEID.wooden_slab, 3]]);
addRecipe([[MAKEID.fireball, 3]],
    [], [[MAKEID.blaze_powder, 1], [MAKEID.coal, 1], [MAKEID.gunpowder, 1]]);
addRecipe([[MAKEID.tripwire_hook, 2]], [MAKEID.crafting_table], [[MAKEID.iron_ingot, 1], [MAKEID.stick, 1], [MAKEID.planks, 1]]);
addRecipe(MAKEID.tnt, [], [[MAKEID.sand, 4], [MAKEID.gunpowder, 5]]);

addRecipe(MAKEID.suspicious_stew, [MAKEID.crafting_table], [
    [MAKEID.red_mushroom, 1],
    [MAKEID.brown_mushroom, 1],
    [MAKEID.bowl, 1],
    [MAKEID.red_flower, 1],
]);
addRecipe(MAKEID.suspicious_stew, [MAKEID.crafting_table], [
    [MAKEID.red_mushroom, 1],
    [MAKEID.brown_mushroom, 1],
    [MAKEID.bowl, 1],
    [MAKEID.yellow_flower, 1],
]);
addRecipe(MAKEID.suspicious_stew, [MAKEID.crafting_table], [
    [MAKEID.red_mushroom, 1],
    [MAKEID.brown_mushroom, 1],
    [MAKEID.bowl, 1],
    [MAKEID.double_plant, 1],
]);
addRecipe(MAKEID.suspicious_stew, [MAKEID.crafting_table], [
    [MAKEID.red_mushroom, 1],
    [MAKEID.brown_mushroom, 1],
    [MAKEID.bowl, 1],
    [MAKEID.wither_rose, 1],
]);


export function putRecipe(recipe: Recipe): void
{
    if (recipe.outputs.length === 0) debugger;

    const outputs = new Map(recipe.outputs.map((v, i)=>[v[0], i]));
    for (let i = 0; i < recipe.inputs.length;)
    {
        const input = recipe.inputs[i];
        const oidx = outputs.get(input[0]);
        if (oidx !== undefined)
        {
            const output = recipe.outputs[oidx];
            const ncount = output[1] - input[1];
            if (ncount <= 0)
            {
                output[1] = 0;
                input[1] = -ncount;
                i++;
            }
            else
            {
                recipe.inputs.splice(i, 1);
                output[1] = ncount;
            }
        }
        else
        {
            i++;
        }
    }
    for (let i=0;i<recipe.outputs.length;)
    {
        if (recipe.outputs[i][1] === 0)
        {
            recipe.outputs.splice(i, 1);
        }
        else
        {
            i ++;
        }
    }
    if (recipe.outputs.length === 0) return;
    recipe.outputs.sort((a,b)=>a[0].name.localeCompare(b[0].name));
    const output = getMainItemForCraft(recipe.outputs);
    const recipes = recipes_data.get(output[0]);
    if (!recipes) {
        recipes_data.set(output[0], [recipe]);
        return;
    }
    if (output[0].name === 'prismarine' && recipe.inputs[0][1] === 9) debugger;

    for (let i = 0; i < recipes.length;) {
        const r = recipes[i];
        const idx = r.subsetCompare(recipe);
        if (idx === DeleteTarget.Other) return;
        if (idx === DeleteTarget.This) {
            recipes.splice(i, 1);
            continue;
        }
        else {
            i++;
        }
    }

    // insert before wood
    if (recipe.inputHas(MAKEID.wood, 1)) {
        recipes.push(recipe);
        return;
    }
    let i = recipes.length - 1;
    for (; i >= 0; i--) {
        const r = recipes[i];
        if (r.inputHas(MAKEID.wood, 1)) continue;
        break;
    }
    recipes.splice(i + 1, 0, recipe);
}
