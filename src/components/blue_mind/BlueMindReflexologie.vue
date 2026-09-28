<template>
  <section class="mt-20" ref="sectionRef">
    <Transition name="slide-fade">
      <div v-show="isVisible" class="grid grid-cols-1 mb-30">
        <div class="lg:mx-35">
          <h2
            class="font-corinthia text-5xl text-secondary tracking-tight leading-tight text-center"
          >
            {{ $t("blueMind.reflexologie.title") }}
          </h2>
          <hr
            class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
          />

          <i18n-t
            keypath="blueMind.reflexologie.text"
            tag="p"
            class="text-slate-800 text-justify mt-5 px-10"
          >
            <strong
              v-for="(mot, index) in $tm('blueMind.reflexologie.bold_words')"
              :key="index"
              class="text-secondary font-semibold"
            >
              {{ $rt(mot) }}
            </strong>
          </i18n-t>

          <i18n-t
            keypath="blueMind.reflexologie.text2"
            tag="p"
            class="text-slate-800 text-justify mt-5 px-10"
          >
            <strong
              v-for="(mot, index) in $tm('blueMind.reflexologie.bold_words2')"
              :key="index"
              class="text-secondary font-semibold"
            >
              {{ $rt(mot) }}
            </strong>
          </i18n-t>

          <i18n-t
            keypath="blueMind.reflexologie.text3"
            tag="p"
            class="text-slate-800 text-justify mt-5 px-10"
          >
            <strong
              v-for="(mot, index) in $tm('blueMind.reflexologie.bold_words3')"
              :key="index"
              class="text-secondary font-semibold"
            >
              {{ $rt(mot) }}
            </strong>
          </i18n-t>
        </div>
      </div>
    </Transition>
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
    threshold: 0.3,
  },
);
</script>
