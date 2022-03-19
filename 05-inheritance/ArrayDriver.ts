import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5,10,13);
let myRectangle = new Rectangle(0,0,5,6);

// DECLARE AN ARRAY OF SHAPES INTIALLY EMPTY
let theShapes: Shape[] = [];

// ADD THE SHAPES TO THE ARRAY
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let eachShape of theShapes){
    console.log(eachShape.getInfo());
    console.log(eachShape.calculateArea());
    console.log();
}