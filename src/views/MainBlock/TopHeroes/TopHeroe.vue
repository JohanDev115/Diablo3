<script setup>
  import { computed, defineProps, toRefs } from 'vue';
  import { useRoute } from 'vue-router';
  import { formatNumber } from '@/filters/numeral.js'
  import goToHeroPage from '../../../mixins/goToHeroPage';

  const props = defineProps({
    hero: {
      type: Object,
      required: true
    }
  })

  const route = useRoute();

  const { region, battleTag} = route.params

  const { hero } = toRefs(props)

  const heroClass = computed(() => `hero-${hero.value.class} ${hero.value.gender == 0 ? 'male' : 'female'}`);

</script>

<template>
  <div class="hero-wrapper" @click="goToHeroPage(region, battleTag, hero.id)">
    <div class="avatar">
      <div :class="heroClass"></div>
    </div>
    <div class="hero-description">
      <h4 :class="[{'hero-hardcore': hero.hardcore}, 'hero-description__name']">{{ hero.name }}
        <img v-if="hero.seasonal" src="@/assets/images/leaf.png" width="12px" class="">
      </h4>
      <hr>
      <div class="hero-footer">
        <small class="elite-kills">
          <span class="text-monospace">{{ formatNumber(hero.kills.elites) }}</span>
          Elite kills
        </small>
        <small class="level-circle" :class="{'text-danger': hero.dead}"> {{ hero.level }} </small>
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
  .hero-wrapper
    background-color: #111
    max-width: 185px
    min-width: 185px
    border-radius: 20px
    overflow: hidden
    cursor pointer

  .hero-description
    padding: 10px
    padding-top: 4px

  .hero-description__name
    font-size: 20px
    text-align: center
    margin-bottom: 6px

  .hero-hardcore
    background-color: red
  .hero-footer
    font-family: Arial, Helvetica, sans-serif
    display: flex
    justify-content: space-between
    margin-top: 6px

  .level-circle
    border: 1px solid #fff
    width: 25px
    height: 25px
    padding: 4px
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    background-color: #333
</style>