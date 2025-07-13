<template>
  <div class="q-pa-md">
    <h5 class="text-h5 q-mb-md">Hubungi Kami</h5>

    <q-form @submit.prevent="submitForm" class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        type="email"
        label="Email Anda"
        placeholder="contoh@email.com"
        required
      />
      <q-input
        filled
        v-model="phone"
        type="tel"
        label="Nomor Telepon"
        placeholder="08xxxxxxxxxx"
        required
      />

      <q-btn label="Kirim" type="submit" color="primary" />
    </q-form>

    <div class="q-mt-xl">
      <p>📍 JL.KUARAN GG.PRIBADI, PASIR PUTIH</p>
      <p>📞 Telepon: 082287479045</p>
      <p>✉️ Email: support@tokorokok.com</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const phone = ref('')

function submitForm() {
  alert(`Terima kasih! Email: ${email.value}, No HP: ${phone.value}`)
  // Reset input
  email.value = ''
  phone.value = ''
}
</script>
