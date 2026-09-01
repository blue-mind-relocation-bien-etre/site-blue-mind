<template>
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
          <Slide v-for="n in 10" :key="n">
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
import ReviewCard from "../ReviewCard.vue";
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
