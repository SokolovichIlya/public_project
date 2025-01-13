export interface IUser {
    id: number
    username: string
    last_name: string
    first_name: string
    middle_name: string
    birth_date: Date | null
    photo: string | null
    phone: string | null
    email: string | null
    inn: string | null
    snils: string | null
    passport: string | null
}

export interface IAuthParams {
    email: string
    password: string
}

export interface IAuthResponseLogin {
    access: string
    refresh: string
    user: IUser
    employee: {
        uuid: string
        position: string
        school: {
            abbreviated_name: string
            full_name: string
            uuid: string
        }
    }
}
export interface IAuthResponseLogout {
    message: string
    success: boolean
    data: null
}