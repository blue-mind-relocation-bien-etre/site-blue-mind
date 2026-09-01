<template>
  <main>
    <!-- En-tête de la page -->
    <div class="flex flex-col justify-center items-center pt-36 gap-5">
      <span class="font-corinthia text-5xl text-secondary block text-center">
        {{ $t("blueMind.presentation.title1") }}
      </span>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
      >
        {{ $t("blueMind.presentation.title2") }}
      </h2>
      <i18n-t
        keypath="blueMind.presentation.text"
        tag="p"
        class="text-slate-600 text-lg leading-relaxed text-center mx-5 md:mx-15 lg:mx-35"
      >
        <strong
          v-for="(mot, index) in $tm('blueMind.presentation.bold_words')"
          :key="index"
          class="text-slate-800 font-semibold"
        >
          {{ $rt(mot) }}
        </strong>
      </i18n-t>
    </div>
  </main>
</template>

<script setup></script>
