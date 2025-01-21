<template>
    <EmptyLayout>
        <FlexComponent align-items="center" justify-content="center" style="height: 100%">
            <div class="login">
                <form @submit.prevent="handleLoginForm" class="login__form">
                    <div class="login__form-title">
                        <h1>SCHOLOMATIC</h1>
                    </div>
                    <div class="login__form-inputs">
                        <div class="login__form-input">
                            <label for="email">Почта</label>
                            <input v-model="form.email" type="text" name="email" placeholder="Введите почту" id="email" required>
                        </div>
                        <div class="login__form-input">
                            <label for="password">Пароль</label>
                            <input v-model="form.password" type="password" name="password" placeholder="Введите пароль" id="password" required>
                        </div>
                        <div class="login__form-controlers">
                            <div class="login__form-checkbox">
                                <input type="checkbox" id="rememberMe" name="rememberMe">
                                <label for="rememberMe">Запомнить меня</label>
                            </div>
                            <a href="#" class="login__form-forgot-password">Забыли пароль?</a>
                        </div>
                    </div>
                    <div class="login__form-button">
                        <button class="button">Войти</button>
                    </div>
                    <p v-if="hasError" class="text text--red text--xs">Неправильная почта или пароль</p>
                </form>
            </div>
        </FlexComponent>
    </EmptyLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { type IAuthParams } from '../services/interfaces/api'
import { login } from '../services/api'
import { useAuthStore } from '@/modules/auth/services/store'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'LoginView',

    setup() {
        const store = useAuthStore()
        const router = useRouter()

        const form = ref<IAuthParams>({
            email: '',
            password: ''
        })  

        let isLoadingLogin = ref<boolean>(false)
        let hasError = ref<boolean>(false)
        
        async function handleLoginForm() {
            hasError.value = false
            isLoadingLogin.value = true

            if (!form.value.email || !form.value.password) return

            try {
                const { data } = await login(form.value)

                if (data.access) {
                    store.setEmployee(data.employee)
                    store.setToken(data.access)
                    store.setSchool(data.employee.school.uuid)
                    store.setStudyClasses(data.study_classes)
                    
                    router.push({ name: 'home' })
                }
            } catch (error: any) {
                if (error.status === 403) {
                    hasError.value = true
                }  
            } finally {
                isLoadingLogin.value = false
            }
        }

        return {
            isLoadingLogin,
            hasError,
            form,
            handleLoginForm,
        }
    }
})
</script>

<style scoped lang="scss">
.login {
    position: relative;

    &__form {
        position: relative;
        width: 400px;
        padding: 30px;

        background-color: var(--color-bg-block);
        border-radius: 30px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: .1);

        &-title {
            margin-bottom: 40px;

            h1 {
                font-family: 'RobotoBold';
                color: var(--color-text-main);
                letter-spacing: 1px;
                font-size: 28px;
            }
        }

        &-inputs {
            width: 350px;
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            margin-bottom: 40px;
        }

        &-input {
            width: 100%;
            display: flex;
            flex-direction: column;

            label {
                font-family: 'Roboto';
                font-size: 14px;
                margin-bottom: 6px;
            }

            input {
                padding: 15px;
                width: 100%;
                border: 1px solid var(--gray-100);
                background-color: none !important;
                border-radius: 10px;
            }
        }

        &-controlers {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-button {
            width: 100%;
            margin-bottom: 8px;

            button {
                width: 100%;
                border: none;
                background-color: var(--color-main-dark);
                padding: 16px 10px;
                border-radius: 12px;
                font-family: 'Roboto';
                font-size: 16px;
                color: var(--color-white);
                transition: .3s;
                cursor: pointer;

                &:hover {
                    color: var(--color-main);
                }
            }
        }

        &-forgot-password { 
            color: var(--color-text-main);
            font-family: 'Roboto';
            font-size: 14px;
            transition: .3s;

            &:hover {
                text-decoration: underline;
            }
        }

        &-checkbox {
            display: flex;
            align-items: center;

            input {
                margin-right: 4px;
            }

            label {
                font-family: 'Roboto';
                font-size: 14px;
            }
        }
    }
}
</style>