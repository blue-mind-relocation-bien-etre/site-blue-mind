<template>
  <form
    @submit.prevent="submitForm"
    novalidate
    class="border border-gray-300 rounded-xl p-5 m-4 bg-slate-100"
  >

  <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

    <h2
      class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center"
    >
      {{ formType }}
    </h2>
    <div class="border-b border-gray-900/10 pb-12">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="prenom"
            class="block text-sm/6 font-medium text-slate-800"
            >{{ $t("contact.form.first_name") }}</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="prenom"
              v-model="prenom"
              @input="clearError('prenom')"
              autocomplete="given-name"
              placeholder="Ex : Jean"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              :class="
                errors.prenom
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-secondary'
              "
            />
            <p v-if="errors.prenom" class="mt-1 text-xs text-red-500">
              {{ errors.prenom }}
            </p>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="nom" class="block text-sm/6 font-medium text-slate-800">{{
            $t("contact.form.last_name")
          }}</label>
          <div class="mt-2">
            <input
              type="text"
              name="nom"
              v-model="nom"
              @input="clearError('nom')"
              autocomplete="family-name"
              placeholder="Ex : Dupont"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              :class="
                errors.nom
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-secondary'
              "
            />
            <p v-if="errors.nom" class="mt-1 text-xs text-red-500">
              {{ errors.nom }}
            </p>
          </div>
        </div>

        <div class="sm:col-span-full">
          <label for="email" class="block text-sm/6 font-medium text-slate-800">
            {{ $t("contact.form.email") }}
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="email"
              v-model="email"
              @input="clearError('email')"
              autocomplete="email"
              placeholder="Ex : adresse@email.com"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              :class="
                errors.email
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-secondary'
              "
            />
            <p v-if="errors.email" class="mt-1 text-xs text-red-500">
              {{ errors.email }}
            </p>
          </div>
        </div>

        <div class="sm:col-span-full">
          <label
            for="telephone"
            class="block text-sm/6 font-medium text-slate-800"
            >{{ $t("contact.form.phone") }}</label
          >
          <div class="mt-2">
            <input
              type="tel"
              name="telephone"
              v-model="telephone"
              @input="clearError('telephone')"
              placeholder="Ex : +33 6 12 34 56 78"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              :class="
                errors.telephone
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-secondary'
              "
            />
            <p v-if="errors.telephone" class="mt-1 text-xs text-red-500">
              {{ errors.telephone }}
            </p>
          </div>
        </div>

        <div class="sm:col-span-full">
          <label
            for="objet"
            class="block text-sm/6 font-medium text-slate-800"
            >{{ $t("contact.form.about") }}</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="objet"
              v-model="objet"
              @input="clearError('objet')"
              placeholder="Ex : Renseignements Brest"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              :class="
                errors.objet
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-secondary'
              "
            />
            <p v-if="errors.objet" class="mt-1 text-xs text-red-500">
              {{ errors.objet }}
            </p>
          </div>
        </div>

        <div class="sm:col-span-full">
          <label
            for="message"
            class="block text-sm/6 font-medium text-slate-800"
            >{{ messageTitle }}</label
          >
          <div class="mt-2">
            <textarea
              name="message"
              v-model="message"
              @input="clearError('message')"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
              :class="
                errors.message
                  ? 'outline-red-500 focus:outline-red-500'
                  : 'outline-gray-300 focus:outline-secondary'
              "
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-xs text-red-500">
              {{ errors.message }}
            </p>
          </div>
          <i18n-t
            keypath="contact.form.rgpd"
            tag="p"
            class="mt-4 text-xs leading-relaxed text-slate-500 text-justify"
          >
            <strong
              v-for="(mot, index) in $tm('contact.form.bold_words')"
              :key="index"
            >
              {{ $rt(mot) }}
            </strong>
          </i18n-t>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        @click="resetForm"
        class="px-3 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition duration-200"
      >
        {{ $t("contact.form.cancel_button") }}
      </button>
      <button
        type="submit"
        class="px-3 py-2 text-sm bg-secondary hover:bg-blue-700 text-slate-100 font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
      >
        {{ $t("contact.form.send_button") }}
      </button>
    </div>

    <div
      v-if="statusMessage"
      :class="isSuccess ? 'text-green-600' : 'text-red-600'"
      class="mt-4 mb-4 text-right text-sm font-medium transition-all duration-300"
    >
      {{ statusMessage }}
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps({
  formType: {
    type: String,
  },
  messageTitle: {
    type: String,
  },
});

const WEB3FORMS_ACCESS_KEY = "7ee16302-8b74-4f6c-a342-d2e161e929ac";

const prenom = ref("");
const nom = ref("");
const email = ref("");
const telephone = ref("");
const objet = ref("");
const message = ref("");

const statusMessage = ref("");
const isSuccess = ref(false);

const errors = ref({});

const clearError = (field) => {
  if (errors.value[field]) {
    delete errors.value[field];
  }
};

const resetForm = () => {
  prenom.value = "";
  nom.value = "";
  email.value = "";
  telephone.value = "";
  objet.value = "";
  message.value = "";
  errors.value = {};
};

const validateForm = () => {
  errors.value = {};

  let isValid = true;

  if (!prenom.value.trim()) {
    errors.value.prenom = t("contact.form.first_name_error");
    isValid = false;
  }

  if (!nom.value.trim()) {
    errors.value.nom = t("contact.form.last_name_error");
    isValid = false;
  }

  if (!email.value.trim()) {
    errors.value.email = t("contact.form.email_error");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = t("contact.form.valid_email_error");
    isValid = false;
  }
  if (!telephone.value.trim()) {
    errors.value.telephone = t("contact.form.phone_error");
    isValid = false;
  }
  if (!objet.value.trim()) {
    errors.value.objet = t("contact.form.about_error");
    isValid = false;
  }
  if (!message.value.trim()) {
    errors.value.message = t("contact.form.message_error");
    isValid = false;
  }

  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) {
    statusMessage.value = t("contact.form.missing_error");
    isSuccess.value = false;
    return;
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        type: props.formType,
        nom: `${prenom.value} ${nom.value}`,
        email: email.value,
        telephone: telephone.value,
        objet: objet.value,
        message: message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log("Message envoyé avec succés : ", result);
      statusMessage.value = t("contact.form.success_message");
      isSuccess.value = true;

      resetForm();

      setTimeout(() => {
        statusMessage.value = "";
      }, 8000);
    } else {
      console.error("Erreur Web3Forms :", result);
      statusMessage.value = t("contact.form.failure_message");
      isSuccess.value = false;
    }
  } catch (error) {
    statusMessage.value = t("contact.form.network_failure_message");
    isSuccess.value = false;
    console.error("Erreur réseau lors de l'envoi :", error);
  }
};
</script>
