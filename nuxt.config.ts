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

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
});
