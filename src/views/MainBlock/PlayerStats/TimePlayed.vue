<script setup>
  import { defineProps, toRefs } from 'vue';
  import TimePlayedHero from './TimePlayedHero.vue';

  const props = defineProps({
    timePlayed: Object
  })

  const { timePlayed } = toRefs(props)
</script>

<template>
  <div>
    <div v-for="hero in timePlayed" :key="hero.classSlug">
      <TimePlayedHero :heroData="hero" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>

</style>