export class Customer {

    // CONSTRUCTOR DEFINITION WITH PARAMETER PROPERTIES, IN THIS WE DO NOT HAVE TO EXPLICITLY DECLARE PRIVATE PROPERTIES BUT IN THE CONSTRUCTOR ITSELF AND IT AUTOMATICALLY DOES THE WORK.
    constructor(private _firstName: string, private _lastName: string){
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
