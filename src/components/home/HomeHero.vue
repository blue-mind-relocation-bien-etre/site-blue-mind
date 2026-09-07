<template>
  <div class="relative min-h-screen w-full flex flex-col">
    <div
      class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-60"
      :style="{ backgroundImage: `url(${vagueImg})` }"
    ></div>

    <Transition appear name="slide-fade">
      <div
        class="relative z-10 pt-32 sm:pt-36 grid place-items-center px-4 mx-auto my-25"
      >
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl tracking-tight leading-tight drop-shadow-md"
        >
          {{ $t("home.hero.title") }}
        </h1>
        <p
          class="text-lg sm:text-2xl text-slate-100 max-w-2xl mt-15 font-light text-center drop-shadow"
        >
          {{ $t("home.hero.subtitle") }}
        </p>
        <a
          href="#decouvrir"
          @click.prevent="scrollToSection('decouvrir')"
          class="mt-20 flex flex-col items-center gap-2 text-white/80 hover:text-white transition group"
        >
          <span class="text-2xl font-medium tracking-wide">{{
            $t("home.hero.link")
          }}</span>
          <v-icon
            name="md-keyboardarrowdown"
            class="w-10 h-10 animate-bounce"
          />
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import vagueImg from "@/assets/vague.jpg";
import { Transition } from "vue";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
