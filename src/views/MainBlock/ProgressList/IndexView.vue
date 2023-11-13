<script setup>
  import ProgressItem from './ProgressItem.vue';
  import { defineProps, toRefs, computed } from 'vue';

  const props = defineProps({
    acts: {
      type: Object,
      required: true
    }
  })

  const { acts } = toRefs(props)

  const sortedActs = computed(() => Object.keys(acts.value).sort().reduce((a, c) => {
    a[c] = acts.value[c]
    return a
  }, {}))
</script>

<template>
  <header>
    Progression
  </header>
  <div class="progress-list">
    <ProgressItem v-for="(val, key) in sortedActs" :key="key" :act="{actNum: key, value: val}" />
  </div>
</template>

<style lang="stylus" scoped>
header
  font-size: 24px
  text-align: center
  margin-bottom: 16px

.progress-list
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around

</style>