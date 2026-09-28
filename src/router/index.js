import HomeView from "@/views/HomeView.vue";
import CarrieresNomadesView from "@/views/CarrieresNomadesView.vue";
import BlueMindView from "@/views/BlueMindView.vue";
import PricingView from "@/views/PricingView.vue";
import AgencyView from "@/views/AgencyView.vue";
import OurPhilosophyView from "@/views/OurPhilosophyView.vue";
import PartnersView from "@/views/PartnersView.vue";
import ContactView from "@/views/ContactView.vue";
import LegalNoticeView from "@/views/LegalNoticeView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/carrieres-nomades",
    name: "carrieres-nomades",
    component: CarrieresNomadesView,
  },
  {
    path: "/blue-mind",
    name: "blue-mind",
    component: BlueMindView,
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingView,
  },
  {
    path: "/agency",
    name: "agency",
    component: AgencyView,
  },
  {
    path: "/our-philosophy",
    name: "our-philosophy",
    component: OurPhilosophyView,
  },
  {
    path: "/partners",
    name: "partners",
    component: PartnersView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/legal-notice",
    name: "legal-notice",
    component: LegalNoticeView,
  },
];

export const routerOptions = {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: "smooth" };
  },
};
