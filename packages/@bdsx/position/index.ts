import { Vector3, IVector3 } from "krgeometry";
import { DimensionId } from "bdsx/common";

export class Position extends Vector3
{
    constructor(x:number, y:number, z:number, 
        public readonly dimension:DimensionId)
    {
        super(x, y, z);
    }

    toString():string
    {
        return `${this.x.toFixed(1)},${this.y.toFixed(1)},${this.z.toFixed(1)},${this.dimension}`;
    }

    equals(pos: Position):boolean
    {
        return this.x === pos.x && this.y === pos.y && this.z === pos.z && this.dimension === pos.dimension;
    }

    floor():Position
    {
        return new Position(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), this.dimension);
    }

    add(pos: IVector3): Position
    {
        return new Position(this.x+pos.x, this.y+pos.y, this.z+pos.z, this.dimension);
    }
    sub(pos: IVector3): Position
    {
        return new Position(this.x-pos.x, this.y-pos.y, this.z-pos.z, this.dimension);
    }
    neg(): Position
    {
        return new Position(-this.x, -this.y, -this.z, this.dimension);
    }
    mul(n: number): Position
    {
        return new Position(this.x*n, this.y*n, this.z*n, this.dimension);
    }
    div(n: number): Position
    {
        return new Position(this.x/n, this.y/n, this.z/n, this.dimension);
    }

    static make(v:IVector3, dimension?:DimensionId):Position
    {
        return new Position(v.x, v.y, v.z, 
            dimension === undefined ? DimensionId.Overworld : dimension);
    }

    static readonly NULL = new Position(0, -1, 0, DimensionId.Overworld);
}
