import { ItemStack } from "@mcbe/item";
import MAKEID from "@mcbe/identifier/make";
import Identifier from "@mcbe/identifier";

const LEVELS = new WeakMap([
    [MAKEID.honey_block, 10],
    [MAKEID.honey_bottle, 10],
    [MAKEID.glass_bottle, -10],
]);

export function sortForCraft(items:ItemStack[]):void
{
    items.sort((a,b)=>(LEVELS.get(b.id)||0) - (LEVELS.get(a.id)||0));
}

export function getMainItemForCraft(items:[Identifier, number][]):[Identifier, number]
{
    if (items.length === 1) return items[0];

    let selected = items[0];
    let selectedLevel = LEVELS.get(selected[0]) || 0;
    let selectedDupped = false;
    let selectedIndex = 0;

    for (let i=1;i<items.length;i++)
    {
        const item = items[i];
        const level = LEVELS.get(item[0]) || 0;
        if (level < selectedLevel) continue;

        if (level === selectedLevel)
        {
            selectedDupped = true;
            continue;
        }
        selected = item;
        selectedLevel = level;
        selectedDupped = false;
        selectedIndex = i;
    }
    console.assert(!selectedDupped, "crafting output: main item is not found");
    items.splice(selectedIndex, 1);
    items.unshift(selected);
    return selected;
}