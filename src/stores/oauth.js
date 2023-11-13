import { defineStore } from 'pinia'
import { getToken } from '../api/oauth'
import { useLoading } from './index'

const useOauth = defineStore('token', {
  state: () => {
    return {
      accessToken: null
    }
  },
  actions: {
    async getToken() {
      const loading = useLoading();
      loading.isLoading = true;

      await getToken()
      .then(({ data }) => {
        this.accessToken = data.access_token
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        loading.isLoading = false;
      })
    }
  }
})

export { useOauth }
