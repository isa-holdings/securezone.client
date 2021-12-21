import { boot } from 'quasar/wrappers'
import axios from 'axios';

axios.defaults.baseURL = process.env.GRAPHQL_URI || '//api.securezone.co.za.test/gql';
// Default fot all
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// Default for all posts
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});


// Performing multiple concurrent requests

function getUserAccount () {
    return axios.get('/user/12345');
}

function getUserPermissions () {
    return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
        const acct = results[0];
        const perm = results[1];
    });


tokenPayload() {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + validToken()
        }
    }
    Axios.post(
        'http://localhost:8000/api/v1/get_token_payloads',
        config
    )
        .then((response) => {
            console.log(response)
        })
        .catch()
}


const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
    key: "value"
};

Axios.post(
    'http://localhost:8000/api/v1/get_token_payloads',
    bodyParameters,
    config
).then(console.log).catch(console.log);

Where is the value of token passed from in this example ? For my application, the token would be passed back to the api either in the header or body after a successful login. –
Ken
 Nov 15 '18 at 3:58
its here headers: { 'Authorization': 'Bearer ' + token } –
M.suleman Khan
 Mar 31 '19 at 7:47
How to pass data if it is an POST request –
M.suleman Khan
 Mar 31 '19 at 7:58
For those who are wondering from where the value of token can be passed, here is es6 syntax - const instance = (token) => ax

const service = axios.create({
    timeout: 20000 // request timeout
});

// request interceptor

service.interceptors.request.use(
    config => {
        // Do something before request is sent

        config.headers["Authorization"] = "bearer " + getToken();
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// If you want to some data after passing token in header so that try this code

const api = 'your api';
const token = JSON.parse(sessionStorage.getItem('data'));
const token = user.data.id; /*take only token and save in token variable*/
axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
    .then(res => {
        console.log(res.data);
    .catch ((error) => {
            console.log(error)
        });


7

/**Just in case someone faced the same issue.

The issue here is when passing the header without data, the header's configuration will be in the payload data, So I needed to pass null instead of data then set the header's configuration.
*/
const config = {
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${Cookies.get("jwt")}`,
    },
};
axios.get(`${BASE_URL}`, null, config)


I use a separate file to init axios instance and at the same time, I add intercepters to it.Then in each call, the intercepter will add the token to the request header for me.

import axios from 'axios';
import { getToken } from '../hooks/useToken';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        const auth = token ? `Bearer ${token}` : '';
        config.headers.common['Authorization'] = auth;
        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosInstance;


// Here is how I use it in the service file.

import { CancelToken } from 'axios';
import { ToolResponse } from '../types/Tool';
import axiosInstance from './axios';

export const getTools = (cancelToken: CancelToken): Promise<ToolResponse> => {
    return axiosInstance.get('tool', { cancelToken });
};




// here are a lot of good solution but I use this

let token = localStorage.getItem("token");

var myAxios = axios.create({
    baseURL: 'https://localhost:5001',
    timeout: 700,
    headers: { 'Authorization': `bearer ${token}` }
});

export default myAxios;

then i import myaxios to my file and

myAxios.get("sth")