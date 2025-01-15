<template>
    <div class="block">
        <div class="block__header block__block">
            <div>
                <h3 v-if="title" class="block__title">{{ title }}</h3>
                <p v-if="description" class="block__description">{{ description }}</p>
            </div>
            <slot name="header-button" />
        </div>
        <div class="block__body block__block">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BlockComponent',

    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
})
</script>

<style lang="scss" scoped>
.block {
    width: 100%;
    border-radius: 20px;
    background-color: var(--color-bg-block);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &__block {
        padding: 20px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--gray-100);
    }

    &__title {
        font-family: 'RobotoMedium';
        color: var(--color-text-main);
        margin-bottom: 4px;
    }

    &__description {
        font-family: 'Roboto';
        line-height: 1.2;
        width: 60%;
        font-size: 14px;
        color: var(--color-text-second);
    }
}
</style>