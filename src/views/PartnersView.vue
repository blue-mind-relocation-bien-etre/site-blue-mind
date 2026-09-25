<template>
  <main>
    <!-- En-tête de la page -->
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pt-36 gap-5">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("partners.title") }}
        </h2>
        <i18n-t
          keypath="partners.text"
          tag="p"
          class="text-slate-600 text-lg leading-relaxed text-center mx-5 md:mx-15 lg:mx-35"
        >
          <strong
            v-for="(mot, index) in $tm('partners.bold_words')"
            :key="index"
            class="text-slate-800 font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
      </div>
    </Transition>

    <!-- Grille avec tous les partenaires -->
    <div class="mx-auto px-4 py-16">
      <div
        v-for="(category, catIdx) in $tm('partners.categories')"
        :key="catIdx"
        class="mb-16"
      >
        <h2
          class="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
        >
          {{ $rt(category.title) }}
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            v-for="(partner, partIdx) in category.items"
            :key="partIdx"
            @click="selectedPartner = partner"
            class="bg-white p-4 rounded-xl hover:border-secondary transition border border-slate-200 flex flex-col items-center justify-center aspect-square group"
          >
            <img
              :src="$rt(partner.logo)"
              :alt="$rt(partner.name)"
              class="h-16 mb-3 object-contain"
            />
            <span class="text-xs font-semibold text-slate-600 text-center">{{
              $rt(partner.name)
            }}</span>
          </button>
        </div>
      </div>

      <!-- Modal avec détail sur les entreprises -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedPartner"
          @click="selectedPartner = null"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
        >
          <div
            @click.stop
            class="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl"
          >
            <button
              @click="selectedPartner = null"
              class="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-3xl leading-none"
            >
              &times;
            </button>
            <img
              :src="$rt(selectedPartner.logo)"
              class="h-20 object-contain mb-6 mx-auto"
            />
            <h3 class="text-2xl font-bold text-slate-800 text-center mb-4">
              {{ $rt(selectedPartner.name) }}
            </h3>
            <p class="text-slate-600 text-justify mb-8">
              {{ $rt(selectedPartner.description) }}
            </p>

            <a
              v-if="selectedPartner.link"
              :href="$rt(selectedPartner.link)"
              target="_blank"
              class="block w-full text-center bg-secondary text-slate-100 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              {{ $t("partners.modal_text") }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const selectedPartner = ref(null);

import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead(computed(() => ({
  title: t('partners.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('partners.seo.description')
    }
  ]
})))
</script>
