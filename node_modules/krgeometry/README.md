
## About this
It contains `Rectangle`, `Box(AABB)`, `Vector3`  
Just simple geoms for sharing by my packages.  
It receives parameter as interface for compatibility

## References

```ts
export class Rect implements IRect
{
    left:number;
    top:number;
    right:number;
    bottom:number;

    constructor(left:number, top:number, right:number, bottom:number);

    static expandFrom(pos:IVectorXZ, size:number):Rect;

    expand(border:number):Rect;

    intersect(other:IRect):boolean;

    contains(pos:IVectorXZ):boolean;
}

export class Box implements IBox
{
    x1:number, 
    y1:number, 
    z1:number, 
    x2:number, 
    y2:number, 
    z2:number;
    constructor(x1:number, y1:number, z1:number, x2:number, y2:number, z2:number);

    getPoint1():Vector3;
    getPoint2():Vector3;
    expand(border:number):Box;
    moveBy(offset:Vector3):Box;
    intersect(other:IBox):boolean;
    union(other:IBox):Box;
    contains(pos:IVector3):boolean;
    containsXZ(pos:IVectorXZ):boolean;
    
    // make box from IBox
    static make(box:IBox):Box;

    // simmilar with fromVector, but min to x~z1, max to x~z2
    static align(a:IVector3, b:IVector3):Box;
    static expandFrom(pos:IVector3, size:number):Box;
    static fromVector(pos1:IVector3, pos2:IVector3):Box;

}

export class Vector3 implements IVector3
{
    x:number;
    y:number;
    z:number;

    constructor(x:number, y:number, z:number);
    
    normalize():Vector3;
    
    // this == pos
    equals(pos:IVector3):boolean;
    
    // this + pos
    add(pos:IVector3):Vector3;
    
    // this - pos
    sub(pos:IVector3):Vector3;

    // -this
    neg():Vector3;
    
    // this * n
    mul(n:number):Vector3;
    
    // this / n
    div(n:number):Vector3;
    
    floor():Vector3;

    ceil():Vector3;

    round():Vector3;

    length():number;

    // max(abs(x), abs(y), abs(z))
    diaLength():number;

    // (this-v).length()
    distance(v:IVector3):number;

    // distance with xz
    distanceXZ(v:IVectorXZ):number;
 
    // format: (x,y,z)
    toString():string;

    // make Vector3 from IVector3
    static make(pos:IVector3):Vector3;

    // pos1 == pos2
    static equals(pos1:IVector3, pos2:IVector3):boolean;

    // pos1 + pos2
    static add(pos1:IVector3, pos2:IVector3):Vector3;

    // pos1 - pos2
    static sub(pos1:IVector3, pos2:IVector3):Vector3;

    // -v
    static neg(v:IVector3):Vector3;

    // v * n
    static mul(v:IVector3, n:number):Vector3;

    // v / n
    static div(v:IVector3, n:number):Vector3;

    // (v1 - v2).length()
    static distance(v1:IVector3, v2:IVector3):number;

    // format: (x,y,z)
    static toString(pos:IVector3):string;

    static readonly ZERO = new Vector3(0, 0, 0);
    static readonly ONE = new Vector3(1, 1, 1);
    static readonly HALF = new Vector3(0.5, 0.5, 0.5);
    static readonly XZ = new Vector3(1, 0, 1);
    static readonly X = new Vector3(1, 0, 0);
    static readonly Y = new Vector3(0, 1, 0);
    static readonly Z = new Vector3(0, 0, 1);
}

interface IRect
{
    left:number;
    top:number;
    right:number;
    bottom:number;
}

interface IBox
{
    x1:number;
    y1:number;
    z1:number; 
    x2:number;
    y2:number;
    z2:number;
}

interface IVectorXZ
{
    x:number;
    z:number;
}

interface IVector3 
{
    x:number;
    y:number;
    z:number;
}

```
