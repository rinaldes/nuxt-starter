export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-12-16',

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@sentry/nuxt/module',
    '@nuxtjs/storybook',
  ],

  srcDir: 'src',

  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
  },

  css: ['~/shared/assets/css/main.css'],

  components: {
    dirs: ['feature', 'shared/components'],
  },

  imports: {
    dirs: ['shared/composables', 'shared/stores', 'shared/utils'],
  },

  storybook: {
    enabled: false,
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: process.env['ORG'],
      project: process.env['SENTRY_PROJECT'],
    },

    autoInjectServerSentry: 'top-level-import',
  },

  sourcemap: {
    client: 'hidden',
  },
});
