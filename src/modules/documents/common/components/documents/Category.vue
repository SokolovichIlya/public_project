<template>
    <el-form 
        :model="categoryForm" 
        :rules="categoryRules" 
        ref="categoryFormRef" 
        label-width="200px" 
        label-position="left"
    >
        <el-form-item label="Тип" prop="type">
            <el-select class="w-100" v-model="categoryForm.type" placeholder="">
                <el-option 
                    v-for="item in typeCategoryList" 
                    :label="item.label" 
                    :value="item.value"
                    :key="`type-${item.value}`"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Название" prop="name">
            <el-input v-model="categoryForm.name" placeholder="" />
        </el-form-item>
        <el-form-item label="Период участия с/по" prop="date_from">
            <el-col :span="11">
                <el-form-item prop="date_from">
                    <el-date-picker
                        v-model="categoryForm.date_from"
                        type="date"
                        placeholder=""
                    >
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-form-item prop="date_to">
                    <el-date-picker
                        v-model="categoryForm.date_to"
                        type="date"
                        placeholder=""
                    >
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="Уровень" prop="level">
            <el-select v-model="categoryForm.level" class="w-100" placeholder="">
                <el-option 
                    v-for="item in levelList" 
                    :label="item.label" 
                    :value="item.value"
                    :key="`lebel-${item.value}`"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Результат" prop="result">
            <el-select v-model="categoryForm.result" class="w-100" placeholder="">
                <el-option 
                    v-for="item in resultList" 
                    :label="item.label" 
                    :value="item.value"
                    :key="`result-${item.value}`"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item  label="Документ" prop="document">
            <el-upload
                :on-change="handleChange"
                :auto-upload="false"
                :multiple="false" 
                :limit="1" 
                action=""
                ref="categoryDocumentRef"
            >
                <Button native-type="button" size="small" type="primary">Нажмите для загрузки</Button>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button>Отмена</el-button>
            <el-button @click.prevent="sendForm" type="primary">Сохранить</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { ElMessage, type UploadInstance, type UploadProps } from 'element-plus'
import { levelList, resultList, typeCategoryList } from '@/services/configs/documents'
import { createCategories } from '../../services/api/documents'
import type { CategoryForm } from '../../services/interfaces/documents'
import moment from 'moment'

type CategoryFormKeys = keyof CategoryForm

export default defineComponent({ 
    name: 'CategoryForm',

    emits: ['submit'],

    setup() {
        const categoryFormRef = ref()
        const categoryDocumentRef = ref<UploadInstance>()

        const categoryForm = ref<CategoryForm>({
            type: '',
            name: '',
            date_from: '',
            date_to: '',
            level: '',
            result: '',
            document: null,
        })
        
        const categoryRules = reactive({
            type: [
                { required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            name: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            date_from: [
                { type: 'date', required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            date_to: [
                { type: 'date', required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            level: [
                { required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            result: [
                { required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            document: [
                { required: false, message: 'Прикрепите Документ', trigger: 'change' }
            ],
        })

        async function sendForm() : Promise<void> {
            await categoryFormRef.value.validate(async (isValid : boolean) => { 
                if (isValid) {
                    const form = new FormData()

                    for (let key in categoryForm.value) {
                        const k = key as CategoryFormKeys

                        if (k.includes('date')) {
                            form.append(k, moment(categoryForm.value[k] as string).format('YYYY-MM-DD'))
                        } else {
                            form.append(k, categoryForm.value[k] as string)
                        }
                    }  

                    try {
                        await createCategories(form)
                    } catch (error) {
                        console.log(error);

                        ElMessage({
                            message: 'Что-то пошло не так, попробуйте позже',
                            type: 'error',
                        })
                    }
                }
            })
        }

        const handleChange: UploadProps['onChange'] = (uploadFile) => {
            if (uploadFile.raw) {
                categoryForm.value.document = uploadFile.raw
            }
        }

        return {
            categoryDocumentRef,
            categoryFormRef,
            categoryForm,
            categoryRules,

            typeCategoryList,
            levelList,
            resultList,

            sendForm,
            handleChange,
        }
    },
})
</script>