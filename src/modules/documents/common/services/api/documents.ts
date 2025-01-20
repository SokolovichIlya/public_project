import { BASE_URL } from '@/services/api'

export async function createCategories(params: any) : Promise<any> {
    return await BASE_URL.post('documents/category/', params, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export async function createKPK(params: any) : Promise<any> {
    return await BASE_URL.post('documents/kpk/', params, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
export async function createProfileShifts(params: any) : Promise<any> {
    return await BASE_URL.post('documents/profileShifts/', params, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}
export async function createPublications(params: any) : Promise<any> {
    return await BASE_URL.post('documents/publications/', params, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}