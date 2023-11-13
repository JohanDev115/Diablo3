import { defineStore } from 'pinia'

const useError = defineStore('error', {
  state: () => {
    return {
      error: null
    }
  },
  actions: {
    setError(error) {
      this.error = error
    }
  }
})

export { useError }