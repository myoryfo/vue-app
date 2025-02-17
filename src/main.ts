import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// dont forget to import router file
import router from './router'


// using use(router) to aplly vue router to this app
createApp(App)
  .use(router)
  .mount('#app')
