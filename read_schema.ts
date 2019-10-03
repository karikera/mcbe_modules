

import fs = require('fs');
import { wget, firstLine } from './util';
import { Elements } from './elements';

interface SchemaItem
{
    description?:string;
    type?:SchemaType;
    properties?:SchemaProperties;
    items?:SchemaItem;
    default?:any;
}

type SchemaType = 'string'|'number'|'boolean'|'object'|'array';

interface SchemaProperties
{
    [key:string]:SchemaItem;
}

function rowsToSchema(rows:Elements, properties?:SchemaProperties):SchemaProperties
{
    if (!properties) properties = {};

    for (const row of rows)
    {
        const cells = row.children().tag('td');

        let name:string;
        let typeText:string|undefined;
        let desc:string;
        let def:any;
        if (cells.length >= 4)
        {
            name = firstLine(cells.at(1).html(0));
            typeText = firstLine(cells.at(0).html(0));
            def = firstLine(cells.at(2).html(0));
            desc = cells.at(3).html(0);
        }
        else if (cells.length >= 3)
        {
            typeText = firstLine(cells.at(0).html(0));
            name = firstLine(cells.at(1).html(0));
            desc = cells.at(2).html(0);
        }
        else
        {
            name = firstLine(cells.at(0).html(0));
            desc = cells.at(2).html(0);
        }


        let prop:SchemaItem = properties[name];
        if (!prop) properties[name] = prop = {};
        prop.description = desc;

        if (typeText)
        {
            switch (typeText)
            {
            case 'String': prop.type = 'string'; break;
            case 'Decimal':
                prop.type = 'number';
                if (def) def = +def;
                break;
            case 'Integer': 
                prop.type = 'number'; 
                if (def) def = +def;
                break;
            case 'Boolean':
                prop.type = 'boolean';
                if (def) def = def === 'true';
                break;
            case 'Vector [a, b, c]': 
                prop.type = 'array';
                prop.items = {type:'number'};
                break;
            default: console.error('unknown type: '+typeText); break;
            }
        }
        if (def !== undefined) prop.default = def;
        
        const innerTable = cells.children().findByTag('tbody');
        if (innerTable.length !== 0)
        {
            prop.type = 'object';
            prop.properties = tableToSchema(innerTable);
        }

    }
    return properties;
}

function tableToSchema(table:Elements):SchemaProperties
{
    return rowsToSchema(table.children().tag('tr').slice(1));
}

function headersToSchema(headers:Elements, head:string):SchemaProperties
{
    headers = headers.findByTag(head, 'p', 'dl');
    
    let name:string|undefined;
    let description:string|undefined;

    const out:SchemaProperties = {};
    for (const row of headers)
    {
        switch (row.tagName()[0])
        {
        case head: name = row.children().tag('span').html(0); break;
        case 'p': description = row.html(0); break;
        case 'dl': 
            if (!name) break;
            const item:SchemaItem = out[name] = {};
            if (description) item.description = description;
            item.properties = tableToSchema(row.findByTag('tbody'));
            break;
        }
    }
    return out;
}

function makeArray(schema:SchemaItem):void
{
    const items:SchemaItem = {};
    if (schema.type)
    {
        items.type = schema.type;
    }
    schema.type = 'array';
    if (schema.properties)
    {
        items.properties = schema.properties;
        delete schema.properties;
    }
    schema.items = items;
}

export async function readSchema():Promise<void>
{
    {
        const readed = await wget('https://minecraft.gamepedia.com/Bedrock_Edition_add-on_documentation');
        const tables = Elements.parse(readed).findByTag('tbody');
    
        const menifest = tableToSchema(tables.at(1));
        menifest.format_version.type = 'number';
        makeArray(menifest.modules);
        makeArray(menifest.dependencies);
        makeArray(menifest.metadata.properties!.authors);
        fs.writeFileSync('manifest.schema.json', JSON.stringify({properties:menifest}, null, 4), 'utf-8');
    }
    
    {
        const readed = await wget('https://minecraft.gamepedia.com/Bedrock_Edition_blocks_documentation');
        
        const blocks = headersToSchema(Elements.parse(readed), 'h3');

        const description = blocks['Block Description Properties'];
        delete blocks['Block Description Properties'];
        delete blocks['Block Definition Properties'];

        fs.writeFileSync('blocks.schema.json', JSON.stringify({
            properties:{
                format_version: {type:'string'},
                "minecraft:block":{
                    properties:{
                        components: {
                            properties:blocks
                        },
                        description: description,
                    }
                }
            }
        }, null, 4), 'utf-8');
    }

    console.log('schema generated');
}
