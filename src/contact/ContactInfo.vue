<template>
  <div class="p-5 m-4">
    <h2
      class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center mb-10"
    >
      {{ $t("contact.details.title1") }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div
        class="text-center border-b-2 mb-5 md:mb-0 md:border-b-0 md:border-r-2 border-slate-600"
      >
        <h3
          class="text-4xl text-secondary font-corinthia font-medium tracking-tight leading-tight text-center mb-5"
        >
          Carrières Nomades
        </h3>
        <div class="text-slate-600 flex flex-col gap-4">
          <a
            href="tel:+33637769023"
            class="flex items-center justify-center gap-2 hover:font-semibold transition duration-200"
          >
            <v-icon name="bi-telephone-fill"></v-icon>
            <span>(+33) 6 37 76 90 23</span>
          </a>

          <a
            href="mailto:contact@carrieresnomades.fr"
            class="flex items-center justify-center gap-2 hover:font-semibold transition duration-200 mb-5 md:mb-0"
          >
            <v-icon name="md-email"></v-icon>
            <span>contact@carrieresnomades.fr</span>
          </a>
        </div>
      </div>
      <div class="text-center">
        <h3
          class="text-4xl text-secondary font-corinthia font-medium tracking-tight leading-tight text-center mb-5"
        >
          Blue Mind
        </h3>
        <div class="text-slate-600 flex flex-col gap-4">
          <a
            href="tel:+33612854447"
            class="flex items-center justify-center gap-2 hover:font-semibold transition duration-200"
          >
            <v-icon name="bi-telephone-fill"></v-icon>
            <span>(+33) 6 12 85 44 47</span>
          </a>

          <a
            href="mailto:anna.janzu@gmail.com"
            class="flex items-center justify-center gap-2 hover:font-semibold transition duration-200"
          >
            <v-icon name="md-email"></v-icon>
            <span>anna.janzu@gmail.com</span>
          </a>
        </div>
      </div>
    </div>

    <h4
      class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center mb-5 mt-20"
    >
      {{ $t("contact.details.title2") }}
    </h4>
    <h5
      class="text-lg sm:text-xl lg:text-2xl text-slate-600 tracking-tight leading-tight text-center"
    >
      {{ $t("contact.details.subtitle1") }}
    </h5>
    <div class="grid grid-cols-2 text-secondary text-center m-10">
      <a
        href="https://www.linkedin.com/company/carrieresnomades/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <v-icon name="bi-linkedin" scale="3"></v-icon>
      </a>
      <a
        href="https://www.instagram.com/carrieresnomades/?hl=fr"
        target="_blank"
        aria-label="Instagram"
      >
        <v-icon name="bi-instagram" scale="3"></v-icon>
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 mt-15">
      <div class="relative flex items-center justify-center">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-blue-100 opacity-80"
        >
          <v-icon name="ri-double-quotes-r" scale="10" class="mb-8"></v-icon>
        </div>

        <div
          class="relative flex flex-col items-center gap-2 z-10 md:text-lg text-slate-600 font-medium text-center italic mb-8"
        >
          <p>"{{ $t("contact.details.text") }}"</p>
          <p>-</p>
          <p>{{ $t("contact.details.text_name") }}</p>
        </div>
      </div>
      <div class="relative w-fit mx-auto">
        <div
          class="absolute -inset-4 bg-linear-to-tr from-blue-100 to-slate-100 rounded-3xl -z-10 transform rotate-2"
        ></div>

        <img
          src="@/assets/annabel.webp"
          alt="Photo de Annabel Martin"
          class="h-75 object-cover rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>
