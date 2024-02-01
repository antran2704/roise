// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper"],
  css: [
    `swiper/css/navigation`,
    `assets/css/font-icons.css`,
    `assets/css/plugins.css`,
    `assets/css/style.css`,
    `assets/css/responsive.css`,
  ],
  devtools: { enabled: true },
});
