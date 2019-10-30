
import { Recipe, DeleteTarget } from "@mcbe/recipe";
import Identifier from "@mcbe/identifier";
import MAKEID from "@mcbe/identifier/make";

export const recipes_data = new Map<Identifier, Recipe[]>();
recipes_data.set(MAKEID.chest, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 8]])
]);
recipes_data.set(MAKEID.crafting_table, [
    new Recipe([], [[MAKEID.planks, 4]])
]);
recipes_data.set(MAKEID.stick, [
    new Recipe([], [[MAKEID.planks, 2]], 4),
    new Recipe([], [[MAKEID.bamboo, 2]])
]);
recipes_data.set(MAKEID.torch, [
    new Recipe([], [[MAKEID.stick, 1], [MAKEID.coal, 1]], 4)
]);
recipes_data.set(MAKEID.wooden_sword, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 2], [MAKEID.stick, 1]])
]);
recipes_data.set(MAKEID.wooden_axe, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 3], [MAKEID.stick, 2]])
]);
recipes_data.set(MAKEID.wooden_pickaxe, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 3], [MAKEID.stick, 2]])
]);
recipes_data.set(MAKEID.wooden_shovel, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 1], [MAKEID.stick, 2]])
]);

recipes_data.set(MAKEID.wooden_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);
recipes_data.set(MAKEID.oak_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);
recipes_data.set(MAKEID.acacia_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);
recipes_data.set(MAKEID.birch_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);
recipes_data.set(MAKEID.dark_oak_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);
recipes_data.set(MAKEID.jungle_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);
recipes_data.set(MAKEID.spruce_pressure_plate, [
    new Recipe([], [[MAKEID.planks, 2]])
]);

recipes_data.set(MAKEID.trapdoor, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 6]], 2)
]);
recipes_data.set(MAKEID.acacia_trapdoor, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 6]], 2)
]);
recipes_data.set(MAKEID.birch_trapdoor, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 6]], 2)
]);
recipes_data.set(MAKEID.dark_oak_trapdoor, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 6]], 2)
]);
recipes_data.set(MAKEID.jungle_trapdoor, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 6]], 2)
]);
recipes_data.set(MAKEID.spruce_trapdoor, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 6]], 2)
]);

recipes_data.set(MAKEID.wooden_button, [
    new Recipe([], [[MAKEID.planks, 1]])
]);
recipes_data.set(MAKEID.dark_oak_button, [
    new Recipe([], [[MAKEID.planks, 1]])
]);
recipes_data.set(MAKEID.jungle_button, [
    new Recipe([], [[MAKEID.planks, 1]])
]);
recipes_data.set(MAKEID.spruce_button, [
    new Recipe([], [[MAKEID.planks, 1]])
]);
recipes_data.set(MAKEID.acacia_button, [
    new Recipe([], [[MAKEID.planks, 1]])
]);
recipes_data.set(MAKEID.birch_button, [
    new Recipe([], [[MAKEID.planks, 1]])
]);

recipes_data.set(MAKEID.wooden_hoe, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 2], [MAKEID.stick, 2]])
]);
recipes_data.set(MAKEID.bowl, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.planks, 3]], 4)
]);
recipes_data.set(MAKEID.map, [
    new Recipe([MAKEID.cartography_table], [[MAKEID.emptymap, 1]]) // [MAKEID.Map, 1]
]);
recipes_data.set(MAKEID.written_book, [
    new Recipe([], [[MAKEID.writable_book, 1]])
]);
recipes_data.set(MAKEID.campfire, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.stick, 3], [MAKEID.coal, 1], [MAKEID.log, 3]])
]);
recipes_data.set(MAKEID.cake, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.sugar, 2], [MAKEID.wheat, 3], [MAKEID.egg, 1]]) // [MAKEID.bucket, 3], 
]);
recipes_data.set(MAKEID.fletching_table, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.flint, 2], [MAKEID.planks, 4]])
]);
recipes_data.set(MAKEID.smithing_table, [
    new Recipe([MAKEID.crafting_table], [[MAKEID.iron_ingot, 2], [MAKEID.planks,  4]])
]);
recipes_data.set(MAKEID.dye, [new Recipe([],[[MAKEID.bone, 1],],3)]);
recipes_data.set(MAKEID.bed, [
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.wool,  3], 
        [MAKEID.planks,  3]])
]);
recipes_data.set(MAKEID.double_stone_slab, [
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.stone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.cobblestone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.stonebrick, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.smooth_stone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.sandstone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.quartz_block, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.red_nether_brick, 1],
    ], 2),

    new Recipe([MAKEID.crafting_table], [
        [MAKEID.stone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.cobblestone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.stonebrick, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.smooth_stone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.sandstone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.quartz_block, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.red_nether_brick, 3],
    ], 6),
]);
recipes_data.set(MAKEID.double_stone_slab2, [
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.mossy_cobblestone, 1]
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.prismarine, 1]
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.sandstone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.red_sandstone, 1]
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.purpur_block, 1]
    ], 2),

    new Recipe([MAKEID.crafting_table], [
        [MAKEID.mossy_cobblestone, 3]
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.prismarine, 3]
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.sandstone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.red_sandstone, 3]
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.purpur_block, 3]
    ], 6),
]);
recipes_data.set(MAKEID.double_stone_slab3, [
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.stone, 1]
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.red_sandstone, 1]
    ], 2),

    new Recipe([MAKEID.crafting_table], [
        [MAKEID.stone, 3]
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.red_sandstone, 3]
    ], 6),
]);
recipes_data.set(MAKEID.double_stone_slab4, [
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.stone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.sandstone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.red_sandstone, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.quartz_block, 1],
    ], 2),
    new Recipe([MAKEID.stonecutter_block], [
        [MAKEID.stonebrick, 1],
    ], 2),

    new Recipe([MAKEID.crafting_table], [
        [MAKEID.stone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.sandstone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.red_sandstone, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.quartz_block, 3],
    ], 6),
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.stonebrick, 3],
    ], 6),
]);
recipes_data.set(MAKEID.piston, [
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.planks, 3],
        [MAKEID.cobblestone, 4],
        [MAKEID.iron_ingot, 1],
        [MAKEID.redstone, 1]
    ], 1)
]);
recipes_data.set(MAKEID.bookshelf, [
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.planks, 6],
        [MAKEID.book, 3],
    ])
]);
recipes_data.set(MAKEID.loom, [
    new Recipe([MAKEID.crafting_table], [
        [MAKEID.planks, 2],
        [MAKEID.string, 2],
    ])
]);
recipes_data.set(MAKEID.muttoncooked, [
    new Recipe(
        [MAKEID.furnace, MAKEID.smoker, MAKEID.campfire], 
        [[MAKEID.muttonraw, 1]],
    ),
]);
recipes_data.set(MAKEID.powered_rail, [
    new Recipe(
        [MAKEID.crafting_table], 
        [
            [MAKEID.gold_ingot, 6],
            [MAKEID.stick, 1],
            [MAKEID.redstone, 1],
        ],
    ),
]);
recipes_data.set(MAKEID.stonecutter_block, [
    new Recipe(
        [MAKEID.crafting_table], 
        [
            [MAKEID.stone, 3],
            [MAKEID.iron_ingot, 1],
        ],
    ),
]);
recipes_data.set(MAKEID.noteblock, [
    new Recipe(
        [MAKEID.crafting_table], 
        [
            [MAKEID.redstone, 1],
            [MAKEID.planks, 8],
        ],
    ),
]);
recipes_data.set(MAKEID.jukebox, [
    new Recipe(
        [MAKEID.crafting_table], 
        [
            [MAKEID.diamond, 1],
            [MAKEID.planks, 8],
        ],
    ),
]);
recipes_data.set(MAKEID.itemframe, [
    new Recipe(
        [MAKEID.crafting_table], 
        [
            [MAKEID.stick, 8],
            [MAKEID.leather, 1],
        ],
    ),
]);
recipes_data.set(MAKEID.painting, [
    new Recipe(
        [MAKEID.crafting_table], 
        [
            [MAKEID.stick, 8],
            [MAKEID.wool, 1],
        ],
    ),
]);
recipes_data.set(MAKEID.splash_potion, [
    new Recipe(
        [MAKEID.brewing_stand], 
        [
            [MAKEID.potion, 1],
        ],
    )
]);
recipes_data.set(MAKEID.lingering_potion, [
    new Recipe(
        [MAKEID.brewing_stand], 
        [
            [MAKEID.splash_potion, 1],
        ],
    )
]);
recipes_data.set(MAKEID.enchanted_book, [
    new Recipe(
        [MAKEID.enchanting_table], 
        [
            [MAKEID.book, 1],
            [MAKEID.dye, 1],
        ],
    )
]);
recipes_data.set(MAKEID.book, [
    new Recipe(
        [MAKEID.grindstone], 
        [
            [MAKEID.enchanted_book, 1],
        ],
    )
]);
recipes_data.set(MAKEID.fireworks, [
    new Recipe(
        [],
        [
            [MAKEID.gunpowder, 1],
            [MAKEID.paper, 1],
        ],
        3
    )
]);
recipes_data.set(MAKEID.fireworkscharge, [
    new Recipe(
        [],
        [
            [MAKEID.gunpowder, 1],[MAKEID.dye, 1],
        ]
    )
]);
recipes_data.set(MAKEID.blaze_powder, [
    new Recipe([],[[MAKEID.blaze_rod, 1]],2)
]);
recipes_data.set(MAKEID.shulker_box, [
    new Recipe([],[[MAKEID.undyed_shulker_box, 1],[MAKEID.dye, 1]],1)
]);
recipes_data.set(MAKEID.daylight_detector, [
    new Recipe([MAKEID.crafting_table],[[MAKEID.glass, 3],[MAKEID.quartz, 3],[MAKEID.wooden_slab, 3]],1)
]);
recipes_data.set(MAKEID.fireball, [
    new Recipe([],[[MAKEID.blaze_powder, 1],[MAKEID.coal, 1],[MAKEID.gunpowder, 1]],3)
]);
recipes_data.set(MAKEID.tripwire_hook, [
    new Recipe([MAKEID.crafting_table],[[MAKEID.iron_ingot, 1],[MAKEID.stick, 1],[MAKEID.planks, 1]],2)
]);
recipes_data.set(MAKEID.tnt, [
    new Recipe([MAKEID.crafting_table],[[MAKEID.sand, 4],[MAKEID.gunpowder, 5]],1)
]);
recipes_data.set(MAKEID.suspicious_stew, [
    new Recipe([MAKEID.crafting_table],[
        [MAKEID.red_mushroom, 1],
        [MAKEID.brown_mushroom, 1],
        [MAKEID.bowl, 1],
        [MAKEID.red_flower, 1],
    ],1)
]);
recipes_data.set(MAKEID.suspicious_stew, [
    new Recipe([MAKEID.crafting_table],[
        [MAKEID.red_mushroom, 1],
        [MAKEID.brown_mushroom, 1],
        [MAKEID.bowl, 1],
        [MAKEID.yellow_flower, 1],
    ],1)
]);
recipes_data.set(MAKEID.suspicious_stew, [
    new Recipe([MAKEID.crafting_table],[
        [MAKEID.red_mushroom, 1],
        [MAKEID.brown_mushroom, 1],
        [MAKEID.bowl, 1],
        [MAKEID.double_plant, 1],
    ],1)
]);
recipes_data.set(MAKEID.suspicious_stew, [
    new Recipe([MAKEID.crafting_table],[
        [MAKEID.red_mushroom, 1],
        [MAKEID.brown_mushroom, 1],
        [MAKEID.bowl, 1],
        [MAKEID.wither_rose, 1],
    ],1)
]);


export function putRecipe(output:Identifier, recipe:Recipe):void
{
    for (let i=0;i<recipe.inputs.length;i++)
    {
        const input = recipe.inputs[i];
        if (input[0] === output)
        {
            const ncount = recipe.count - input[1];
            if (ncount <= 0) return;
            recipe.inputs.splice(i, 1);
            const ninputs = recipe.inputs;

            recipe = new Recipe(
                recipe.tools,
                ninputs,
                ncount
            );
            break;
        }
    }
    if (recipe.inputHas(output, recipe.count)) return;

    const recipes = recipes_data.get(output);
    if (!recipes)
    {
        recipes_data.set(output, [recipe]);
        return;
    }

    for (let i=0;i<recipes.length;)
    {
        const r = recipes[i];
        const idx = r.subsetCompare(recipe);
        if (idx === DeleteTarget.Other) return;
        if (idx === DeleteTarget.This)
        {
            recipes.splice(i, 1);
            continue;
        }
        else
        {
            i++;
        }
    }

    // insert before wood
    if (recipe.inputHas(MAKEID.wood, 1))
    {
        recipes.push(recipe);
        return;
    }
    let i=recipes.length-1;
    for (;i>=0; i--)
    {
        const r = recipes[i];
        if (r.inputHas(MAKEID.wood, 1)) continue;
        break;
    }
    recipes.splice(i + 1, 0, recipe);
}
