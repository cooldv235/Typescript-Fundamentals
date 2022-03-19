"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
// let myShape = new Shape(12,14);
// console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(5, 10, 13);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(0, 0, 5, 6);
console.log(myRectangle.getInfo());
