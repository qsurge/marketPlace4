import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    localLayerAliases: true,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    baseURL: "/marketPlace4/",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/content",
  ],

  css: [
    resolve("./assets/scss/_variables.scss"),
    resolve("./assets/scss/app.scss"),
  ],

  components: [
    {
      prefix: "Layout",
      path: resolve("./components/layouts"),
      global: true,
    },
    {
      prefix: "Awesome",
      path: resolve("./components/awesome"),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve("./stores"), "~/stores"],
  },

  pinia: {
    autoImports: [["defineStore", "definePiniaStore"]],
  },

  headlessui: {
    prefix: "Headless",
  },

  colorMode: {
    classSuffix: "",
  },

  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: "github-dark",
    },
  },
  ssr: true,
  nitro: {
    prerender: {
      failOnError: false, 
    },
  },
});
