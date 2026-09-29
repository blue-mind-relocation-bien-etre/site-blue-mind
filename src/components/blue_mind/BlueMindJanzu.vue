<template>
  <section class="mt-10 overflow-x-hidden" ref="sectionRef">
    <div
      class="grid grid-cols-1 lg:grid-cols-5 mb-10 transition-all duration-1000 ease-out transform"
      :class="
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      "
    >
      <div class="col-span-3">
        <h2
          class="font-corinthia text-5xl text-secondary tracking-tight leading-tight text-center"
        >
          {{ $t("blueMind.janzu.title") }}
        </h2>
        <hr
          class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
        />

        <i18n-t
          keypath="blueMind.janzu.text"
          tag="p"
          class="text-slate-800 text-justify px-10 mt-10"
        >
          <strong
            v-for="(mot, index) in $tm('blueMind.janzu.bold_words')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>

        <i18n-t
          keypath="blueMind.janzu.text2"
          tag="p"
          class="text-slate-800 text-justify mt-5 px-10"
        >
          <strong
            v-for="(mot, index) in $tm('blueMind.janzu.bold_words2')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>

        <i18n-t
          keypath="blueMind.janzu.text3"
          tag="p"
          class="text-slate-800 text-justify mt-5 px-10"
        >
          <strong
            v-for="(mot, index) in $tm('blueMind.janzu.bold_words3')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>

        <i18n-t
          keypath="blueMind.janzu.text4"
          tag="p"
          class="text-slate-800 text-justify mt-5 px-10"
        >
          <strong
            v-for="(mot, index) in $tm('blueMind.janzu.bold_words4')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
      </div>

      <div class="flex flex-col justify-center items-center col-span-2 mt-15">
        <img
          src="@/assets/logo_janzu.webp"
          alt="logo école francaise de janzu"
          class="h-65 object-cover"
        />
      </div>
    </div>

    <div
      class="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl mx-auto my-10 justify-items-center gap-y-18 gap-x-8"
    >
      <div class="relative w-65 h-65">
        <div
          class="absolute bg-slate-200 -inset-x-4 -top-4 -bottom-4 z-0 transform rotate-2"
        ></div>

        <img
          src="@/assets/janzu-1.webp"
          alt="Photo d'une prestation de Janzu"
          class="relative w-full h-full z-10 aspect-square object-cover"
        />
      </div>

      <div class="relative w-65 h-65 hidden lg:block">
        <div
          class="absolute bg-slate-200 -inset-x-4 -top-4 -bottom-4 z-0 transform -rotate-2"
        ></div>

        <img
          src="@/assets/janzu-3.webp"
          alt="Photo d'une prestation de Janzu"
          class="relative w-full h-full z-10 aspect-square object-cover"
        />
      </div>

      <div class="relative w-65 h-65">
        <div
          class="absolute bg-slate-200 -inset-x-4 -top-4 -bottom-4 z-0 transform rotate-2"
        ></div>

        <img
          src="@/assets/janzu-4.webp"
          alt="Photo d'une prestation de Janzu"
          class="relative w-full h-full z-10 aspect-square object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const sectionRef = ref(null);
const isVisible = ref(false);

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isVisible.value = true;
    }
  },
  {
    threshold: 0.2,
  },
);
</script>
