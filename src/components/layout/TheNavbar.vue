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
      
      <!-- 1. BOUTON PRINCIPAL (DYNAMIQUE) : Affiche la langue actuelle -->
                <button class="text-slate-100 font-sans font-medium flex items-center gap-2 cursor-pointer hover:text-slate-300 transition duration-200 text-lg">
                    <!-- Si locale est 'fr', on affiche le drapeau 'fr', sinon le drapeau 'gb' -->
                    <country-flag :country="locale === 'fr' ? 'fr' : 'gb'" size="small"/>
                    {{ locale.toUpperCase() }}
                    <v-icon name="md-keyboardarrowdown" />
                </button>

                <!-- 2. MENU DÉROULANT : Liste des langues disponibles -->
                <div class="absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-slate-800 shadow-lg rounded-md py-2 w-48 z-50">
                    
                    <!-- Option Français -->
                    <button 
                        @click="changeLanguage('fr')"
                        class="w-full text-left px-4 py-2 hover:bg-slate-100 transition duration-200 flex items-center gap-2 cursor-pointer"
                        :class="{ 'text-slate-800 bg-slate-50': locale === 'fr' }"
                    >
                        <country-flag country="fr" size="small" />
                        Français (FR)
                    </button>

                    <!-- Option Anglais -->
                    <button 
                        @click="changeLanguage('en')"
                        class="w-full text-left px-4 py-2 hover:bg-slate-100 transition duration-200 flex items-center gap-2 cursor-pointer"
                        :class="{ 'text-slate-800 bg-slate-50': locale === 'en' }"
                    >
                        <country-flag country="gb" size="small" />
                        English (EN)
                    </button>

                </div>

  </div>
        </div>
    </nav>

</template>

<script setup>

import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue'

import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' })

const changeLanguage = (lang) => {
    locale.value = lang
    localStorage.setItem('user-locale', lang)
}

const route = useRoute()

const isHome = computed(() => route.path === '/')

</script>