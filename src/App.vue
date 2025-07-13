<template>
  <div>
    <Navbar />
    <Carousel />
    <div class="q-pa-md row q-gutter-md">
      <ProductCard v-for="i in 4" :key="i" />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'
import ProductCard from './components/ProductCard.vue'
import Footer from './components/Footer.vue'
</script>
