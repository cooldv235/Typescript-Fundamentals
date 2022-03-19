"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 13);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 5, 6);
// DECLARE AN ARRAY OF SHAPES INTIALLY EMPTY
var theShapes = [];
// ADD THE SHAPES TO THE ARRAY
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var eachShape = theShapes_1[_i];
    console.log(eachShape.getInfo());
    console.log(eachShape.calculateArea());
    console.log();
}
