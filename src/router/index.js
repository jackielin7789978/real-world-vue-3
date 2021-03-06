import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/EventDetails.vue'
import About from '../views/About.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'EventList',
        component: EventList,
    },
    {
        // dynamic routing
        path: '/event/:id',
        name: 'EventDetails',
        props: true,
        component: EventDetails,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        name: 'NotFound',
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
