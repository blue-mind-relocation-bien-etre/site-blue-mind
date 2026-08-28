<template>
  <div class="flex justify-center mb-5 mt-10">
    <div
      class="grid grid-cols-2 md:grid-cols-4 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200"
    >
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="px-5 py-3 font-semibold text-sm transition-colors duration-200 group"
        :class="
          activeTab === tab.id
            ? 'bg-secondary text-slate-100'
            : 'text-slate-600 hover:bg-slate-200'
        "
      >
        <span class="text-center leading-tight">{{ tab.title }}</span>
      </button>
    </div>
  </div>

  <div class="min-h-165 p-8 md:p-12 mx-auto">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
      mode="out-in"
    >
      <div v-if="activeTab === 'logement'" class="animate-fade-in">
        <div class="grid grid-cols-12 gap-25 items-start">
          <div class="col-span-7">
            <h3
              class="text-secondary font-bold text-xl mb-6 text-center uppercase tracking-wider"
            >
              {{ $t("carrieresNomades.services.housing.title") }}
            </h3>
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
              <ul class="list-none list-inside text-slate-800 space-y-2">
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
          <div class="lg:col-span-5 relative self-center">
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
      </div>

      <div v-else-if="activeTab === 'installation'" class="animate-fade-in">
        <div class="grid grid-cols-12 gap-25 items-start">
          <div class="col-span-7">
            <h3
              class="text-secondary font-bold text-xl mb-6 text-center uppercase tracking-wider"
            >
              {{ $t("carrieresNomades.services.installation.title") }}
            </h3>
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
          <div class="lg:col-span-5 relative self-center">
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
      </div>

      <div v-else-if="activeTab === 'demarches'" class="animate-fade-in">
        <div class="grid grid-cols-12 gap-25 items-start">
          <div class="col-span-7">
            <h3
              class="text-secondary font-bold text-xl mb-6 text-center uppercase tracking-wider"
            >
              {{ $t("carrieresNomades.services.procedures.title") }}
            </h3>
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
          <div class="lg:col-span-5 relative self-center">
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
      </div>

      <div v-else-if="activeTab === 'famille'" class="animate-fade-in">
        <div class="grid grid-cols-12 gap-25 items-start">
          <div class="col-span-7">
            <h3
              class="text-secondary font-bold text-xl mb-6 text-center uppercase tracking-wider"
            >
              {{ $t("carrieresNomades.services.family.title") }}
            </h3>
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
          <div class="lg:col-span-5 relative self-center">
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
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("logement");

const tabs = [
  { id: "logement", title: "Votre logement" },
  { id: "installation", title: "Votre installation" },
  { id: "demarches", title: "Vos démarches" },
  { id: "famille", title: "Votre famille" },
];
</script>
