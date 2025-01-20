<template>
    <el-form 
        :model="publicationForm" 
        :rules="publicationRules" 
        ref="publicationFormRef" 
        label-width="250px" 
        label-position="left"
    >
        <el-form-item label="Название публикации" prop="publication_name">
            <el-input v-model="publicationForm.publication_name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Название журнала / сборника" prop="publication_name_journal">
            <el-input v-model="publicationForm.publication_name_journal" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Город издательства" prop="publication_city">
            <el-input v-model="publicationForm.publication_city" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Диапазон страниц" prop="publication_page_range">
            <el-input v-model="publicationForm.publication_page_range" :min="1"></el-input>
        </el-form-item>
        <el-form-item  label="Документ" prop="publication_document">
            <el-upload
                v-model="publicationForm.publication_document"
                :auto-upload="false"
                :multiple="false" 
                :limit="1" 
                action=""
                ref="publication_document"
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
    name: 'PublicationForm',

    emits: ['submit'],

    setup() {
        const publicationForm = ref({
            publication: false,
            publication_name: null,
            publication_name_journal: null,
            publication_city: null,
            publication_page_range: null,
            publication_document: null,
        })
        
        const publicationRules = reactive({
            publication_name: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            publication_name_journal: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            publication_city: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            publication_page_range: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            publication_document: [
                { required: false, message: 'Прикрепите Документ', trigger: 'change' }
            ],
        })

        return {
            publicationForm,
            publicationRules,

            typeCategoryList,
            levelList,
            resultList,
        }
    },
})
</script>