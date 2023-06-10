// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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
    }
  },
})
