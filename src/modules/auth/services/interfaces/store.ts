import type { IEmployee } from './api'

export interface IAuthState {
    token: string | null
    employee: IEmployee | null
    school: string | null
}