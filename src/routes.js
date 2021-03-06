import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import Cars from './components/Cars.vue';
import CarsDetail from './components/CarsDetail.vue';
import NotFound from './components/NotFound.vue';
import ReviewCreate from './components/ReviewCreate.vue';
import Signup from './components/SignUp.vue'; 
import store from './store.js'

//here 

Vue.use(VueRouter);


const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token){
            next()
        }
        else{
            next('/signin')
        }
    }},
    {path: '/signin', component: Login},
    {path: '/cars', component: Cars},
    {path: '/cars/:pk', component: CarsDetail,
        children: [
            {path: 'Review', component: ReviewCreate}
        ]},
    {path: '/signup', component: Signup},
    {path: '/:invalidroute(.*)', component: NotFound} 
]

export default new VueRouter({mode: 'history', routes})