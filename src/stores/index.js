import { defineStore } from 'pinia'

const useLoading = defineStore('loading', {
  state: () => {
    return {
      isLoading: false
    }
  }
})

export { useLoading }
