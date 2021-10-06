import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../view/About.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../view/Admin.vue')
    },
    {
        path: '/article',
        name: 'Article',
        component: () => import('../view/Articles.vue')
    },
    {
        path: '/singleArticle',
        name: 'SingleArticle',
        component: () => import('../view/SingleArticle.vue')
    },
    
    
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router