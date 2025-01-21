import Cookie from 'js-cookie'

import { defineStore } from 'pinia'
import type { IAuthState } from '../interfaces/store'
import type { IEmployee } from '../interfaces/api'
import type { IStudyClassMainData } from '@/modules/education/services/interfaces/api'

export const useAuthStore = defineStore('authStore', { 
    state: () => ({
        token: Cookie.get('token') || null,
        employee: Cookie.get('employee') ? JSON.parse(Cookie.get('employee') as string) : null,
        school: Cookie.get('school') || null,
        study_classes: Cookie.get('study_classes') ? JSON.parse(Cookie.get('study_classes') as string) : []
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

        setStudyClasses(study_classes: IStudyClassMainData[]) : void {
            this.study_classes = study_classes

            Cookie.set('study_classes', JSON.stringify(study_classes))
        },

        logoutSystem() : void {
            this.token = null
            this.employee = null
            this.school = null
            this.study_classes = []
            
            Cookie.remove('token')
            Cookie.remove('employee')
            Cookie.remove('school')
            Cookie.remove('study_classes')
        },
    },
})