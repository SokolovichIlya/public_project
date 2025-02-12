export interface IStudentCreate {
    last_name: string
    first_name: string
    middle_name: string
    study_class: string
    birthday: Date | null
    gender: string
    number_pfdo: string
    citizenship: string
}

export interface IStudentUpdate extends IStudentCreate {
    uuid: string
}