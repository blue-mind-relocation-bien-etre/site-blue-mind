import HomeView from "@/views/HomeView.vue";

// 1. On exporte directement le tableau de routes
export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/carrieres-nomades",
    name: "carrieres-nomades",
    component: () => import("@/views/CarrieresNomadesView.vue"),
  },
  {
    path: "/blue-mind",
    name: "blue-mind",
    component: () => import("@/views/BlueMindView.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("@/views/PricingView.vue"),
  },
  {
    path: "/agency",
    name: "agency",
    component: () => import("@/views/AgencyView.vue"),
  },
  {
    path: "/our-philosophy",
    name: "our-philosophy",
    component: () => import("@/views/OurPhilosophyView.vue"),
  },
  {
    path: "/partners",
    name: "partners",
    component: () => import("@/views/PartnersView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/legal-notice",
    name: "legal-notice",
    component: () => import("@/views/LegalNoticeView.vue"),
  },
];

// 2. On exporte les options du routeur (pour ViteSSG) afin de conserver ton effet smooth
export const routerOptions = {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, behavior: "smooth" };
  },
};