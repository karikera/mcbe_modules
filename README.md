
## What is this?
This is compilations of my packages  
Packages will depart when they grow big enough  
It's a VSCode Project  

## source in node_modules
It contains source code in node_modules directory to manage multiple packages  
And It makes bugs by npm  
Projects will clean by npm when use `npm install`  
Please commit modified sources before use `npm install` and revert it

## Launch
It have 4 launch options by VSCode
* Publish: It will publish all npm modules
* Test: It will test 
* Generate ID: It will generate `@mcbe/identifier/id.ts` and `@mcbe/recipe/list.ts` with vanila_packs and extra_id.ts
* Generate Lang: It will generate `@mcbe/lang/data/*` with vanila_packs/lang

## &lt;packages&gt; tag in .gitignore & .eslintignore
It indicates package list to manage by this project  
If you put it to one of both, It will automatically add to other one when launch `Test`  
And It will add to `package.json` and `tsconfig.json` automatically  

## File explanations
* publish_result.json: Published versions by `Publish`, It will used to check latest version
* node_modules/@mcbe/*: packages
* resource_packs/vanila: vanila resource_pack, It will parsed by `Test`
* behavior_packs/vanila: vanila behavior_pack, It will parsed by `Test`
* tool/publish.ts: test and publish tool (`Publish`, `Test`)
* tool/generate.ts: generate tool (`Generate ID`, `Generate Lang`)
