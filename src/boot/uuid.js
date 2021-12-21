import { boot } from 'quasar/wrappers'
import { v4 as uuidv4 } from 'uuid';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
    // Add a make object to be used for more maker props later
    // Now I should be able to generate UUID's saying: this.make.$uuid();
    app.config.globalProperties?.make = {
        uuid = uuidv4
    }
})
export { uuid };