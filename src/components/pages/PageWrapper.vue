<template>
    <div class="page">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PageWrapper',
}
</script>

<style lang="scss" scoped>
.page {
    width: 100%;

    display: flex;
    flex-direction: column;

    @include mMedia(lg) {
        padding: 30px;
        row-gap: 40px;
    }

    @include mMedia(md) {
        padding: 20px;
        row-gap: 20px;
    }

    @include mMedia(onlyMobile) {
        padding: 10px;
        row-gap: 10px;
    }

    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        font-family: 'RobotoBold';
        color: var(--color-text-main);
        font-size: 30px;
    }

    &__subtitle {
        font-family: 'Roboto';
        color: var(--color-text-second);
        margin-top: 6px;
    }

    &__filters {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding: 12px;
        z-index: 1000;
    }

    &__table {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        padding: 12px;
    }
}
</style>