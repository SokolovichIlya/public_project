import { NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '@/modules/auth/services/store'

export default async (params: { next: NavigationGuardNext }) : Promise<void> => {
    const store = useAuthStore()

    if (store.token) {
        params.next()
    } else {
        params.next({ name: 'login' })
    }
}