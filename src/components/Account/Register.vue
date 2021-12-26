<template>
    <q-page
        style="background-color:#F7F7F7"
        class="flex flex-center"
        padding>
        <div class="full-width q-pa-lg" style="max-width: 600px">
            <q-card class="full-width q-pa-lg">
                <div class="flex flex-center">
                    <q-img
                        src="~assets/img/isa-logo500.png"
                        loading="lazy"
                        spinner-color="white"
                        style="max-width: 200px"
                    />
                </div>
                <h5 class="q-mb-sm q-ml-lg" style="color:#00a3da">
                    Welcome to SecureZone
                </h5>
                <q-from @submit="submitRegisterForm">
                    <q-card-section>
                        <q-input 
                            filled
                            class="q-mb-md"
                            label="First Name"
                            v-model="formData.firstName"/>
                        <q-input 
                            filled
                            class="q-mb-md"
                            label="Last Name"
                            v-model="formData.lastName"/>
                        <q-input 
                            filled
                            class="q-mb-md"
                            label="Last Name"
                            v-model="formData.email"/>
                            
                    </q-card-section>

                </q-from>
                <q-form @submit.prevent="login">
                    <q-card-section>
                        <q-input
                            filled
                            label="email"
                            placeholder="email@domain.com"
                            class="q-mb-md"
                            v-model="email"/>

                        <q-input
                            filled
                            label="password"
                            type="password"
                            class="q-mb-sm"
                            v-model="password"/>

                        <q-btn
                            label="Login"
                            class="full-width"
                            color="primary"
                            @click=""/>
                        <div class="q-mt-sm">
                            <router-link to="/auth/forgot-password">> Forgot password?</router-link>
                        </div>
                        <div>
                            <router-link to="/customer-service" color="primary">> Need Help?</router-link>
                        </div>
                    </q-card-section>
                </q-form>
            </q-card>
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
a {
    color: $secondary;
    text-decoration: none;

    &:hover {
        color: #1976d2;
    }
}

html, body {
    background-color: #F7F7F7 !important;
}

</style>

<script>
import { Loading, QSpinnerGears } from 'quasar'
import {computed, inject, reactive} from 'vue'

export default {
    name: 'register',
    setup() {
        const store = inject('store')
    },
    data() {
        return {
            formData: {
                firstName = null
            }
        }
    },
    methods: {
        submitRegisterForm() {

        },
    }
    actions: {
        fetchUser({commit}, id) {
            return axiosInstance.get(url, id).then(({data}) => {
                commit('mutation', data)
            })
        }
    }
}
</script>
