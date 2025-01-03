export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-12-16',
  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/test-utils/module'],

  srcDir: 'src',
  dir: {
    pages: 'app/pages',
    layouts: 'app/layouts',
  },
  css: ['~/assets/css/main.css'],
  components: {
    dirs: ['feature', 'shared/components'],
  },
  imports: {
    dirs: ['shared/composables', 'shared/stores', 'shared/utils'],
  },
});
