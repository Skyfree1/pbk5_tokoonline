<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>Toko Rokok Online</q-toolbar-title>

      <!-- Menu Navigasi -->
      <q-btn flat to="/" label="Home" />
      <q-btn flat to="/product" label="Product" />
      <q-btn flat to="/contact" label="Contact" />

      <!-- Keranjang -->
      <q-btn flat round icon="shopping_cart" class="q-ml-md">
        <q-badge color="red" floating>{{ cartItemCount }}</q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed } from 'vue'
import { cart } from '@/store/cart.js'

const cartItemCount = computed(() => cart.items.length)
</script>
