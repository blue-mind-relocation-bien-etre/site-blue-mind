<template>
  <form
    @submit.prevent="submitForm"
    class="border border-gray-300 rounded-xl p-5 m-4 bg-slate-100"
  >
    <h4
      class="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-800 tracking-tight leading-tight text-center"
    >
      Formulaire de contact
    </h4>
    <div class="border-b border-gray-900/10 pb-12">
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="prenom" class="block text-sm/6 font-medium text-slate-800"
            >Prénom</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="prenom"
              v-model="prenom"
              autocomplete="given-name"
              placeholder="Ex : Marius"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="nom" class="block text-sm/6 font-medium text-slate-800"
            >Nom de famille</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="nom"
              v-model="nom"
              autocomplete="family-name"
              placeholder="Ex : Bougouin"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-full">
          <label for="email" class="block text-sm/6 font-medium text-slate-800"
            >Adresse Mail</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="email"
              v-model="email"
              autocomplete="email"
              placeholder="Ex : adresse@email.com"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-full">
          <label
            for="telephone"
            class="block text-sm/6 font-medium text-slate-800"
            >Telephone</label
          >
          <div class="mt-2">
            <input
              type="tel"
              name="telephone"
              v-model="telephone"
              placeholder="Ex : +33 6 12 34 56 78"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-full">
          <label for="objet" class="block text-sm/6 font-medium text-slate-800"
            >Objet du message</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="objet"
              v-model="objet"
              placeholder="Ex : Renseignements Brest"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-full">
          <label
            for="message"
            class="block text-sm/6 font-medium text-slate-800"
            >Votre message</label
          >
          <div class="mt-2">
            <textarea
              name="message"
              v-model="message"
              rows="3"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-slate-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary sm:text-sm/6"
              required
            ></textarea>
          </div>
          <p class="mt-4 text-xs leading-relaxed text-slate-500 text-justify">
            En soumettant ce formulaire, vous acceptez que les informations
            saisies soient exploitées dans le cadre de votre demande de contact
            et de la relation commerciale qui peut en découler. Pour des raisons
            techniques, vos données transitent de manière sécurisée par notre
            prestataire Web3Forms et sont
            <strong
              >automatiquement supprimées de leurs serveurs après 30
              jours</strong
            >. Conformément à la réglementation (RGPD), vous disposez d'un droit
            d'accès, de rectification et d'effacement de vos données
            personnelles. Pour exercer ce droit, vous pouvez nous contacter
            directement à <strong>contact@carrieresnomades.fr</strong>.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-6 mb-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        @click="resetForm"
        class="px-3 py-2 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition duration-200"
      >
        Effacer
      </button>
      <button
        type="submit"
        class="px-3 py-2 text-sm bg-secondary hover:bg-blue-700 text-slate-100 font-medium rounded-xl shadow-lg shadow-blue-600/20 transition duration-200"
      >
        Envoyer
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

const WEB3FORMS_ACCESS_KEY = "7ee16302-8b74-4f6c-a342-d2e161e929ac";

const formType = "Formulaire de contact";
const prenom = ref("");
const nom = ref("");
const email = ref("");
const telephone = ref("");
const objet = ref("");
const message = ref("");

const statusMessage = ref("");
const isSuccess = ref(false);

const resetForm = () => {
  prenom.value = "";
  nom.value = "";
  email.value = "";
  telephone.value = "";
  objet.value = "";
  message.value = "";
};

const submitForm = async () => {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        type: formType,
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
      statusMessage.value = "Votre message a bien été envoyé !";
      isSuccess.value = true;

      resetForm();

      setTimeout(() => {
        statusMessage.value = "";
      }, 8000);
    } else {
      console.error("Erreur Web3Forms :", result);
      statusMessage.value = "Une erreur est survenue, veuillez réessayer.";
      isSuccess.value = false;
    }
  } catch (error) {
    statusMessage.value =
      "Erreur de connexion. Veuillez vérifier votre réseau.";
    isSuccess.value = false;
    console.error("Erreur réseau lors de l'envoi :", error);
  }
};
</script>
