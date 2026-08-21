<template>
  <main>
    <section>
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
    </section>

    <ServicesCards />

    <section>
      <div class="flex flex-col justify-center items-center m-5">
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
    </section>

    <WaveTop />

    <section>
      <div class="bg-secondary">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight p-5 text-center"
        >
          {{ $t("carrieresNomades.city_part.title") }}
        </h2>
        <h4
          class="text-xl font-semibold text-slate-100 tracking-tight leading-tight text-center"
        >
          {{ $t("carrieresNomades.city_part.subtitle") }}
          <TypingCities />
          <span> ?</span>
        </h4>

        <!-- Grille pour texte + image -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <!-- div pour titre + texte + cartes -->
          <div class="flex flex-col justify-center w-full h-full">
            <!-- div pour titre + texte -->
            <div
              class="flex flex-col justify-center border-b bg-slate-100 rounded-xl shadow-xl mb-4"
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
            <div class="flex justify-center gap-4">
              <div
                v-for="n in 3"
                :key="n"
                class="bg-slate-100 items-center rounded-xl shadow-xl p-3"
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
            class="relative h-full w-full rounded-xl shadow-xl overflow-hidden min-h-75 bg-slate-100"
          >
            <img
              src="@/img/carte-france.png"
              alt="carte"
              class="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    <WaveBottom />

    <section>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center m-10"
      >
        {{ $t("carrieresNomades.marque_employeur.title") }}
      </h2>

      <i18n-t
        keypath="carrieresNomades.marque_employeur.text1"
        tag="p"
        class="text-slate-600 text-lg leading-relaxed text-center mx-5 md:mx-15 lg:mx-35 mb-10"
      >
        <strong
          v-for="(mot, index) in $tm(
            'carrieresNomades.marque_employeur.bold_words',
          )"
          :key="index"
          class="text-slate-800 font-semibold"
        >
          {{ $rt(mot) }}
        </strong>
      </i18n-t>
      <hr class="w-75 md:w-150 h-0.5 mx-auto my-6 bg-secondary border-0 rounded-full" />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p
            v-for="(text, index) in $tm(
              'carrieresNomades.marque_employeur.text2',
            )"
            :key="index"
            class="text-slate-600 text-lg leading-relaxed text-justify m-10"
          >
            {{ $rt(text) }}
          </p>
        </div>

        <div class="w-full mb-10 lg:mb-0">
          <Carousel
            :items-to-show="1"
            breakpoint-mode="viewport"
            :wrap-around="true"
            :autoplay="3000"
            :transition="500"
            :pauseAutoplayOnHover="true"
          >
            <Slide v-for="n in 5" :key="n">
              <img :src="getImageUrl(n)" alt="" class="w-full h-115 object-contain">
            </Slide>
            <template #addons>
              <Pagination class="fill-secondary" />
              <Navigation class="fill-secondary" />
            </template>
          </Carousel>
          <h5 class="text-xl font-semibold text-slate-800 tracking-tight leading-tight text-center mt-5">
            {{ $t("carrieresNomades.marque_employeur.carousel_subtitle") }}
          </h5>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ServicesCards from "@/components/carrieres_nomades/ServicesCards.vue";
import WaveTop from "@/components/WaveTop.vue";
import WaveBottom from "@/components/WaveBottom.vue";
import TypingCities from "@/components/TypingCities.vue";

import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const getImageUrl = (name) => {
  return new URL(`../img/${name}.png`, import.meta.url).href
}

</script>
