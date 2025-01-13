<template>
    <div class="layout layout--empty">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EmptyLayout',
})
</script>

<style lang="scss" scoped>
.layout {
    position: relative;
    width: 100%;
    height: 100%;

    &--empty {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>