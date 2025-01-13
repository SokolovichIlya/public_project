import { NavigationGuardNext, RouteLocationNormalizedGeneric } from 'vue-router'
import { getCanPermission } from '@/modules/auth/services/api'

export default async (params: { next: NavigationGuardNext, to: RouteLocationNormalizedGeneric }) : Promise<void> => {
    try {
        getCanPermission(params.to.meta.permissions as string[])

        params.next()
    } catch (error) {
        params.next({ name: 'login' })
    }
}