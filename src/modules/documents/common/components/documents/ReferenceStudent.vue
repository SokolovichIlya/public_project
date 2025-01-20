<template>
    <el-form :model="kpkForm" :rules="kpkRules" ref="kpkFormRef" label-width="200px" label-position="left">
        <el-form-item  label="Документ" prop="kpk_document">

        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({ 
    emits: ['submit'],

    setup() {
        const kpkForm = ref({
            kpk: false,
            kpk_name: null,
            kpk_city: null,
            kpk_organization: null,
            kpk_date_issue: null,
            kpk_number_hours: null,
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

        const typeCategoryList = [
            {
                value: 0,
                label: 'Конкурс',
            },
            {
                value: 1,
                label: 'Конференция',
            },
            {
                value: 2,
                label: 'Олимпиада',
            },
            {
                value: 3,
                label: 'Другое',
            },
        ]

        const levelList = [
            {value: 0, label: 'Муниципальный'},
            {value: 1, label: 'Региональный'},
            {value: 2, label: 'Федеральный'},  
            {value: 3, label: 'Иное'},
        ]

        const resultList = [
            {value: 0, label: 'Победитель'},
            {value: 1, label: 'Призер'},
            {value: 2, label: 'Участник'},  
        ]

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