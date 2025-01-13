<template>
    <div class="block">
        <div class="block__head">
            <slot name="head" />
        </div>
        <div class="block__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlockPage',
}
</script>

<style lang="scss" scoped>
.block {
    height: fit-content;

    &__head {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        margin-bottom: 20px;

        &:empty {
            display: none;
        }
    }

    &__content {
        width: 100%;
    }
}
</style>