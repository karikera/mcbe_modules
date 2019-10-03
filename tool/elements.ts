
import HTML = require('node-html-parser');

function getElementById(node:HTML.Node, id:string):HTML.HTMLElement|null
{
    if (node instanceof HTML.HTMLElement)
    {
        if (node.id === id) return node;
    }
    for (const child of node.childNodes)
    {
        const found = getElementById(child, id);
        if (found) return found;
    }
    return null;
}

function getElementsByTagName(node:HTML.Node, tag:string, out?:HTML.HTMLElement[]):HTML.HTMLElement[]
{
    if (!out) out = [];

    if (node instanceof HTML.HTMLElement)
    {
        if (node.tagName === tag) out.push(node);
    }
    for (const child of node.childNodes)
    {
        getElementsByTagName(child, tag, out);
    }
    return out;
}

function getElementsByTagNameParentOnly(node:HTML.Node, tags:Set<string>, out?:HTML.HTMLElement[]):HTML.HTMLElement[]
{
    if (!out) out = [];

    if (node instanceof HTML.HTMLElement)
    {
        if (tags.has(node.tagName))
        {
            out.push(node);
            return out;
        }
    }
    for (const child of node.childNodes)
    {
        getElementsByTagNameParentOnly(child, tags, out);
    }
    return out;
}

function getElements(node:HTML.Node):HTML.HTMLElement[]
{
    return node.childNodes.filter(v=>v instanceof HTML.HTMLElement) as any;
}

export class Elements implements Iterable<Elements>
{
    constructor(public readonly nodes:HTML.Node[])
    {
    }

    get length():number
    {
        return this.nodes.length;
    }

    *[Symbol.iterator]():IterableIterator<Elements>
    {
        for (const node of this.nodes)
        {
            yield new Elements([node]);
        }
    }

    tagName():string[]
    {
        const tagNames:string[] = [];
        for (const node of this.nodes)
        {
            if (node instanceof HTML.HTMLElement)
            {
                tagNames.push(node.tagName);
            }
        }
        return tagNames;
    }

    text(idx:number):string
    {
        const node = this.nodes[idx];
        if (!node) return '';
        return node.rawText;
    }

    html(idx:number):string
    {
        const node = this.nodes[idx];
        if (!node) return '';
        if (!(node instanceof HTML.HTMLElement)) return '';
        return node.innerHTML;
    }

    texts():string[]
    {
        const out:string[] = [];
        for (const node of this.nodes)
        {
            out.push(node.rawText);
        }
        return out;
    }

    htmls():string[]
    {
        const out:string[] = [];
        for (const node of this.nodes)
        {
            if (node instanceof HTML.HTMLElement)
            {
                out.push(node.innerHTML);
            }
        }
        return out;
    }

    children(idx?:number):Elements
    {
        const out:HTML.Node[] = [];
        if (idx !== undefined)
        {
            for (const node of this.nodes)
            {
                const n = node.childNodes[idx];
                if (n) out.push(n);
            }
        }
        else
        {
            for (const node of this.nodes)
            {
                for (const child of node.childNodes)
                {
                    out.push(child);
                }
            }
        }
        return new Elements(out);
    }
    

    tag(...tagName:string[]):Elements
    {
        const tags = new Set(tagName);
        const out:HTML.Node[] = [];
        for (const node of this.nodes)
        {
            if (node instanceof HTML.HTMLElement)
            {
                if (tags.has(node.tagName))
                {
                    out.push(node);
                }
            }
        }
        return new Elements(out);
    }
    
    findByTag(...tagName:string[]):Elements
    {
        const tags = new Set(tagName);
        const out:HTML.HTMLElement[] = [];
        for (const node of this.nodes)
        {
            getElementsByTagNameParentOnly(node, tags, out);
        }
        return new Elements(out);
    }

    at(index:number):Elements
    {
        return new Elements(this.nodes.slice(index, index+1));
    }

    slice(start:number, end?:number):Elements
    {
        return new Elements(this.nodes.slice(start, end));
    }

    splice(start:number, count:number):Elements
    {
        return new Elements(this.nodes.splice(start, count));
    }

    attributes(name:string):string[]
    {
        const out:string[] = [];

        for (const node of this.nodes)
        {
            if (node instanceof HTML.HTMLElement)
            {
                out.push(node.attributes[name]);
            }
        }
        return out;
    }

    static parse(html:string):Elements
    {
        return new Elements([HTML.parse(html)]);
    }
}
