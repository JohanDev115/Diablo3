<script setup>
import { defineProps, toRefs } from 'vue';
import PasiveSkill from './PasiveSkill.vue'

const props = defineProps({
  skills: Object
})

const { skills } = toRefs(props)
</script>

<template>
  <section>
    <h3>Passive</h3>
    <div class="container">
      <PasiveSkill v-for="(skill, i) in skills" :key="i" :skill="skill.skill" />
    </div>
  </section>
</template>

<style scoped>
h3 {
  margin-bottom: 14px;
}
.container {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>