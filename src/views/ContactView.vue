<template>
  <div class="flex flex-col justify-center items-center pt-36 gap-5 mb-10">
    <h1
      class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight text-center"
    >
      {{ $t("contact.presentation.title") }}
    </h1>
    <p
      class="text-slate-600 text-lg leading-relaxed text-center mx-0 md:mx-15 lg:mx-35"
    >
      {{ $t("contact.presentation.text") }}
    </p>
  </div>

  <div class="flex justify-center items-center text-center bg-slate-100 text-3xl font-corinthia text-secondary p-5 w-25 h-10 m-5">
    chez
  </div>

  <div class="flex">
    <!-- div pour formulaire -->
     <div>
      <ContactForm />
     </div>

    <!-- div pour contact -->
     <div>

     </div>
  </div>
</template>

<script setup>
import ContactForm from '@/contact/ContactForm.vue';
</script>
