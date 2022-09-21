import { createI18n } from 'vue-i18n'
import zh_cn from '../locales/zh-cn.json'
import zh_hant from '../locales/zh-hant.json'
import en_us from '../locales/en-us.json'

 
 export default defineNuxtPlugin(({ vueApp }) => {
   const i18n = createI18n({
     legacy: false,
     globalInjection: true,
     locale: 'zh_cn',
     messages: {
      zh_cn,
      zh_hant,
      en_us
     }
   })
 
   vueApp.use(i18n)
 })
