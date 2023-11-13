<script setup>
  import { computed, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { getApiAccount } from '../api/search'
  import useApiErr from '../mixins/setError'
  import ProfileLoading from '../components/ProfileLoading.vue'
  import MainBlock from './MainBlock/IndexView.vue'
  import ArtisansBlock from './ArtisansBlock/IndexView.vue'

  /* Mokkori#1308 */

  let profileData = ref(null);
  let isLoading = ref(true);

  const {setApiErr} = useApiErr();

  const route = useRoute();
  const router = useRouter();

  const {params: {region, battleTag}} = route;

  const fetchData = async () => {
    getApiAccount({region, account: battleTag})
    .then(({ data }) => {
      profileData.value = data
    })
    .catch((err) => {
      profileData.value = null;

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
      isLoading.value = false;
    })
  }

  const artisansData = computed(() => {
    return {
      blacksmith: profileData.value.blacksmith,
      blacksmithHardcore: profileData.value.blacksmithHardcore,
      jeweler: profileData.value.jeweler,
      jewelerHardcore: profileData.value.jewelerHardcore,
      mystic: profileData.value.mystic,
      mysticHardcore: profileData.value.mysticHardcore
    }
  })

  fetchData()
</script>

<template>
  <ProfileLoading v-if="isLoading" />
  <template v-if="profileData != null">
    <h1>User: {{ profileData.battleTag }}</h1>
    <MainBlock :profile-data="profileData" />
    <ArtisansBlock :artisans-data="artisansData" />
  </template>
</template>

<style scoped>
  
</style>