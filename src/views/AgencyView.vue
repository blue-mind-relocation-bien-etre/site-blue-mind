<template>
  <main>
    <!-- En-tête de la page -->
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pb-10 pt-36">
        <span class="font-corinthia text-5xl text-secondary block text-center">
          {{ $t("agency.corinthia_word") }}
        </span>
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("agency.title1") }}
        </h1>
      </div>
    </Transition>

    <!-- Timeline de l'histoire de l'entreprise -->
    <AgencyTimeline />

    <!-- Ligne de séparation -->
    <hr
      class="w-75 md:w-335 h-0.5 mx-auto my-6 bg-secondary border-0 rounded-full"
    />

    <!-- Présentation de Annabel -->
    <AgencyPresentation />

    <section>
      <div class="flex flex-col justify-center items-center mt-20 mb-1">
        <p class="text-sm text-slate-600">Photo : Franck Betermin - Brest métropole</p>
      </div>
    </section>

  </main>
</template>

<script setup>
import AgencyTimeline from "@/components/agency/AgencyTimeline.vue";
import AgencyPresentation from "@/components/agency/AgencyPresentation.vue";

import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead(computed(() => ({
  title: t('agency.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('agency.seo.description')
    }
  ]
})))
</script>

