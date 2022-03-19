import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// DECLARE AN ARRAY FOR COACHES TO PUSH
let theCoaches: Coach[] = [];

// PUSH THE COACHES TO THE ARRAY
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

// PRINT ELEMENTS OF THE ARRAY
for(let eachCoach of theCoaches){
    console.log(eachCoach.getDailyWorkout());
}