// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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

  googleFonts: {
    families: {
      'Inter': [400, 500],
    },
  },

  css: ['~/assets/css/main.css'],
  
  app: {
    pageTransition: { 
      name: 'page', 
      mode: 'out-in' 
    },
  },

  motion: {
    directives: {
      'pop-bottom': {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0
        },
      },
    },
  },
})
