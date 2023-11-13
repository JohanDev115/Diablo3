<script setup>
import {toRefs, computed} from 'vue'

const props = defineProps({
  gem: Object
})

const {gem} = toRefs(props)

const gemUrl =  computed(() => {
  const host = 'http://media.blizzard.com/d3/icons/items/small/'
  return `${host}${gem.value.item.icon}.png`
})
</script>

<template>
  <img :src="gemUrl" :alt="gem.item.name">
</template>

<style>

</style>