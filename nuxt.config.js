export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'mobile',
        breakpoints: {
          mobile: 450,
          tablet: 900,
          laptop: 1250,
          desktop: Infinity,
        },
      },
    ],
    [
      'nuxt-i18n',
      {
        locales: ['en', 'ua'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              home: 'Home',
              aboutMe: 'About me',
              skills: 'Skills',
              portfolio: 'Portfolio',
              contacts: 'Contacts',
            },
            ua: {
              home: 'Головна',
              aboutMe: 'Про мене',
              skills: 'Навички',
              portfolio: 'Портфоліо',
              contacts: 'Контакти',
            },
          },
        },
      },
    ],
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
