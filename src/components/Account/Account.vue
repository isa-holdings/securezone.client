<template>
    
</template>

<script>
import { inject, computed } from 'vue'

export default defineComponent({
    name: 'account',
    setup() {
        const store = inject('store')

        // According to the state of the user-account `authenticated` I either load the login page or the user account page
        let page = computed(() => {
            if (store.account.state.authenticated) {
                return 'account-profile'
            }
            return 'account-login'
        })

        return {
            store,
            page 
        }
    },
    components: {
        'account-login': require('components/Account/Login').default,
        'account-profile': require('components/Account/Profile').default
    }

})
</script>
