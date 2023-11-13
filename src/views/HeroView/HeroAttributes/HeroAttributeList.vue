<script setup>
  import { defineProps, toRefs } from 'vue';
  import { formatNumber } from '../../../filters/numeral'

  const props = defineProps({
    attributes: Array
  })

  const { attributes } = toRefs(props)

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
</script>

<template>
  <ul class="attribute-list">
    <li class="attribute-item" v-for="attribute in attributes" :key="attribute.name">
      <span class="attribute-item__name">
        {{ capitalize(attribute.name) }}
      </span>
      <span>
        {{ formatNumber(attribute.val) }}
      </span>
    </li>
  </ul>
</template>

<style scoped>

.attribute-list {
  font-family: Arial, Helvetica, sans-serif;
  list-style: none;
  padding-left: 0;
}

.attribute-item {
  display: flex;
  justify-content: space-between;
}

.attribute-item__name {
  color: coral;
}
</style>