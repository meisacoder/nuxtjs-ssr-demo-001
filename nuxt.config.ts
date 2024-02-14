// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  css: ["@/assets/scss/global.scss"],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/scss/_vars.scss" as *;',
  //       },
  //     },
  //   },
  // },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
});
