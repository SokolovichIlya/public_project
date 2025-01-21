import { RouteRecordRaw } from 'vue-router'

export default [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "auth" */ '../../views/LoginView.vue'),
        meta: {
            isGuestAccess: true,
        },
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "auth" */ '../../views/LoginView.vue'),
    },
] as Array<RouteRecordRaw>