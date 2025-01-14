<template>
    <div class="card card--medium">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CardComponent',
})
</script>

<style lang="scss" scoped>
.card {
    padding: 20px;
    margin-bottom: 20px;
    background-color: var(--color-bg-block);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    border-radius: 20px;

    &:hover {
        transform: scale(1.02);
    }

    &--small {
        width: 100px;
        min-height: 100px;
    }

    &--medium {
        width: 200px;
        min-height: 200px;
    }

    &--large {
        width: 300px;
        min-height: 300px;
    }
}
</style>