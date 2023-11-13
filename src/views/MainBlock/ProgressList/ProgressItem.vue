<script setup>
  import { defineProps, toRefs, computed } from 'vue';

  const props = defineProps({
    act: Object
  })

  const { act } = toRefs(props)

  const acts = {
    act1: 'I',
    act2: 'II',
    act3: 'III',
    act4: 'IV',
    act5: 'V'
  }

  const fullActName = computed(() => `Act ${acts[act.value.actNum]}`)
  const actClass = computed(() => `act ${act.value.actNum} ${act.value.value ? 'done' : 'pending'}`)

</script>

<template>
  <div class="container">
    <div class="avatar">
      <div :class="actClass"></div>
    </div>
    <p>{{ fullActName }}</p>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.act {
  width: 50px;
  height: 55px;
}


</style>