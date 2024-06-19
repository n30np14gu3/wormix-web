import { createRouter, createWebHistory } from 'vue-router'

import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import GameView from "@/views/GameView.vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView
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