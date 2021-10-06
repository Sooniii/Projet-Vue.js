import Vue from 'vue'
import VueRouter from 'vue-router'
import Acceuil from '../components/Acceuil.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: Acceuil,
        component: Acceuil
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/About.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../components/Admin.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router