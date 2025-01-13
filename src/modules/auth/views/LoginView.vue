<template>
    <EmptyLayout>
        <FlexComponent align-items="center" justify-content="center" style="height: 100%">
            <div class="login">
                <form @submit.prevent="handleLoginForm" class="login__form">
                    <div class="login__form-title">
                        <h1>SCHOLOMATIC</h1>
                        <h3>documents</h3>
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
                    </div>
                    <div class="login__form-button">
                        
                    </div>
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
        
        async function handleLoginForm() {
            isLoadingLogin.value = true

            if (!form.value.email || !form.value.password) return

            try {
                const { data } = await login(form.value)

                if (data.access) {
                    store.setUser(data.user)
                    store.setToken(data.access)
                    store.setSchool(data.employee.school.uuid)
                    
                    router.push('/')
                }
            } catch (error) {
                console.error(error)
            } finally {
                isLoadingLogin.value = false
            }
        }

        return {
            isLoadingLogin,
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
        height: 400px;
        width: 400px;
        padding: 30px;

        background-color: var(--color-bg-block);
        border-radius: 30px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &-title {
            margin-bottom: 30px;

            h1 {
                font-family: 'HelveticaBold';
                color: var(--color-text-main);
                letter-spacing: 1px;
                font-size: 32px;
            }

            h3 {
                font-family: 'Roboto';
                font-style: italic;
                letter-spacing: 2px;
                color: var(--color-main-dark);
            }
        }

        &-inputs {
            width: 350px;
            display: flex;
            flex-direction: column;
            row-gap: 14px;
            margin-bottom: 60px;
        }

        &-input {
            width: 100%;
            display: flex;
            flex-direction: column;

            label {
                font-family: 'Roboto';
                font-size: 12px;
                margin-bottom: 4px;
            }

            input {
                padding: 15px;
                width: 100%;
                border: 1px solid var(--gray-100);
                background-color: none !important;
                border-radius: 4px;
            }
        }

        &-button {
            margin-bottom: 8px;

            button {
                min-width: 200px;
            }
        }

        &-forgot-password { 
            a {
                color: var(--color-text-main);
                font-family: 'Roboto';
                font-size: 14px;
                transition: .3s;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}

.logo {
    position: absolute;
    left: 0;
    width: 300px;
    height: 300px;
    background-color: var(--gray-100);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 0;

    img {
        max-height: 70%;
    }
}
</style>