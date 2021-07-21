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
  css: ['~assets/scss/colors.scss'],

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
        locales: [
          {
            code: 'en',
            file: 'en/index.js',
          },
          {
            code: 'ua',
            file: 'ua/index.js',
          },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'en',
      },
    ],
    '@nuxtjs/style-resources',
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
}
