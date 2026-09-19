<script setup>
import HomeHero from "@/components/home/HomeHero.vue";
import HomePhilosophy from "@/components/home/HomePhilosophy.vue";
import HomeReviews from "@/components/home/HomeReviews.vue";
import HomeStats from "@/components/home/HomeStats.vue";
import HomeRegion from "@/components/home/HomeRegion.vue";

import WaveBottom from "@/components/WaveBottom.vue";
import WaveTop from "@/components/WaveTop.vue";

import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead(computed(() => ({
  title: t('home.seo.title'),
  meta: [
    {
      name: 'description',
      content: t('home.seo.description')
    }
  ]
})))
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
