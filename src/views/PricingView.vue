<template>
    <div>

        <div class="pt-36 px-6 max-w-4xl mx-auto text-center">
            <h1 class="text-4xl font-bold text-slate-800">Tarifs</h1>
        </div>
        
        <ContactForm
        formType="Demande de devis"
        messageTitle="Décrivez votre projet :"
        />
    </div>
</template>

<script setup>
import ContactForm from "@/contact/ContactForm.vue";
</script>
