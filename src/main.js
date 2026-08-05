import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MdKeyboardarrowdown } from "oh-vue-icons/icons";

import CountryFlag from 'vue-country-flag-next'

addIcons(MdKeyboardarrowdown)

const app = createApp(App)

app.component("v-icon", OhVueIcon)
app.component("country-flag", CountryFlag)

app.use(router)

app.mount('#app')
