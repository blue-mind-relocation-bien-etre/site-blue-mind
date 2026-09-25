<template>
  <nav
    :class="[
      'bg-secondary absolute top-0 left-0 right-0 px-4 py-2 flex flex-col items-center justify-center z-50 transition-all duration-500 ease-in-out',
      isHome
        ? 'backdrop-blur-md rounded-xl m-4 shadow-md'
        : 'm-0 rounded-none shadow-lg',
    ]"
  >
    <!-- Menu grand écran -->
    <div class="w-full flex items-center justify-between">
      <div class="flex-1 flex justify-start">
        <RouterLink to="/">
          <img class="h-20" src="@/assets/Logo2_BM_VD_blanc.webp" alt="logo" />
        </RouterLink>
      </div>

      <div class="hidden lg:flex items-center justify-center gap-10">
        <RouterLink
          to="/"
          class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg"
        >
          {{ $t("nav.home") }}
        </RouterLink>

        <RouterLink
          to="/carrieres-nomades"
          class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg"
        >
          {{ $t("nav.carrieres_nomades") }}
        </RouterLink>
        <RouterLink
          to="/blue-mind"
          class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg"
        >
          {{ $t("nav.blue_mind") }}
        </RouterLink>
        <RouterLink
          to="/pricing"
          class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg"
        >
          {{ $t("nav.pricing") }}
        </RouterLink>

        <div class="relative group py-2">
          <button
            class="text-slate-100 font-sans font-medium flex items-center gap-1 cursor-pointer hover:text-slate-300 transition duration-200 text-lg"
          >
            {{ $t("nav.presentation") }}
            <v-icon name="md-keyboardarrowdown" />
          </button>
          <div
            class="absolute left-0 top-full hidden group-hover:flex flex-col bg-white text-slate-800 shadow-lg rounded-md py-2 w-48 z-50"
          >
            <RouterLink
              to="/agency"
              class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md"
            >
              {{ $t("nav.agency") }}
            </RouterLink>
            <RouterLink
              to="/our-philosophy"
              class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md"
            >
              {{ $t("nav.philo") }}
            </RouterLink>
            <RouterLink
              to="/partners"
              class="px-4 py-2 hover:bg-slate-100 transition duration-200 rounded-md"
            >
              {{ $t("nav.partner") }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/contact"
          class="text-slate-100 font-sans font-medium hover:text-slate-300 transition duration-200 text-lg"
        >
          {{ $t("nav.contact") }}
        </RouterLink>
      </div>

      <div class="flex-1 flex items-center justify-end gap-4">
        <div class="relative py-2">
          <!-- 1. BOUTON PRINCIPAL (DYNAMIQUE) : Affiche la langue actuelle -->
          <button
            @click="isLangMenuOpen = !isLangMenuOpen"
            class="text-slate-100 font-sans font-medium flex items-center gap-2 cursor-pointer hover:text-slate-300 transition duration-200 text-lg"
          >
            <!-- Si locale est 'fr', on affiche le drapeau 'fr', sinon le drapeau 'gb' -->
            <country-flag
              :country="locale === 'fr' ? 'fr' : 'gb'"
              size="small"
            />
            {{ locale.toUpperCase() }}
            <v-icon name="md-keyboardarrowdown" />
          </button>

          <!-- 2. MENU DÉROULANT : Liste des langues disponibles -->
          <div
            v-show="isLangMenuOpen"
            class="absolute right-0 top-full flex-col bg-white text-slate-800 shadow-lg rounded-md py-2 w-48 z-50"
          >
            <!-- Option Français -->
            <button
              @click="
                changeLanguage('fr');
                isLangMenuOpen = false;
              "
              class="w-full text-left px-4 py-2 hover:bg-slate-100 transition duration-200 flex items-center gap-2 cursor-pointer"
              :class="{ 'text-slate-800 bg-slate-50': locale === 'fr' }"
            >
              <country-flag country="fr" size="small" />
              Français (FR)
            </button>

            <!-- Option Anglais -->
            <button
              @click="
                changeLanguage('en');
                isLangMenuOpen = false;
              "
              class="w-full text-left px-4 py-2 hover:bg-slate-100 transition duration-200 flex items-center gap-2 cursor-pointer"
              :class="{ 'text-slate-800 bg-slate-50': locale === 'en' }"
            >
              <country-flag country="gb" size="small" />
              English (EN)
            </button>
          </div>
        </div>
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden text-slate-100 p-1 hover:text-slate-300 focus:outline-none transition duration-200"
          aria-label="Ouvrir le menu"
        >
          <v-icon
            :name="isMobileMenuOpen ? 'io-close' : 'hi-menu'"
            scale="1.5"
          />
        </button>
      </div>
    </div>

    <!-- Menu mobile -->
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden flex flex-col w-full pt-4 pb-2 gap-3 border-t border-white/10 mt-3"
    >
      <RouterLink
        @click="closeMobileMenu"
        to="/"
        class="text-slate-100 font-medium py-1 hover:text-slate-300 text-lg"
      >
        {{ $t("nav.home") }}
      </RouterLink>
      <RouterLink
        @click="closeMobileMenu"
        to="/carrieres-nomades"
        class="text-slate-100 font-medium py-1 hover:text-slate-300 text-lg"
      >
        {{ $t("nav.carrieres_nomades") }}
      </RouterLink>
      <RouterLink
        @click="closeMobileMenu"
        to="/blue-mind"
        class="text-slate-100 font-medium py-1 hover:text-slate-300 text-lg"
      >
        {{ $t("nav.blue_mind") }}
      </RouterLink>
      <RouterLink
        @click="closeMobileMenu"
        to="/pricing"
        class="text-slate-100 font-medium py-1 hover:text-slate-300 text-lg"
      >
        {{ $t("nav.pricing") }}
      </RouterLink>

      <!-- Accordéon Présentation -->
      <div class="flex flex-col">
        <button
          @click="isPresentationOpen = !isPresentationOpen"
          class="text-slate-100 font-medium py-1 flex items-center justify-between text-lg text-left"
        >
          <span>{{ $t("nav.presentation") }}</span>
          <v-icon
            name="md-keyboardarrowdown"
            :class="{ 'rotate-180': isPresentationOpen }"
            class="transition-transform duration-200"
          />
        </button>
        <div
          v-show="isPresentationOpen"
          class="flex flex-col pl-4 py-2 gap-2 border-l border-white/20 ml-2"
        >
          <RouterLink
            @click="closeMobileMenu"
            to="/agency"
            class="text-slate-100 py-1 hover:text-white"
          >
            {{ $t("nav.agency") }}
          </RouterLink>
          <RouterLink
            @click="closeMobileMenu"
            to="/our-philosophy"
            class="text-slate-100 py-1 hover:text-white"
          >
            {{ $t("nav.philo") }}
          </RouterLink>
          <RouterLink
            @click="closeMobileMenu"
            to="/partners"
            class="text-slate-100 py-1 hover:text-white"
          >
            {{ $t("nav.partner") }}
          </RouterLink>
        </div>
      </div>

      <RouterLink
        @click="closeMobileMenu"
        to="/contact"
        class="text-slate-100 font-medium py-1 hover:text-slate-300 text-lg"
      >
        {{ $t("nav.contact") }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router";
import { computed } from "vue";
import { ref } from "vue";

import { useI18n } from "vue-i18n";

const { locale } = useI18n({ useScope: "global" });

const isLangMenuOpen = ref(false);

const changeLanguage = (lang) => {
  locale.value = lang;
  localStorage.setItem("user-locale", lang);
};

const route = useRoute();

const isHome = computed(() => route.path === "/");

// Gère l'ouverture du menu principal sur mobile
const isMobileMenuOpen = ref(false);

// Gère l'ouverture du sous-menu "Présentation" sur mobile
const isPresentationOpen = ref(false);

// Fonction de fermeture automatique après un clic sur un lien
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isPresentationOpen.value = false;
};
</script>
