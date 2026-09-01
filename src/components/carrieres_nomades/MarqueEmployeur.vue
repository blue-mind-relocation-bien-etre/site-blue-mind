<template>
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
    <hr
      class="w-75 md:w-150 h-0.5 mx-auto my-6 bg-slate-800 border-0 rounded-full"
    />
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
            <img
              :src="getImageUrl(n)"
              alt=""
              class="w-full h-115 object-contain"
            />
          </Slide>
          <template #addons>
            <Pagination class="fill-secondary" />
            <Navigation class="fill-secondary" />
          </template>
        </Carousel>
        <h5
          class="text-xl font-semibold text-slate-800 tracking-tight leading-tight text-center mt-5"
        >
          {{ $t("carrieresNomades.marque_employeur.carousel_subtitle") }}
        </h5>
      </div>
    </div>
  </section>
</template>

<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const getImageUrl = (name) => {
  return new URL(`../../assets/${name}.webp`, import.meta.url).href;
};
</script>
