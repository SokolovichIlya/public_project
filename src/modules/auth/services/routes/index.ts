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
] as Array<RouteRecordRaw>