<template>
  <section class="mx-auto px-6 py-15 lg:py-20 shadow-xl">
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center items-center">
        <div class="relative">
          <div
            class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-2"
          ></div>

          <img
            src="@/assets/annabel-4.webp"
            alt="Paysage lumineux du Finistère"
            class="w-full h-85 relative z-10 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
      <div class="relative mt-20">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-blue-100 opacity-80"
        >
          <v-icon name="ri-double-quotes-r" scale="10" class="mb-8"></v-icon>
        </div>

        <div
          class="relative flex flex-col items-center gap-2 z-10 md:text-lg text-slate-600 text-lg leading-relaxed text-center italic mb-8 mx-25"
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
          <p>-</p>
          <p>{{ $t("contact.details.text_name") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
