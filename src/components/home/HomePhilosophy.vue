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
            class="px-7 py-3.5 bg-secondary hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
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
          src="@/img/finistere.jpg"
          alt="Paysage lumineux du Finistère"
          class="w-full h-100 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </section>

  <section>
    <div class="top-0 left-0 right-0 w-full leading-none z-0">
      <svg
        class="relative block w-full h-32 sm:h-48 lg:h-50"
        viewBox="0 300 960 240"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 330L22.8 338.3C45.7 346.7 91.3 363.3 137 367.5C182.7 371.7 228.3 363.3 274 359.3C319.7 355.3 365.3 355.7 411.2 353.8C457 352 503 348 548.8 351.8C594.7 355.7 640.3 367.3 686 369C731.7 370.7 777.3 362.3 823 362.8C868.7 363.3 914.3 372.7 937.2 377.3L960 382L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
          fill="#3b70cc"
        ></path>

        <path
          d="M0 431L22.8 424.2C45.7 417.3 91.3 403.7 137 401.8C182.7 400 228.3 410 274 413.2C319.7 416.3 365.3 412.7 411.2 405.3C457 398 503 387 548.8 391.5C594.7 396 640.3 416 686 426.7C731.7 437.3 777.3 438.7 823 434.3C868.7 430 914.3 420 937.2 415L960 410L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
          fill="#2b62c5"
        ></path>

        <path
          d="M0 451L22.8 447.2C45.7 443.3 91.3 435.7 137 434.5C182.7 433.3 228.3 438.7 274 441.5C319.7 444.3 365.3 444.7 411.2 446.2C457 447.7 503 450.3 548.8 454.8C594.7 459.3 640.3 465.7 686 464.7C731.7 463.7 777.3 455.3 823 447.5C868.7 439.7 914.3 432.3 937.2 428.7L960 425L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
          fill="#1a54bd"
        ></path>

        <path
          d="M0 483L22.8 481.5C45.7 480 91.3 477 137 474.7C182.7 472.3 228.3 470.7 274 473.5C319.7 476.3 365.3 483.7 411.2 490.7C457 497.7 503 504.3 548.8 502.8C594.7 501.3 640.3 491.7 686 490.5C731.7 489.3 777.3 496.7 823 499.5C868.7 502.3 914.3 500.7 937.2 499.8L960 499L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
          fill="#0245b5"
        ></path>
      </svg>
    </div>
  </section>

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
        class="text-slate-100 text-lg leading-relaxed py-5 px-25 text-center mb-4"
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
  <div class="top-0 left-0 right-0 w-full leading-none z-0">
    <svg
      class="relative block w-full h-32 sm:h-48 lg:h-50"
      viewBox="0 0 960 240"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 182L22.8 188.3C45.7 194.7 91.3 207.3 137 211C182.7 214.7 228.3 209.3 274 209.5C319.7 209.7 365.3 215.3 411.2 208C457 200.7 503 180.3 548.8 170.7C594.7 161 640.3 162 686 167.2C731.7 172.3 777.3 181.7 823 179.2C868.7 176.7 914.3 162.3 937.2 155.2L960 148L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#3b70cc"
      ></path>

      <path
        d="M0 105L22.8 107.5C45.7 110 91.3 115 137 124.2C182.7 133.3 228.3 146.7 274 148.3C319.7 150 365.3 140 411.2 142.2C457 144.3 503 158.7 548.8 160.2C594.7 161.7 640.3 150.3 686 147.3C731.7 144.3 777.3 149.7 823 155C868.7 160.3 914.3 165.7 937.2 168.3L960 171L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#2b62c5"
      ></path>

      <path
        d="M0 85L22.8 89C45.7 93 91.3 101 137 102.2C182.7 103.3 228.3 97.7 274 99.5C319.7 101.3 365.3 110.7 411.2 112.5C457 114.3 503 108.7 548.8 109.5C594.7 110.3 640.3 117.7 686 115.2C731.7 112.7 777.3 100.3 823 96.3C868.7 92.3 914.3 96.7 937.2 98.8L960 101L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#1a54bd"
      ></path>

      <path
        d="M0 78L22.8 72.8C45.7 67.7 91.3 57.3 137 53.3C182.7 49.3 228.3 51.7 274 48.3C319.7 45 365.3 36 411.2 33.2C457 30.3 503 33.7 548.8 37.3C594.7 41 640.3 45 686 50C731.7 55 777.3 61 823 57.2C868.7 53.3 914.3 39.7 937.2 32.8L960 26L960 0L937.2 0C914.3 0 868.7 0 823 0C777.3 0 731.7 0 686 0C640.3 0 594.7 0 548.8 0C503 0 457 0 411.2 0C365.3 0 319.7 0 274 0C228.3 0 182.7 0 137 0C91.3 0 45.7 0 22.8 0L0 0Z"
        fill="#0245b5"
      ></path>
    </svg>
  </div>
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

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-10 pt-5">
      <div class="flex flex-col justify-center items-center">
        <h3 class="text-6xl italic text-secondary leading-tight">
          <AnimatedCounter :target="2500" />
        </h3>
        <p class="text-2xl text-slate-800 tracking-tight leading-tight">
          {{ $t("home.part3.number1") }}
        </p>
      </div>

      <div class="flex flex-col justify-center items-center">
        <h3 class="text-6xl italic text-secondary leading-tight">
          <AnimatedCounter :target="70" />
          %
        </h3>
        <p class="text-2xl text-slate-800 tracking-tight leading-tight">
          {{ $t("home.part3.number2") }}
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
          <AnimatedCounter :target="29" />
        </h3>
        <p class="text-2xl text-slate-800 tracking-tight leading-tight">
          {{ $t("home.part3.number4") }}
        </p>
      </div>
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

      <!-- <div class="flex">
        <ReviewCard :name="$t('reviews.review-1.name')" :rating="parseInt($t('reviews.review-1.rating'))" :text="$t('reviews.review-1.text')"/>
        <ReviewCard :name="$t('reviews.review-2.name')" :rating="parseInt($t('reviews.review-2.rating'))" :text="$t('reviews.review-2.text')"/>
        <ReviewCard :name="$t('reviews.review-3.name')" :rating="parseInt($t('reviews.review-3.rating'))" :text="$t('reviews.review-3.text')"/>
        </div> -->

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

import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style>
/* les couleurs correspondent à slate-100 et slate-300 (pour hover) des classes tailwind */
.carousel {
  --vc-nav-color: oklch(96.8% 0.007 247.896);
  --vc-nav-color-hover: oklch(86.9% 0.022 252.894);
  --vc-pgn-background-color: oklch(96.8% 0.007 247.896);
  --vc-pgn-active-color: oklch(86.9% 0.022 252.894);
}
</style>
