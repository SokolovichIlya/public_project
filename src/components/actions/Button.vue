<template>
    <button :class="`button--${type} button--${size}`" class="button"><slot /></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ButtonComponent',

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'medium'
        },
    },
})
</script>

<style lang="scss" scoped>
.button {
    font-family: 'RobotoMedium';
    letter-spacing: .2px;

    border: none;
    cursor: pointer;
    border-radius: 20px;
    transition: .3s;

    &--primary {
        background-color: var(--color-main);
        color: var(--color-main-dark);

        &:hover {
            background-color: var(--color-primary-dark);
        }
    }

    &--secondary {
        background-color: var(--color-main-dark);
        color: var(--color-white);

        &:hover {
            color: var(--color-main);
        }
    }

    &--small {
        padding: 12px 16px;
        font-size: 12px;
    }

    &--medium {
        padding: 14px 28px;
        font-size: 14px;
    }

    &--large {
        padding: 14px 28px;
        font-size: 18px;
    }
}
</style>