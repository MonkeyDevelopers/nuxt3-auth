export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", 'nuxt-icon'],

  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BACK_URL || "http://localhost:3001",
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
