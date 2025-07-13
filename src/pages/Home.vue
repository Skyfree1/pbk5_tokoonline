<template>
  <div>
    <!-- Carousel Banner -->
    <Carousel />

    <!-- Pernyataan atau Intro Tentang Toko -->
    <div class="q-pa-md text-center">
      <h4 class="text-h4 q-mb-sm">Selamat Datang di Toko Rokok Online</h4>
      <p class="text-subtitle1 q-mb-md">
        Kami menyediakan berbagai pilihan rokok berkualitas tinggi untuk perokok dewasa.
        Dari kretek Nusantara, cerutu eksklusif, hingga rokok filter premium — semua tersedia di sini.
      </p>
      <p class="text-caption text-negative">
        ⚠️ Produk ini hanya untuk usia 18+. Merokok dapat membahayakan kesehatan Anda. Harap bijak dalam membeli dan menggunakan.
      </p>
    </div>

    <!-- Daftar Produk (tengah) -->
    <div class="q-pa-md flex flex-center">
      <div style="max-width: 1200px; width: 100%;">
        <q-row class="q-col-gutter-md justify-center">
          <q-col
            v-for="(product, index) in products"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <ProductCard
              :title="product.title"
              :description="product.description"
              :price="product.price"
              :image="product.image"
              @add-to-cart="addToCart(product)"
            />
          </q-col>
        </q-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import Carousel from '@/components/Carousel.vue'
import ProductCard from '@/components/ProductCard.vue'
import { cart } from '@/store/cart.js'

const products = [
  {
    title: 'Rokok Nusantara Kretek',
    description: 'Kretek khas Indonesia dengan rasa otentik dan kuat.',
    price: 20000,
    image: '/assets/rokok1.png'
  },
  {
    title: 'Rokok Coklat Classic',
    description: 'Aroma khas coklat dan tembakau berkualitas.',
    price: 25000,
    image: '/assets/rokok2.png'
  },
  {
    title: 'Rokok Filter Premium',
    description: 'Pilihan terbaik untuk pecinta filter lembut.',
    price: 30000,
    image: '/assets/rokok3.png'
  },
  {
    title: 'Cerutu Nusantara',
    description: 'Cerutu eksklusif dengan aroma kayu manis dan kopi.',
    price: 50000,
    image: '/assets/cerutu.png'
  },
  {
    title: 'Rokok Menthol Breeze',
    description: 'Segar di tenggorokan dengan rasa mint dingin.',
    price: 27000,
    image: '/assets/rokok4.png'
  },
  {
    title: 'Rokok Linting Sendiri',
    description: 'Bebas meracik, cocok untuk pecinta DIY.',
    price: 15000,
    image: '/assets/rokok5.png'
  }
]

function addToCart(product) {
  cart.add(product)
  console.log('Ditambahkan ke keranjang:', product.title)
}
</script>
