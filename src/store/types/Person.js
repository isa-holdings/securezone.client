import { Gender } from './Gender'
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

    /* TITLE */
    get title () {
        return this.#title;
    }
    set title (title) {
        this.#title = title;
    }

    /* GENDER */
    set gender (gender) {
        this.#gender = gender;
    }
    get gender () {
        return this.#gender;
    }

    /* EMAIL */
    get email () {
        return this.#email;
    }
    set email (email) {
        this.#email = email;
    }

    /* TEL NUMBER */
    set telNumber (telNumber) {
        this.#telNumber = telNumber;
    }
    get telNumber () {
        return this.#telNumber;
    }

    /* MOBILE NUMBER */
    set mobileNumber (mobileNumber) {
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

    constructor(id, firstName, lastName, email, gender, telNumber, mobileNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.#telNumber = telNumber
    }
}