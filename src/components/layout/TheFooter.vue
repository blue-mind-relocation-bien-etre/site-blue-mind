<template>
  <footer class="relative h-auto p-5 md:p-10 lg:p-15">
    <div
      class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-75"
      :style="{ backgroundImage: `url(${vagueImg})` }"
    ></div>
    <div
      class="absolute inset-0 z-0 bg-linear-to-b from-black/70 via-black/40 to-transparent"
    ></div>

    <div class="relative flex flex-col md:flex-row justify-between gap-12">
      <div class="relative flex flex-col gap-6 md:w-1/3">
        <img
          src="@/img/Logo2_BM_VD_blanc.png"
          alt="Logo"
          class="h-20 w-auto object-contain self-start"
        />
        <div class="flex flex-col gap-2 mt-2">
          <div class="gap-1">
            <h2 class="text-slate-100 font-bold">Blue Mind</h2>
            <!-- Email -->
            <a
              href="mailto:anna.janzu@gmail.com"
              class="text-slate-100 flex items-center gap-3 hover:text-slate-300 transition duration-200"
            >
              <span>anna.janzu@gmail.com</span>
            </a>

            <!-- Téléphone -->
            <a
              href="tel:+3312854447"
              class="text-slate-100 flex items-center gap-3 hover:text-slate-300 transition duration-200"
            >
              <span>+33 6 12 85 44 47</span>
            </a>
          </div>

          <div class="gap-1">
            <h2 class="text-slate-100 font-bold">Carrières Nomades</h2>
            <!-- Email -->
            <a
              href="mailto:contact@carrieresnomades.fr"
              class="text-slate-100 flex items-center gap-3 hover:text-slate-300 transition duration-200"
            >
              <span>contact@carrieresnomades.fr</span>
            </a>

            <!-- Téléphone -->
            <a
              href="tel:+3337769023"
              class="text-slate-100 flex items-center gap-3 hover:text-slate-300 transition duration-200"
            >
              <span>+33 6 37 76 90 23</span>
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col sm:flex-row gap-10 md:gap-20 md:w-2/3 md:justify-end"
      >
        <!-- Colonne 1 : Navigation principale -->
        <div class="flex flex-col gap-3">
          <h3
            class="text-slate-100 font-semibold text-lg mb-2 uppercase tracking-wider"
          >
            {{ $t("footer.navigation") || "Navigation" }}
          </h3>
          <RouterLink
            to="/"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.home") }}
          </RouterLink>
          <RouterLink
            to="/carrieres-nomades"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.carrieres_nomades") }}
          </RouterLink>
          <RouterLink
            to="/blue-mind"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.blue_mind") }}
          </RouterLink>
          <RouterLink
            to="/pricing"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.pricing") }}
          </RouterLink>
        </div>

        <!-- Colonne 2 : Présentation & Contact -->
        <div class="flex flex-col gap-3">
          <h3
            class="text-slate-100 font-semibold text-lg mb-2 uppercase tracking-wider"
          >
            {{ $t("footer.about") || "À propos" }}
          </h3>
          <RouterLink
            to="/team"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.team") }}
          </RouterLink>
          <RouterLink
            to="/our-philosophy"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.philo") }}
          </RouterLink>
          <RouterLink
            to="/partners"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.partner") }}
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-slate-100 hover:text-slate-300 transition duration-200"
          >
            {{ $t("nav.contact") }}
          </RouterLink>
        </div>
      </div>
    </div>

    <div
      class="relative border-t border-slate-100/50 mt-12 pt-8 flex flex-col md:flex-row items-center text-sm text-slate-100 gap-4"
    >
      <div class="flex-1 w-full text-center md:text-left">
        <p>
          &copy; {{ new Date().getFullYear() }} Blue Mind.
          {{ $t("footer.rights") }}
        </p>
      </div>

      <div class="flex justify-center gap-5">
        <a
          href="https://www.linkedin.com/company/carrieresnomades/posts/?feedView=all"
          target="_blank"
        >
          <v-icon name="bi-linkedin" scale="1.5"></v-icon>
        </a>
        <a
          href="https://www.instagram.com/carrieresnomades/?hl=fr"
          target="_blank"
        >
          <v-icon name="bi-instagram" scale="1.5"></v-icon>
        </a>
      </div>

      <div class="flex-1 w-full flex justify-center md:justify-end gap-6">
        <RouterLink
          to="/legal-notice"
          class="text-slate-100 hover:text-slate-300 transition duration-200"
        >
          {{ $t("footer.legal") }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import vagueImg from "@/img/vague.jpg";
</script>
