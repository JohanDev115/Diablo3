<script setup>
import { computed, defineProps, toRefs } from 'vue';
import SingleStat from './SingleStat.vue';
import TimePlayed from './TimePlayed.vue'
import { HeroData } from '../../../utils/typeValidation';

const props = defineProps({
  stats: Object
})

const { stats } = toRefs(props)

const timePlayed = computed(() => {
  return Object.keys(stats.value.timePlayed)
    .sort()
    .map(hero => {
      return new HeroData(
        hero.toUpperCase(),
        stats.value.timePlayed[hero],
        hero
      )
    })
})

</script>

<template>
  <header>
    STATS
  </header>
  <div>
    <SingleStat :icon="'💀'" :info="{value: stats.kills.monsters, text: 'Lifetime Kills'}" />
    <SingleStat :icon="'👑'" :info="{value: stats.kills.elites, text: 'Elite Kills'}" />
    <SingleStat :icon="'⚔️'" :info="{value: stats.paragonLevel, text: 'Paragon Level'}" />
  </div>
  <TimePlayed :timePlayed="timePlayed"/>
</template>


<style lang="stylus" scoped>
header
  font-size: 24px
  text-align: center
  margin-bottom: 16px
</style>