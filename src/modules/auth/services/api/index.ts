import { BASE_URL } from '@/services/api'
import type { IAuthParams, IAuthResponseLogin, IAuthResponseLogout } from '../interfaces/api'

export async function login(params: IAuthParams) : Promise<{ data: IAuthResponseLogin }> {
    return await BASE_URL.post('users/login/', params)
}

export async function getCanPermission(code: string[]) : Promise<{ data: IAuthResponseLogout }> {
    return await BASE_URL.get('users/can/', { params: { code } })
}