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
</script>
