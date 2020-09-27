
interface LangStructure
{
    commands:{
        [key:string]:string;
    };
    item:{
        [key:string]:(string|null)[];
    };
}
export function freeze(lang:LangStructure):void
{
    Object.freeze(lang.commands);
    for (const itemname of Object.values(lang.item))
    {
        Object.freeze(itemname);
    }
    Object.freeze(lang.item);
}
