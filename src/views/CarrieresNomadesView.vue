<template>
  <main>
    <section>
      <div class="flex flex-col justify-center items-center pt-36 gap-5">
        <span class="font-corinthia text-5xl text-secondary block text-center">
          {{ $t("carrieresNomades.presentation.title1") }}
        </span>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
        >
          {{ $t("carrieresNomades.presentation.title2") }}
        </h2>
        <i18n-t
          keypath="carrieresNomades.presentation.text"
          tag="p"
          class="text-slate-600 text-lg leading-relaxed text-center mx-0 md:mx-15 lg:mx-35"
        >
          <strong
            v-for="(mot, index) in $tm(
              'carrieresNomades.presentation.bold_words',
            )"
            :key="index"
            class="text-slate-800 font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
      </div>
    </section>

    <ServicesCards />

    <section>

      <div class="flex flex-col justify-center items-center m-5">
        <h4 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center pb-8">
          {{ $t('carrieresNomades.text_before_button') }}
        </h4>
        <RouterLink
        to="/pricing"
        class="px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium text-2xl rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
        >
        {{ $t("carrieresNomades.button_quote") }}
      </RouterLink>
    </div>
  </section>

  <WaveTop />

  <section>
    <div class="bg-secondary h-100">
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight leading-tight p-5 text-center"
      >
        {{ $t("carrieresNomades.city_part.title") }}
      </h2>
      <h4 class="text-xl font-semibold text-slate-100 tracking-tight leading-tight text-center">
        {{ $t('carrieresNomades.city_part.subtitle') }}
        <TypingCities />
      <span> ?</span>
      </h4>
    </div>
  </section>

  <WaveBottom />

  </main>
</template>

<script setup>
import ServicesCards from "@/components/carrieres_nomades/ServicesCards.vue";
import WaveTop from "@/components/WaveTop.vue";
import WaveBottom from "@/components/WaveBottom.vue";
import TypingCities from "@/components/TypingCities.vue";

</script>


