<script setup>
  import { RouterView } from 'vue-router';
  import AppFooter from '../components/AppFooter.vue';
  import AppHeader from '../components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main>
    <router-view></router-view>
  </main>
  <AppFooter />
</template>

<style lang="stylus" scoped>
main {
  padding: 20px;
}
</style>