import Vue from 'vue';
import Router from 'vue-router';
import { store } from './stores/store'

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Error404 from './pages/404';
import Stats from './pages/Stats';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/profile/:name?',
            name: 'profile',
            component: Profile,
            beforeEnter(to, from, next) {
                console.log("fetching data");
                console.log("updating state");
                next();
            },
            meta: { auth: true },
            children: [
                {
                    path: 'stats',
                    component: Stats
                }
            ]
        },
        {
            path: '*',
            name: '404',
            component: Error404
        }
    ]
});

router.beforeEach((to, from, next) => {
function proceed() {
    
    if (to.matched.some(record => record.meta.auth)) {
        let authenticated = true;
        //check if authenticated
        if (authenticated) {
            console.log("User authenticated");
            next();
        } else {
        //redirect to login
        }
    }
    next();
}

if (!store.state.appReady){
    store.watch(
        (state) => state.appReady,
        (ready) => {
            if(ready){
                proceed();
            }
        }
    )
} else {
    proceed();
}

});

export default router;