import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdKeyboardarrowdown,
  HiMenu,
  IoClose,
  BiStarFill,
  BiHouseHeart,
  BiBoxSeam,
  MdComputer,
  CoChild,
  BiLinkedin,
  BiInstagram,
  BiTelephoneFill,
  MdEmail,
  RiDoubleQuotesR,
} from "oh-vue-icons/icons";

import CountryFlag from "vue-country-flag-next";

import { createI18n } from "vue-i18n";

import frHome from "@/langs/fr/home.json";
import frNav from "@/langs/fr/nav.json";
import frReviews from "@/langs/fr/clients-reviews.json";
import frFooter from "@/langs/fr/footer.json";
import frCarrieresNomades from "@/langs/fr/carrieres-nomades.json";
import frContact from "@/langs/fr/contact.json";
import frPricing from "@/langs/fr/pricing.json";
import frBlueMind from "@/langs/fr/blue-mind.json";
import frAgency from "@/langs/fr/agency.json";

import enHome from "@/langs/en/home.json";
import enNav from "@/langs/en/nav.json";
import enReviews from "@/langs/en/clients-reviews.json";
import enFooter from "@/langs/en/footer.json";
import enCarrieresNomades from "@/langs/en/carrieres-nomades.json";
import enContact from "@/langs/en/contact.json";
import enPricing from "@/langs/en/pricing.json";
import enBlueMind from "@/langs/en/blue-mind.json";
import enAgency from "@/langs/en/agency.json";

const messages = {
  fr: {
    home: frHome,
    nav: frNav,
    reviews: frReviews,
    footer: frFooter,
    carrieresNomades: frCarrieresNomades,
    contact: frContact,
    pricing: frPricing,
    blueMind: frBlueMind,
    agency: frAgency,
  },
  en: {
    home: enHome,
    nav: enNav,
    reviews: enReviews,
    footer: enFooter,
    carrieresNomades: enCarrieresNomades,
    contact: enContact,
    pricing: enPricing,
    blueMind: enBlueMind,
    angency: enAgency,
  },
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "fr",
  fallbackLocale: "fr",
  messages,
});

addIcons(
  MdKeyboardarrowdown,
  HiMenu,
  IoClose,
  BiStarFill,
  BiHouseHeart,
  BiBoxSeam,
  MdComputer,
  CoChild,
  BiLinkedin,
  BiInstagram,
  BiTelephoneFill,
  MdEmail,
  RiDoubleQuotesR,
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.component("country-flag", CountryFlag);

app.use(i18n);
app.use(router);

app.mount("#app");
