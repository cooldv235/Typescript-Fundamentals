"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
// DECLARE AN ARRAY FOR COACHES TO PUSH
var theCoaches = [];
// PUSH THE COACHES TO THE ARRAY
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
// PRINT ELEMENTS OF THE ARRAY
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var eachCoach = theCoaches_1[_i];
    console.log(eachCoach.getDailyWorkout());
}
