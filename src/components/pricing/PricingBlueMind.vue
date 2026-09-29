<template>
  <Transition appear name="slide-fade">
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
  </Transition>

  <div class="overflow-x-auto mx-4">
    <div class="overflow-hidden rounded-xl border border-gray-300">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-100 text-slate-800 border-b border-gray-300">
          <tr>
            <th class="py-5 px-6 font-semibold text-lg">
              {{ $t("pricing.table.head1") }}
            </th>
            <th class="py-5 px-6 font-semibold text-lg">
              {{ $t("pricing.table.head2") }}
            </th>
            <th class="py-5 px-6 font-semibold text-lg">
              {{ $t("pricing.table.head3") }}
            </th>
          </tr>
        </thead>
        <tbody class="text-slate-800 bg-white divide-y divide-gray-300">
          <tr>
            <td class="py-5 px-6 font-medium text-slate-800">
              {{ $t("pricing.table.janzu") }}
            </td>
            <td class="py-5 px-6">1h</td>
            <td class="py-5 px-6 font-bold text-slate-800">60€</td>
          </tr>

          <tr>
            <td class="py-5 px-6 font-medium text-slate-800" rowspan="2">
              {{ $t("pricing.table.foot") }}
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

  <div class="flex flex-col justify-center items-center">
    <h3
      class="text-lg lg:text-xl font-semibold text-slate-800 tracking-tight leading-tight text-center mb-5 mt-15 px-5"
    >
      {{ $t("pricing.gift_text") }}
      <a
        href="https://route-mandarine.com/"
        class="text-secondary underline hover:text-blue-700"
        target="_blank"
        >Route Mandarine</a
      >.
    </h3>
    <img
      src="@/assets/bon-cadeau.webp"
      alt="Bon cadeau pour une séance de Janzu"
      class="m-5 md:m-10 h-45 sm:h-55 lg:h-60 xl:h-75 object-contain rounded-xl"
    />
  </div>
</template>

<script setup></script>
