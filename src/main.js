import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MdKeyboardarrowdown, HiMenu, IoClose, BiStarFill } from "oh-vue-icons/icons";

import CountryFlag from 'vue-country-flag-next'

import { createI18n } from 'vue-i18n'

import frHome from '@/langs/fr/home.json'
import frNav from '@/langs/fr/nav.json'
import frReviews from '@/langs/fr/clients-reviews.json'
import frFooter from '@/langs/fr/footer.json'

import enHome from '@/langs/en/home.json'
import enNav from '@/langs/en/nav.json'
import enReviews from '@/langs/en/clients-reviews.json'
import enFooter from '@/langs/en/footer.json'

const messages = {
  fr: {      
    home: frHome,
    nav: frNav,
    reviews: frReviews,
    footer: frFooter    
  },
  en: {
    home: enHome,
    nav: enNav,
    reviews: enReviews,
    footer: enFooter
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages
})

addIcons(MdKeyboardarrowdown, HiMenu, IoClose, BiStarFill)

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.component("country-flag", CountryFlag)

app.use(i18n)
app.use(router)

app.mount('#app')
