<script setup>
  import { defineProps, toRefs, computed } from 'vue';
  import { resourceClassName, resourceDisplayName } from '../../../mixins/resources';
  import { formatNumber } from '../../../filters/numeral';

  const props = defineProps({
    resources: Object
  })

  const { resources } = toRefs(props)

  const classResourceName = computed(() => `resource-${resourceClassName(resources.value.classSlug)}`)

  const displayResourceName = computed(() => resourceDisplayName(resources.value.classSlug))

  const hasSecondaryResource = computed(() => resources.value.classSlug === 'demon-hunter')

</script>

<template>
  <h1>Resources</h1>
  <ul class="resource-list">
    <li class="resource-item">
      <div :class="['resource resource-icon resource-life']"></div>
      <span class="resource-item__name">{{ resources?.resources?.life?.name.toUpperCase() }}</span>
      <span>{{ formatNumber(resources.resources.life.val) }}</span>
    </li>
    <li class="resource-item">
      <div :class="['resource resource-icon', classResourceName]"></div>
      <span class="resource-item__name">{{ displayResourceName?.toUpperCase() }}</span>
      <span>{{ formatNumber(resources.resources.primaryResource.val) }}</span>
      <span v-if="hasSecondaryResource"> / </span>
      <span v-if="hasSecondaryResource">{{ formatNumber(resources.resources.secondaryResource.val) }}</span>
    </li>
  </ul>
</template>

<style lang="stylus" scoped>

  h1
    margin-bottom: 14px
  .resource-list
    padding-left: 0
    font-family: Arial, Helvetica, sans-serif

  .resource-item
    display: flex
    align-items: center
    gap: 20px
    margin-bottom: 16px

  .resource-item__name
    color: coral;

  .resource
    .name-text
      color #efb45d

    .resource-name-demon-hunter
      width auto

  @media (min-width: 992px)
    .resource
      .resource-name-demon-hunter
        width 100px
</style>