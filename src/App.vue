<template>
  <q-layout view="lHh Lpr lFf">
    <Navbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
