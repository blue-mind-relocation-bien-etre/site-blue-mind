<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="pt-36 mb-10">
      <h4
        class="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight leading-tight text-center mb-5"
      >
        {{ $t("pricing.free_quote.title") }}
      </h4>
      <h5
        class="text-lg text-slate-600 tracking-tight leading-tight text-center mb-5"
      >
        {{ $t("pricing.free_quote.subtitle") }}
      </h5>

      <ul
        class="list-disc list-inside text-lg  text-slate-600 tracking-tight leading-tight text-center space-y-2 mb-10"
      >
        <li
          v-for="(item, itemIndex) in $tm('pricing.free_quote.text')"
          :key="itemIndex"
        >
          {{ $rt(item) }}
        </li>
      </ul>

      <ContactForm
        :formType="$t('pricing.form.title')"
        :messageTitle="$t('pricing.form.message_text')"
      />
    </div>

    <div class="lg:pt-36">
      <h4
        class="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight leading-tight text-center mb-5"
      >
        {{ $t("pricing.janzu.title") }}
      </h4>
      <p
        class="text-lg text-slate-600 tracking-tight leading-tight text-center mb-5"
      >
        {{ $t("pricing.janzu.text1") }}
      </p>
      <p
        class="text-lg text-slate-600 tracking-tight leading-tight text-center mb-7"
      >
        {{ $t("pricing.janzu.text2") }}
      </p>
      <RouterLink
        to="/contact"
        class="block w-fit mx-auto px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200 mb-10"
      >
        {{ $t("pricing.janzu.button") }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import ContactForm from "@/contact/ContactForm.vue";
</script>
