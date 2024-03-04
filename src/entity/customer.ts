import Address from "./address";

export default class Customer {
    _id:string;
    _name:string;
    _address!: Address;
    _active: boolean = false;

    constructor(id:string, name: string) {
        this._id = id;
        this._name = name;

        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required")
        }
        
        if(this._id.length === 0) {
            throw new Error("Id is required")
        }
    }

    get Address(): Address {
        return this._address;
      }

    set Address(address: Address) {
        this._address = address;
    }
     
    
    activate() {
        if (this._address === undefined) {
          throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
      }

}