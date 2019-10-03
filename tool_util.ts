
import fs = require('fs');
import stripJsonComments = require('strip-json-comments');

export function * readJsonFiles<T>(path:string):IterableIterator<[string, T]>
{
    for (const [name, content] of readFiles(path, '.json'))
    {
        const parsed = JSON.parse(stripJsonComments(content));
        yield [name, parsed];
    }
}

export function * readFiles(path:string, endsWith:string):IterableIterator<[string, string]>
{
    const files = fs.readdirSync(path);
    for (const file of files)
    {
        if (!file.endsWith(endsWith)) continue;
        const name = file.substr(0, file.length - endsWith.length);            
        const content = fs.readFileSync(path+'\\'+file, 'utf-8');
        yield [name, content];
    }
}

export function * readLines(text:string):IterableIterator<string>
{
    let p = 0;

    for (;;)
    {
        const lineidx = text.indexOf('\n', p);
        if (lineidx === -1)
        {
            const line = text.substr(p);
            yield line.endsWith('\r') ? line.substr(0, line.length-1) : line;
            return;
        }

        const line = text.substring(p, lineidx);
        p = lineidx + 1;
        
        yield line.endsWith('\r') ? line.substr(0, line.length-1) : line;
    }
}
