<script setup>
import { defineProps, toRefs, computed } from 'vue';

const props = defineProps({
  artisan: Object
})

const { artisan } = toRefs(props)

const artisanName = computed(() => artisan.value.name.charAt(0).toUpperCase() + artisan.value.name.slice(1))
</script>

<template>
  <div class="artisan-item">
    <span class="artisan-item__icon">{{ artisan.emoji }}</span>
    <div class="artisan-description">
      <h4>{{ artisanName }}</h4>
      <p>Level {{ artisan.normal.level }} (normal)</p>
    </div>
  </div>
</template>

<style scoped>
  .artisan-item {
    background: #333;
    width: 320px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px;
    border-radius: 20px;
  }

  .artisan-item__icon {
    font-size: 40px;
  }
</style>