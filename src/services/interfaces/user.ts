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
