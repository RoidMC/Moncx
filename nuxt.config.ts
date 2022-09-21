import { defineNuxtConfig } from 'nuxt'
import ElementPlus from 'unplugin-element-plus/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // 默认Head信息
  meta: {
    title: 'RoidMC Studios',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description',content: 'RoidMC Studios官网，欢迎您的访问' },
      { hid: 'keywords', name: 'keywords', content: 'RoidMC,RoidMC Studios' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    "style": [],
    "script": [
      { src: 'https://hm.baidu.com/hm.js?6d5425fa51af264573b6e56b19c04caa' },
      { children: `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?6d5425fa51af264573b6e56b19c04caa";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();` 
      },
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-EGKPC7RWMD', async: true },
      { children: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EGKPC7RWMD');` 
      }
    ],
    "noscript": [],
  },

  // css
  css: [
    '~/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  
  // Sitemap
  sitemap: {
    hostname: 'https://www.roidmc.com',
  },

  // build
  build: {
    transpile: ['element-plus/es'],
  },

  typescript: {
    strict: true,
    shim: false,
  },

  vite: {
    plugins: [ElementPlus()],
  },

  // build modules
  modules: ['@vueuse/nuxt','@unocss/nuxt','@pinia/nuxt','~/modules/sitemap'],

  // auto import components
  components: true,

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
})
