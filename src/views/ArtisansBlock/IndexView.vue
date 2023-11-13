<script setup>
import { defineProps, toRefs, computed } from 'vue';
import ArtisanItem from './ArtisanItem.vue';

const props = defineProps({
  artisansData: Object
})

const { artisansData } = toRefs(props)

const artisansInfo = computed(() => {
  return [
    {
      name: 'blacksmith',
      icon: 'hammer',
      emoji: '⚔️',
      color: '#ffb74d',
      normal: artisansData.value.blacksmith,
      hardcore: artisansData.value.blacksmithHardcore
    },
    {
      name: 'jeweler',
      icon: 'gem',
      emoji: '💎',
      color: '#4dd0e1',
      normal: artisansData.value.jeweler,
      hardcore: artisansData.value.jewelerHardcore
    },
    {
      name: 'mystic',
      icon: 'hat-wizard',
      emoji: '🔮',
      color: '#ba68c8',
      normal: artisansData.value.mystic,
      hardcore: artisansData.value.mysticHardcore
    }
  ]
})
</script>

<template>
  <h1 class="title">Artisans</h1>
  <div class="container">
    <div v-for="artisan in artisansInfo" :key="artisan.name">
      <ArtisanItem :artisan="artisan" />
    </div>
  </div>
</template>


<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.title {
  text-align: center;
  margin-bottom: 14px;
}
</style>