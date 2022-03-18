var reviews = [5, 4.3, 4.8, 5, 1, 2];
var total = 0, average = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
average = total / reviews.length;
console.log("Average = ".concat(average));
