import { BASE_URL } from '@/services/api'
import type { IStudentsList, IStudentsListApiParams, IStudent } from '../interfaces/api'
import type { IStudentCreate, IStudentUpdate } from '../interfaces/forms'

export async function getStudents(params: IStudentsListApiParams) : Promise<{ data: IStudentsList }> {
    return await BASE_URL.get('students/list/', { params })
}

export async function createStudent(params: IStudentCreate) : Promise<{ data: IStudent }> {
    return await BASE_URL.post('students/item/', params)
}

export async function getStudent(uuid: string) : Promise<{ data: IStudent }> {
    return await BASE_URL.get('students/item/', { params: { uuid } })
}

export async function updateStudent(params: IStudentUpdate) : Promise<{ data: IStudent }> {
    return await BASE_URL.put('students/item/', params)
}

export async function deleteStudent(uuid: string) : Promise<{ data: boolean }> {
    return await BASE_URL.delete('students/item/', { params: { uuid } })
}