<script setup>
const props = defineProps({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  text: { type: String, required: true },
});
</script>

<template>
  <div
    class="bg-white flex flex-col items-center w-full max-w-sm h-full min-h-80 mx-auto my-5 p-6 rounded-xl shadow-xl"
  >
    <div class="flex flex-col items-center shrink-0 mb-4">
      <span class="text-secondary font-corinthia text-3xl md:text-4xl">
        {{ props.name }}
      </span>
      <div class="flex mt-2">
        <div v-for="i in props.rating" :key="i">
          <v-icon name="bi-star-fill" fill="#EDC645" />
        </div>
      </div>
    </div>
    <div class="grow flex items-center justify-center w-full overflow-y-auto">
      <p class="text-slate-800 text-center text-sm md:text-base italic px-1">
        "{{ props.text }}"
      </p>
    </div>
  </div>
</template>
