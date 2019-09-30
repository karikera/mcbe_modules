
const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const cwd = process.cwd();
const gitignore = fs.readFileSync('.gitignore', 'utf-8');
const publish_result = JSON.parse(fs.readFileSync('publish_result.json', 'utf-8'));

let lines = gitignore.split(/\r?\n/g);

const start = lines.indexOf('##<packages>')+1;
const end = lines.indexOf('##</packages>', start);

const mainpackage = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const mainDepends = new Set(Object.keys(mainpackage.dependencies));

let latestCount = 0;
let publishCount = 0;
let errorCount = 0;

for (const line of lines.slice(start, end))
{
    if (!line.startsWith('!/node_modules/'))
    {
        console.error(`invalid path ${line}`);
        errorCount++;
        continue;
    }

    const package = line.substr(15);
    if (!mainDepends.has(package))
    {
        console.error(`${package}: no dependency in main package.json `);
        errorCount++;
        continue;
    }

    let result = publish_result[package]
    if (!result) publish_result[package] = result = {};

    process.chdir(path.join(cwd, line.substr(1)));
    if (!fs.existsSync('.npmignore')) console.error(`${package}: no .npmignore`);

    let packagejson;
    try
    {
        packagejson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
        if (packagejson.name !== package)
        {
            console.error(`${package}: wrong package name`);
            errorCount++;
            continue;
        }
    }
    catch (err)
    {
        console.error(`${package}: invalid package.json`);
        errorCount++;
        continue;
    }
    
    if (result.version === packagejson.version)
    {
        latestCount++;
        continue;
    }

    console.log(`${package}: publishing...`);
    try
    {
        if (package.startsWith('@'))
        {
            cp.execSync('npm publish --access public');   
        }
        else
        {
            cp.execSync('npm publish');
        }
        result.version = packagejson.version;
        publishCount++;
    }
    catch (err)
    {
        const message = err.message;
        if (message.indexOf('You cannot publish over the previously published versions') !== -1)
        {
            console.log(`${package}: latest`);
            result.version = packagejson.version;
            latestCount++;
        }
        else
        {
            console.error(message);
            errorCount++;
        }
    }
}

process.chdir(cwd);
fs.writeFileSync('publish_result.json', JSON.stringify(publish_result, null, 4), 'utf-8');

console.log('published: '+publishCount);
console.log('latest: '+latestCount);
if (errorCount !== 0)
{
    console.error('error: '+errorCount);
}
else
{
    console.log('error: '+errorCount);
}

// cp.execSync('npm publish');


