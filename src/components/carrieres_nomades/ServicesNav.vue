<template>
  <!-- SECTION 1 -->
  <div class="mt-20 mb-30 shadow-xl" ref="section1Ref">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div
        class="p-10 transition-all duration-1000 ease-out transform"
        :class="
          isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <h3 class="text-secondary font-corinthia text-5xl text-center">
          {{ $t("carrieresNomades.services.housing.title") }}
        </h3>
        <hr
          class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
        />
        <p class="text-slate-800 mb-4">
          {{ $t("carrieresNomades.services.housing.intro_text") }}
        </p>
        <div
          v-for="(section, sectionIndex) in $tm(
            'carrieresNomades.services.housing.sections',
          )"
          :key="sectionIndex"
        >
          <h4 v-if="section.subtitle" class="font-bold text-slate-800 m-2">
            {{ $rt(section.subtitle) }}
          </h4>
          <ul
            class="list-none list-inside text-slate-800 space-y-2 text-justify"
          >
            <li
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="flex items-start"
            >
              <span class="text-secondary mr-3">✓</span>
              <span>{{ $rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="block w-full overflow-hidden">
        <div
          class="w-full h-80 lg:h-full lg:bg-fixed bg-scroll bg-cover bg-no-repeat bg-center lg:bg-position-[15vw_center]"
          :style="{ backgroundImage: `url(${imageMaison})` }"
        ></div>
      </div>
    </div>
  </div>

  <!-- SECTION 2 -->
  <div class="mb-30 mt-30 shadow-xl" ref="section2Ref">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="block order-last lg:order-0 w-full overflow-hidden">
        <div
          class="w-full h-80 lg:h-full bg-scroll lg:bg-fixed bg-cover bg-center bg-no-repeat lg:bg-position-[-35vw_center]"
          :style="{ backgroundImage: `url(${imageBoxes})` }"
        ></div>
      </div>

      <div
        class="p-10 transition-all duration-1000 ease-out transform"
        :class="
          isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <h3 class="text-secondary font-corinthia text-5xl text-center">
          {{ $t("carrieresNomades.services.installation.title") }}
        </h3>
        <hr
          class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
        />
        <p class="text-slate-800 mb-4">
          {{ $t("carrieresNomades.services.installation.intro_text") }}
        </p>
        <div
          v-for="(section, sectionIndex) in $tm(
            'carrieresNomades.services.installation.sections',
          )"
          :key="sectionIndex"
        >
          <h4 v-if="section.subtitle" class="font-bold text-slate-800 m-2">
            {{ $rt(section.subtitle) }}
          </h4>
          <ul
            class="list-none list-inside text-slate-800 space-y-2 text-justify"
          >
            <li
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="flex items-start"
            >
              <span class="text-secondary mr-3">✓</span>
              <span>{{ $rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- SECTION 3 -->
  <div class="mb-30 mt-30 shadow-xl" ref="section3Ref">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div
        class="p-10 transition-all duration-1000 ease-out transform"
        :class="
          isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <h3 class="text-secondary font-corinthia text-5xl text-center">
          {{ $t("carrieresNomades.services.procedures.title") }}
        </h3>
        <hr
          class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
        />
        <p class="text-slate-800 mb-4">
          {{ $t("carrieresNomades.services.procedures.intro_text") }}
        </p>
        <div
          v-for="(section, sectionIndex) in $tm(
            'carrieresNomades.services.procedures.sections',
          )"
          :key="sectionIndex"
        >
          <h4 v-if="section.subtitle" class="font-bold text-slate-800 m-2">
            {{ $rt(section.subtitle) }}
          </h4>
          <ul
            class="list-none list-inside text-slate-800 space-y-2 text-justify"
          >
            <li
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="flex items-start"
            >
              <span class="text-secondary mr-3">✓</span>
              <span>{{ $rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="block w-full overflow-hidden">
        <div
          class="w-full h-80 lg:h-full lg:bg-fixed bg-scroll bg-cover bg-no-repeat bg-center lg:bg-position-[30vw_center]"
          :style="{ backgroundImage: `url(${imageDemarches})` }"
        ></div>
      </div>
    </div>
  </div>

  <!-- SECTION 4 -->
  <div class="mb-20 mt-30 shadow-xl" ref="section4Ref">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="block order-last lg:order-0 w-full overflow-hidden">
        <div
          class="w-full h-80 lg:h-full bg-scroll lg:bg-fixed bg-cover bg-center bg-no-repeat lg:bg-position-[-30vw_center]"
          :style="{ backgroundImage: `url(${imageFamille})` }"
        ></div>
      </div>

      <div
        class="p-10 transition-all duration-1000 ease-out transform"
        :class="
          isVisible4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
      >
        <h3 class="text-secondary font-corinthia text-5xl text-center">
          {{ $t("carrieresNomades.services.family.title") }}
        </h3>
        <hr
          class="w-75 h-[1.5px] mx-auto my-4 bg-secondary border-0 rounded-full"
        />
        <p class="text-slate-800 mb-4">
          {{ $t("carrieresNomades.services.family.intro_text") }}
        </p>
        <div
          v-for="(section, sectionIndex) in $tm(
            'carrieresNomades.services.family.sections',
          )"
          :key="sectionIndex"
        >
          <h4 v-if="section.subtitle" class="font-bold text-slate-800 m-2">
            {{ $rt(section.subtitle) }}
          </h4>
          <ul
            class="list-none list-inside text-slate-800 space-y-2 text-justify"
          >
            <li
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              class="flex items-start"
            >
              <span class="text-secondary mr-3">✓</span>
              <span>{{ $rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imageMaison from "@/assets/maison_couleur.jpg";
import imageBoxes from "@/assets/boxes.jpg";
import imageDemarches from "@/assets/demarches.jpg";
import imageFamille from "@/assets/famille.jpg";

import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const section1Ref = ref(null);
const isVisible1 = ref(false);
useIntersectionObserver(
  section1Ref,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible1.value = true;
  },
  { threshold: 0.2 },
);

const section2Ref = ref(null);
const isVisible2 = ref(false);
useIntersectionObserver(
  section2Ref,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible2.value = true;
  },
  { threshold: 0.2 },
);

const section3Ref = ref(null);
const isVisible3 = ref(false);
useIntersectionObserver(
  section3Ref,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible3.value = true;
  },
  { threshold: 0.2 },
);

const section4Ref = ref(null);
const isVisible4 = ref(false);
useIntersectionObserver(
  section4Ref,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible4.value = true;
  },
  { threshold: 0.2 },
);
</script>

