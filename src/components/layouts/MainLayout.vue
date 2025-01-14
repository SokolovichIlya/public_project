<template>
    <div class="layout layout--main wrapper">
        <TheHeader />
        <main class="wrapper__content">
            <slot />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheHeader from '../app/TheHeader.vue'

export default defineComponent({
    name: 'MainLayout',

    components: {
        TheHeader,
    },
})
</script>

<style lang="scss">
.layout {
    position: relative;
    width: 100%;

    &--main {
        display: flex;
        flex-direction: column;
    }
}
</style>

<style lang="scss">
.wrapper {
    position: relative;

    &__content {
        padding: 20px;
        width: 1140px;
        margin: 0 auto;
    }
}
</style>