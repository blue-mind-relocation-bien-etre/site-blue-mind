<template>
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
    <div class="flex justify-center items-center m-4">
      <img src="@/assets/carte-pays.webp" alt="carte" class="" />
    </div>
  </section>
</template>

<script setup>
import AnimatedCounter from "@/components/AnimatedCounter.vue";
</script>
