<template>
  <section class="mx-auto px-6 pt-15 lg:pt-20 pb-3 shadow-xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="col-span-7 relative">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-blue-100 opacity-80"
        >
          <v-icon name="ri-double-quotes-r" scale="10" class="mb-8"></v-icon>
        </div>

        <div
          class="relative flex flex-col items-center gap-2 z-10 md:text-lg text-slate-600 text-lg leading-relaxed text-center italic mb-8 mx-10"
        >
          <i18n-t
            keypath="blueMind.presentation_2.text"
            tag="p"
            class="text-slate-600 text-lg leading-relaxed text-center"
          >
            <strong
              v-for="(mot, index) in $tm('blueMind.presentation_2.bold_words')"
              :key="index"
              class="text-slate-800 font-semibold"
            >
              {{ $rt(mot) }}
            </strong>
          </i18n-t>
          <i18n-t
            keypath="blueMind.presentation_2.text2"
            tag="p"
            class="text-slate-600 text-lg leading-relaxed text-center"
          >
            <strong
              v-for="(mot, index) in $tm('blueMind.presentation_2.bold_words2')"
              :key="index"
              class="text-slate-800 font-semibold"
            >
              {{ $rt(mot) }}
            </strong>
          </i18n-t>
          <p>-</p>
          <p>{{ $t("blueMind.presentation_2.name") }}</p>
        </div>
      </div>
      <div class="col-span-5 flex justify-center items-center">
        <div class="relative w-3/4 max-w-xs">
          <div
            class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-2"
          ></div>

          <img
            src="@/assets/annabel-3.webp"
            alt="Paysage lumineux du Finistère"
            class="w-full aspect-4/5 relative z-10 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center mt-20">
      <p class="text-sm text-slate-600">
        Photo : Geraldine Cabon - Exploratrice Terre Océane
      </p>
    </div>
  </section>
</template>

<script setup></script>
