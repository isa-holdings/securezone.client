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
            {{login ? 'Welcome to SecureZone, please login' : 'Sign Up'}}
        </h5>
        <q-form>
          <q-card-section>
            <q-input
              filled
              v-show="!login"
              v-model="name"
              type="text"
              placeholder="Your name"
              class="q-mb-md"/>

            <q-input
              filled
              v-model="email"
              label="email"
              placeholder="Your email address"
              class="q-mb-md"/>

            <q-input
              filled
              v-model="password"
              label="password"
              type="password"
              placeholder="Password"
              class="q-mb-md"/>
            <div class="row">
              <div class="col-xs-6">
                <q-btn
                  class="full-width"
                  color="primary"
                  @click="confirm()">{{login ? 'login' : 'create account'}}
                </q-btn>
              </div>
              <div class="col-xs-6">
                  <q-btn
                    class="full-width text-grey-8"
                    @click="login = !login">
                    {{login ? 'Create an account?' : 'already have an account?'}}
                </q-btn>
              </div>
            </div>
            <div class="q-mt-sm">
              <router-link class="text-grey-8" to="/auth/forgot-password">> Forgot password?</router-link>
            </div>
            <div>
              <router-link class="text-grey-8" to="/customer-service" color="primary">> Need Help?</router-link>
            </div>
          </q-card-section>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    &:hover {
      color : #1976d2 !important;
    }
  }
  html,body {
    background-color: #F7F7F7 !important;
  }

</style>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";



export default {
  name: 'AppLogin',
    data () {
      return {
        email: '',
        login: true,
        name: '',
        password: ''
      }
    },
    setup() {
      const { result, loading, error } = useQuery(gql`
        query getPeople {
          people {
            name
            aboutShort
            location {
              country {
                name
              }
            }
          }
        }
      `);
      return { result, loading, error };
    },

    methods: {
      confirm () {
        // ... you'll implement this in a bit
      },
      saveUserData (id, token) {
        localStorage.setItem(GC_USER_ID, id)
        localStorage.setItem(GC_AUTH_TOKEN, token)
        this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
      }
    }
}
</script>
