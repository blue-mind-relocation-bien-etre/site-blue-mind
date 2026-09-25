<template>
  <div class="lg:pt-36">
    <h2
      class="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight leading-tight text-center mb-5"
    >
      {{ $t("pricing.janzu.title") }}
    </h2>
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
      class="block w-fit mx-auto px-7 py-3.5 bg-secondary hover:bg-blue-700 text-slate-100 font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200 mb-5"
    >
      {{ $t("pricing.janzu.button") }}
    </RouterLink>
  </div>

  <div class="overflow-x-auto mx-4">
    <div class="overflow-hidden rounded-xl border border-gray-300">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-100 text-slate-800 border-b border-gray-300">
          <tr>
            <th class="py-5 px-6 font-semibold text-lg">Prestation</th>
            <th class="py-5 px-6 font-semibold text-lg">Durée</th>
            <th class="py-5 px-6 font-semibold text-lg">Tarif</th>
          </tr>
        </thead>
        <tbody class="text-slate-800 bg-white divide-y divide-gray-300">
          <tr>
            <td class="py-5 px-6 font-medium text-slate-800">
              Séance de Janzu
            </td>
            <td class="py-5 px-6">1h</td>
            <td class="py-5 px-6 font-bold text-slate-800">60€</td>
          </tr>

          <tr>
            <td class="py-5 px-6 font-medium text-slate-800" rowspan="2">
              Réflexologie plantaire
            </td>
            <td class="py-5 px-6">30 min</td>
            <td class="py-5 px-6 font-bold text-slate-800">40€</td>
          </tr>
          <tr>
            <td class="py-5 px-6">40 min</td>
            <td class="py-5 px-6 font-bold text-slate-800">50€</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div>
    <h3 class="text-lg lg:text-xl font-semibold text-slate-800 tracking-tight leading-tight text-center mb-5 mt-10 px-5">
      {{ $t("pricing.gift_text") }}
      <a href="" class="">Route Mandarine</a>
    </h3>
  </div>
</template>

<script setup></script>
