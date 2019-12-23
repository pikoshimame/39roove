
export default {
  srcDir: 'src',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: '39roove オフィシャルサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '39rooveは、ボカロ曲を主軸に、出演者全員でGROOVE（グルーヴ）を作っていくイベントです。GROOVE、それは言葉にできない感覚！' },
      { itemprop: 'name', content: '39roove オフィシャルサイト' },
      { itemprop: 'description', content: '39rooveは、ボカロ曲を主軸に、出演者全員でGROOVE（グルーヴ）を作っていくイベントです。GROOVE、それは言葉にできない感覚！' },
      { itemprop: 'itemprop', content: 'https://39roove.com/ogp.jpg' },
      { property: 'og:url', content: 'https://39roove.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: '39roove オフィシャルサイト' },
      { property: 'og:description', content: '39rooveは、ボカロ曲を主軸に、出演者全員でGROOVE（グルーヴ）を作っていくイベントです。GROOVE、それは言葉にできない感覚！' },
      { property: 'og:image', content: 'https://39roove.com/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: '39roove オフィシャルサイト' },
      { name: 'twitter:description', content: '39rooveは、ボカロ曲を主軸に、出演者全員でGROOVE（グルーヴ）を作っていくイベントです。GROOVE、それは言葉にできない感覚！' },
      { name: 'twitter:image', content: 'https://39roove.com/summary_large_image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alata|Noto+Sans+JP:500,700&display=swap' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#b89031' },
  /*
  ** Global CSS
  */
  css: [
    'reset-css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/contentful', '~/plugins/vue-js-modal'],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/google-analytics', '@nuxtjs/pwa'],
  'google-analytics': {
    id: '' // FIXME: idを入れる
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://.*contentful.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://.*ctfassets.net/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  }
}
