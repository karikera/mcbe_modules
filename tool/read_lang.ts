import { readFiles, readLines } from "./util";
import { createWriteStream } from "fs";

interface LangTree
{
    commands:{ [key:string]:string; },
    item:{ [key:string]:string[]; },
}

interface LangData
{
    [key:string]:LangTree;
}

export function readLang(path:string):LangData
{
    const lang:LangData = {};
    const woolColor = new Map<string, number>([
        ['white', 0],
        ['orange', 1],
        ['magenta', 2],
        ['lightBlue', 3],
        ['yellow', 4],
        ['lime', 5],
        ['pink', 6],
        ['gray', 7],
        ['silver', 8],
        ['cyan', 9],
        ['purple', 10],
        ['blue', 11],
        ['brown', 12],
        ['green', 13],
        ['red', 14],
        ['black', 15],
    ]);
    const dyeColor = new Map<string, number>([
        ['black', 0],
        ['red', 1],
        ['green', 2],
        ['brown', 3],
        ['blue', 4],
        ['purple', 5],
        ['cyan', 6],
        ['silver', 7],
        ['gray', 8],
        ['pink', 9],
        ['lime', 10],
        ['yellow', 11],
        ['lightBlue', 12],
        ['magenta', 13],
        ['orange', 14],
        ['white', 15],
        ['black_new', 16],
        ['brown_new', 17],
        ['blue_new', 18],
        ['white_new', 19],
    ]);
    const skullName = new Map<string, number>([
        ['skeleton', 0],
        ['wither', 1],
        ['zombie', 2],
        ['char', 3],
        ['creeper', 4],
        ['dragon', 5],
        ['player', -1],
    ]);
    const woodName = new Map<string, number>([
        ['oak', 0],
        ['spruce', 1],
        ['birch', 2],
        ['jungle', 3],
        ['acacia', 4],
        ['dark_oak', 5],
        ['big_oak', 5],
    ]);
    const anvilName = new Map<string, number>([
        ['intact', 0],
        ['slightlyDamaged', 4],
        ['veryDamaged', 8],
    ]);
    const monsterEggName = new Map<string, number>([
        ['stone', 0],
        ['cobble', 1],
        ['brick', 2],
        ['mossybrick', 3],
        ['crackedbrick', 4],
        ['chiseledbrick', 5],
    ]);
    const prismarineName = new Map<string, number>([
        ['rough', 0],
        ['bricks', 1],
        ['dark', 2],
    ]);
    const quartzBlockName = new Map<string, number>([
        ['default',0],
        ['chiseled',1],
        ['lines',2],
        ['smooth',3],
    ]);
    const wallNames = new Map<string, number>([
        ['normal', 0],
        ['mossy', 1],
        ['granite', 2],
        ['diorite', 3],
        ['andesite', 4],
        ['sandstone', 5],
        ['brick', 6],
        ['stone_brick', 7],
        ['mossy_stone_brick', 8],
        ['end_brick', 9],
        ['nether_brick', 10],
        ['prismarine', 11],
        ['red_sandstone', 12],
        ['red_nether_brick', 13],
    ]);
    const stoneNames = new Map<string, number>([
        ['stone', 0],
        ['granite', 1],
        ['graniteSmooth', 2],
        ['diorite', 3],
        ['dioriteSmooth', 4],
        ['andesite', 5],
        ['andesiteSmooth', 6],
    ]);
    const redFlowerNames = new Map<string, number>([
        ['poppy', 0],
        ['blueOrchid', 1],
        ['allium', 2],
        ['houstonia', 3],
        ['tulipRed', 4],
        ['tulipOrange', 5],
        ['tulipWhite', 6],
        ['tulipPink', 7],
        ['oxeyeDaisy', 8],
        ['cornflower', 9],
        ['lilyOfTheValley', 10],
    ]);
    const yellowFlowerNames = new Map<string, number>([
        ['dandelion', 0],
    ]);
    const spongeNames = new Map<string, number>([
        ['dry', 0],
        ['wet', 1],
    ]);
    const purpurNames = new Map<string, number>([
        ['default', 0],
        ['chiseled', 1],
        ['lines', 2],
    ]);
    const doublePlantsNames = new Map<string, number>([
        ['sunflower', 0],
        ['syringa', 1],
        ['grass', 2],
        ['fern', 3],
        ['rose', 4],
        ['paeonia', 5],
    ]);
    const seagrassNames = new Map<string, number>([
        ['seagrass', 0],
    ]);
    const tallgrassNames = new Map<string, number>([
        ['grass', 0],
        ['fern', 1],
    ]);
    const sandNames = new Map<string, number>([
        ['red', 1],
    ]);
    const elementMap = new Map<string, number>([
        ['unknown', 0],
        ['h', 1],
        ['he', 2],
        ['li', 3],
        ['be', 4],
        ['b', 5],
        ['c', 6],
        ['n', 7],
        ['o', 8],
        ['f', 9],
        ['ne', 10],
        ['na', 11],
        ['mg', 12],
        ['al', 13],
        ['si', 14],
        ['p', 15],
        ['s', 16],
        ['cl', 17],
        ['ar', 18],
        ['k', 19],
        ['ca', 20],
        ['sc', 21],
        ['ti', 22],
        ['v', 23],
        ['cr', 24],
        ['mn', 25],
        ['fe', 26],
        ['co', 27],
        ['ni', 28],
        ['cu', 29],
        ['zn', 30],
        ['ga', 31],
        ['ge', 32],
        ['as', 33],
        ['se', 34],
        ['br', 35],
        ['kr', 36],
        ['rb', 37],
        ['sr', 38],
        ['y', 39],
        ['zr', 40],
        ['nb', 41],
        ['mo', 42],
        ['tc', 43],
        ['ru', 44],
        ['rh', 45],
        ['pd', 46],
        ['ag', 47],
        ['cd', 48],
        ['in', 49],
        ['sn', 50],
        ['sb', 51],
        ['te', 52],
        ['i', 53],
        ['xe', 54],
        ['cs', 55],
        ['ba', 56],
        ['la', 57],
        ['ce', 58],
        ['pr', 59],
        ['nd', 60],
        ['pm', 61],
        ['sm', 62],
        ['eu', 63],
        ['gd', 64],
        ['tb', 65],
        ['dy', 66],
        ['ho', 67],
        ['er', 68],
        ['tm', 69],
        ['yb', 70],
        ['lu', 71],
        ['hf', 72],
        ['ta', 73],
        ['w', 74],
        ['re', 75],
        ['os', 76],
        ['ir', 77],
        ['pt', 78],
        ['au', 79],
        ['hg', 80],
        ['tl', 81],
        ['pb', 82],
        ['bi', 83],
        ['po', 84],
        ['at', 85],
        ['rn', 86],
        ['fr', 87],
        ['ra', 88],
        ['ac', 89],
        ['th', 90],
        ['pa', 91],
        ['u', 92],
        ['np', 93],
        ['pu', 94],
        ['am', 95],
        ['cm', 96],
        ['bk', 97],
        ['cf', 98],
        ['es', 99],
        ['fm', 100],
        ['md', 101],
        ['no', 102],
        ['lr', 103],
        ['rf', 104],
        ['db', 105],
        ['sg', 106],
        ['bh', 107],
        ['hs', 108],
        ['mt', 109],
        ['ds', 110],
        ['rg', 111],
        ['cn', 112],
        ['nh', 113],
        ['fl', 114],
        ['mc', 115],
        ['lv', 116],
        ['ts', 117],
        ['og', 118],
    ]);
    function elementNames(id:string, dataName:string):[string, number]
    {
        const num = elementMap.get(dataName);
        if (num === undefined) console.error('no element number: '+dataName);
        return ['element_'+num, 0];
    }

    type NameMapFunc = (id:string, dataName:string)=>[string, number|undefined];
    const dataNameMap = new Map<string, Map<string, number>|null|NameMapFunc>([
        ['skull', skullName],
        ['anvil', anvilName],
        ['monster_egg', monsterEggName],
        ['prismarine', prismarineName],
        ['quartz_block', quartzBlockName],
        ['cobblestone_wall', wallNames],
        ['red_flower', redFlowerNames],
        ['yellow_flower', yellowFlowerNames],
        ['sponge', spongeNames],
        ['stone', stoneNames],
        ['purpur_block', purpurNames],
        ['double_plant', doublePlantsNames],
        ['seagrass', seagrassNames],
        ['tallgrass', tallgrassNames],
        ['sand', sandNames],
        ['glazedTerracotta', (id, dataName)=>{
            return [dataName+'_glazed_terracotta', 0];
        }],
        ['log', (id, dataName)=>{
            switch (dataName)
            {
            case 'acacia': return ['log2', 0];
            case 'big_oak': return ['log2', 1];
            default: return [id, woodName.get(dataName)];
            }
        }],
        ['element', elementNames],

        ['boat', woodName],
        ['sapling', woodName],
        ['wood', woodName],
        ['wooden_slab', woodName],
        ['planks', woodName],

        ['banner', dyeColor],
        ['dye', dyeColor],
        ['standing_banner', dyeColor],
        ['carpet', dyeColor],

        ['bed', woolColor],
        ['wool', woolColor],
        ['stained_glass', woolColor],
        ['stained_glass_pane', woolColor],
        ['stained_hardened_clay', woolColor],
        ['concrete', woolColor],
        ['concretePowder', woolColor],

        ['spawn_egg', null],
        ['banner_pattern', null],
        ['chalkboard', null],
        ['map', null],
    ]);

    const renameId = new Map<string, [string, number]>([
        ['muttonCooked', ['muttoncooked', -1]],
        ['muttonRaw', ['muttonraw', -1]],
        ['charcoal', ['coal', 1]],
        ['appleEnchanted', ['appleenchanted', -1]],
    ]);


    let keys:string = '';
    function readNs():string
    {
        const nsidx = keys.indexOf('.');
        if (nsidx === -1)
        {
            const key = keys;
            keys = '';
            return key;
        }
        const key = keys.substr(0, nsidx);
        keys = keys.substr(nsidx+1);
        return key;
    }
    
    function putItem(tree:LangTree, id:string, dataId:number, name:string):void
    {
        let arr = tree.item[id];
        if (!arr) tree.item[id] = arr = [];
        dataId++;
        if (arr[dataId]) console.error(`already exists: ${id}:${dataId} ${name} ${arr[dataId]}`);
        else arr[dataId] = name;
    }

    function putItemWith(tree:LangTree, id:string, nameMap:Map<string,number>|NameMapFunc, name:string):boolean
    {
        const dataName = readNs();
        let dataId:number|undefined;
        if (typeof nameMap === 'function')
        {
            [id, dataId] = nameMap(id, dataName);
        }
        else
        {
            dataId = nameMap.get(dataName);
        }
        if (dataId === undefined) return false;
        if (dataId === -1) return true;
        console.assert(keys === '');
        putItem(tree, id, dataId, name);
        return true;
    }

    function parseLang(name:string, content:string):void
    {
        let tree:LangTree = lang[name];
        if (!tree) lang[name] = tree = {commands:{}, item:{}};
        for (let line of readLines(content))
        {
            const comment = line.indexOf('#');
            if (comment !== -1)
            {
                line = line.substr(0, comment);
            }
            line = line.trimRight();
            const split = line.indexOf('=');

            const oriname = line.substr(0, split);
            keys = oriname
            const value = line.substr(split+1);

            switch (readNs())
            {
            case 'commands':
                tree.commands[keys.replace(/[-\.]/g, '_')] = value;
                break;
            case 'item':
            case 'tile':
                if (!keys.endsWith('.name')) break;
                keys = keys.substr(0, keys.length-5);
                const itemIdLang = readNs();
                const [itemId, newDataValue] = renameId.get(itemIdLang) || [itemIdLang, -1];

                if (keys === '')
                {
                    putItem(tree, itemId, newDataValue, value);
                    break;
                }

                const dvmap = dataNameMap.get(itemId);
                if (dvmap)
                {
                    if (putItemWith(tree, itemId, dvmap, value)) break;
                }
                else if (dvmap === null)
                {
                    break;
                }
                console.error('Unknown Item: '+oriname);
                break;
            }
        }

        for (const itemId in tree.item)
        {
            const arr = tree.item[itemId];
            if (!arr[0]) arr[0] = arr[1];
        }
    }

    for (const [name, content] of readFiles(path, ".lang"))
    {
        if (name !== 'ko_KR' && name !== 'en_US') continue;
        parseLang(name, content);
    }
    
    
    for (const [name, content] of readFiles("..\\development_resource_packs\\ruarule-rp\\texts", ".lang"))
    {
        if (name !== 'ko_KR' && name !== 'en_US') continue;
        parseLang(name, content);
    }
    
    lang.en_US.item.banner[0] = 'Banner';
    lang.en_US.item.boat[0] = 'Boat';
    lang.en_US.item.dye[0] = 'Dye';
    lang.en_US.item.skull[0] = 'Head';
    lang.en_US.item.sapling[0] = 'Sapling';
    lang.en_US.item.spawn_egg = ['Spawn Egg'];

    lang.ko_KR.item.banner[0] = '배너';
    lang.ko_KR.item.boat[0] = '보트';
    lang.ko_KR.item.dye[0] = '염료';
    lang.ko_KR.item.skull[0] = '머리';
    lang.ko_KR.item.sapling[0] = '묘목';
    lang.ko_KR.item.spawn_egg = ['생성 알'];

    return lang;
}

export function writeLang(path:string, lang:LangData):void
{
    const out = createWriteStream(path, 'utf-8');
    out.write(`
export const lang_data = `);
    out.write(JSON.stringify(lang, null, 4));
    out.write(`;
function deepFreeze(obj:any):void
{
    if (typeof obj === 'function') return;
    if (typeof obj !== 'object') return;
    for (const key in obj)
    {
        deepFreeze(obj[key]);
    }
    Object.freeze(obj);
}
deepFreeze(lang_data);
`);
    out.end();
    
    console.log('lang generated');
}
