<script setup>
  import { computed, reactive } from "vue";
  import { regions } from '@/utils/regions';
  import { useRouter } from "vue-router";

  const router = useRouter();

  const form = reactive({battleTag: '', region: 'us'})
  const regionOptions = computed(() => regions.map(region => ({value: region, text: region.toUpperCase()})))
  const searchProfile = ({region, battleTag}) => {
    router.push(`/${region}/${battleTag}`)
  }
</script>

<template>
  <div class="container">
    <form @submit.prevent="searchProfile({region: form.region, battleTag: form.battleTag.replace('#', '-')})">
      <select name="" id="" v-model="form.region">
        <option
          v-for="region in regionOptions"
          :key="region.value"
          :selected="region.value === 'us'"
          :value="region.value">{{ region.text }}</option>
      </select>
      <input type="text" v-focus placeholder="BattleTag" v-model="form.battleTag" required>
      <button>Submit</button>
    </form>
  </div>
</template>

<style lang="stylus" scoped>
  .container
    width 100%
    display: flex
    justify-content: center

  form
    width: min-content
    display flex
    justify-content center
    height 30px
    border-radius 8px
    overflow hidden
  
  select, input, button
    border none
    outline none
    font-size 16px
    padding 4px 8px

  select
    background-color #ddd
    cursor pointer

  button
    background-color rgb(30,200,500)
    color #fff
    cursor pointer

</style>