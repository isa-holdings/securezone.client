import Contact from Contact;

class Client {
    private name: string = '';
    contact: Contact = '';
    tel: string = '';
    address: string = '';
    email: string = '';
    password: string = '';

    set name () {

    }

    constructor(opt = { name: string, contact, tel, address, email, password, rest...} = {}) {
        this.name = opt.name;
    }


}