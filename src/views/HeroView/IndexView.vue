<script setup>
  import { computed, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { getApiHero, getApiDetailedHeroItems } from '../../api/search'
  import useApiErr from '../../mixins/setError'
  import HeroLoading from '../../components/HeroLoading.vue'
  import HeroDetailsHeader from './HeroDetailsHeader.vue'
  import HeroAttributes from './HeroAttributes/IndexView.vue';
  import HeroSkills from './HeroSkills/IndexView.vue';
  import HeroItems from './HeroItems/IndexView.vue';

  let hero = ref(null);
  let items = ref(null);

  let isLoadingHero = ref(true);
  let isLoadingItems = ref(true);

  const {setApiErr} = useApiErr();

  const route = useRoute();
  const router = useRouter();

  const {params: {region, battleTag, heroId}} = route;

  const fetchData = async () => {
    getApiHero({region, account: battleTag, heroId})
    .then(({ data }) => {
      hero.value = data
    })
    .catch((err) => {
      hero.value = null;
      
      const errObj = {
        routeParams: route.params,
        message: err.message
      }
      
      if(err.response) {
        errObj.data = err.response.data;
        errObj.status = err.response.status;
      }
      
      setApiErr(errObj)
      router.push('/error')
    }).finally(() => {
      isLoadingHero.value = false;
    })
    
    getApiDetailedHeroItems({region, account: battleTag, heroId})
    .then(({ data }) => {
      items.value = data
    })
    .catch((err) => {
      items.value = null;
      console.log(err)
    }).finally(() => {
      isLoadingItems.value = false;
    })
  }
  
  const detailsHeader = computed(() => {
    const {
      name,
      class: classSlug,
      gender,
      level,
      hardcore,
      seasonal,
      paragonLevel,
      alive,
      seasonCreated
    } = hero.value

    return {
      name,
      classSlug,
      gender,
      level,
      hardcore,
      seasonal,
      paragonLevel,
      alive,
      seasonCreated
    }
  })

  const detailStats = computed(() => {
    return {...hero.value?.stats, classSlug: hero.value?.class}
  })

  fetchData();

</script>

<template>
  <HeroLoading v-if="isLoadingHero" />
  <div class="container" v-else>
    <section class="header">
      <template v-if="hero != null">
        <HeroDetailsHeader :details="detailsHeader" />
      </template>
    </section>
    <section class="attributes">
      <HeroAttributes :attributes="detailStats" />
    </section>
    <section class="skills">
      <HeroSkills :skills="hero?.skills" />
    </section>
    <section class="items">
      <HeroLoading v-if="isLoadingItems" />
      <template v-if="items != null">
        <HeroItems :items="items" />
      </template>
    </section>
  </div>
</template>

<style scoped>

@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1.3fr 2fr;
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-template-areas:
      "header header"
      "attributes items"
      "skills items";
  }
}

.header {
  grid-area: header;
  margin-bottom: 26px;
}

.attributes {
  grid-area: attributes;
}

.skills {
  grid-area: skills;
}

.items {
  grid-area: items;
}

</style>