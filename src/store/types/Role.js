import { Permission } from './Permission';

export class Role {
    #user: any = new Set();
    #admin: any = new Set();

    constructor() {
        this.defineAdmin();
        this.defineUser();
    }

    static get user () {
        return this.#user;
    }

    get admin {
        return this.#admin;
    }

    defineAdmin () {
        this.#admin.add(Permission.home);
        this.#admin.add(Permission.dashboard);
        this.#admin.add(Permission.clients);
        this.#admin.add(Permission.addClient);
        this.#admin.add(Permission.updateClient);
        this.#admin.add(Permission.deleteClient);
        this.#admin.add(Permission.users);
        this.#admin.add(Permission.addUser);
        this.#admin.add(Permission.updateUser);
        this.#admin.add(Permission.deleteUser);
        this.#admin.add(Permission.services);
        this.#admin.add(Permission.addService);
        this.#admin.add(Permission.updateService);
        this.#admin.add(Permission.deleteService);
    }

    defineUser () {
        this.user.add(Permission.home);
        this.user.add(Permission.dashboard)
    }
};