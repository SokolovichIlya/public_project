<template>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useAuthStore } from '@/modules/auth/services/store'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'LoadingView',

    setup() {
        const store = useAuthStore()
        const router = useRouter()

        if (store.employee) {
            router.push({ name: 'documents', params: { employeeUuid: store.employee.uuid } })
        }
    }
})
</script>