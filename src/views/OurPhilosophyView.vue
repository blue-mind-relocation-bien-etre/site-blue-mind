<template>
  <main>
    <Transition appear name="slide-fade">
      <div class="flex flex-col justify-center items-center pb-10 pt-36">
        <span class="font-corinthia text-5xl text-secondary block text-center">
          {{ $t("philosophy.title") }}
        </span>
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("philosophy.title2") }}
        </h1>
      </div>
    </Transition>

    <PhiloPart1 />

    <PhiloPart2 />
  </main>
</template>

<script setup>
import PhiloPart1 from '@/components/philosophy/PhiloPart1.vue';
import PhiloPart2 from '@/components/philosophy/PhiloPart2.vue';
</script>
