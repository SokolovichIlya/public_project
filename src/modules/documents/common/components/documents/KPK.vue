<template>
    <el-form :model="kpkForm" :rules="kpkRules" ref="kpkFormRef" label-width="200px" label-position="left">
        <el-form-item label="Название КПК" prop="kpk_name">
            <el-input v-model="kpkForm.kpk_name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Город" prop="kpk_city">
            <el-input v-model="kpkForm.kpk_city" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Организация" prop="kpk_organization">
            <el-input v-model="kpkForm.kpk_organization" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Дата выдачи" prop="kpk_date_issue">
            <el-date-picker
                v-model="kpkForm.kpk_date_issue"
                type="date"
                placeholder=""
                format="dd.MM.yyyy"
            >
            </el-date-picker>
        </el-form-item>
        <el-form-item label="Количество часов" prop="kpk_number_hours">
            <el-input-number v-model="kpkForm.kpk_number_hours" :min="1"></el-input-number>
        </el-form-item>
        <el-form-item  label="Документ" prop="kpk_document">
            <el-upload
                v-model="kpkForm.kpk_document"
                :auto-upload="false"
                :multiple="false" 
                :limit="1" 
                action=""
                ref="kpk_document"
            >
                <el-button size="small" type="primary">Нажмите для загрузки</el-button>
            </el-upload>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

import { levelList, resultList, typeCategoryList } from '@/services/configs/documents'

export default defineComponent({ 
    name: 'KPKForm',

    emits: ['submit'],

    setup() {
        const kpkForm = ref({
            kpk: false,
            kpk_name: null,
            kpk_city: null,
            kpk_organization: null,
            kpk_date_issue: '',
            kpk_number_hours: 0,
            kpk_document: null,
        })
        
        const kpkRules = reactive({
            kpk_name: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            kpk_city: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            kpk_organization: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            kpk_date_issue: [
                { type: 'date', required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            kpk_number_hours: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            kpk_document: [
                { required: false, message: 'Прикрепите Документ', trigger: 'change' }
            ],
        })

        return {
            kpkForm,
            kpkRules,

            typeCategoryList,
            levelList,
            resultList,
        }
    },
})
</script>