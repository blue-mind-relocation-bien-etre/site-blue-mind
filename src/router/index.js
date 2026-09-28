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
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/carrieres-nomades",
    name: "carrieres-nomades",
    component: CarrieresNomadesView,
    meta: {
      title: "Carières Nomades Relocation",
      description:
        "Carrières Nomades by Blue Mind vous accompagne dans votre mobilité géographique et votre installation en France. Découvrez nos services sur-mesure pour faciliter votre transition et celle de votre famille.",
    },
  },
  {
    path: "/blue-mind",
    name: "blue-mind",
    component: BlueMindView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: PricingView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/agency",
    name: "agency",
    component: AgencyView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/our-philosophy",
    name: "our-philosophy",
    component: OurPhilosophyView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/partners",
    name: "partners",
    component: PartnersView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/legal-notice",
    name: "legal-notice",
    component: LegalNoticeView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
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
