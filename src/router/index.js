import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import BlueMindView from '@/views/BlueMindView.vue'
import CarrieresNomadesView from '@/views/CarrieresNomadesView.vue'
import OurPhilosophyView from '@/views/OurPhilosophyView.vue'
import PartnersView from '@/views/PartnersView.vue'
import PricingView from '@/views/PricingView.vue'
import TeamView from '@/views/TeamView.vue'
import LegalNoticeView from '@/views/LegalNoticeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/carrieres-nomades',
            name: 'carrieres-nomades',
            component: CarrieresNomadesView
        },
        {
            path: '/blue-mind',
            name: 'blue-mind',
            component: BlueMindView
        },
        {
            path: '/pricing',
            name: 'pricing',
            component: PricingView
        },
        {
            path: '/team',
            name: 'team',
            component: TeamView
        },
        {
            path: '/our-philosophy',
            name: 'our-philosophy',
            component: OurPhilosophyView
        },
        {
            path: '/partners',
            name: 'partners',
            component: PartnersView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },
        {
            path: '/legal-notice',
            name: 'legal-notice',
            component: LegalNoticeView
        }
    ],
    
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition){
            return savedPosition
        }

        return { top: 0, behavior: 'smooth'}
    }
})

export default router
