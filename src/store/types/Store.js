export default class {
    static state = {
        get:(path, defaultValue,object = Store.state.data) => {
            const _path = Array.isArray(path)
                ? path
                : path.split('.');
            if (object && _path.length) return getPropByPath(object[_path.shift()], _path, defaultValue);
            return object === undefined ? defaultValue : object;
        },
        set:(path, value,obj = Store.state.data) => {
            if (Object(obj) !== obj) return obj; // When obj is not an object
            // If not yet an array, get the keys from the string-path
            if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []; 
            path.slice(0,-1).reduce((a, c, i) => // Iterate all of them except the last one
                 Object(a[c]) === a[c] // Does the key exist and is its value an object?
                     // Yes: then follow that path
                     ? a[c] 
                     // No: create the key. Is the next key a potential array-index?
                     : a[c] = Math.abs(path[i+1])>>0 === +path[i+1] 
                           ? [] // Yes: assign a new array object
                           : {}, // No: assign a new plain object
                 obj)[path[path.length-1]] = value; // Finally assign the value to the last key
            return Store.state; // Return store state object to allow chaining
        },
        save:(storeKey,saveName)=>{
            sessionStorage.setItem(saveName, Store.state.get(storeKey));
        },
        load:(storeKey,saveName)=>{
            Store.state.set(storeKey,sessionStorage.setItem(saveName, Store.state.get(storeKey)));
        },
        data: {

        }
    };
    static add(storeKey,storeDefaults) {
        Store.state.data[storeKey] = storeDefaults;
    };
    static stores = {

    };
    static make = {
        uuid() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    };
    static resetState({...props}) {
        Object.assign(this.state,props);
    }

    /**
     * child class Accoun is being insrtantiated for example, and it does not have it's own constructor
     * new Account({authentication: false, name: 'test'})
     * the super() constructor is called (this constructor), adds Store.state.Account with props destructured as properties, Stores.store.Account = Account (this)
     */
    constructor({...props}) {
        Object.assign(Store.state.data[this.constructor.name],props);
        Store.stores[this.constructor.name] = this;
        this[this.constructor.name] = ()=> Store.stores[this.constructor.name];
    }

   

}