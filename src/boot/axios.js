import { boot } from 'quasar/wrappers'
import axios from 'axios'

const token = sessionStorage.getItem('secZone_API_TOKEN');

let head = {
    'Accept': 'application/json'
};

if (token) head['Authorization'] = `bearer ${token}`

const api = axios.create({
    method: 'POST',
    baseURL: process.env.GRAPHQL_URI || '//api.securezone.co.za.test/gql',
    headers: {

    }
})

axios.interceptors.request.use(request => {
    if (process.env.DEBUG_AXIOS) console.log(request);
    // Edit request config
    return request;
}, error => {
    if (process.env.DEBUG_AXIOS) console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    if (process.env.DEBUG_AXIOS) console.log(response);
    // Edit response config
    return response;
}, error => {
    if (process.env.DEBUG_AXIOS) console.log(error);
    return Promise.reject(error);
});

const useFetch = (url, config) = {}) => {
    const data = ref(null)
    const response = ref(null)
    const error = ref(null)
    const loading = ref(false)

    const fetch = async () => {
        loading.value = true;
        try {
            const result = await axios.request({
                url,
                ...config
            })
            response.value = result
            data.value = result.data
        } catch (ex) {
            error.value = ex;
        } finally {
            loading.value = false;
        }
    }
    !config.skip && fetch(); // if config skip is set we can fetch the data manually
    return { response, error, data, loading, fetch }
}




// for use inside Vue files through this.$axios and this.$api
// (only in Vue Options API form)
export default boot(({ app }) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api
    app.config.globalProperties.$axios = axios
    // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
    //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api
    // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
    //       so you can easily perform requests against your app's API
});

// Here we define a named export
// that we can later use inside .js files:
export { axios, api }

/** 
In any JavaScript file, you’ll be able to import the axios instance like this.

  // we import one of the named exports from src/boot/axios.js
  import { api } from 'boot/axios'
*/


