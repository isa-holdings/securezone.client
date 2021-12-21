import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, store }) => {
  const isAuthorized = ''
  if (!isAuthorized && !urlPath.startsWith('/login')) {

    // Examples for redirect() with a Vue Router location:
    redirect('/1') // Vue Router location as String
    redirect({ path: '/1' }) // Vue Router location as Object

    // Example for redirect() with a URL:
    redirect('https://quasar.dev')

    redirect({ path: '/login' })
    return
  }

  router.beforeEach(() => {
    // Check Auth
  });
});
