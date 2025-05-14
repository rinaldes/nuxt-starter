export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-12-16',

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  srcDir: 'src',

  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
  },

  css: ['~/shared/assets/css/main.css'],

  components: {
    dirs: [
      'feature',
      'shared/components',
      'shared/components/atoms',
      'shared/components/molecules',
      'shared/components/organisms',
    ],
  },

  imports: {
    dirs: ['shared/composables', 'shared/stores', 'shared/utils'],
  },
});
