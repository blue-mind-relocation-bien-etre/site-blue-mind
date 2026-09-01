<template>
  <section id="decouvrir" class="max-w-7xl mx-auto px-6 py-20 lg:py-28">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div class="lg:col-span-7 space-y-6">
        <span class="font-corinthia text-5xl text-secondary block">
          {{ $t("home.part1.title1") }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight"
        >
          {{ $t("home.part1.title2") }}
        </h2>
        <i18n-t
          keypath="home.part1.text"
          tag="p"
          class="text-slate-600 text-lg leading-relaxed text-justify"
        >
          <strong
            v-for="(mot, index) in $tm('home.part1.bold_words')"
            :key="index"
            class="text-slate-800 font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
        <div class="pt-4 flex flex-wrap items-center gap-4">
          <RouterLink
            to="/blue-mind"
            class="px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
          >
            {{ $t("home.part1.button1") }}
          </RouterLink>
          <RouterLink
            to="/carrieres-nomades"
            class="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition duration-200"
          >
            {{ $t("home.part1.button2") }}
          </RouterLink>
        </div>
      </div>
      <div class="lg:col-span-5 relative">
        <div
          class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-2"
        ></div>

        <img
          src="@/assets/finistere.webp"
          alt="Paysage lumineux du Finistère"
          class="w-full h-100 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>
