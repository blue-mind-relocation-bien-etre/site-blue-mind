<script setup>
import HomeHero from "@/components/home/HomeHero.vue";
import HomePhilosophy from "@/components/home/HomePhilosophy.vue";
import HomeReviews from "@/components/home/HomeReviews.vue";
import HomeStats from "@/components/home/HomeStats.vue";
import HomeRegion from "@/components/home/HomeRegion.vue";

import WaveBottom from "@/components/WaveBottom.vue";
import WaveTop from "@/components/WaveTop.vue";
</script>

<template>
  <main>
    <HomeHero />

    <HomePhilosophy />

    <WaveTop />

    <HomeRegion />

    <WaveBottom />

    <HomeStats />
    
    <HomeReviews />
  </main>
</template>
