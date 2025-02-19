// THIS FILE FOR ROUTING ALL PAGES IN THE APP
import { createMemoryHistory, createRouter } from 'vue-router'

import MemoPage from '../MemoPage.vue'
import AboutPage from '../AboutPage.vue'
import HelloWorld from '../HelloWorld.vue'
import HallPage from '../HallPage.vue'

const routes = [
    { path: '/', component: MemoPage },
    { path: '/about', component: AboutPage },
    { path: '/hello-world', component: HelloWorld },
    { path: '/hall', component: HallPage },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
