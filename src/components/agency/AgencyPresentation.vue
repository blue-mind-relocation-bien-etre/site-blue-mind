<template>
  <section>
    <h2
      class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight leading-tight text-center mt-5 mb-10"
    >
      {{ $t("agency.presentation.title") }}
    </h2>
    <div
      class="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 mx-15 pb-25"
    >
      <div class="lg:col-span-7 relative">
        <div
          class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-1"
        ></div>
        <p
          class="text-slate-800 text-lg leading-relaxed tracking-tight text-justify px-4 pb-3"
        >
          {{ $t("agency.presentation.text") }}
        </p>
        <p
          class="text-slate-800 text-lg leading-relaxed tracking-tight text-justify px-4"
        >
          {{ $t("agency.presentation.text2") }}
        </p>
      </div>
      <div class="lg:col-span-5 mx-auto relative">
        <img src="@/assets/annabel-2.webp" alt="Photo de Annabel Martin" class="rounded-2xl w-70 h-70 object-cover object-top" />
        <p
          class="absolute top-full w-full text-center font-corinthia text-4xl mt-2"
        >
          Annabel Martin
        </p>
      </div>
    </div>

    <div class="relative flex items-center justify-center mx-15 md:mx-50 mb-10">
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-blue-100 opacity-80"
      >
        <v-icon name="ri-double-quotes-r" scale="10" class="mb-8"></v-icon>
      </div>

      <div
        class="relative flex flex-col items-center gap-2 z-10 text-slate-600 font-medium text-center italic mb-8 leading-relaxed tracking-tight"
      >
        <p>"{{ $t("agency.presentation.quote") }}"</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>
