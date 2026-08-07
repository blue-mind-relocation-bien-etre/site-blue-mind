import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

import CountryFlag from 'vue-country-flag-next'

import { createI18n } from 'vue-i18n'

import frHome from '@/langs/fr/home.json'
import frNav from '@/langs/fr/nav.json'

import enHome from '@/langs/en/home.json'
import enNav from '@/langs/en/nav.json'

const messages = {
  fr: {      
    home: frHome,
    nav: frNav    
  },
  en: {
    home: enHome,
    nav: enNav
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

addIcons(MdKeyboardarrowdown)

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.component("country-flag", CountryFlag)

app.use(i18n)
app.use(router)

app.mount('#app')
