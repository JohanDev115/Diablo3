<script setup>
import { useOauth } from '@/stores/oauth';
import { useLoading } from '@/stores/index';
import MainLayout from '@/layouts/MainLayout.vue'
import LoadingLayout from '@/layouts/LoadingLayout.vue'
import MainLoading from './components/MainLoading.vue';

const oauth = useOauth()
oauth.getToken();

const loading = useLoading();
</script>

<template>
  <LoadingLayout v-if="loading.isLoading">
    <MainLoading />
  </LoadingLayout>

  <MainLayout v-else/>
</template>

<style lang="stylus" scoped>
</style>
