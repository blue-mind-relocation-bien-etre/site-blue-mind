<template>
  <main>
    <div class="flex flex-col justify-center items-center pb-10 pt-36">
      <span class="font-corinthia text-5xl text-secondary block text-center">
        {{ $t("agency.corinthia_word") }}
      </span>
      <h2
        class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
      >
        {{ $t("agency.title1") }}
      </h2>
    </div>

    <!-- On retire le "relative" d'ici, il ne sert plus qu'à centrer la section -->
    <div class="mx-auto px-4 py-16 max-w-7xl">
      <!-- 🟢 NOUVELLE BOÎTE : C'est le repère commun pour la ligne ET les points -->
      <div class="relative w-full">
        <!-- 1. LA LIGNE VERTICALE CENTRALE -->
        <!-- Retrait du "md:" devant "-translate-x-1/2" pour l'aligner au millimètre même sur mobile -->
        <div
          class="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-600 -translate-x-1/2"
        ></div>

        <!-- ========================================== -->
        <!-- BLOC 1 : 2015 (À GAUCHE SUR GRAND ÉCRAN)   -->
        <!-- ========================================== -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 relative"
        >
          <!-- Moitié Gauche : La Carte -->
          <div class="flex justify-end items-center relative pl-12 md:pl-0">
            <!-- Le Point -->
            <div
              class="absolute left-6 md:left-auto md:-right-8 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 md:translate-x-1/2 z-10"
            ></div>

            <!-- La Carte Blanche -->
            <div
              class="w-full bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8"
            >
              <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-4">
                <span class="text-secondary">2015 :</span>
                {{ $t("agency.timeline.block1.title") }}
              </h3>

              <i18n-t
                keypath="agency.timeline.block1.text"
                tag="p"
                class="text-slate-600 leading-relaxed text-justify"
              >
                <strong
                  v-for="(mot, index) in $tm(
                    'agency.timeline.block1.bold_words',
                  )"
                  :key="index"
                  class="text-secondary font-semibold"
                >
                  {{ $rt(mot) }}
                </strong>
              </i18n-t>
            </div>
          </div>

          <!-- Moitié Droite : Vide pour laisser la place -->
          <div class="hidden md:block"></div>
        </div>

        <!-- ========================================== -->
        <!-- BLOC 2 : 2025 (À DROITE SUR GRAND ÉCRAN)   -->
        <!-- ========================================== -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 relative"
        >
          <!-- Moitié Gauche : Vide pour laisser la place -->
          <div class="hidden md:block"></div>

          <!-- Moitié Droite : La Carte -->
          <div class="flex justify-start items-center relative pl-12 md:pl-0">
            <!-- Le Point -->
            <div
              class="absolute left-6 md:-left-8 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 z-10"
            ></div>

            <!-- La Carte Blanche -->
            <div
              class="w-full bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8"
            >
              <!-- Le Titre -->
              <h3 class="text-lg md:text-xl font-bold text-slate-800 mb-4">
                <span class="text-secondary">2025 :</span>
                {{ $t("agency.timeline.block2.title") }}
              </h3>

              <i18n-t
                keypath="agency.timeline.block2.text"
                tag="p"
                class="text-slate-600 leading-relaxed text-justify"
              >
                <strong
                  v-for="(mot, index) in $tm(
                    'agency.timeline.block2.bold_words',
                  )"
                  :key="index"
                  class="text-secondary font-semibold"
                >
                  {{ $rt(mot) }}
                </strong>
              </i18n-t>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr
      class="w-75 md:w-335 h-0.5 mx-auto my-6 bg-secondary border-0 rounded-full"
    />

    <h5
      class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 tracking-tight leading-tight text-center mt-5 mb-10"
    >
      {{ $t("agency.presentation.title") }}
    </h5>
    <div
      class="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 mx-15 pb-25"
    >
      <div class="lg:col-span-7 relative">
        <div
          class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-1"
        ></div>
        <p
          class="text-slate-600 leading-relaxed tracking-tight text-justify p-4"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          ipsam illum laboriosam. Nobis, a fugiat? Repellendus ullam porro nulla
          placeat a ratione assumenda cumque! Obcaecati corrupti culpa inventore
          commodi modi? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Maiores doloribus molestiae laborum ex fuga magni consequuntur
          qui, eos assumenda incidunt deserunt, adipisci veritatis ab quos est?
          Error, maxime. Cumque, corrupti.
        </p>
      </div>
      <div class="lg:col-span-5 mx-auto relative">
        <img src="@/assets/annabel-2.webp" alt="" class="rounded-2xl h-80" />
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
        class="relative flex flex-col items-center gap-2 z-10 text-slate-600 font-medium text-center italic mb-8"
      >
        <p>"{{ $t("agency.presentation.quote") }}"</p>
      </div>
    </div>

    <WaveTop />
    <section>
      <div class="bg-secondary">
        <h5
          class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 tracking-tight leading-tight text-center"
        >
          {{ $t("agency.media_title") }}
        </h5>
      </div>
    </section>
  </main>
</template>

<script setup>
import WaveTop from "@/components/WaveTop.vue";
</script>
