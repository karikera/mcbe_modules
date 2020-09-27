### Example
```ts
import { ArrayMap } from 'krarraymap';
const amap = new ArrayMap<string, numer>();

// push
amap.push('a', 1);
amap.push('a', 2);
amap.push('b', 3);
amap.push('b', 4);

// get
console.log(amap.get('a')); // [1,2]
console.log(amap.get('b')); // [3,4]
console.log(amap.get('c')); // undefined

// pop of undefined
console.log(amap.pop('c')); // undefined

// pop until delete
console.log(amap.pop('a')); // 2
console.log(amap.pop('a')); // 1
console.log(amap.get('a')); // undefined

// get or create
console.log(amap.gen('a')); // [1,2]
console.log(amap.gen('b')); // [3,4]
console.log(amap.gen('c')); // []

```
