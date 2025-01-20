import type { UploadRawFile } from 'element-plus'

export interface CategoryForm {
    type: string
    name: string
    date_from: string
    date_to: string
    level: string
    result: string
    document: UploadRawFile | null
}