<template>
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
                v-for="(mot, index) in $tm('agency.timeline.block1.bold_words')"
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
                v-for="(mot, index) in $tm('agency.timeline.block2.bold_words')"
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
</template>

<script setup></script>
