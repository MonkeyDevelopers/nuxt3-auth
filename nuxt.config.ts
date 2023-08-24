export default defineNuxtConfig({
  ssr: false,
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
        ],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BACK_URL || 'http://localhost:3001',
    },
  },
});
