<script setup>
const props = defineProps({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});
</script>

<template>
  <div
    class="bg-slate-100 flex flex-col justify-center items-center w-100 h-90 m-5 p-4 rounded-xl shadow-xl"
  >
    <span class="text-secondary font-corinthia text-3xl md:text-4xl">
      {{ props.name }}
    </span>
    <div class="flex">
      <div v-for="i in props.rating">
        <v-icon name="bi-star-fill" fill="#EDC645" />
      </div>
    </div>
    <div class="text-secondary text-justify p-5">
      {{ props.text }}
    </div>
  </div>
</template>
