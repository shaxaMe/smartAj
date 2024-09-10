// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],
  css:[
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
    'animate.css/animate.min.css'
  ],
  image: {
    dir: 'assets/images'
  }
})