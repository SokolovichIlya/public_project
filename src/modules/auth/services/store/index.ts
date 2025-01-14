import Cookie from 'js-cookie'

import { defineStore } from 'pinia'
import type { IAuthState } from '../interfaces/store'
import { IEmployee } from '../interfaces/api'

export const useAuthStore = defineStore('authStore', { 
    state: () => ({
        token: Cookie.get('token') || null,
        employee: Cookie.get('employee') ? JSON.parse(Cookie.get('employee') as string) : null,
        school: Cookie.get('school') || null,
    }) as IAuthState,

    actions: {
        setToken(token: string) : void {
            this.token = token
            Cookie.set('token', this.token)
        },

        setEmployee(employee: IEmployee) : void {
            this.employee = employee

            Cookie.set('employee', JSON.stringify(employee))
        },

        setSchool(school: string) : void { 
            this.school = school

            Cookie.set('school', school)
        },

        logoutSystem() : void {
            this.token = null
            this.employee = null
            this.school = null
            
            Cookie.remove('token')
            Cookie.remove('employee')
            Cookie.remove('school')
        },
    },
})