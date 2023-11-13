<script setup>
  import { defineProps, toRefs, computed } from 'vue';
  import HeroDetailsLayout from '../../../layouts/HeroDetailsLayout.vue';
  import HeroAttributeList from './HeroAttributeList.vue';
  import HeroResources from './HeroResources.vue';

  const props = defineProps({
    attributes: Object
  })

  const coreAttributesList = ['strength', 'dexterity', 'vitality', 'intelligence']

  const secondaryAttributesList = ['damage', 'toughness', 'healing']

  const resourcesList = ['life', 'primaryResource', 'secondaryResource'];

  const { attributes } = toRefs(props)


  const coreAttributes = computed(() => {
      return coreAttributesList.map(item => ({ name: item, val: attributes.value[item] }))
  })

  const secondaryAttributes = computed(() => {
    return secondaryAttributesList.map(item => ({ name: item, val: attributes.value[item] }))
  })

  const resources = computed(() => {
      const data = {
        classSlug: attributes.value.classSlug,
        resources: {}
      }

      resourcesList.forEach(item => {
        data.resources[item] = { name: item, val: attributes.value[item] }
      })

      return data
  })
</script>

<template>
  <HeroDetailsLayout>
    <template #title>
      Attributes
    </template>
    <template #content>
      <HeroAttributeList :attributes="coreAttributes" />
      <br>
      <HeroAttributeList :attributes="secondaryAttributes" />
      <br>
      <HeroResources :resources="resources" />
    </template>
  </HeroDetailsLayout>
</template>

<style lang="stylus" scoped>
</style>