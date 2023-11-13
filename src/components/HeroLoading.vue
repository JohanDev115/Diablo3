<script setup></script>

<template>
  <div class="container">
    <section class="header">
    </section>
    <section class="attributes">
    </section>
    <section class="skills">
    </section>
    <section class="items">
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

section {
  width: 100%;
  background-color: #333;
  border-radius: 30px;
  animation: flicker 1.5s infinite alternate;
  margin-bottom: 20px;
}
.header {
  grid-area: header;
  height: 204px;
  width: 100%;
  margin-bottom: 26px;
  background-color: #333;
}

.attributes {
  grid-area: attributes;
  width: 100%;
  height: 300px;
}

.skills {
  grid-area: skills;
  width: 100%;
  height: 300px;
}

.items {
  grid-area: items;
  width: 100%;
  height: 500px;
}

@keyframes flicker {
  0% {
    background-color: #333;
  }
  50% {
    background-color: #444;
  }
  100% {
    background-color: #333;
  }
}

</style>
