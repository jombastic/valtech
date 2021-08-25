import Vue from 'vue'
import VueRouter from 'vue-router'
import Contents from '../components/Contents.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
    {
        path: '/contents',
        redirect: '/',
    },
    {
        path: '/',
        component: Contents,
    }
    ],
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    },
})

export default router