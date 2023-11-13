<script setup>
import { defineProps, toRefs, computed } from 'vue';

const props = defineProps({
  skill: Object,
  rune: Object,
  slotNum: Number || String
})

const { skill, rune, slotNum } = toRefs(props)

const skillUrl = computed(() => {
  const sizes = [21, 42, 64]
  const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`

  return `${host}${skill.value.icon}.png`
})

const slotClass = computed(() => `slot-${slotNum.value}`)

</script>

<template>
  <div class="skill">
    <span :class="['skills slot', slotClass]"></span>
    <img :src="skillUrl" :alt="skill.name" />
    <div>
      <h4 :title="skill.description">{{ skill.name }}</h4>
      <small class="rune-name">{{ rune?.name }}</small>
    </div>
  </div>
</template>

<style scoped>
.skill {
  position: relative;
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

.slot {
  left: -10px;
}

.rune-name {
  color: #777;
}
</style>