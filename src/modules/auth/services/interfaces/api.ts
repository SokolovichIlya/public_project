import { ISchool } from '@/services/interfaces/school'
import type { IUser } from '@/services/interfaces/user'

export interface IEmployee {
    uuid: string
    school: ISchool
    user: IUser
    position: string
}

export interface IAuthParams {
    email: string
    password: string
}

export interface IAuthResponseLogin {
    access: string
    refresh: string
    user: IUser
    employee: IEmployee
}

export interface IAuthResponseLogout {
    message: string
    success: boolean
    data: null
}