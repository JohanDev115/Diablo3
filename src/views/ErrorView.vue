<script setup>
  // import { computed } from 'vue';
  import { useError } from '../stores/error';
  import { useRouter } from 'vue-router';

  const useErr = useError();
  const err = useErr.error

  const router = useRouter()
</script>

<template>
  <div class="error-page">
    <!-- Si hay error -->
    <div v-if="err">

      <!-- Si hay codigo de error -->
      <h1 class="error-code">Error <span v-if="err.status">{{ err.status }}</span></h1>

      <!-- Si hay parámetros de ruta -->
      <div class="error-description" v-if="err.routeParams">
        <h2>Query Params:</h2>
        <ul class="list-unstyled">
          <li v-for="(val, key) in err.routeParams" :key="key">
            👉 {{ key.toUpperCase() }}: <span class="lead text-muted">{{ val }}</span>
          </li>
        </ul>
      </div>

      <!-- Si hay mensaje de error -->
      <div v-if="err.message">
        <p class="lead"> {{ err.message }}</p>
      </div>

      <!-- Si hay información de error adicional -->
      <div v-if="err.data">
        <ul class="list-unstyled">
          <li v-for="(val, key) in err.data" :key="key">
            {{ key.toUpperCase() }}: <span class="lead text-muted">{{ val }}</span>
          </li>
        </ul>
      </div>

    </div>

    <!-- Si NO hay error -->
    <div v-else>
      <h1 class="my-5">Error Page</h1>
      <p class="lead">What are you doing here? 🤔</p>
    </div>

    <button @click="router.push('/')">Go Home</button>
  </div>
</template>

<style scoped>
.error-code {
  margin-bottom: 30px;
}
.error-description {
  margin-bottom: 30px;
}

button {
  margin-top: 16px;
  padding: 8px 12px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}
</style>