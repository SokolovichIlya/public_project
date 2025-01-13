import Cookie from 'js-cookie'

import { defineStore } from 'pinia'
import type { IAuthState } from '../interfaces/store'
import { IUser } from '../interfaces/api'

export const useAuthStore = defineStore('authStore', { 
    state: () => ({
        token: Cookie.get('token') || null,
        user: Cookie.get('user') || null,
        school: Cookie.get('school') || null,
    }) as IAuthState,

    actions: {
        setToken(token: string) : void {
            this.token = token
            Cookie.set('token', this.token)
        },

        setUser(user: IUser) : void {
            this.user = user

            Cookie.set('user', String(user.id))
        },

        setSchool(school: string) : void { 
            this.school = school

            Cookie.set('school', school)
        },

        logoutSystem() : void {
            this.token = null
            this.user = null
            this.school = null
            
            Cookie.remove('token')
            Cookie.remove('user')
            Cookie.remove('school')
        },
    },
})