<template>
  <q-card class="my-card q-mb-md" flat bordered style="width: 100%; max-width: 280px;">
    <q-img :src="image" :alt="title" height="180px" class="rounded-borders" />

    <q-card-section>
      <div class="text-subtitle1 text-bold">{{ title }}</div>
      <div class="text-caption q-mt-xs">{{ description }}</div>
      <div class="text-h6 text-primary q-mt-sm">Rp{{ price.toLocaleString('id-ID') }}</div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Tambah ke Keranjang" color="primary" @click="addToCart" dense />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  price: Number,
  image: String
})

const emit = defineEmits(['add-to-cart'])

function addToCart() {
  emit('add-to-cart')
}
</script>
