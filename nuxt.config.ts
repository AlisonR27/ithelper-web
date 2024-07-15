// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // colorMode: {
  //   preference: 'dark'
  // },
  runtimeConfig: {
    public: {
      API_URL: "http://localhost:8080"
    }
  },
  modules: ['@pinia/nuxt', 'nuxt-icon', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    icons: ['heroicons', 'iconoir'],
  },
  imports: {
    dirs: ['store']
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
