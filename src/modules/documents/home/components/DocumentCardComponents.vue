<template>
    <CardLinkComponent :size="size" class="document-card">
        <div class="document-card__icon">
            <font-awesome-icon :icon="icon" />
        </div>
        <h3 class="document-card__title">{{ title }}</h3>
        <p class="document-card__description">{{ description }}</p>
    </CardLinkComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DocumentCardComponents',

    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: 'medium'
        },
    },
})
</script>

<style lang="scss" scoped>
.document-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__icon {
        width: 48px;
        height: 48px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-main-dark);
        color: var(--color-white);
        border-radius: 50%;
    }

    &__title {
        font-family: 'RobotoBold';
        font-size: 16px;
        color: var(--color-text-main);
        margin-bottom: 12px;
    }

    &__description {
        font-family: 'Roboto';
        font-size: 14px;
        color: var(--color-text-second);
        margin-bottom: 16px;
        text-align: center;
    }
}
</style>