import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '../pages/home.vue';
import information from '../pages/information.vue';
import amusement from '../pages/amusement.vue';
import detail from '../pages/detail.vue';
import shopcar from '../pages/shopcar.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import reg from '../pages/reg.vue';
import error from '../pages/error.vue';
let routes=[
    {path:'/home',component:home},
    {path:'/information',component:information},
    {path:'/amusement',component:amusement},
    {name:'detail',path:'/detail/:id',component:detail},
    {path:'/shopcar',component:shopcar},
    {path:'/user',component:user},
    {path:'/login',component:login},
    {path:'/reg',component:reg},
    {path:'/',redirect:'/home'},
    {path:'*',component:error},
];
let router = new VueRouter({routes});

export default router;