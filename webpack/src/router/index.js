import VueRouter from 'vue-router';
import Vue from 'vue';

const routes = [
    {
        name:'index',//index
        path:'/',
        meta:{
            title:'首页'
        },
        component: () => import('../view/index.vue'),
    },
    
]



const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

Vue.use(VueRouter);

export default router;