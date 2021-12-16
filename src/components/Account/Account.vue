<template>
    
</template>

<script>
import { inject, computed } from 'vue'

export default defineComponent({
    name: 'account',
    setup() {
        const store = inject('store')

        let page = computed(() => {
            if (store.account.state.authenticated) {
                return 'account-my-account'
            }
            return 'account-login'
        })
        return {
            store,
            page
        }
    },

})
</script>
