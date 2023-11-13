<script setup>
  import { defineProps, toRefs, computed } from 'vue';

  const props = defineProps({
    details: Object
  })

  const { details } = toRefs(props)

  const heroClass = computed(() => `hero-${details.value.classSlug} ${details.value.gender == 0 ? 'male' : 'female'}`);
</script>

<template>
  <header>
    <div class="avatar">
      <div :class="heroClass"></div>
    </div>
    <div class="details">
      <h1>{{ details.name }}</h1>
      <p>
        <span>{{ details.level }} </span> .
        <span class="paragon-level"> ({{ details.paragonLevel }}) </span> .
        <span>{{ details.classSlug }}</span>
      </p>
      <p class="season-created">
        Season created:
        <span> {{ details.seasonCreated }}</span>
      </p>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #333;
  padding: 26px;
  gap: 20px;
  border-radius: 30px;
}

.paragon-level {
  color: aqua;
}

.season-created {
  color: #666;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

@media (min-width: 420px) {
  .avatar {
    max-width: 180px;
    min-width: 180px;
    margin-bottom: 12px;
  }
}
</style>