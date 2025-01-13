import type { DefineComponent } from 'vue'

import MainLayout from './layouts/MainLayout.vue'
import EmptyLayout from './layouts/EmptyLayout.vue'
import BlockPage from './pages/BlockPage.vue'
import PageWrapper from './pages/PageWrapper.vue'
import ContentComponent from '@/components/markup/ContentComponent.vue'
import FlexComponent from '@/components/markup/FlexComponent.vue'

export default {
    MainLayout,
    EmptyLayout,
    BlockPage,
    PageWrapper,
    ContentComponent,
    FlexComponent,
} as unknown as { [key: string]: DefineComponent }