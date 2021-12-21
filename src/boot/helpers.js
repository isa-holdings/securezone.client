import { boot } from 'quasar/wrappers'

// Outside of default export:
//  - Code here gets executed immediately,
//  - Good place for import statements,
//  - No access to router, Vuex store, ...

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, store }) => {
  // Code here has access to the Object param above, connecting
  // with other parts of your app;

  // Code here can be async (use async/await or directly return a Promise);

  // Code here gets executed by Quasar CLI at the correct time in app's lifecycle:
  //  - we have a Router instantiated,
  //  - we have the optional Vuex store instantiated,
  //  - we have the root app's component ["app" prop in Object param] Object with
  //      which Quasar will instantiate the Vue app
  //      ("new Vue(app)" -- do NOT call this by yourself),
  //  - ...
})
