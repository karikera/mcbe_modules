
import fs = require('fs');
import path = require('path');

export class IgnoreList
{
    private readonly filepath:string;
    
    private readonly listBefore:string[];
    private readonly listAfter:string[];
    private list:string[];
    private readonly set:Set<string>;

    constructor(filepath:string)
    {
        this.filepath = path.resolve(filepath);
        const gitignore = fs.readFileSync(this.filepath, 'utf-8');
        let lines = gitignore.split(/\r?\n/g);
        
        const start = lines.indexOf('##<packages>')+1;
        const end = lines.indexOf('##</packages>', start);
        if (start !== 0)
        {
            this.listBefore = lines.slice(0, start);
            this.list = lines.slice(start, end);
            this.listAfter = lines.slice(end);
            this.set = new Set(this.list);
        }
        else
        {
            this.listBefore = lines;
            lines.push('##<packages>');
            this.list = [];
            this.listAfter = ['##</packages>'];
            this.set = new Set();
        }
    }

    add(list:IterableIterator<string>):void
    {
        let modified = false;
        for (const path of list)
        {
            if (this.set.has(path)) continue;
            modified = true;
            this.set.add(path);
        }
        if (modified)
        {
            this.list = [...this.set];
            this.save();
        }
    }

    save():void
    {
        fs.writeFileSync(this.filepath, this.listBefore.concat(this.list, this.listAfter).join('\n'), 'utf-8');
    }

    values():IterableIterator<string>
    {
        return this.list.values();
    }
}
