import type { IPagination } from '@/services/interfaces/pagination'
import type { IEmployee } from '@/modules/auth/services/interfaces/api'
import type { INumberClasses } from '@/services/interfaces/metadata'

export interface IStudyClass {
    uuid: string
    number: INumberClasses
    letter: string
    classroom_teacher: IEmployee 
}

export interface IStudyClassesList extends IPagination {
    data: IStudyClass[],
}

export interface IStudyClassesListApiParams {
    page?: number
    per_page?: number | null
    name?: string
    teacher?: string
}