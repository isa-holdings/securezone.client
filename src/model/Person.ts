import { Gender } from './Gender'
import { Crud } from './Crud'


export class Person {
    id: number = 0;
    #title: string = '';
    firstName: string;
    lastName: string;
    #email: string = '';
    #gender: Gender = ''
    #telNumber: string = ''
    #mobileNumber: string = '';
    #crud: Crud = {
        created_at: Date;
        updated_at: Date;
        updated_by: number;
        status: Status
    };

    /* TITLE */
    get title () {
        return this.#title;
    }
    set title (title: string) {
        this.#title = title;
    }

    /* GENDER */
    set gender (gender: Gender) {
        this.#gender = gender;
    }
    get gender () {
        return this.#gender;
    }

    /* EMAIL */
    get email () {
        return this.#email;
    }
    set email (email: string) {
        this.#email = email;
    }

    /* TEL NUMBER */
    set telNumber (telNumber: string) {
        this.#telNumber = telNumber;
    }
    get telNumber () {
        return this.#telNumber;
    }

    /* MOBILE NUMBER */
    set mobileNumber (mobileNumber: string) {
        this.#mobileNumber = mobileNumber;
    }
    get mobileNumber () {
        return this.#mobileNumber;
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    get titledName () {
        return `${this.title} ${this.firstName} ${this.lastName}`;
    }

    get crud () {
        return this.#crud;
    }

    constructor(id: number, firstName: string, lastName: string, email: string, gender: Gender, telNumber: string, mobileNumber: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.#telNumber = telNumber
    }
}