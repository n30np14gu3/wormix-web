import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import GameView from "@/views/GameView.vue";
import HomeView from "@/views/HomeView.vue";
import TermsView from "@/views/TermsView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/terms',
        name: 'terms',
        component: TermsView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/wormix',
        name: 'wormix',
        component: GameView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not_found',
        component: NotFoundView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;