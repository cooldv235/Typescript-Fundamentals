var Customer = /** @class */ (function () {
    // CONSTRUCTOR DEFINITION
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Bruce", "Wayne");
// myCustomer.firstName = "John";
// myCustomer.lastName = "Doe";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
