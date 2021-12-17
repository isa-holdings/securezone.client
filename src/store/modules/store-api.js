import { reactive } from 'vue'

const state = reactive({
    API_TOKEN: null,
    URL: process.env.GRAPHQL_URI || 'http://api.securezone.co.za/gql' // Change to your graphql endpoint.
});

export default {
    state
}
