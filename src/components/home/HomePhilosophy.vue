<template>
  <section id="decouvrir" class="max-w-7xl mx-auto px-6 py-20 lg:py-28">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div class="lg:col-span-7 space-y-6">
        <span class="font-corinthia text-5xl text-secondary block">
          {{ $t("home.part1.title1") }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight"
        >
          {{ $t("home.part1.title2") }}
        </h2>
        <i18n-t
          keypath="home.part1.text"
          tag="p"
          class="text-slate-600 text-lg leading-relaxed text-justify"
        >
          <strong
            v-for="(mot, index) in $tm('home.part1.bold_words')"
            :key="index"
            class="text-slate-800 font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
        <div class="pt-4 flex flex-wrap items-center gap-4">
          <RouterLink
            to="/blue-mind"
            class="px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
          >
            {{ $t("home.part1.button1") }}
          </RouterLink>
          <RouterLink
            to="/carrieres-nomades"
            class="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition duration-200"
          >
            {{ $t("home.part1.button2") }}
          </RouterLink>
        </div>
      </div>
      <div class="lg:col-span-5 relative">
        <div
          class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-2"
        ></div>

        <img
          src="@/assets/finistere.webp"
          alt="Paysage lumineux du Finistère"
          class="w-full h-100 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </section>

  <WaveTop />

  <section>
    <div
      class="bg-secondary z-10 p-5 flex flex-col justify-center items-center"
    >
      <span class="font-corinthia text-6xl text-slate-100 block p-5">
        {{ $t("home.part2.title1") }}
      </span>

      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight p-5 text-center"
      >
        {{ $t("home.part2.title2") }}
      </h2>

      <i18n-t
        keypath="home.part2.text"
        tag="p"
        class="text-slate-100 text-lg leading-relaxed py-5 px-10 md:px-25 text-center mb-4"
      >
        <strong
          v-for="(mot, index) in $tm('home.part2.bold_words')"
          :key="index"
          class="text-slate-200 font-bold"
        >
          {{ $rt(mot) }}
        </strong>
      </i18n-t>

      <PolaroidImage />
    </div>
  </section>

  <WaveBottom />

  <section>
    <div class="flex flex-col justify-center items-center pb-10 pt-5">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight"
      >
        {{ $t("home.part3.title1") }}
      </h2>
      <span class="font-corinthia text-7xl text-secondary block">
        {{ $t("home.part3.corinthia_word") }}
      </span>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight"
      >
        {{ $t("home.part3.title2") }}
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 pb-10 pt-5">
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-6xl italic text-secondary leading-tight">
          <AnimatedCounter :target="3000" />
        </h3>
        <p class="text-2xl text-slate-800 tracking-tight leading-tight">
          {{ $t("home.part3.number1") }}
        </p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <h3 class="text-6xl italic text-secondary leading-tight">
          <AnimatedCounter :target="30" />
          %
        </h3>
        <p class="text-2xl text-slate-800 tracking-tight leading-tight">
          {{ $t("home.part3.number3") }}
        </p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <h3 class="text-6xl italic text-secondary leading-tight">
          <AnimatedCounter :target="36" />
        </h3>
        <p class="text-2xl text-slate-800 tracking-tight leading-tight">
          {{ $t("home.part3.number4") }}
        </p>
      </div>
    </div>
    <div class="flex justify-center items-center m-4">
      <img src="@/assets/carte-pays.webp" alt="carte" class="">
    </div>
  </section>

  <!-- avis clients -->
  <section>
    <div class="bg-secondary p-5 flex flex-col justify-center items-center">
      <span class="font-corinthia text-6xl text-slate-100 block p-5">
        {{ $t("reviews.title1") }}
      </span>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight p-5 text-center"
      >
        {{ $t("reviews.title2") }}
      </h2>

      <div class="w-full">
        <Carousel
          :items-to-show="1"
          breakpoint-mode="viewport"
          :breakpoints="{
            1280: {
              itemsToShow: 3,
            },
          }"
          :wrap-around="true"
          :autoplay="3000"
          :transition="500"
        >
          <Slide v-for="n in 6" :key="n">
            <ReviewCard
              :name="$t(`reviews.review-${n}.name`)"
              :rating="parseInt($t(`reviews.review-${n}.rating`))"
              :text="$t(`reviews.review-${n}.text`)"
            />
          </Slide>
          <template #addons>
            <Pagination class="fill-slate-100" />
            <Navigation class="fill-slate-100" />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import PolaroidImage from "@/components/PolaroidImage.vue";
import AnimatedCounter from "@/components/AnimatedCounter.vue";
import ReviewCard from "../ReviewCard.vue";
import WaveBottom from "../WaveBottom.vue";
import WaveTop from "../WaveTop.vue";

import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style scoped>
/* les couleurs correspondent à slate-100 et slate-300 (pour hover) des classes tailwind */
.carousel {
  --vc-nav-color: oklch(96.8% 0.007 247.896);
  --vc-nav-color-hover: oklch(86.9% 0.022 252.894);
  --vc-pgn-background-color: oklch(96.8% 0.007 247.896);
  --vc-pgn-active-color: oklch(86.9% 0.022 252.894);
}
</style>
