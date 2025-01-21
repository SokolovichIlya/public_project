import { RouteRecordRaw } from 'vue-router'

export default [
    {
        path: 'roster',
        name: 'roster',
        component: () => import(/* webpackChunkName: "roster" */ '@/views/ParentView.vue'),
    },
] as Array<RouteRecordRaw>