import type { IPagination } from '@/services/interfaces/pagination'
import { ISchool } from '@/services/interfaces/school'

export interface IStudent {
    uuid: string
    school: ISchool
    last_name: string
    first_name: string
    middle_name: string
    study_class: string
    birthday: string
    gender: string
    number_pfdo: string
    citizenship: string
}

export interface IStudentsList extends IPagination {
    data: IStudent[],
}

export interface IStudentsListApiParams {
    page?: number
    per_page?: number | null
    study_class?: string
    number_pfdo?: string
    fio?: string
}