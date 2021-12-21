import { reactive } from 'vue'

const state = reactive({
    user: {},
    token: '',
    authenticated: false,
    access: {}
});

export default {
    state
}
