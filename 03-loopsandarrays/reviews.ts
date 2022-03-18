let reviews: number[] = [5,4.3,4.8,5,1,2];
let total:number = 0,average:number = 0;

for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

average = total / reviews.length;

console.log(`Average = ${average}`);



