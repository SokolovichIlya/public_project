import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

import { middlewarePipeline } from '../middlewares'

import auth from '../middlewares/auth.global'
import permissions from '../middlewares/permissions.global'

import { isEmpty } from 'lodash'

import authRoutes from '@/modules/auth/services/routes'
import modulesRoutes from '@/modules/router'

const globalPermissions : string[] = []

const routes = [
	{
		path: '/',
        name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/LoadingView.vue'),
        children: [
            {
                path: '/:employeeUuid',
                name: 'loading.set.data',
                component: () => import(/* webpackChunkName: "home" */ '@/views/ParentView.vue'),
                props: true,
                children: [
                    {
                        path: 'home',
                        name: 'documents',
                        component: () => import(/* webpackChunkName: "home" */ '@/modules/documents/home/views/HomeView.vue'),
                    },
                    ...modulesRoutes,
                ]
            }
        ]
	},
    ...authRoutes,
] as Array<RouteRecordRaw>

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export interface RouterContext {
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
}

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
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

    const context: RouterContext = {
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
