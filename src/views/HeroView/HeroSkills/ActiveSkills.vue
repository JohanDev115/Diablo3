<script setup>
import { defineProps, toRefs } from 'vue';
import ActiveSkill from './ActiveSkill.vue'

const props = defineProps({
  skills: Object
})

const { skills } = toRefs(props)
</script>

<template>
  <section>
    <h3>Active</h3>
    <div class="container">
      <ActiveSkill v-for="(skill, i) in skills" :key="skill.name" :skill="skill.skill" :rune="skill.rune" :slot-num="i+1"/>
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