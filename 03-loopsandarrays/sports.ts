let sportsOne:string[] = ['Golf','Cricket','Football','Handball','Basketball'];

// SIMPLE FOR LOOPS
for(let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}
console.log('End of Simple For Loop');

// SIMPLIFIED FOR LOOP
for(let eachSport of sportsOne){
    console.log(eachSport);
}
console.log('End of SIMPLIFIED For Loop');

