import type { IStudyClassMainData } from '@/modules/education/services/interfaces/api'
import type { IEmployee } from './api'

export interface IAuthState {
    token: string | null
    employee: IEmployee | null
    school: string | null
    study_classes: IStudyClassMainData[]
}