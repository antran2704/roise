// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-swiper", "nuxt-lazy-load"],
  css: [
    `swiper/css/navigation`,
    `assets/css/font-icons.css`,
    `assets/css/plugins.css`,
    `assets/css/style.css`,
    `assets/css/responsive.css`,
  ],
  runtimeConfig: {
    public: {
      domain: process.env.NUXT_PUBLIC_DOMAIN,
      apiEndpoint: process.env.NUXT_PUBLIC_API_ENDPOINT_DEV,
      // apiEndpoint: process.env.NUXT_PUBLIC_API_ENDPOINT_PRO,
    },
  },

  devtools: { enabled: true },
  lazyLoad: {
    // These are the default values
    images: false,
    videos: false,
    audios: true,
    iframes: false,
    native: false,
    directiveOnly: true,
    // To remove class set value to false
    loadingClass: "isLoading",
    loadedClass: "isLoaded",
    appendClass: "lazyLoad",
    observerConfig: {
      rootMargin: "80px",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
