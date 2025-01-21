<template>
    <header class="header">
        <div class="header__wrapper wrapper__content">
            <div class="header__logo">
                <img src="@/assets/logo.png" alt="">
                <h1>cholomatic</h1>
            </div>
            <nav class="header__nav">
                <router-link :to="{ name: 'documents' }" exact active-class="header__link--active" class="header__link">
                    <font-awesome-icon icon="home" />
                </router-link>
                <router-link :to="{ name: 'roster' }" exact active-class="header__link--active" class="header__link">
                    <font-awesome-icon icon="table" />
                </router-link>
                <router-link :to="{ name: 'user' }" exact active-class="header__link--active" class="header__link">
                    <font-awesome-icon icon="user" />
                </router-link>
                <a @click.prevent="handleLogout" class="header__link">
                    <font-awesome-icon icon="door-open" />
                </a>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useAuthStore } from '@/modules/auth/services/store'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'TheHeader',

    setup() {
        const authStore = useAuthStore()
        const router = useRouter()

        const handleLogout = () => {
            authStore.logoutSystem()

            router.push({ name: 'login' })
        }

        return {
            handleLogout
        }
    }
})
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100px;

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__logo {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        margin-right: auto;

        h1 {
            margin-left: 1px;
            font-family: 'RobotoMedium';
            letter-spacing: 2px;
            color: var(--color-main-dark);
        }

        img {
            height: 50px;
        }
    }

    &__nav {
        display: flex;
        column-gap: 20px;
        height: 50px;

        background-color: var(--color-bg-block);
        border-radius: 25px;
    }

    &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        font-size: 18px;
        color: var(--color-main-dark);
        cursor: pointer;
        transition: .3s;

        &:hover {
            background-color: var(--color-main);
        }

        &--active {
            user-select: none;
            pointer-events: none;
            background-color: var(--color-main-dark);
            color: var(--color-main);
        }
    }
}
</style>