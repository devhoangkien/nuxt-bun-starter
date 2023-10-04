import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: Number(process.env.PORT)
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/color-mode',
    // management
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // contents,
    '@nuxt/content',
    '@ant-design-vue/nuxt'
  ],
  antd:{
    // Options
  },
  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],
 
  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },

   // module::headlessui
  //  headlessui: {
  //   prefix: 'Headless',
  // },

  // module::color-mode
  // colorMode: {
  //   classSuffix: '',
  // },

  // module::content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

 
})
