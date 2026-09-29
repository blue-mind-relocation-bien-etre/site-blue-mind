<template>
  <section ref="sectionRef">
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

    <Transition name="fade-in">
      <div
        v-show="isVisible"
        class="grid grid-cols-1 lg:grid-cols-3 pb-10 pt-5"
      >
        <div class="flex flex-col justify-center items-center mb-5 md:mb-0">
          <h3 class="text-5xl md:text-6xl italic text-secondary leading-tight">
            <AnimatedCounter :target="3000" />
          </h3>
          <p class="text-2xl text-slate-800 tracking-tight leading-tight">
            {{ $t("home.part3.number1") }}
          </p>
        </div>

        <div class="flex flex-col justify-center items-center mb-5 md:mb-0">
          <h3 class="text-5xl md:text-6xl italic text-secondary leading-tight">
            <AnimatedCounter :target="30" />
            %
          </h3>
          <p class="text-2xl text-slate-800 tracking-tight leading-tight">
            {{ $t("home.part3.number3") }}
          </p>
        </div>

        <div class="flex flex-col justify-center items-center mb-5 md:mb-0">
          <h3 class="text-5xl md:text-6xl italic text-secondary leading-tight">
            <AnimatedCounter :target="36" />
          </h3>
          <p class="text-2xl text-slate-800 tracking-tight leading-tight">
            {{ $t("home.part3.number4") }}
          </p>
        </div>
      </div>
    </Transition>
    <div class="flex justify-center items-center m-4">
      <img src="@/assets/carte-pays.webp" alt="Carte des pays accompagnés par l'entreprise" class="" />
    </div>
  </section>
</template>

<script setup>
import AnimatedCounter from "@/components/AnimatedCounter.vue";
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
    threshold: 0.25,
  },
);
</script>

<style scoped>
.fade-in-enter-active {
  transition: all 1s ease-out;
}

.fade-in-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
