import { RouteRecordRaw } from 'vue-router'

export default [
    {
        path: 'student/create',
        name: 'student.create',
        component: () => import(/* webpackChunkName: "students" */ '../../views/CreateView.vue'),
    },
    {
        path: 'student/:studentUuid',
        name: 'student.edit',
        component: () => import(/* webpackChunkName: "students" */ '../../views/EditView.vue'),
    },
] as Array<RouteRecordRaw>