# Secure ZOne

This project uses the following technologies, Where the technologies are described further down this file, they are marked like this

- [x] They important for the project to work
- [?] Any one of these can be used
- [ ] Are viable alternatives but decided against them

Here are a list of all the tech used with their official docs, added short docs for each module that is relative to the project further down with install instructions and basic examples.

## Index

- HTML
  - [HTML 5](https://www.w3schools.com/html/)
  - [Web Components](webComponents.org)
- CSS
  - [Sass](https://sass-lang.com/)
  - [UNO CSS](https://github.com/antfu/unocss)
  - [Windi CSS](https://github.com/windicss/windicss)
  - [Critters](https://github.com/GoogleChromeLabs/critters)
  - [Unplugin](https://github.com/antfu/unplugin-icons)
- [PHP 7.4](https://www.php.net/)
  - [Laravel](https://laravel.com/)
  - [Lighthouse](https://lighthouse-php.com/)
- [JavaScript (ES 2016)](https://www.javascript.com/)
  - JavaScript Modules
  - [Vue.js 3](https://vuejs.org/)
    - Vue Templates
    - [Vue Router](https://router.vuejs.org/)
    - [Vue Apollo for GraphQL](https://apollo.vuejs.org/)
    - [Vuex for State Management](https://next.vuex.vuejs.org/) or
    - [Pinia For State Management](https://pinia.esm.dev/introduction.html)
  - [Quasar](https://quasar.dev/)
  - [Vite](https://vitejs.dev/)
  - [Vite Plugin Markdown](https://github.com/antfu/vite-plugin-md)
  - [Vite Server Side Rendering](https://vitejs.dev/guide/ssr.html)
  - [TypeScript](https://www.typescriptlang.org/)
  - [@vueuse/head](https://github.com/vueuse/head)
- [Node.js](https://nodejs.org/)
  - [NVM (Node version manager)](https://github.com/mvm-sh/nvm)
  - [Vite](https://vitejs.dev/)
  - [Quasar CLi](https://quasar.dev/)
- Database
  - [MySQL](https://www.mysql.com/)
  - [Redis](https://redis.io/)
- API
  - [GraphQL API](https://graphql.org/)
- Package Managers
  - [NPM / PNPM](https://www.npmjs.com/) or
  - [Yarn](https://yarnpkg.com/)
  - [Composer](https://getcomposer.org/)
- [Apache](https://www.apache.org/)
- [CentOS 8](https://www.centos.org/)
  - [Samba](https://www.linuxtechi.com/install-configure-samba-centos-8/)  
- Version Control
  - [Git](https://git-scm.com/)

For each component there are installation instructions, usage instructions with some examples and where to get more help if needed

## 1. CentOS 8

First we need to setup the CentOS 8 Server. There are quite a few steps. The items that is not checked is optional

- [x] [1.1 CentOS Install](docs/centOS/1.1-centOSInstall.md)
- [x] [1.2 Firewall](docs/centOS/1.2-firewall.md)
- [ ] [1.3 Midnight Commander](docs/centOS/1.3-midnightCommander.md)
- [ ] [1.4 Disable SE Linux](docs/centOS/1.4-seLinux.md)
- [x] [1.5 Install Mysql](docs/centOS/1.5-mysql.md)
- [x] [1.6 Install PHP](docs/centOS/1.6-php.md)
- [x] [1.7 Install Composer](docs/centOS/1.7-composer.md)
- [x] [1.8 A Install Node.js](docs/centOS/1.8-nodejs.md)
- [ ] [1.8 B Instal Node.js with NVM](docs/centOS/1.8-nvm.md)
- [ ] [1.9 Install Yarn](docs/centOS/1.9-yarn.md)
- [x] [1.10 Apache](docs/centOS/1.10-apache.md)
- [x] [1.11 Git Install](docs/centOS/1.11-git.md)
- [ ] [1.12 Install Samba](docs/centOS/1.12-samba.md)
- [ ] [1.13 Set Static IP](docs/centOS/1.13-networkSetStatic.md)

## 2. Virtual Hosts

> Setting up the virtual hosts has a trick to it when it comes to setting up sub-domains

Secure Zone runs as an API and as a client from two different VHOSTS so lets setup the VHOSTS

- [x] [2.1 Create the Directory Structure](docs/vhosts/2.1-structure.md)
- [x] [2.2 Grant Permissions](docs/vhosts/2.2-permissions.md)
- [ ] [2.3 Create Demo Pages for the Virtual Hosts](docs/vhosts/2.3-demoPages.md)
- [x] [2.4 Create New Virtual Host Files](docs/vhosts/2.4-createConfFiles.md)
- [x] [2.5 Set Up Local Hosts File](docs/vhosts/2.5-hostsFile.md)

## 3. API with Laravel

- [x] [3.1 Install Laravel via Composer](docs/API/3.1-installWithComp.md)
- [x] [3.2 GraphQL with Laravel and Lighthouse](docs/API/3.2-graphql.md)
- [x] [3.1 Install Lighthouse on API](docs/API/3.3-lighthouse.md)
- [?] [3.4 Passport Authentication](docs/API/3.4-passportAuth.md)
- [?] [3.5 Sanctum Authentication](docs/API/3.5-sanctum.md)
- [?] [3.6 Auth with Bearer Token](docs/API/3.6-bearerAuth.md)
- [ ] [3.7 Laravel DB Setup](docs/API/3.7-data.md)
- [ ] [3.9 Google 2FA](docs/API/3.8-2fa.md)
- [ ] [3.9 GraphQL Tools](docs/API/3.9-graphqlTools.md)
- [ ] [3.10 Youtube Tutorial](docs/API/3.10-youtube.md)
- [ ] [3.11 Laravel Artisan GUI](docs/API/3.11-artisanGui.md)

> Old secure zone laravel changes to get the old.secureZone to work

- [ ] [3.6 Adding a second DB to Laravel](docs/API/3.6-data.md)
- [ ] [3.7 2 FA Implementation](docs/API/3.7-2fa.md)

## 4. SecureZone Client Website

What I wanted to use is Vite, whatever I used with Vite does not matter and does not make any real difference, you can literally create one page with Vue and the next with Svelte and the next with React and the next with Lit-Element because Vite supports them all.

So the first JS Lib to install is Vite, when you install Vite it asks you which other lib you will be using, in this case I actually decided to go with Vue.js because it's got a smaller learning curve for future developers and has a good community and thousands of plugins and good support, you can use lit-element anywhere in between as it uses native web-components so it will have no influence.

- [-] [4.0 Vite Lit-Element](docs/client/4.0-litElement.md)
- [x] [4.1 Install Vue 3 CLI](docs/client/4.1-vue.md)
- [x] [4.2 Vite and Quasar](docs/client/4.2-viteQuasar.md)
- [x] [4.3 Sass Variables](docs/client/4.3-sassVars.md)
- [?] [4.4 Uno CSS](docs/client/4.4-unoCss.md)
- [x] [4.5 Vue Apollo](docs/client/4.5-vueApollo.md)
- [x] [4.6 Vue Router](docs/client/4.6-vueRouter.md)
- [x] [4.7 Vue Auto Routes](docs/client/4.7-vueAutoRoutes.md)
- [x] [4.8 Vue Guards - Restrict Access](docs/client/4.8-vueGuards.md)  
- [?] [4.9 Vuex Data Store](docs/client/4.9-vuexDataStore.md)
- [ ] [4.10 Vite Markdown Plugin](docs/client/4.10-vitePluginMd.md)
- [x] [4.11 VueUse Head](docs/client/4.11-VueUseHead.md)
- [x] [4.12 Quasar Cli](docs/client/4.12-quasarCli.md)
- [ ] [4.13 CSS Tips](docs/client/4.13-cssTips.md)
- [x] [4.14 Pinia](docs/client/4.14-piniaStateAndStore.md)
- [x] [4.15 Critters CSS](docs/client/4.15-critters.md)

## 5. Testing Vite / Vue on Local Dev

- [x] [5.1 Local dev Server X11 Forwarding](docs/testing/5.1-x11forwarding.md)

## 6. Docs for some Tools used

- [6.1 Quasar Command List](docs/quasar/6.1-commandList.md)
