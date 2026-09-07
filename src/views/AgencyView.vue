<template>
  <main>
    <!-- En-tête de la page -->
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pb-10 pt-36">
        <span class="font-corinthia text-5xl text-secondary block text-center">
          {{ $t("agency.corinthia_word") }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("agency.title1") }}
        </h2>
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

    <WaveTop />

    <!-- Actu média de l'entreprise -->
    <AgencyMedia />
  </main>
</template>

<script setup>
import AgencyTimeline from "@/components/agency/AgencyTimeline.vue";
import AgencyPresentation from "@/components/agency/AgencyPresentation.vue";
import AgencyMedia from "@/components/agency/AgencyMedia.vue";
import WaveTop from "@/components/WaveTop.vue";
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
