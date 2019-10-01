
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
}

const CHECK_WAIT = -1;
const CHECK_PASSED = -2;

class Package
{
    /**
     * @param {string} line 
     * @param {string} name
     */
    constructor(line, name)
    {
        this.name = name;
        if (!mainDepends.has(this.name))
        {
            throw Error(`no dependency in main package.json `);
        }
    
        this.result = publish_result[name]
        if (!this.result) publish_result[name] = this.result = {};
    
        this.path = line.substr(1);
        if (!fs.existsSync(cwd + this.path+'/.npmignore')) console.error(`no .npmignore`);
        
        let packagetext;
        try
        {
            packagetext = fs.readFileSync(cwd + this.path+'/package.json', 'utf-8');
        }
        catch (err)
        {
            throw Error(`cannot open package.json, ${err.code}`);
        }
        
        try
        {
            this.json = JSON.parse(packagetext);
            if (this.json.name !== this.name)
            {
                throw Error(`wrong package name`);
            }
        }
        catch (err)
        {
            throw Error(`invalid package.json`);
        }

        this.isLatest = this.result.version === this.json.version;
        this.entered = false;

        this.check = CHECK_WAIT;
        this.checkStackIdx = 0;
    }

}

/** @type {Map<string, Package>} */
const packages = new Map;
for (const line of lines.slice(start, end))
{
    if (!line.startsWith('!/node_modules/'))
    {
        console.error(`invalid path ${line}`);
        errorCount++;
        continue;
    }

    const name = line.substr(15);
    try
    {
        packages.set(name, new Package(line, name));
    }
    catch (err)
    {
        console.error(`${name}: invalid package.json`);
        errorCount++;
    }
}


const stacks = [];

/**
 * @param {Package} package 
 */
function checkDependency(package)
{
    if (package.check === CHECK_PASSED) return;
    if (package.check !== CHECK_WAIT) 
    {
        console.error('Dependency check failed: '+stacks.slice(package.check).join('->'));
        process.exit(-1);
    }
    package.check = stacks.length;
    stacks.push(package);
    for (const dep in package.json.dependencies)
    {
        const pkg = packages.get(dep);
        if (!pkg) continue;
        checkDependency(pkg);
    }
    stacks.pop();
    package.check = CHECK_PASSED;
}

for (const package of packages.values())
{
    checkDependency(package);
}

for (const package of packages.values())
{
    if (package.isLatest)
    {
        latestCount++;
        continue;
    }

    console.log(`${package.name}: publishing...`);
    process.chdir(cwd + package.path);

    try
    {
        if (package.name.startsWith('@'))
        {
            cp.execSync('npm publish --access public');   
        }
        else
        {
            cp.execSync('npm publish');
        }
        package.result.version = package.json.version;
        publishCount++;
    }
    catch (err)
    {
        const message = err.message;
        if (message.indexOf('You cannot publish over the previously published versions') !== -1)
        {
            console.log(`${package.name}: latest`);
            package.result.version = package.json.version;
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

