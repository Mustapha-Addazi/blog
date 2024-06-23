import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import contact from './components/contact.vue'
import blog from './components/blog.vue' 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: login },
        { path: '/signup', component: signup },
        { path : '/contact',component:contact},
        {path :'/blog',component:blog}
    ]
});

const app = createApp(App)

app.use(router);


app.mount('#app')