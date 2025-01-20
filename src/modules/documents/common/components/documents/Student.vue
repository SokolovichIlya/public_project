<template>
    <el-form :model="form" :rules="rules" label-position="left" ref="form" label-width="250px">
        <el-form-item label="ФИО" prop="fio">
            <el-input :value="form.fio" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Категория" prop="category_type">
            <el-select class="w-100" v-model="form.category_type" placeholder="">
                <el-option 
                    v-for="item in typeCategoryList" 
                    :label="item.label" 
                    :value="item.value"
                    :key="`type-${item.value}`"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Название" prop="category_name">
            <el-input v-model="form.category_name" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="Период участия с/по" prop="category_date_from">
            <el-col :span="11">
                <el-form-item prop="category_date_from">
                    <el-date-picker
                        v-model="form.category_date_from"
                        type="date"
                        placeholder=""
                        format="dd.MM.yyyy"
                    >
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="2" />
            <el-col :span="11">
                <el-form-item prop="category_date_to">
                    <el-date-picker
                        v-model="form.category_date_to"
                        type="date"
                        placeholder=""
                        format="dd.MM.yyyy"
                    >
                    </el-date-picker>
                </el-form-item>
            </el-col>
        </el-form-item>
        <el-form-item label="Уровень" prop="category_level">
            <el-select class="w-100" v-model="form.category_level" placeholder="">
                <el-option 
                    v-for="item in levelList" 
                    :label="item.label" 
                    :value="item.value"
                    :key="`lebel-${item.value}`"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Результат" prop="category_result">
            <el-select class="w-100" v-model="form.category_result" placeholder="">
                <el-option 
                    v-for="item in resultList" 
                    :label="item.label" 
                    :value="item.value"
                    :key="`result-${item.value}`"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item  label="Подтверждающий документ" prop="category_document">
            <el-upload
                v-model="form.category_document"
                :auto-upload="false"
                :multiple="false" 
                :limit="1" 
                action=""
                ref="category_document"
            >
                <Button size="small" type="primary">Нажмите для загрузки</Button>
            </el-upload>
        </el-form-item>
        <el-form-item label="Участие в профильных сменах" prop="participation_in_profile_shifts">
            <el-select class="w-100" v-model="form.participation_in_profile_shifts" placeholder="">
                <el-option :value="true" label="Да"></el-option>
                <el-option :value="false" label="Нет"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-if="form.participation_in_profile_shifts" label="Название программы" prop="name_program">
            <el-input v-model="form.name_program" placeholder=""></el-input>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, PropType } from 'vue'

import { levelList, resultList, typeCategoryList } from '@/services/configs/documents'
import type { IStudent } from '@/modules/students/services/interfaces/api'

export default defineComponent({ 
    name: 'StudentForm',

    props: {
        student: {
            type: Object as PropType<IStudent>,
            required: true,
        },
    },
    
    emits: ['submit'],

    setup(props) {
        const form = ref({
            fio: `${props.student.last_name} ${props.student.first_name} ${props.student.middle_name}`,
            teacher: null,
            category_type: '',
            category_name: '',
            category_date_from: '',
            category_date_to: '',
            category_level: '',
            category_result: '',
            category_document: '',
            participation_in_profile_shifts: false,
            name_program: '',
        })

        const rules = reactive({
            fio: [
                { required: true, message: 'Это обязательное поле', trigger: 'blur' }
            ],
            teacher: [
                { required: true, message: 'Это обязательное поле', trigger: 'change' }
            ],
            category_type: [
                { required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            category_name: [
                { required: true, message: 'Заполните поле', trigger: 'blur' }
            ],
            category_date_from: [
                { type: 'date', required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            category_date_to: [
                { type: 'date', required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            category_level: [
                { required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            category_result: [
                { required: true, message: 'Заполните поле', trigger: 'change' }
            ],
            category_document: [
                { required: false, message: 'Прикрепите Документ', trigger: 'change' }
            ],
            participation_in_profile_shifts: [
                { required: false, message: 'Пожалуйста, выберите Участие в профильных сменах', trigger: 'change' }
            ],
            name_program: [
                { required: false, message: 'Пожалуйста, укажите Название программы', trigger: 'blur' }
            ],
        })

        return {
            form,
            rules,

            typeCategoryList,
            levelList,
            resultList,
        }
    },
})
</script>