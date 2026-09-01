<template>
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
</template>

<script setup></script>