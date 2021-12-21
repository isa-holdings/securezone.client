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
                            @click="login()"/>
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
import axios from "axios";

export default {
    name: 'login',
    setup() {
        const store = inject('store')
        return {
            store
        }
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async login() {
        

            const store = inject('store')
            const params = {
                query: `mutation {
                    login(input: {
                        username: "charl@isa.co.za",
                        password: "1234"
                    }) {
                        access_token
                        refresh_token
                        expires_in
                        token_type
                        user {
                            id
                            email
                            name
                            created_at
                            updated_at
                        }
                    }
                }`
            }
            try {
                await this.$api.post(params);

                // This is an example script - don't forget to change it!
                LogRocket.identify('2', {
                name: 'Charl Cronje',
                email: 'charl@isa.co.za',

                // Add your own custom user variables here, ie:
                subscriptionType: 'pro'
                });
            } catch(error) {

            }
        }
    }
}
</script>
