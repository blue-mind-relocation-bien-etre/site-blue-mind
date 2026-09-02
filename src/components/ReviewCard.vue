<script setup>
const props = defineProps({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});
</script>

<template>
  <!-- 
    1. h-auto et min-h remplacent h-90 pour s'adapter au mobile
    2. justify-center est retiré pour que le contenu commence en haut 
    3. w-full et max-w-sm remplacent w-100 pour éviter que la carte sorte de l'écran sur mobile
  -->
  <div
    class="bg-white flex flex-col items-center w-full max-w-sm h-full min-h-80 mx-auto my-5 p-6 rounded-xl shadow-xl"
  >
    
    <!-- BLOC HAUT : Fixé en haut (Nom + Étoiles) -->
    <div class="flex flex-col items-center shrink-0 mb-4">
      <span class="text-secondary font-corinthia text-3xl md:text-4xl">
        {{ props.name }}
      </span>
      <div class="flex mt-2">
        <!-- Ajout d'un :key obligatoire sur les v-for dans Vue -->
        <div v-for="i in props.rating" :key="i">
          <v-icon name="bi-star-fill" fill="#EDC645" />
        </div>
      </div>
    </div>

    <!-- BLOC BAS : Texte centré, qui prend le reste de l'espace -->
    <!-- overflow-y-auto empêche le texte de déborder si l'écran est vraiment tout petit -->
    <div class="grow flex items-center justify-center w-full overflow-y-auto">
      <!-- text-center remplace text-justify -->
      <p class="text-slate-800 text-center text-sm md:text-base italic px-1">
        "{{ props.text }}"
      </p>
    </div>

  </div>
</template>
 