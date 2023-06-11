// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },

    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
  ],

  content: {
    markdown: {
      anchorLinks: false,
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  googleFonts: {
    families: {
      'Inter': [400, 500],
    },
    display: 'swap',
    // subsets: 'Latin',
    // text: 'los müssen',
    download: true,
  },

  css: ['~/assets/css/main.css'],
  
  motion: {
    directives: {
      'custom': {
        initial: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1000,
          },
        },
      },
    },
  },
})
