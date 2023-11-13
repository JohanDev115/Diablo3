<script setup>
import { defineProps, toRefs, computed } from 'vue';

const props = defineProps({
  skill: Object
})

const { skill } = toRefs(props)

const skillUrl = computed(() => {
  const sizes = {
    21: 21,
    42: 42,
    64: 64
  }
  const host = `http://media.blizzard.com/d3/icons/skills/${sizes[42]}/`
  return `${host}${skill.value.icon}.png`
})

</script>

<template>
  <div class="skill">
    <img :src="skillUrl" alt="">
    <span :title="skill.description">{{ skill.name }}</span>
  </div>
</template>

<style scoped>
.skill {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>