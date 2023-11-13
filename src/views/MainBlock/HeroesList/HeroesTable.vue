<script setup>
  import { defineProps, toRefs } from 'vue';
  import { formatNumber } from '@/filters/numeral.js'
  import { useRoute } from 'vue-router';
  import goToHeroPage from '../../../mixins/goToHeroPage';

  const props = defineProps({
    items: Array
  })

  const { items } = toRefs(props)

  const route = useRoute();

  const {region, battleTag} = route.params

  const heroClassColor = (hero) => `hero-bg-color-${hero.classSlug}`;
  const heroClass = (hero) => `hero-${hero.class} ${hero.gender == 0 ? 'male' : 'female'}`;
  const capitalizedName = (name) => name[0].toUpperCase() + name.slice(1, name.length)
</script>

<template>
  <table>
    <thead>
      <th>Name</th>
      <th>Class</th>
      <th>Elite Kills</th>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td class="hero-name" @click="goToHeroPage(region, battleTag, item.id)">
          <span :class="['hero-thumb', heroClass(item)]"></span>
          {{ capitalizedName(item.name) }}
          <img v-if="item.seasonal" src="@/assets/images/leaf.png" width="12px" class="">
        </td>
        <td :class="heroClassColor(item)">{{ capitalizedName(item.class) }} . <b>{{  item.level }}</b></td>
        <td>{{ formatNumber(item.kills.elites) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="stylus" scoped>
table
  width: 100%
  border-collapse: collapse
  font-family: Arial, Helvetica, sans-serif
  font-weight: 300

thead
  background-color: #111
  text-align: left
  font-size: 17px

th, td
  padding: 6px

tr:nth-child(even)
  background-color: #222
.hero-name
  display: flex
  align-items: center
  cursor pointer
.hero-thumb {
  display: inline-block
  max-width: 35px
  height: 28px
  margin-right: 8px
  border: 1px solid #fff
}

$heroesBg = {
  barbarian: #4e1c16,
  crusader: #795548,
  demon-hunter: #F44336,
  monk: #ff9800,
  necromancer: #00bcd4,
  witch-doctor: #8bc34a,
  wizard: #3f51b5
}

for hero, bgColor in $heroesBg
  .hero-bg-color-{hero}
    color bgColor
</style>