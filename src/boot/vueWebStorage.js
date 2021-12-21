import { boot } from 'quasar/wrappers'
import StoragePlugin from 'vue-web-storage';


export default boot(({ app }) => {
  app.use(StoragePlugin, {
    prefix: 'secZone_',// default `app_`
    drivers: ['session', 'local'], // default 'local'
  });

  // It will register two different instances
  // this.$sessionStorage
  // this.$localStorage
});
