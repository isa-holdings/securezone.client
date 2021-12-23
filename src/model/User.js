import { Permission } from './Permission';
import { Person } from './Person';
import { Role } from './Role';

export class User extends Person {
    #password = null;
    #token = null;
    clients = new Set();
}