import type { IStudyClassMainData } from '@/modules/education/services/interfaces/api'
import type { ISchool } from '@/services/interfaces/school'
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
    study_classes: IStudyClassMainData[]
    employee: IEmployee
}

export interface IAuthResponseLogout {
    message: string
    success: boolean
    data: null
}