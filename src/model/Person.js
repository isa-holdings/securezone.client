import { Gender } from './Gender'
import { Crud } from './Crud'
import { Status } from './Status'

export class Person {
    id = 0;
    #title = null;
    firstName = null;
    lastName = null;
    #email = null;
    #gender = Gender.Unknown;
    #telNumber = null;
    #mobileNumber = null;
    #crud = {
        created_at: new Date(),
        updated_at: new Date(),
        updated_by: User.id,
        status: Status.Active
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