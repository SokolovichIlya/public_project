<template>
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useAuthStore } from '@/modules/auth/services/store'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
    name: 'LoadingView',

    setup() {
        const store = useAuthStore()
        const router = useRouter()
        const route = useRoute()

        if (store.employee && (route.name === 'home' || route.name === 'loading.set.data')) {
            router.push({ name: 'documents', params: { employeeUuid: store.employee.uuid } })
        }
    }
})
</script>