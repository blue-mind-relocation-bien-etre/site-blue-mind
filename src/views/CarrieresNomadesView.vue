<template>
  <main>
    <!-- En-tête de la page -->
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pt-36 gap-5">
        <span class="font-corinthia text-5xl text-secondary block text-center">
          {{ $t("carrieresNomades.presentation.title1") }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("carrieresNomades.presentation.title2") }}
        </h2>
        <i18n-t
          keypath="carrieresNomades.presentation.text"
          tag="p"
          class="text-slate-600 text-lg leading-relaxed text-center mx-5 md:mx-15 lg:mx-35"
        >
          <strong
            v-for="(mot, index) in $tm(
              'carrieresNomades.presentation.bold_words',
            )"
            :key="index"
            class="text-slate-800 font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
      </div>
    </Transition>

    <Presentation2 />

    <!-- Présentation des services  -->
    <ServicesNav />

    <!-- Bouton vers le devis -->
    <section ref="sectionRef">
      <Transition name="slide-fade">
        <div v-show="isVisible" class="flex flex-col justify-center items-center m-5">
          <h4
            class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center pb-8"
          >
            {{ $t("carrieresNomades.text_before_button") }}
          </h4>
          <RouterLink
            to="/pricing"
            class="px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium text-xl rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
          >
            {{ $t("carrieresNomades.button_quote") }}
          </RouterLink>
        </div>
      </Transition>
    </section>

    <WaveTop />

    <!-- Présentation du secteur d'activité -->
    <Location />

    <WaveBottom />

    <!-- Présentation marque employeur -->
    <MarqueEmployeur />
  </main>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'TEST SEO EN DUR',
  meta: [
    { name: 'description', content: 'Ceci est un test en dur' }
  ]
})
import Location from "@/components/carrieres_nomades/Location.vue";
import MarqueEmployeur from "@/components/carrieres_nomades/MarqueEmployeur.vue";
import ServicesNav from "@/components/carrieres_nomades/ServicesNav.vue";
import Presentation2 from "@/components/carrieres_nomades/Presentation2.vue";

import WaveTop from "@/components/WaveTop.vue";
import WaveBottom from "@/components/WaveBottom.vue";

import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const sectionRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true;
    }
  },
  {
    threshold: 0.25,
  },
);

// import { computed } from 'vue'
// import { useHead } from '@unhead/vue'
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()

// useHead(computed(() => ({
//   title: t('carrieresNomades.seo.title'),
//   meta: [
//     {
//       name: 'description',
//       content: t('carrieresNomades.seo.description')
//     }
//   ]
// })))

</script>

