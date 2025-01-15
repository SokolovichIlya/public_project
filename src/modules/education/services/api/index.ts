import { BASE_URL } from '@/services/api'
import type { IStudyClassesList, IStudyClassesListApiParams } from '../interfaces/api'

export async function getStudyClasses(params: IStudyClassesListApiParams) : Promise<{ data: IStudyClassesList }> {
    return await BASE_URL.get('education/list/', { 
        params,
    })
}
