<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <!-- Colonne de gauche : formulaire devis -->
    <div>
      <PricingForm />
    </div>

    <!-- Colonne de droite : tarifs Blue Mind -->
    <div>
      <PricingBlueMind />
    </div>
  </div>
</template>

<script setup>
import PricingForm from "@/components/pricing/PricingForm.vue";
import PricingBlueMind from "@/components/pricing/PricingBlueMind.vue";

import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead(computed(() => ({
  title: t('pricing.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('pricing.seo.description')
    }
  ]
})))
</script>
