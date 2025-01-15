import axios, { AxiosError, type AxiosResponse } from 'axios'
import { useAuthStore } from '@/modules/auth/services/store'
import router from '../router'
import Qs from 'qs'

export const BASE_URL = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
})

BASE_URL.interceptors.request.use(request => {
    const store = useAuthStore()

    if (store.token) {
        request.headers.Authorization = `Bearer ${store.token}`

        if (store.school) {
            request.headers['School-uuid'] = store.school
        } 
    }

    request.paramsSerializer = params => {
        return Qs.stringify(params, {
            arrayFormat: 'brackets',
            encode: false
        })
    }

    return request
})

BASE_URL.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    if (error.response?.status === 403) {
        const store = useAuthStore()
        store.logoutSystem()
        router.push({ name: 'login' })
    }

    return Promise.reject(error)
})
