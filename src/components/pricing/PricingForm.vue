<template>
  <div class="relative pt-36 mb-10">
    <Transition appear name="slide-fade">
      <div>
        <h1
          class="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight leading-tight text-center mb-5"
        >
          {{ $t("pricing.free_quote.title") }}
        </h1>
        <h2
          class="text-lg text-slate-600 tracking-tight leading-tight text-center mb-5"
        >
          {{ $t("pricing.free_quote.subtitle") }}
        </h2>

        <ul
          class="list-disc list-inside text-lg text-slate-600 tracking-tight leading-tight text-center space-y-2 mb-10"
        >
          <li
            v-for="(item, itemIndex) in $tm('pricing.free_quote.text')"
            :key="itemIndex"
          >
            {{ $rt(item) }}
          </li>
        </ul>
      </div>
    </Transition>

    <ContactForm
      :formType="$t('pricing.form.title')"
      :messageTitle="$t('pricing.form.message_text')"
    />
    <!-- ligne de separation -->
    <div
      class="hidden lg:block absolute right-0 top-[10%] bottom-[0%] w-px bg-slate-200"
    ></div>
  </div>
</template>

<script setup>
import ContactForm from "@/contact/ContactForm.vue";
</script>
