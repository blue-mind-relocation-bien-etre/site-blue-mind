<template>
  <section class="mt-10 mb-10 pb-8 shadow-xl">
    <div class="grid grid-cols-1 lg:grid-cols-5 mb-10">
      <div class="col-span-3">
        <h2
          class="font-corinthia text-5xl text-secondary tracking-tight leading-tight text-center"
        >
          {{ $t("philosophy.part1.title") }}
        </h2>
        <hr
          class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
        />

        <i18n-t
          keypath="philosophy.part1.text1"
          tag="p"
          class="text-slate-800 text-justify px-10 mt-10"
        >
          <strong
            v-for="(mot, index) in $tm('philosophy.part1.bold_words1')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>

        <i18n-t
          keypath="philosophy.part1.text2"
          tag="p"
          class="text-slate-800 text-justify mt-5 px-10"
        >
          <strong
            v-for="(mot, index) in $tm('philosophy.part1.bold_words2')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>

        <i18n-t
          keypath="philosophy.part1.text3"
          tag="p"
          class="text-slate-800 text-justify mt-5 px-10"
        >
          <strong
            v-for="(mot, index) in $tm('philosophy.part1.bold_words3')"
            :key="index"
            class="text-secondary font-semibold"
          >
            {{ $rt(mot) }}
          </strong>
        </i18n-t>
      </div>

      <div class="flex flex-col justify-center items-center col-span-2 mt-15">
        <div class="relative w-80 h-80">
          <div
            class="absolute bg-slate-200 -inset-x-4 -top-4 -bottom-4 z-0 transform rotate-2"
          ></div>

          <img
            src="@/assets/maison-philo.webp"
            alt="brest1"
            class="relative w-full h-full z-10 aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
