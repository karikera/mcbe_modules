
export interface IRect
{
    left:number;
    top:number;
    right:number;
    bottom:number;
}

export interface IBox
{
    x1:number;
    y1:number;
    z1:number; 
    x2:number;
    y2:number;
    z2:number;
}

export interface IVectorXZ
{
    x:number;
    z:number;
}

export interface IVector3 
{
    x:number;
    y:number;
    z:number;
}

export class Rect implements IRect
{
    constructor(
        public readonly left:number, 
        public readonly top:number, 
        public readonly right:number, 
        public readonly bottom:number)
    {
    }

    /** make rectangle from position and size */
    static expandFrom(pos:IVectorXZ, size:number):Rect
    {
        return new Rect(pos.x-size, pos.z-size, pos.x+size, pos.z+size);
    }

    expand(border:number):Rect
    {
        return new Rect(this.left-border, this.top-border, this.right+border, this.bottom+border);
    }

    intersect(other:IRect):boolean
    {
        return this.right > other.left && this.bottom > other.top &&
            other.right > this.left && other.bottom > this.top;
    }

    contains(pos:IVectorXZ):boolean
    {
        return this.left <= pos.x && pos.x <= this.right && this.top <= pos.z && pos.z <= this.bottom;
    }
}

export class Box implements IBox
{
    constructor(
        public readonly x1:number, public readonly y1:number, public readonly z1:number, 
        public readonly x2:number, public readonly y2:number, public readonly z2:number)
    {
    }

    getPoint1():Vector3
    {
        return new Vector3(this.x1, this.y1, this.z1);
    }
    
    getPoint2():Vector3
    {
        return new Vector3(this.x2, this.y2, this.z2);
    }

    expand(border:number):Box
    {
        return new Box(
            this.x1-border, this.y1-border, this.z1-border, 
            this.x2+border, this.y2+border, this.z2+border
        );
    }

    moveBy(offset:Vector3):Box
    {
        return new Box(
            this.x1+offset.x, this.y1+offset.y, this.z1+offset.z, 
            this.x2+offset.x, this.y2+offset.y, this.z2+offset.z
        );
    }

    intersect(other:IBox):boolean
    {
        return this.x2 > other.x1 && this.y2 > other.y1 && this.z2 > other.z1 &&
            other.x2 > this.x1 && other.y2 > this.y1 && other.z2 > this.z1;
    }

    union(other:IBox):Box
    {
        return new Box(
            Math.min(this.x1, other.x1),
            Math.min(this.y1, other.y1),
            Math.min(this.z1, other.z1),
            Math.max(this.x2, other.x2),
            Math.max(this.y2, other.y2),
            Math.max(this.z2, other.z2)
        );
    }

    contains(pos:IVector3):boolean
    {
        return this.x1 <= pos.x && pos.x < this.x2+1 && 
            this.y1 <= pos.y && pos.y < this.y2+1 && 
            this.z1 <= pos.z && pos.z < this.z2+1;
    }

    containsXZ(pos:IVectorXZ):boolean
    {
        return this.x1 <= pos.x && pos.x < this.x2+1 && 
            this.z1 <= pos.z && pos.z < this.z2+1;
    }
    
    /** make box from IBox */
    static make(box:IBox):Box
    {
        return new Box(box.x1, box.y1, box.z1, box.x2, box.y2, box.z2);
    }

    /** simmilar with fromVector, but min to x~z1, max to x~z2 */
    static align(a:IVector3, b:IVector3):Box
    {
        let x1:number;
        let y1:number;
        let z1:number;
        let x2:number;
        let y2:number;
        let z2:number;

        if (a.x < b.x) { x1 = a.x; x2 = b.x; }
        else { x1 = b.x; x2 = a.x; }
        if (a.y < b.y) { y1 = a.y; y2 = b.y; }
        else { y1 = b.y; y2 = a.y; }
        if (a.z < b.z) { z1 = a.z; z2 = b.z; }
        else { z1 = b.z; z2 = a.z; }

        return new Box(x1, y1, z1, x2, y2, z2);
    }

    static expandFrom(pos:IVector3, size:number):Box
    {
        return new Box(
            pos.x-size, pos.y-size, pos.z-size, 
            pos.x+size, pos.y+size, pos.z+size);
    }

    static fromVector(pos1:IVector3, pos2:IVector3):Box
    {
        return new Box(
            pos1.x, pos1.y, pos1.z,
            pos2.x, pos2.y, pos2.z
        );
    }

}

export class Vector3 implements IVector3
{
    constructor(public readonly x:number, public readonly y:number, public readonly z:number)
    {
    }

    normalize():Vector3
    {
        const len = 1 / this.length();
        return new Vector3(this.x * len, this.y * len, this.z * len);
    }
    
    /** this == pos */
    equals(pos:IVector3):boolean
    {
        return Vector3.equals(this, pos);
    }

    /** this + pos */
    add(pos:IVector3):Vector3
    {
        return Vector3.add(this, pos);
    }

    /** this - pos */
    sub(pos:IVector3):Vector3
    {
        return Vector3.sub(this, pos);
    }

    /** -this */
    neg():Vector3
    {
        return Vector3.neg(this);
    }
    
    /** this * n */
    mul(n:number):Vector3
    {
        return Vector3.mul(this, n);
    }
    
    /** this / n */
    div(n:number):Vector3
    {
        return Vector3.div(this, n);
    }
    
    floor():Vector3
    {
        return new Vector3(
            Math.floor(this.x),
            Math.floor(this.y),
            Math.floor(this.z)
        );
    }

    ceil():Vector3
    {
        return new Vector3(
            Math.ceil(this.x),
            Math.ceil(this.y),
            Math.ceil(this.z)
        );
    }

    round():Vector3
    {
        return new Vector3(
            Math.round(this.x),
            Math.round(this.y),
            Math.round(this.z)
        );
    }

    length():number
    {
        return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
    }

    /** max(abs(x), abs(y), abs(z)) */
    diaLength():number
    {
        return Math.max(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z));
    }

    /** (this-v).length() */
    distance(v:IVector3):number
    {
        return Vector3.distance(this, v);
    }

    /** distance with xz */
    distanceXZ(v:IVectorXZ):number
    {
        const rx = this.x - v.x;
        const rz = this.z - v.z;
        return Math.sqrt(rx*rx+rz*rz);
    }
 
    /** format: (x,y,z) */
    toString():string
    {
        return Vector3.toString(this);
    }

    /** make Vector3 from IVector3 */
    static make(pos:IVector3):Vector3
    {
        return new Vector3(pos.x, pos.y, pos.z);
    }

    /** pos1 == pos2 */
    static equals(pos1:IVector3, pos2:IVector3):boolean
    {
        return pos1.x === pos2.x && pos1.y === pos2.y && pos1.z === pos2.z;
    }

    /** pos1 + pos2 */
    static add(pos1:IVector3, pos2:IVector3):Vector3
    {
        return new Vector3(pos1.x + pos2.x, pos1.y + pos2.y, pos1.z + pos2.z);
    }

    /** pos1 - pos2 */
    static sub(pos1:IVector3, pos2:IVector3):Vector3
    {
        return new Vector3(pos1.x - pos2.x, pos1.y - pos2.y, pos1.z - pos2.z);
    }

    /** -v */
    static neg(v:IVector3):Vector3
    {
        return new Vector3(-v.x, -v.y, -v.z);
    }

    /** v * n */
    static mul(v:IVector3, n:number):Vector3
    {
        return new Vector3(v.x * n, v.y * n, v.z * n);
    }

    /** v / n */
    static div(v:IVector3, n:number):Vector3
    {
        return new Vector3(v.x / n, v.y / n, v.z / n);
    }

    /** (v1 - v2).length() */
    static distance(v1:IVector3, v2:IVector3):number
    {
        const rx = v1.x - v2.x;
        const ry = v1.y - v2.y;
        const rz = v1.z - v2.z;
        return Math.sqrt(rx*rx+ry*ry+rz*rz);
    }

    /** format: (x,y,z) */
    static toString(pos:IVector3):string
    {
        return '('+pos.x.toFixed(1)+','+pos.y.toFixed(1)+','+pos.z.toFixed(1)+')';
    }

    /** 0, 0, 0 */
    static readonly ZERO = new Vector3(0, 0, 0);

    /** 1, 1, 1 */
    static readonly ONE = new Vector3(1, 1, 1);
    
    /** 0.5, 0.5, 0.5 */
    static readonly HALF = new Vector3(0.5, 0.5, 0.5);

    /** 1, 0, 1 */
    static readonly XZ = new Vector3(1, 0, 1);

    /** 1, 0, 0 */
    static readonly X = new Vector3(1, 0, 0);

    /** 0, 1, 0 */
    static readonly Y = new Vector3(0, 1, 0);

    /** 0, 0, 1 */
    static readonly Z = new Vector3(0, 0, 1);
}

