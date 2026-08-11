<template>
  <section class="mx-auto px-4 py-16 flex justify-center">
    <div class="grid grid-cols-1 xl:grid-cols-2 p-10 gap-8">
      <div
        v-for="(card, cardIndex) in $tm('carrieresNomades.cards')"
        :key="cardIndex"
        class="group relative bg-linear-to-b from-secondary to-primary h-170 w-140 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
      >
        <!-- Face bleue -->
        <div
          class="absolute inset-0 p-8 flex flex-col justify-between items-center transition-opacity duration-500 group-hover:opacity-0"
        >
          <div
            class="border border-slate-100 text-slate-100 px-8 py-3 rounded-lg font-bold uppercase tracking-wider w-full text-center"
          >
            {{ $rt(card.title) }}
          </div>
          <div>
            <v-icon
              :name="$rt(card.icon)"
              class="text-slate-100"
              scale="7"
            ></v-icon>
          </div>

          <div class="text-slate-100 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </div>

        <!-- Face caché au début -->
        <div
          class="absolute inset-0 bg-slate-100 p-8 flex flex-col opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10 overflow-y-auto"
        >
          <h3
            class="text-secondary font-bold text-xl mb-6 text-center uppercase tracking-wider"
          >
            {{ $rt(card.title) }}
          </h3>
          <p class="text-slate-800 mb-4">
            {{ $rt(card.intro_text) }}
          </p>

          <div
            v-for="(section, sectionIndex) in card.sections"
            :key="sectionIndex"
          >
            <h4 v-if="section.subtitle" class="font-bold text-slate-800 m-2">
              {{ $rt(section.subtitle) }}
            </h4>
            <ul class="list-disc list-inside text-slate-800 space-y-2">
              <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
                {{ $rt(item) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
