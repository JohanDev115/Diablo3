<script setup>
  import { defineProps, toRefs } from 'vue';
  import { formatNumber } from '@/filters/numeral.js'

  const props = defineProps({
    info: Object,
    icon: String
  })

  const { info } = toRefs(props)
</script>

<template>
  <div class="stats-container">
    <span class="icon">{{ icon }}</span>
    <div>
      <h2>{{ formatNumber(info.value) }}</h2>
      <p>{{ info.text }}</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.stats-container
  background-color: #111
  margin-bottom: 16px
  display: flex
  flex-direction: row
  padding: 5px 20px
  border-radius: 20px
  font-family: Arial, Helvetica, sans-serif
  align-items: center

.icon
  font-size: 50px
  margin-right: 14px

</style>