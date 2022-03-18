class Customer {
    // PROPERTIES
    private _firstName: string;
    private _lastName: string;

    // CONSTRUCTOR DEFINITION
    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // GETTER FUNCTION (USE TO ACCESS PRIVATE PROPERTIES OF A CLASS)
    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string){
        this._lastName = value;
    }


}

let myCustomer = new Customer("Bruce","Wayne");

// myCustomer.firstName = "John";
// myCustomer.lastName = "Doe";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);