<template>
    <div class="layout layout--main">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MainLayout',
})
</script>

<style lang="scss" scoped>
.layout {
    position: relative;
    width: 100%;
    height: 100%;

    &--main {
        display: flex;
        flex-direction: column;
    }
}
</style>