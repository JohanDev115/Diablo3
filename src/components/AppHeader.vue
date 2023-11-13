<script setup>
  // import NavBar from './NavBar.vue';
</script>

<template>
  <header>
    <!-- <NavBar /> -->
    <img class="banner" src="../assets/images/diablo-iii.svg" alt="">
    <h1>DP3F</h1>
  </header>
</template>

<style lang="stylus" scoped>
header
  width: 100%
  height: 80px
  display: flex
  flex-direction: row
  align-items: center
  margin-bottom: 20px

.banner
  // width: 100%
  height: 100%
  object-fit: contain;
  width: min-content
</style>