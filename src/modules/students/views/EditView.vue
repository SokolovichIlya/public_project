<template>
    <MainLayout>
        <div class="page">
            <BlockComponent
                title="Добавление ученика"
                description="Заполните все обязательные поля отмеченые символом *"
            >
                <StudentForm v-if="student" @submit="handleSubmitUpdateForm" :is-loading="isLoading" :form-data="student" />
            </BlockComponent>
        </div>
    </MainLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { updateStudent, getStudent } from '@/modules/students/services/api/index'
import type { IStudentUpdate } from '../services/interfaces/forms'
import StudentForm from '../components/forms/StudentForm.vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
    name: 'StudentCreateView',

    components: {
        StudentForm,
    },

    setup() {
        const router = useRouter()
        const route = useRoute()
        const isLoading = ref<boolean>(false)

        const studentUuid = route.params.studentUuid as string

        const student = ref<IStudentUpdate | null>(null)

        async function loadStudent() {
            isLoading.value = true

            try {
                const { data } = await getStudent(studentUuid)

                student.value = {
                    uuid: data.uuid,
                    last_name: data.last_name,
                    first_name: data.first_name,
                    middle_name: data.middle_name,
                    birthday: new Date(data.birthday),
                    gender: data.gender,
                    citizenship: data.citizenship,
                    study_class: data.study_class,
                    number_pfdo: data.number_pfdo,
                }
            } catch (error) {
                console.log(error)

                ElMessage({
                    message: 'Что-то пошло не так, попробуйте позже',
                    type: 'error',
                })
            } finally {
                isLoading.value = false
            }
        }

        loadStudent()

        async function handleSubmitUpdateForm(form: IStudentUpdate) {
            try {
                await updateStudent(form)

                router.push({ name: 'documents' })
            } catch (error) {
                console.log(error)

                ElMessage({
                    message: 'Что-то пошло не так, попробуйте позже',
                    type: 'error',
                })
            }
        }

        return {
            handleSubmitUpdateForm,
            student,
            isLoading,
        }
    },
})
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    row-gap: 40px;

    &__subtitle {
        font-family: 'RobotoMedium';
        font-size: 16px;
        margin-bottom: 10px;
    }
}

</style>