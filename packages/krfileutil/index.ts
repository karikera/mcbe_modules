
import https = require('https');
import fs = require('fs');
import stripJsonComments = require('strip-json-comments');

export function firstLine(line:string):string
{
    const idx = line.indexOf('\n');
    if (idx === -1) return line;
    return line.substr(0, idx);
}

export function wget(url:string):Promise<string>
{
    return new Promise(resolve=>{
        const req = https.get(url, res=>{
            res.setEncoding('utf8');
            let data = '';
            res.on('data',  chunk=>{
                data += chunk;
            });
            res.on('end', ()=>{
                resolve(data);
            });
        });
        req.on('error', (e)=>{
            console.log('problem with request: ' + e.message);
        });
        req.end();
    });
}

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
    let files:string[];
    try
    {
        files = fs.readdirSync(path);
    }
    catch (err)
    {
        return;
    }
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
