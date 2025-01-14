<template>
    <div class="cards-wrapper">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CardsWrapper',
})
</script>

<style lang="scss" scoped>
.cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>