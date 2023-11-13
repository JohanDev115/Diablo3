<script setup>
  import HomeForm from '../components/HomeForm.vue';
</script>

<template>
  <div>
    <h1 class="home-title">Diablo 3 Profile Finder</h1>
    <p class="home-descritpion">Enter your
      <em>
        <a href="https://eu.battle.net/support/es/article/75767" target="_blank" title="Format: YourProfile#1234">battle-tag</a>
      </em>
      and select your region to see your profile!
    </p>
    <HomeForm />
  </div>
</template>

<style lang="stylus" scoped>
  .home-title
    text-align: center
    margin-bottom: 12px

  .home-descritpion
    text-align: center
    font-family: Arial, Helvetica, sans-serif
    color: #666
    margin-bottom: 18px

  .home-descritpion > em > a
    text-decoration: none
    color: rgb(30,200,500)
</style>
