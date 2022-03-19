export abstract class Shape {

    constructor(private _x: number, private _y:number){
    }
 
    public get x() : number {
        return this._x;
    }

    public set x(value : number) {
        this._x = value;
    }
    
    public get y() : number {
        return this._y; 
    }

    public set y(value : number) {
        this._y = value;
    }

    // METHOD TO BE OVERRIDDEN
    getInfo(): string {
        return `Shape: x=${this._x}, y=${this._y}`;
    }

    // ABSTRACT METHOD
    abstract calculateArea(): number;
}