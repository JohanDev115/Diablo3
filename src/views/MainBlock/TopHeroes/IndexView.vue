<script setup>
  import { defineProps, toRefs } from 'vue';
  import TopHeroe from './TopHeroe.vue';

  const props = defineProps({
    heroes: {
      type: Array,
      required: true
    }
  })

  const { heroes } = toRefs(props);

</script>

<template>
  <div>
    <header>
      Top Heroes
    </header>
    <div class="top-heroes-container">
      <TopHeroe v-for="hero in heroes" :key="hero.id" :hero="hero" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>

header
  font-size: 24px
  text-align: center
  margin-bottom: 16px
.top-heroes-container
  width: 100%
  display: flex
  flex-wrap: wrap
  justify-content: space-evenly
  gap: 30px

</style>