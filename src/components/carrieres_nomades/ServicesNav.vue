<template>
  <div class="mt-20 mb-30 shadow-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="p-10">
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
      <div class="hidden lg:block">
        <div
          class="w-full h-full bg-fixed bg-cover bg-no-repeat bg-position-[15vw_center]"
          :style="{ backgroundImage: `url(${imageMaison})` }"
        ></div>
      </div>
    </div>
  </div>

  <div class="mb-30 mt-30 shadow-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="hidden lg:block">
        <div
          class="w-full h-full bg-fixed bg-cover bg-position-[-35vw_center]"
          :style="{ backgroundImage: `url(${imageBoxes})` }"
        ></div>
      </div>
      <div class="p-10">
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

  <div class="mb-30 mt-30 shadow-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="p-10">
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
      <div class="hidden lg:block">
        <div
          class="w-full h-full bg-fixed bg-cover bg-position-[30vw_center]"
          :style="{ backgroundImage: `url(${imageDemarches})` }"
        ></div>
      </div>
    </div>
  </div>

  <div class="mb-20 mt-30 shadow-xl">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="hidden lg:block">
        <div
          class="w-full h-full bg-fixed bg-cover bg-position-[-30vw_center]"
          :style="{ backgroundImage: `url(${imageFamille})` }"
        ></div>
      </div>
      <div class="p-10">
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
import imageFinistere from "@/assets/finistere.webp";
import imageMaison from "@/assets/maison_couleur.jpg";
import imageBoxes from "@/assets/boxes.jpg";
import imageDemarches from "@/assets/demarches.jpg";
import imageFamille from "@/assets/famille.jpg";
</script>
