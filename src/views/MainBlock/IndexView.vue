<script setup>
  // import TopHeroes from './TopHeroes/IndexView.vue'
  import TopHeroes from './TopHeroes/IndexView.vue'
  import HeroesList from './HeroesList/IndexView.vue'
  import ProgressList from './ProgressList/IndexView.vue'
  import PlayerStats from './PlayerStats/IndexView.vue'
  import { computed, defineProps, toRefs } from 'vue';

  const props = defineProps({
    profileData: Object
  })

  const { profileData } = toRefs(props)

  const hasHeroes = computed(() => profileData.value?.heroes.length > 0);
  const topHeroes = computed(() => profileData.value?.heroes.slice(0, 3));

  const hasHeroesList = computed(() => profileData.value?.heroes.length > 3);
  const heroesList = computed(() => profileData.value?.heroes.slice(3, profileData.value?.heroes.length));

  const statsData = computed(() => {
    const { paragonLevel, kills, timePlayed } = profileData.value

    return { paragonLevel, kills, timePlayed }
  })
  
</script>

<template>
  <div class="container">
    <div>
      <section class="hero-section">
        <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />
      </section>
      <section class="hero-section">
        <HeroesList v-if="hasHeroesList" :heroes="heroesList" />
      </section>
      <section class="hero-section">
        <ProgressList :acts="profileData.progression" />
      </section>
    </div>
    <div>
      <section class="hero-section">
        <PlayerStats :stats="statsData" />
      </section>
    </div>
  </div>
</template>


<style scoped>

.hero-section {
  margin: 16px;
  margin-bottom: 20px;
  background-color: #333;
  border-radius: 16px;
  padding: 16px;
}

@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    align-items: top;
  }

  .hero-section {
    margin-bottom: 30px;
  }
}
</style>