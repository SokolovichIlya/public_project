import { BASE_URL } from '@/services/api'
import type { IStudentsList, IStudentsListApiParams } from '../interfaces/api'

export async function getStudents(params: IStudentsListApiParams) : Promise<{ data: IStudentsList }> {
    return await BASE_URL.get('students/list/', { 
        params,
    })
}
