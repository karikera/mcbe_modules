import { ItemList, ItemStack } from "@mcbe/item";
import Identifier from "@mcbe/identifier";

import { Recipe } from ".";
import { recipes } from "./list";

class MakingInfoState
{
    constructor(
        readonly deadendItem:Set<Identifier>,
        readonly deadendRecipe:Set<Recipe>,
        readonly list:ItemList)
    {
    }
}

export const PASS_TOOLCHECK:Identifier = {} as any;

class MakingInfo
{
    public state:MakingInfoState;

    constructor(
        originalList:ItemList,
        private readonly tool:Identifier|null)
    {
        this.state = new MakingInfoState(new Set, new Set, originalList);
    }

    save():MakingInfoState
    {
        const old = this.state;
        this.state = new MakingInfoState(
            new Set(this.state.deadendItem.values()),
            new Set(this.state.deadendRecipe.values()),
            this.state.list.clone());
        return old;
    }

    craftRecipe(recipe:Recipe, count:number):number
    {
        if (this.state.deadendRecipe.has(recipe))
        {
            return count;
        }
        this.state.deadendRecipe.add(recipe);
        if (recipe.tools.length !== 0)
        {
            if (!this.tool) return count;
            if (this.tool !== PASS_TOOLCHECK)
            {
                if (recipe.tools.indexOf(this.tool) === -1)
                {
                    return count;
                }
            }
        }

        for (;;)
        {
            const state = this.save();
            for (const [id, icount] of recipe.inputs)
            {
                if (!this.craftFit(id, icount))
                {
                    this.state = state;
                    return count;
                }
            }

            const output = recipe.outputs[0];
            count -= output[1];
            if (count <= 0)
            {
                this.state.deadendRecipe.delete(recipe);
                this.state.list.add(output[0], -count);
                for (let i=1;i<recipe.outputs.length;i++)
                {
                    const extra = recipe.outputs[i];
                    this.state.list.add(extra[0], extra[1]);
                }
                return count;
            }
        }
    }

    craftFit(item:Identifier, count:number):boolean
    {
        if (this.state.list.size() === 0) return false;
        const state = this.save();
        let failed = this.state.list.use(item, count);
        if (failed === 0) return true;

        if (!this.state.deadendItem.has(item))
        {
            const list = recipes.get(item);
            if (list)
            {
                for (const recipe of list)
                {
                    failed = this.craftRecipe(recipe, failed);
                    if (failed <= 0) return true;
                    if (this.state.list.size() === 0) break;
                }
            }
        }
        this.state = state;
        this.state.deadendItem.add(item);
        return false;
    }

    /** return failed count */
    craftAvailable(item:Identifier, count:number):number
    {
        if (this.state.list.size() === 0) return count;
        let failed = this.state.list.use(item, count);
        if (failed === 0) return 0;
        if (!this.state.deadendItem.has(item))
        {
            const list = recipes.get(item);
            if (list)
            {
                for (const recipe of list)
                {
                    failed = this.craftRecipe(recipe, failed);
                    if (failed <= 0)
                    {
                        return 0;
                    }
                    if (this.state.list.size() === 0) break;
                }
            }
        }
        this.state.deadendItem.add(item);
        return failed;
    }
}

/** return failed count */
export function pickOutOrCraft(list:ItemList, tool:Identifier|null, name:Identifier, count:number):number
{
    const making = new MakingInfo(list, tool);
    const failed = making.craftAvailable(name, count);
    if (making.state.list !== list) list.moveAll(making.state.list);
    return failed;
}
