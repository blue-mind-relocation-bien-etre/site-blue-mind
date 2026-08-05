<template>

    <nav 
    :class="[
        'bg-secondary absolute top-0 left-0 right-0 px-4 py-2 flex items-center justify-center z-50 transition-all duration-500 ease-in-out',
        isHome 
            ? 'backdrop-blur-md rounded-xl m-4 shadow-md'
            :'m-0 rounded-none shadow-lg'
    ]">

        <div class="flex-1 flex justify-start">
            <img class="h-20" src="@/img/Logo2_BM_VD_blanc.png" alt="logo">
        </div>

        <div class="flex items-center justify-center gap-6">
            <RouterLink to="/" class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg">
                Accueil
            </RouterLink>

            <a href="#" class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg">Carrières Nomades</a>
            <a href="#" class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg">Blue Mind</a>
            <a href="#" class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg">Tarifs</a>

            <div class="relative group py-2 ">
                <button class="text-slate-100 font-sans font-medium flex items-center gap-1 cursor-pointer hover:text-slate-300 transition duration-200 text-lg">
                    Qui sommes nous
                    <v-icon name="md-keyboardarrowdown" />
                </button>
                <div class="absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-slate-800 shadow-lg rounded-md py-2 w-48 z-50">
                    <a href="#" class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md">Agence & Equipe</a>
                    <a href="#" class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md">Notre philosophie</a>
                    <a href="#" class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md">Partenaire</a>
                </div>
            </div>

            <RouterLink to="/contact" class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg">
                Contact
            </RouterLink>
        </div>

        <div class="flex-1 flex items-center justify-end">
            <div class="relative group py-2">
                <button class="text-slate-100 font-sans font-medium flex items-center gap-2 cursor-pointer hover:text-slate-300 transition duration-200 text-lg">
                    <country-flag country="fr" size="small"/>
                    Français
                    <v-icon name="md-keyboardarrowdown" />
                </button>
                <div class="absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-slate-800 shadow-lg rounded-md py-2 w-48 z-50">
                    <a href="#" class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md">
                        <country-flag country="gb" size="small" />
                        English
                    </a>
                </div>
            </div>
        </div>
    </nav>

</template>

<script setup>

import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue'

const route = useRoute()

const isHome = computed(() => route.path === '/')

</script>