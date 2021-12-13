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
        <q-form>
          <q-card-section>
            <q-input
              filled
              label="email"
              placeholder="email@domain.com"
              class="q-mb-md"/>

            <q-input
              filled
              label="password"
              type="password"
              class="q-mb-sm"/>

            <q-checkbox :model-value="true" label="Remember Me"/>

            <q-btn
              label="Login"
              class="full-width"
              color="primary"
              @click="LoginButtonClicked"/>
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
    color: #000000;
    text-decoration: none;
    &:hover {
      color : #1976d2;
    }
  }
  html,body {
    background-color: #F7F7F7 !important;
  }

</style>

<script>
import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from 'quasar'

export default {
  methods: {
    LoginButtonClicked () {
      Loading.show({
        spinner: QSpinnerGears
        // other props
      })
      setTimeout(() => {
        this.$q.dialog({
          title: 'Login Failed',
          message: 'api.securezone.co.za timed out, please try again later'
        })
        Loading.hide()
      }, 30000)
    }
  },
  actions: {
    fetchUser ({ commit }, id) {
      return axiosInstance.get(url, id).then(({ data }) => {
        commit('mutation', data)
      })
    }
  }
}
</script>
