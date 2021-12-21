import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  if (!app.config.globalProperties.make) {
    app.config.globalProperties.make = {};
  }

  app.prototype.make = (key, callback) => {
    app.config.globalProperties.make[key] = callback;
  }
});
