<template>
  <section>
    <div class="bg-secondary">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight p-5 text-center"
      >
        {{ $t("carrieresNomades.city_part.title") }}
      </h2>
      <h4
        class="text-xl font-semibold text-slate-100 tracking-tight leading-tight flex flex-col md:flex-row items-center justify-center md:gap-2"
      >
        <span class="mb-2 md:mb-0">
          {{ $t("carrieresNomades.city_part.subtitle") }}
        </span>

        <span class="min-w-62.5 md:min-w-0 text-center">
          <TypingCities />
          <span> ?</span>
        </span>
      </h4>

      <!-- Grille pour texte + image -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        <!-- div pour titre + texte + cartes -->
        <div class="flex flex-col justify-center w-full h-full">
          <!-- div pour titre + texte -->
          <div
            class="flex flex-col justify-center border-b bg-white rounded-xl shadow-xl mb-4"
          >
            <h4
              class="text-xl sm:text-2xl lg:text-3xl font-semibold text-secondary tracking-tight leading-tight p-3"
            >
              {{ $t("carrieresNomades.city_part.subtitle2") }}
            </h4>
            <i18n-t
              v-for="n in 3"
              :key="n"
              :keypath="`carrieresNomades.city_part.text${n}`"
              tag="p"
              class="text-slate-600 text-lg leading-relaxed text-justify p-2"
            >
              <strong
                v-for="(mot, index) in $tm(
                  `carrieresNomades.city_part.bold_words${n}`,
                )"
                :key="index"
                class="text-sslate-800 font-semibold"
              >
                {{ $rt(mot) }}
              </strong>
            </i18n-t>
          </div>
          <!-- div pour les 3 cartes -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div
              v-for="n in 3"
              :key="n"
              class="bg-white items-center rounded-xl shadow-xl p-3"
            >
              <h5
                class="text-secondary text-lg font-semibold tracking-tight leading-tight uppercase text-center"
              >
                {{ $tm(`carrieresNomades.city_part.card${n}.title`) }}
              </h5>
              <p class="text-slate-600 text-lg leading-relaxed text-center">
                {{ $tm(`carrieresNomades.city_part.card${n}.text`) }}
              </p>
            </div>
          </div>
        </div>
        <!-- div pour carte -->
        <div
          class="relative h-full w-full rounded-xl shadow-xl overflow-hidden min-h-75 bg-white"
        >
          <img
            src="@/assets/carte-france.webp"
            alt="carte"
            class="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TypingCities from "@/components/TypingCities.vue";
</script>
