<template>
    <div class="content">
        <FlexComponent align-items="center" justify-content="space-between" class="content__header">
            <h2 class="content__title">{{ title }}</h2>

            <div class="content__links">
                <slot name="links"></slot>
            </div>
        </FlexComponent>
        <div class="content__body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ContentComponent',

    props: {
        title: {
            type: String,
            required: true,
        },
    },
})
</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;

    &__header {
        width: 100%;
        padding: 30px 12px;
    }

    &__title {
        font-size: 18px;
        font-family: 'RobotoMedium';
        letter-spacing: .5px;
        color: var(--color-text-main);
    }

    &__body {
        padding: 12px;
    }
}
</style>