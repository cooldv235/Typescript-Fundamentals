class Customer {
    // PROPERTIES
    firstName: string;
    lastName: string;

    // CONSTRUCTOR DEFINITION
    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

let myCustomer = new Customer("Bruce","Wayne");

// myCustomer.firstName = "John";
// myCustomer.lastName = "Doe";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);