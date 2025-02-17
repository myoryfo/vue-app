// THIS FILE FOR ROUTING ALL PAGES IN THE APP
import { createMemoryHistory, createRouter } from 'vue-router'

import Memo from '../Memo.vue'
import About from '../About.vue'
import HelloWorld from '../HelloWorld.vue'

const routes = [
  { path: '/', component: Memo },
  { path: '/about', component: About },
  { path: '/hello-world', component: HelloWorld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router