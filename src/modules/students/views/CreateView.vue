<template>
    <MainLayout>
        <div class="page">
            <BlockComponent
                title="Добавление ученика"
                description="Заполните все обязательные поля отмеченые символом *"
            >
                <StudentForm @submit="handleSubmitCreateForm" :is-loading="isLoading" />
            </BlockComponent>
        </div>
    </MainLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { createStudent } from '@/modules/students/services/api/index'
import type { IStudentCreate } from '../services/interfaces/forms'
import StudentForm from '../components/forms/StudentForm.vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default defineComponent({
    name: 'StudentCreateView',

    components: {
        StudentForm,
    },

    setup() {
        const router = useRouter()
        const isLoading = ref<boolean>(false)

        async function handleSubmitCreateForm(form: IStudentCreate) {
            try {
                await createStudent(form)

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
            handleSubmitCreateForm,
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