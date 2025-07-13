<template>
  <q-carousel animated swipeable infinite>
    <q-carousel-slide v-for="n in 3" :key="n" :name="n" :img-src="`/assets/banner${n}.jpg`" />
  </q-carousel>
</template>
