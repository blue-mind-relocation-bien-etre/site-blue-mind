<template>
  <main>
    <!-- En-tête de la page -->
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pt-36 gap-5">
        <span class="font-corinthia text-5xl text-secondary block text-center">
          {{ $t("blueMind.presentation.title1") }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("blueMind.presentation.title2") }}
        </h2>
      </div>
    </Transition>

    <BlueMindPresentation />

    <BlueMindJanzu />

    <BlueMindReflexologie />

    <section class="mb-10">
      <div class="flex flex-col justify-center items-center m-5">
        <h4
          class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center pb-8"
        >
          {{ $t("blueMind.pricing_text") }}
        </h4>
        <RouterLink
          to="/pricing"
          class="px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium text-xl rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
        >
          {{ $t("blueMind.button_text") }}
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Transition } from "vue";
import BlueMindPresentation from "@/components/blue_mind/BlueMindPresentation.vue";
import BlueMindJanzu from "@/components/blue_mind/BlueMindJanzu.vue";
import BlueMindReflexologie from "@/components/blue_mind/BlueMindReflexologie.vue";
</script>
