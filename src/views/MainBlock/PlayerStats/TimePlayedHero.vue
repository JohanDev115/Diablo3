<script setup>
  import { defineProps, toRefs, computed } from 'vue';

  const props = defineProps({
    heroData: Object
  })

  const { heroData } = toRefs(props)
  const heroClass = computed(() => `hero-bg-color-${heroData.value.classSlug}`)
  const progressClass = computed(() => `progress-bg-color-${heroData.value.classSlug}`)
</script>

<template>
  <div class="container">
    <h3 :class="['hero-name', heroClass]">{{ heroData.hero }}</h3>
    <progress :class="progressClass" max="1" min="0" :value="heroData.time"></progress>
  </div>
</template>

<style lang="stylus" scoped>

  $heroesBg = {
    barbarian: #4e1c16,
    crusader: #795548,
    demon-hunter: #F44336,
    monk: #ff9800,
    necromancer: #00bcd4,
    witch-doctor: #8bc34a,
    wizard: #3f51b5
  }
  .container
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 6px

  .hero-name
    margin-right: 6px

  // Bucle "for"
  // Itera sobre la variable $heroesBg
  // "hero" es la clave
  // "bgColor" es el valor

  for hero, bgColor in $heroesBg
    .hero-bg-color-{hero}
      color bgColor

  for hero, bgColor in $heroesBg
    .progress-bg-color-{hero}::-webkit-progress-value
      background-color: bgColor

    progress {
      border-radius: 7px;
      height: 22px;
      // box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
    }
    progress::-webkit-progress-bar {
      background-color: #444;
      border-radius: 7px;
    }
    progress::-webkit-progress-value {
      background-color: #777;
      border-radius: 7px;
      // box-shadow: 1px 1px 5px 3px rgba( 0, 0, 0, 0.8 );
    }
    progress::-moz-progress-bar {
      /* style rules */
    }
</style>