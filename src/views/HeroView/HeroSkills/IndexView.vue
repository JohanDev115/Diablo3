<script setup>
import { defineProps, toRefs } from 'vue';
import ActiveSkills from './ActiveSkills.vue';
import PassiveSkills from './PassiveSkills.vue';
import HeroDetailsLayout from '../../../layouts/HeroDetailsLayout.vue';

const props = defineProps({
  skills: Object
})

const { skills } = toRefs(props)

</script>

<template>
  <HeroDetailsLayout>
    <template #title>
      Skills
    </template>
    <template #content>
      <section class="skill-wrapper">
        <div class="active-skills">
          <ActiveSkills :skills="skills?.active" />
        </div>
        <div class="pasive-skills">
          <PassiveSkills :skills="skills?.passive" />
        </div>
      </section>
    </template>
  </HeroDetailsLayout>
</template>

<style scoped>
.active-skills {
  margin-bottom: 40px;
}
</style>