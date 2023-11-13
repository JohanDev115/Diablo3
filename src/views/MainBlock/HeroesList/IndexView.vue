<script setup>
  import { defineProps, toRefs } from 'vue';
  import HeroesTable from './HeroesTable.vue';

  const props = defineProps({
    heroes: {
      type: Array,
      required: true
    }
  })

  const { heroes } = toRefs(props);
</script>

<template>
  <header>
    Heroes List
  </header>
  <div>
    <!-- {{heroes}} -->
    <HeroesTable :items="heroes" />
  </div>
</template>

<style lang="stylus" scoped>
header
  font-size: 24px
  text-align: center
  margin-bottom: 16px

@media (max-width: 426px)
  div
    overflow: scroll
</style>