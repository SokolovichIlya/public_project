<template>
    <el-form 
        :model="form" 
        :rules="formRules" 
        ref="formRef" 
        label-width="200px" 
        label-position="left"
    >
        <el-form-item label="Фамилия" prop="last_name">
            <el-input v-model="form.last_name" placeholder="" />
        </el-form-item>
        <el-form-item label="Имя" prop="first_name">
            <el-input v-model="form.first_name" placeholder="" />
        </el-form-item>
        <el-form-item label="Отчество" prop="middle_name">
            <el-input v-model="form.middle_name" placeholder="" />
        </el-form-item>
        <el-form-item label="Класс" prop="study_class">
            <el-select v-model="form.study_class" class="w-100" placeholder="">
                <el-option 
                    v-for="studyClass in studyClasses" 
                    :key="studyClass.uuid" 
                    :label="`${studyClass.number}${studyClass.letter}`" 
                    :value="studyClass.uuid" 
                />
            </el-select>
        </el-form-item>
        <el-form-item label="День рождения" prop="birthday">
            <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder=""
            />
        </el-form-item>
        <el-form-item label="Пол" prop="gender">
            <el-select v-model="form.gender" class="w-100" placeholder="">
                <el-option label="Мужской" value="0" />
                <el-option label="Женский" value="1" />
            </el-select>
        </el-form-item>
        <el-form-item label="Номер ПФДО" prop="number_pfdo">
            <el-input v-model="form.number_pfdo" placeholder="" />
        </el-form-item>
        <el-form-item label="Гражданство" prop="citizenship">
            <el-input v-model="form.citizenship" placeholder="" />
        </el-form-item>
        <el-form-item>
            <el-button @click.prevent="handleSubmitForm" :loading="isLoading" size="large" type="primary">Сохранить</el-button>
            <el-button :loading="isLoading">Назад</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, PropType } from 'vue'

import type { IStudentCreate, IStudentUpdate } from '../../services/interfaces/forms'
import { useAuthStore } from '@/modules/auth/services/store'

import moment from 'moment'

export default defineComponent({ 
    name: 'StudentForm',

    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },

        formData: {
            type: Object as PropType<IStudentUpdate>,
            default: null,
        },
    },

    emits: ['submit'],

    setup(props, { emit }) {
        const authStore = useAuthStore()
        const studyClasses = authStore.study_classes
        const form = ref<IStudentCreate | IStudentUpdate>({
            last_name: '',
            first_name: '',
            middle_name: '',
            study_class: '',
            birthday: null,
            gender: '0',
			number_pfdo: '',
			citizenship: '',
		})

        const formRules = reactive({
            last_name: [ { required: true, message: 'Заполните поле', trigger: 'blur' }],
            first_name: [ { required: true, message: 'Заполните поле', trigger: 'blur' }],
            birthday: [ { type: 'date', required: true, message: 'Заполните поле', trigger: 'change' }],
            study_class: [ { required: true, message: 'Заполните поле', trigger: 'change' }],
            gender: [ { required: true, message: 'Заполните поле', trigger: 'change' }],
        })
        const formRef = ref()

        if (props.formData) {
            form.value = { ...props.formData }
            form.value.birthday = moment(props.formData.birthday).toDate()
            form.value.gender = String(props.formData.gender)
        }
        
        if (studyClasses.length === 1 && !form.value.study_class) {
            form.value.study_class = studyClasses[0].uuid
        }

        async function handleSubmitForm() {
            await formRef.value.validate(async (isValid : boolean) => { 
                if (isValid) {
                    emit('submit', {
                        ...form.value,
                        birthday: moment(form.value.birthday).format('YYYY-MM-DD'),
                    })
                }
            })
        }

        return {
            formRef,
            form,
            formRules,
            studyClasses,

            handleSubmitForm,
        }
    },
})
</script>