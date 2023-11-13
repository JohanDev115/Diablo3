import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/css/main.styl'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('focus',(el) => {
  el.focus()
})

app.mount('#app')
