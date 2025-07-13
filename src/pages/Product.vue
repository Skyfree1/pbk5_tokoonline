<template>
  <div class="q-pa-md">
    <h5 class="text-h5 q-mb-md">Semua Produk</h5>
    <div class="row q-gutter-md">
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'

const products = [
  { title: 'Rokok Nusantara Kretek', description: 'Kretek khas Indonesia', price: 12000, image: '/assets/rokok1.png' },
  { title: 'Rokok Coklat Classic', description: 'Rasa coklat', price: 15000, image: '/assets/rokok2.png' },
  { title: 'Cerutu Nusantara', description: 'Aroma kopi', price: 25000, image: '/assets/rokok3.png' },
  { title: 'Rokok Menthol Breeze', description: 'Rasa mint segar', price: 18000, image: '/assets/rokok4.png' },
]
</script>
