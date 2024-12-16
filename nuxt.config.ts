// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-12-16',

  future: {
    compatibilityVersion: 4,
  },

  srcDir: 'src',

  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
  },

  components: {
    dirs: ['feature', 'shared/components'],
  },

  imports: {
    dirs: ['shared/composables', 'shared/stores', 'shared/utils'],
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
    '@sentry/nuxt/module',
  ],

  sentry: {
    sourceMapsUploadOptions: {
      org: process.env['ORG'],
      project: process.env['SENTRY_PROJECT'],
    },
  },

  sourcemap: {
    client: 'hidden',
  },
});
