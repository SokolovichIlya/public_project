<template>
    <button :class="`button--${type} button--${size}`" class="button">
        <font-awesome-icon :icon="icon" />
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IconButtonComponent',

    props: {
        type: {
            type: String,
            default: 'primary',
        },
        size: {
            type: String,
            default: 'medium'
        },
        icon: {
            type: String,
            required: true,
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
    border-radius: 10px;
    transition: .3s;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    & ~ & {
        margin-left: 10px;
    }

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
        width: 36px;
        height: 36px;
    }

    &--medium {
        padding: 14px;
        font-size: 14px;
    }

    &--large {
        padding: 14px;
        font-size: 18px;
    }
}
</style>