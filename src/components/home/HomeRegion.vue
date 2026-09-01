<template>
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
        class="text-slate-100 text-lg leading-relaxed py-5 px-5 md:px-25 text-justify md:text-center mb-4"
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
</template>

<script setup>
import PolaroidImage from "@/components/PolaroidImage.vue";
</script>
