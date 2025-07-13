<template>
  <q-carousel
    animated
    swipeable
    infinite
    v-model="slide"
    height="300px"
    control-color="white"
    arrows
    navigation
  >
    <q-carousel-slide
      v-for="n in 3"
      :key="n"
      :name="n"
      :img-src="`/assets/banner${n}.jpg`"
    />
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'
const slide = ref(1)
</script>
