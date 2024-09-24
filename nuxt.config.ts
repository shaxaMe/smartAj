// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '"SMART MARKETPLACE" AJ',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
        { hid: 'description', name: 'description', content: "SMART MARKET AJ keng qamrovli ilovalar majmuasi" },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:title', content: '"SMART MARKETPLACE" AJ' },
        { property: 'og:description', content: '"SMART MARKETPLACE" AJ keng qamrovli ilovalar majmuasi' },
        { property: 'og:image', content: './logonew.png' },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-site_name', property: 'og:site_name', content: 'smart-aj.uz' },
        { name: 'author', content: '«SmartMarket» MCHJ' },
        { property: 'keywords', content: 'Online-bozor,smart-market,realpay,market,aj,aksiyadorlik jamiyati,smart market aksiyadorlik jamiyati,bisnes,marketplace' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logonew.png' }
      ]
    }
  },
  // ssr: false,
  // Optional: configure the generation options
  // generate: {
  //   routes: [
  //     // Specify any dynamic routes if needed
  //     '/dynamic-page'
  //   ],
  // },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/image', 'nuxt-aos', '@hypernym/nuxt-gsap', '@nuxtjs/i18n', 'nuxt-swiper'],
  i18n: {
    // strategy: 'prefix',
    // vueI18n: './i18n.config.ts'
    // if you are using custom path, default
      /* module options */
      compilation: {
        strictMessage: false,
        escapeHtml: false,
      },
      lazy: true,
      langDir: "locales",
      strategy: "prefix_except_default",
      locales: [
        {
          code: "uz",
          iso: "uz-Uz",
          name: "Uzbek",
          file: "uz.json",
        },
        {
          code: "ru",
          iso: "ru-Ru",
          name: "Russian",
          file: "ru.json",
        },
      ],
      defaultLocale: "uz",
      // vueI18n: {
      //   fallbackLocale: "en-US",
      // },
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/scss/main.scss',
  ],
  image: {
    dir: 'assets/images'
  },
  colorMode: {
    preference: 'light'
  },
  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  }
})