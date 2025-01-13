import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { middlewarePipeline } from '../middlewares'

import auth from '../middlewares/auth.global'
import permissions from '../middlewares/permissions.global'

import { isEmpty } from 'lodash'

const globalPermissions : string[] = []

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
	},
] as Array<RouteRecordRaw>

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
	const middlewares: any = to.meta.middlewares || []

	if (!to.meta.isGuestAccess) {
		middlewares.push(auth)
		middlewares.push(permissions)

        if (to.meta.permissions) {
            to.meta.permissions = [...to.meta.permissions as string[], ...globalPermissions]
        } else {
            to.meta.permissions = globalPermissions
        }
	}

    if (isEmpty(middlewares)) {
        return next()
    }

    const context: any = {
        to,
        from,
        next,
    }

    return middlewares[0]({
        ...context,
        next: middlewarePipeline(context, middlewares, 1),
    })
})

export default router
