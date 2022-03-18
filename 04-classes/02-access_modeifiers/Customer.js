var Customer = /** @class */ (function () {
    // CONSTRUCTOR DEFINITION
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // GETTER FUNCTION (USE TO ACCESS PRIVATE PROPERTIES OF A CLASS)
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Bruce", "Wayne");
// myCustomer.firstName = "John";
// myCustomer.lastName = "Doe";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
