import type { DefineComponent } from 'vue'

import MainLayout from './layouts/MainLayout.vue'
import EmptyLayout from './layouts/EmptyLayout.vue'
import BlockPage from './pages/BlockPage.vue'
import PageWrapper from './pages/PageWrapper.vue'
import ContentComponent from '@/components/markup/ContentComponent.vue'
import FlexComponent from '@/components/markup/FlexComponent.vue'
import BlockComponent from './markup/BlockComponent.vue'

import Button from './actions/Button.vue'
import IconButton from './actions/IconButton.vue'

import CardsWrapper from './cards/CardsWrapper.vue'
import CardComponent from './cards/CardComponent.vue'
import CardLinkComponent from './cards/CardLinkComponent.vue'

export default {
    MainLayout,
    EmptyLayout,
    BlockPage,
    PageWrapper,
    ContentComponent,
    FlexComponent,
    BlockComponent,

    Button,
    IconButton,

    CardsWrapper,
    CardComponent,
    CardLinkComponent,
} as unknown as { [key: string]: DefineComponent }