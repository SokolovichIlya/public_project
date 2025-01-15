<template>
    <MainLayout>
        <div class="page">
            <div class="welcome">
                <h2 class="welcome__title">Добро пожаловать, {{ employee?.user.last_name }} {{ employee?.user.first_name }}!</h2>
                <p class="welcome__text">Вы находитесь на главной странице приложения</p>
                <p class="welcome__text">Здесь вы можете сформировать документы связанные с вами или вашими учениками</p>
            </div>
            <div>
                <h3 class="page__subtitle">Документы для учителя</h3>
                <CardsWrapper>
                    <DocumentCardComponents 
                        v-for="(card, index) in listDocumentsCards" 
                        :key="`document-card-${index}`"
                        :title="card.title"
                        :description="card.description"
                        :icon="card.icon"
                        size="medium"
                    />
                </CardsWrapper>
            </div>
            <BlockComponent
                title="Ученики"
                description="В списке учеников вы можете как сформировать документы о заслугах ученика, так и справки для ученика или класса"
            >
                <template #header-button>
                    <Button type="secondary" class="button">Добавить ученика</Button>
                </template>
                <div class="filters">
                    <div class="filters__item">
                        <input type="text" id="fio" class="input" placeholder="Поиск по ФИО">
                    </div>
                    <div class="filters__buttons">
                        <Button type="secondary" size="small" class="button">Сформировать справку на класс</Button>
                    </div>
                </div>
                <div v-if="students" class="list">
                    <div class="list__header list__item">
                        <div class="list__column list__column--50">
                            <p class="list__subtitle">ФИО</p>
                        </div>
                        <div class="list__column list__column--25">
                            <p class="list__subtitle">День рождения</p>
                        </div>
                        <div class="list__column list__column--25 list__column--right">
                            <p class="list__subtitle">Действия</p>
                        </div>
                    </div>
                    <div class="list__body">
                        <div v-for="student in students.data" :key="student.uuid" class="list__data list__item">
                            <div class="list__column list__column--50">
                                <p class="list__text">{{ student.last_name }} {{ student.first_name }} {{ student.middle_name }}</p>
                            </div>
                            <div class="list__column list__column--25">
                                <p class="list__text">{{ student.birthday }}</p>
                            </div>
                            <div class="list__column list__column--25 list__column--right">
                                <IconButton type="secondary" size="small" icon="pen" />
                                <IconButton type="secondary" size="small" icon="close" />
                            </div>
                        </div>
                    </div>
                </div>
            </BlockComponent>
        </div>
    </MainLayout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

import DocumentCardComponents from '../components/DocumentCardComponents.vue'
import { useAuthStore } from '@/modules/auth/services/store'

import { getStudyClasses } from '@/modules/education/services/api'
import type { IStudyClass } from '@/modules/education/services/interfaces/api'

import { getStudents } from '@/modules/students/services/api/index'
import type { IStudentsList } from '@/modules/students/services/interfaces/api'

export default defineComponent({
    name: 'HomeView',

    components: {
        DocumentCardComponents,
    },

    setup() {
        const listDocumentsCards = [
            {
                title: 'Категория',
                description: 'Создать документ о присвоенной категории',
                icon: 'file',
            },
            {
                title: 'КПК',
                description: 'Создать документ о курсах повышения квалификации',
                icon: 'file',
            },
            {
                title: 'Публикация',
                description: 'Создать документ о публикации',
                icon: 'file',
            },
            {
                title: 'Профильная смена',
                description: 'Создать документ о профильной смене',
                icon: 'file',
            },
        ]

        const store = useAuthStore()
        const employee = computed(() => store.employee)
        const currentClass = ref<IStudyClass>()
        const students = ref<IStudentsList>()
            
        async function getEducationData() {
            const { data } = await getStudyClasses({
                teacher: employee.value?.uuid,
            })

            currentClass.value = data.data[0]

            const { data: studentsData } = await getStudents({
                study_class: currentClass.value.uuid,
            })

            students.value = studentsData
        }

        getEducationData()

        return {
            listDocumentsCards,
            employee,
            students,
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
.welcome {
    &__title {
        font-size: 26px;
        font-family: 'RobotoBold';
        margin-bottom: 10px;
        color: var(--color-text-main);
    }

    &__text {
        font-family: 'Roboto';
        color: var(--color-text-second);
    }
}

.filters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &__item {
        display: flex;
        flex-direction: column;
        row-gap: 4px;

        label {
            font-family: 'Roboto';
            font-size: 14px;
            color: var(--color-text-main);
        }

        input {
            border: 1px solid var(--gray-200);
            padding: 14px;
            color: var(--color-main-dark);
            border-radius: 14px;
            width: 300px;
            font-family: 'Roboto';
            outline: none;
        }
    }
}

.list {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__item {
        display: flex;
    }
    
    &__column {
        display: flex;
        align-items: center;

        &--25 {
            flex-basis: 25%;
        }

        &--50 {
            flex-basis: 50%;
        }

        &--right {
            justify-content: flex-end;
        }
    }

    &__header {
        margin-bottom: 10px;
    }

    &__subtitle {
        font-family: 'RobotoMedium';
        font-size: 12px;
        color: var(--color-text-second);
    }

    &__text {
        font-family: 'Roboto';
        color: var(--color-text-main);
        font-size: 14px;
    }

    &__body {
        display: flex;
        flex-direction: column;
        row-gap: 14px;
    }

    &__data {
        padding: 20px;
        background-color: var(--gray-50);
        border-radius: 20px;
    }
}
</style>