import {reactive} from 'vue';
import Store from './types/Store';
import Account from './types/Account';

const store = reactive(new Store());
new Account({test:"hello"});

export default {
    store
}