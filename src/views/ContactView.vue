<template>
  <main>
    <!-- En-tête de la page -->
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pt-36 gap-5 mb-10">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("contact.presentation.title") }}
        </h1>
        <p
          class="text-slate-600 text-lg leading-relaxed text-center mx-5 md:mx-15 lg:mx-35"
        >
          {{ $t("contact.presentation.text") }}
        </p>
      </div>
    </Transition>

    <!-- Grille principale -->
    <div class="grid grid-cols-1 xl:grid-cols-2 mb-10">
      <!-- Colonne de gauche : formulaire -->
      <div>
        <ContactForm
          :formType="$t('contact.form.title')"
          :messageTitle="$t('contact.form.message')"
        />
      </div>

      <!-- Colonne de droite : coordonnées et réseaux -->
      <div>
        <ContactInfo />
      </div>
    </div>
  </main>
</template>

<script setup>
import ContactForm from "@/contact/ContactForm.vue";
import ContactInfo from "@/contact/ContactInfo.vue";

import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead(computed(() => ({
  title: t('contact.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('contact.seo.description')
    }
  ]
})))
</script>

