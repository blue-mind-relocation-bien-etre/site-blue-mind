<template>
  <span class="pl-1 inline-block text-left text-slate-100 font-corinthia text-4xl">
    {{ displayedText }}
    <span
      class="inline-block w-0.5 bg-slate-100 h-6.5 ml-1 align-middle animate-blink"
    ></span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const cities = ["Brest", "Lorient", "Vannes", "Nantes", "Lyon", "Bordeaux"];

const displayedText = ref("");
const cityIndex = ref(0);
let isDeleting = false;
let timer = null;

const typeEffect = () => {
  const currentCity = cities[cityIndex.value];

  if (!isDeleting) {
    displayedText.value = currentCity.substring(
      0,
      displayedText.value.length + 1,
    );

    let speed = 150;

    if (displayedText.value === currentCity) {
      isDeleting = true;
      speed = 2500;
    }

    timer = setTimeout(typeEffect, speed);
  } else {
    displayedText.value = currentCity.substring(
      0,
      displayedText.value.length - 1,
    );

    let speed = 75;

    if (displayedText.value === "") {
      isDeleting = false;
      cityIndex.value = (cityIndex.value + 1) % cities.length;
      speed = 500;
    }

    timer = setTimeout(typeEffect, speed);
  }
};

onMounted(() => {
  timer = setTimeout(typeEffect, 500);
});

onUnmounted(() => {
  clearTimeout(timer);
});
</script>

<style scoped>
.animate-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
