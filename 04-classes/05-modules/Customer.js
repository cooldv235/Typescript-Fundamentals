"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    // CONSTRUCTOR DEFINITION WITH PARAMETER PROPERTIES, IN THIS WE DO NOT HAVE TO EXPLICITLY DECLARE PRIVATE PROPERTIES BUT IN THE CONSTRUCTOR ITSELF AND IT AUTOMATICALLY DOES THE WORK.
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
exports.Customer = Customer;
