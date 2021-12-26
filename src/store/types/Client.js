//import Contact from Contact;

class Client {
    #name = '';
    contact = '';
    tel = '';
    address = '';
    email = '';
    password = '';

    set name (name) {
        this.#name = name;
    }

    constructor({...props}) {
        Object.assign(this,props);
    }


}
console.log(new Client({name: 'loos',password: 'pass',extra: 'test'}));
