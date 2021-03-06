
import Identifier from "@mcbe/identifier";

export enum DeleteTarget
{
    None,
    This,
    Other,
    Anything,
}

export class Recipe
{
    constructor(
        public readonly tools:Identifier[],
        public readonly inputs:[Identifier, number][], 
        public readonly outputs:[Identifier, number][])
    {
    }

    private _compareTool(other:Recipe):DeleteTarget
    {
        if (this.tools.length === 0)
        {
            if (other.tools.length === 0)
            {
                return DeleteTarget.Anything;
            }
            return DeleteTarget.Other;
        }
        else if (other.tools.length === 0)
        {
            return DeleteTarget.This;
        }

        _next:{
            const a_set = new Set(this.tools);
            for (const b of other.tools)
            {
                if (!a_set.has(b)) break _next;
            }
            return DeleteTarget.Other;
        }
        const b_set = new Set(this.tools);
        for (const a of this.tools)
        {
            if (!b_set.has(a)) return DeleteTarget.None;
        }
        return DeleteTarget.This;
    }
    
    /**
     * check subset
     * no return DeleteTarget.Anything
     * @param other 
     */
    subsetCompare(other:Recipe):DeleteTarget
    {
        const tool = this._compareTool(other);
        if (tool === DeleteTarget.None) return DeleteTarget.None;

        check_for_delete_other: {
            if (tool === DeleteTarget.This) break check_for_delete_other;
            if (other.outputs.length > this.outputs.length) break check_for_delete_other;
            if (other.outputs[0][1] > this.outputs[0][1]) break check_for_delete_other;
            const ao_map = new Map(this.outputs);
            for (const [b_id, b_count] of other.outputs)
            {
                const a_count = ao_map.get(b_id);
                if (a_count === undefined) break check_for_delete_other;
                if (b_count > a_count) break check_for_delete_other;
            }
            const bi_map = new Map(other.inputs);
            for (const [a_id, a_count] of this.inputs)
            {
                const b_count = bi_map.get(a_id);
                if (b_count === undefined) break check_for_delete_other;
                if (a_count > b_count) break check_for_delete_other;
            }
            return DeleteTarget.Other;
        }

        // check for delete this
        {
            if (this.outputs.length > other.outputs.length) return DeleteTarget.None;
            if (this.outputs[0][1] > other.outputs[0][1]) return DeleteTarget.None;
            const bo_map = new Map(other.outputs);
            for (const [a_id, a_count] of this.outputs)
            {
                const b_count = bo_map.get(a_id);
                if (b_count === undefined) return DeleteTarget.None;
                if (a_count > b_count) return DeleteTarget.None;
            }
            const ai_map = new Map(this.inputs);
            for (const [b_id, b_count] of other.inputs)
            {
                const a_count = ai_map.get(b_id);
                if (a_count === undefined) return DeleteTarget.None;
                if (b_count > a_count) return DeleteTarget.None;
            }
            return DeleteTarget.This;
        }
    }

    complexCompare(other:Recipe):number
    {
        let v = other.outputs.length - this.outputs.length;
        if (v !== 0) return v; // output kind count desc
        
        const a = this.inputs.map(v=>v[1]).reduce((a,b)=>a+b) / this.outputs[0][1];
        const b = other.inputs.map(v=>v[1]).reduce((a,b)=>a+b) / other.outputs[0][1];
        v = a - b;
        if (v !== 0) return v; // score asc

        for (let i=0;i<this.outputs.length;i++)
        {
            v = this.outputs[i][1] - other.outputs[i][1];
            if (v !== 0) return v; // output count asc
        }

        return 0;
    }

    inputHas(item:Identifier, count:number):boolean
    {
        for (const [i_id, i_count] of this.inputs)
        {
            if (i_id === item && i_count >= count) return true;
        }
        
        return false;
    }

    toSource():string
    {
        let out = 'new Recipe([';
        if (this.tools.length !== 0)
        {
            out += 'ID.';
            out += this.tools.join(', ID.');
        }
        out += '],[';
        for (const [id, count] of this.inputs)
        {
            out += '[ID.';
            out += id;
            out += ', ';
            out += count;
            out += '],';
        }
        out += '],[';
        for (const [id, count] of this.outputs)
        {
            out += '[ID.';
            out += id;
            out += ', ';
            out += count;
            out += '],';
        }
        out += '])';
        return out;
    }
}
