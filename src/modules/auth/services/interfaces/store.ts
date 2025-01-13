import type { IUser } from './api'

export interface IAuthState {
    token: string | null
    user: IUser | null
    school: string | null
}