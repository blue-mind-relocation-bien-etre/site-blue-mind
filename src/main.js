import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routerOptions } from "./router";
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
import frPartners from "@/langs/fr/partners.json";
import frPhilosophy from "@/langs/fr/philosophy.json";

import enHome from "@/langs/en/home.json";
import enNav from "@/langs/en/nav.json";
import enReviews from "@/langs/en/clients-reviews.json";
import enFooter from "@/langs/en/footer.json";
import enCarrieresNomades from "@/langs/en/carrieres-nomades.json";
import enContact from "@/langs/en/contact.json";
import enPricing from "@/langs/en/pricing.json";
import enBlueMind from "@/langs/en/blue-mind.json";
import enAgency from "@/langs/en/agency.json";
import enPartners from "@/langs/en/partners.json";
import enPhilosophy from "@/langs/en/philosophy.json";

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
    partners: frPartners,
    philosophy: frPhilosophy,
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
    agency: enAgency,
    partners: enPartners,
    philosophy: enPhilosophy,
  },
};

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

export const createApp = ViteSSG(
  App,
  routerOptions,
  ({ app, router, initialState, head, onSSRAppRendered }) => {
    const i18n = createI18n({
      legacy: false,
      globalInjection: true,
      locale: "fr",
      fallbackLocale: "fr",
      messages,
    });
    app.component("v-icon", OhVueIcon);
    app.component("country-flag", CountryFlag);
    app.use(i18n);

    router.beforeEach((to, from, next) => {
      // Si la route contient un titre et une description dans ses metas
      if (to.meta.title && to.meta.description && head) {
        head.push({
          title: to.meta.title,
          meta: [{ name: "description", content: to.meta.description }],
        });
      }
      next();
    });

    // if (import.meta.env.SSR) {
    //   onSSRAppRendered(async () => {
    //     if (head) {
    //       const payload = await head.render();
    //       // L'injection forcée dans l'état initial
    //       initialState.head = payload.headTags;
    //     }
    //   });
    // }
  },
);
