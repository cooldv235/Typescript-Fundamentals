import { Shape } from "./Shape";

export class Rectangle extends Shape {
    // ABSTRACT METHOD IMPLEMENTATION
    calculateArea(): number {
        return this._width * this._length;
    }
    
    constructor(theX: number,theY: number,private _width:number,private _length:number){
        super(theX,theY);
    }

    public get width() : number {
        return this._width;
    }
    
    public get length() : number {
        return this._length;
    }

    public set width(value : number) {
        this._width = value;
    }
    
    public set length(value : number) {
        this._length = value;
    }
    
    getInfo(): string {
        return super.getInfo() + `, Rectangle width=${this._width}, length=${this._length}`;
    }

    
    
}