<template>
  <div class="mx-auto px-4 py-16 max-w-7xl overflow-x-hidden">
    <div class="relative w-full">
      <!-- LA LIGNE VERTICALE CENTRALE -->
      <div
        class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-600 -translate-x-1/2"
      ></div>

      <!-- BLOC 1 -->
      <div
        ref="block1Ref"
        class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 relative"
      >
        <div
          class="flex justify-end items-center relative pl-12 md:pl-0 transition-all duration-1000 ease-out transform"
          :class="
            isVisible1
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-16 md:-translate-x-16'
          "
        >
          <!-- Le Point -->
          <div
            class="absolute left-6 md:left-auto md:-right-8 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 md:translate-x-1/2 z-10"
          ></div>

          <!-- La Carte Blanche -->
          <div
            class="w-full bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8"
          >
            <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-4">
              <span class="text-secondary">2015 :</span>
              {{ $t("agency.timeline.block1.title") }}
            </h3>

            <i18n-t
              keypath="agency.timeline.block1.text"
              tag="p"
              class="text-slate-600 leading-relaxed text-justify"
            >
              <strong
                v-for="(mot, index) in $tm('agency.timeline.block1.bold_words')"
                :key="index"
                class="text-secondary font-semibold"
              >
                {{ $rt(mot) }}
              </strong>
            </i18n-t>
          </div>
        </div>
        <div class="hidden md:block"></div>
      </div>

      <!-- BLOC 2 : 2025 -->
      <div
        ref="block2Ref"
        class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative"
      >
        <div class="hidden md:block"></div>
        <div
          class="flex justify-start items-center relative pl-12 md:pl-0 transition-all duration-1000 ease-out transform"
          :class="
            isVisible2
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-16'
          "
        >
          <!-- Le Point -->
          <div
            class="absolute left-6 md:-left-8 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 z-10"
          ></div>

          <!-- La Carte Blanche -->
          <div
            class="w-full bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8"
          >
            <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-4">
              <span class="text-secondary">2025 :</span>
              {{ $t("agency.timeline.block2.title") }}
            </h3>

            <i18n-t
              keypath="agency.timeline.block2.text"
              tag="p"
              class="text-slate-600 leading-relaxed text-justify"
            >
              <strong
                v-for="(mot, index) in $tm('agency.timeline.block2.bold_words')"
                :key="index"
                class="text-secondary font-semibold"
              >
                {{ $rt(mot) }}
              </strong>
            </i18n-t>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const block1Ref = ref(null);
const isVisible1 = ref(false);
useIntersectionObserver(
  block1Ref,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible1.value = true;
  },
  { threshold: 0.2 },
);

const block2Ref = ref(null);
const isVisible2 = ref(false);
useIntersectionObserver(
  block2Ref,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible2.value = true;
  },
  { threshold: 0.2 },
);
</script>
