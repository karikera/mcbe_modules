
import LOG from '@mcbe/ruakr_log';
import { db, addSlashes } from '@bdsx/ruakr_db';

function install():void
{
    let enums = '"';
    for (let i=0;i<LOG.Action.length;i++)
    {
        enums += addSlashes(LOG.Action[i]);
        enums += '","';
    }
    enums = enums.substr(0, enums.length-2);

    db.query('create table if not exists act('
        +'id bigint unsigned not null primary key auto_increment, '
        +'time timestamp not null, '
        +'tag char(1) not null, '
        +'action enum('+enums+') not null,'
        +'user char('+LOG.USER_NAME_LENGTH+'), '
        +'user_x int,'
        +'user_y int,'
        +'user_z int,'
        +'x int,'
        +'y int,'
        +'z int,'
        +'item varchar('+LOG.ITEM_ID_LENGTH+'),'
        +'item2 varchar('+LOG.ITEM_ID_LENGTH+'),'
        +'count smallint unsigned,'
        +'count2 smallint unsigned,'
        +'msg varchar(10000), '
        +'index(time), index(user), index(x,y,z))');
    db.query('alter table act modify column action enum('+enums+') not null');
}
install();

function str(param?:string|null):string
{
    return param != null ? '"'+addSlashes(param)+'"' : 'null';
}

function num(param?:number|null):number|null
{
    return param != null ? param : null;
}

LOG.on(record=>{
    if (record.user && record.user.length >= LOG.USER_NAME_LENGTH)
    {
        console.error(`Too long user name length: `+record.item);
        record.user = record.user.substr(0, LOG.USER_NAME_LENGTH-1)+'?';
    }
    if (record.item && record.item.length >= LOG.ITEM_ID_LENGTH)
    {
        console.error(`Too long item length: `+record.item);
        record.item = record.item.substr(0, LOG.USER_NAME_LENGTH-1)+'?';
    }
    if (record.item2 && record.item2.length >= LOG.ITEM_ID_LENGTH)
    {
        console.error(`Too long item2 length: `+record.item2);
        record.item2 = record.item2.substr(0, LOG.USER_NAME_LENGTH-1)+'?';
    }
    db.query(`insert into act set time=current_timestamp`
    +`,tag='${record.tag}'`
    +`,action='${LOG.Action[record.action]}'`
    +`,user=${str(record.user)}`
    +`,user_x=${record.upos.x},user_y=${record.upos.y},user_z=${record.upos.z}`
    +`,x=${record.pos.x},y=${record.pos.y},z=${record.pos.z}`
    +`,msg=${str(record.msg)}`
    +`,item=${str(record.item)}`
    +`,item2=${str(record.item2)}`
    +`,count=${num(record.count)}`
    +`,count2=${num(record.count2)}`);
});
