<template>
    <div :style="computedStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, type CSSProperties } from 'vue'

export default defineComponent({
	name: 'FlexComponent',

    props: {
        direction: {
            type: String,
            default: 'row',
        },

        wrap: {
            type: String,
            default: null,
        },

        gap: {
            type: [Number, String],
            default: null,
        },

        alignContent: {
            type: String,
            default: null,
        },

        alignItems: {
            type: String,
            default: null,
        },

        justifyContent: {
            type: String,
            default: null,
        },

        alignSelf: {
            type: String,
            default: null,
        },
    },

    computed: { 
        computedStyle() : CSSProperties {
            const styles = {
                display: 'flex',
                flexDirection: this.direction,
                flexWrap: this.wrap,
                gap: this.gap ? `${this.gap}px` : undefined,
                alignContent: this.alignContent,
                alignItems: this.alignItems,
                justifyContent: this.justifyContent,
                alignSelf: this.alignSelf,
            }

            return Object.fromEntries(
                Object.entries(styles).filter((value) => value !== null)
            )
        },
    },
})
</script>