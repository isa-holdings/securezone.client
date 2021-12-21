import { reactive } from 'vue'

const state = reactive({
    API_TOKEN: null,
    URL: process.env.GRAPHQL_URI || 'http://api.securezone.co.za/gql', // Change to your graphql endpoint.
    LOADING: false,
    REQUESTS = new Map()
});

const actions = {
    register
};

const req = {
    add = () => {

    },

}

const use = {
    post = () => {

    },
    get = () => {

    },
    header = () => {

    },
    params = () => {

    },
    auth = () {

    },
    result = () => {

    }
};

const type = reactive({
    "all": {
        "Accept": "application/json",
    },
    "noAuth": {

    }
    "auth": {

    }
});



const query = reactive({

});

export default {
    state
}
