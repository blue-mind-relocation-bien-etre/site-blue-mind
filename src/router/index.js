import HomeView from "@/views/HomeView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Blue Mind Relocation & Bien-être",
      description:
        "Decouvrez nos services d’accompagnement a la mobilite geographique et de bien-etre a Brest et dans le Finistere",
    },
  },
  {
    path: "/carrieres-nomades",
    name: "carrieres-nomades",
    component: () => import("@/views/CarrieresNomadesView.vue"),
    meta: {
      title: "Carières Nomades Relocation",
      description:
        "Carrières Nomades by Blue Mind vous accompagne dans votre mobilité géographique et votre installation en France. Découvrez nos services sur-mesure pour faciliter votre transition et celle de votre famille.",
    },
  },
  {
    path: "/blue-mind",
    name: "blue-mind",
    component: () => import("@/views/BlueMindView.vue"),
    meta: {
      title: "Blue Mind - Nos prestations bien-être",
      description:
        "Blue Mind accompagne les nouveaux arrivants dans le Finistère pour une transition de vie réussie et un équilibre personnel grâce à la discipline du Janzu et la réflexologie plantaire.",
    },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("@/views/PricingView.vue"),
    meta: {
      title: "Blue Mind - Nos tarifs",
      description:
        "Demandez votre devis gratuit pour un projet de relocation ou decouvrez les tarifs de nos prestations bien etre. Nous analysons votre demande et préparons votre devis.",
    },
  },
  {
    path: "/agency",
    name: "agency",
    component: () => import("@/views/AgencyView.vue"),
    meta: {
      title: "Blue Mind - Notre agence",
      description:
        "Decouvrez l'histoire de Blue Mind et votre consultante relocation et bien-être.",
    },
  },
  {
    path: "/our-philosophy",
    name: "our-philosophy",
    component: () => import("@/views/OurPhilosophyView.vue"),
    meta: {
      title: "Blue Mind - Notre Philosophie",
      description:
        "Allier ambitions professionnelles et qualite de vie grace a une approche humaine et sur-mesure par les bienfaits de l'eau.",
    },
  },
  {
    path: "/partners",
    name: "partners",
    component: () => import("@/views/PartnersView.vue"),
    meta: {
      title: "Blue Mind - Nos Partenaires",
      description:
        "Decouvrez les partenaires qui nous accompagnent pour reussir votre installation en Bretagne.",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
    meta: {
      title: "Blue Mind - Contact",
      description:
        "Une question sur votre projet de relocation ou de bien-etre ? Contactez notre equipe a Brest.",
    },
  },
  {
    path: "/legal-notice",
    name: "legal-notice",
    component: () => import("@/views/LegalNoticeView.vue"),
    meta: {
      title: "Blue Mind - Mentions Legales",
      description:
        "Consultez les mentions legales de notre site internet.",
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
