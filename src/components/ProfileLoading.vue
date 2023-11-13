<script setup></script>

<template>
  <div class="container">
    <div>
      <section class="top-heroes"></section>
      <section class="heroes-list"></section>
      <section class="progress-list"></section>
    </div>
    <div>
      <section class="player-stats"></section>
    </div>
  </div>
</template>

<style scoped>

section {
  width: 100%;
  margin-bottom: 20px;
  background-color: #333;
  border-radius: 16px;
  padding: 16px;
  animation: flicker 1.5s infinite alternate;
}

.top-heroes {
  height: 310px;
}
.heroes-list {
  height: 420px;
}

.player-stats {
  height: 600px;
}

@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    align-items: top;
  }

  .hero-section {
    margin-bottom: 30px;
  }
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
