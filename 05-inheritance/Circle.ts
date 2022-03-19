import { Shape } from "./Shape";

export class Circle extends Shape {
    // ABSTRACT METHOD IMPLEMENTATION
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius,2);
    }

    constructor(theX: number,theY: number, private _radius: number) {
        // CALLING THE SUPER CONSTRUCTOR THAT IS DEFINED IN PARENT CLASS Shape
        super(theX,theY);
    }

    public get radius() : number {
        return this._radius;
    }

    public set radius(value : number) {
        this._radius = value;
    }

    // OVERRIDE THE getInfo() method
    getInfo(): string {
        // CALL SUPERCLASS METHOD
        return super.getInfo() + `  circle radius=${this._radius}`;
    }
    
    
}