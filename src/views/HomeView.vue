<template>
    <MainLayout>
        <div class="page">
            <h3 class="title">Главная</h3>
            <CardsWrapper>
                <CardComponent>
                    <div class="card__icon">
                        <font-awesome-icon icon="file" />
                    </div>
                    <h3 class="card__title">Категория</h3>
                    <p class="card__description">Создать документ о присвоенной категории</p>
                </CardComponent>
                <CardComponent>
                    <div class="card__icon">
                        <font-awesome-icon icon="file" />
                    </div>
                    <h3 class="card__title">КПК</h3>
                    <p class="card__description">Создать документ о курсах повышения квалификации</p>
                </CardComponent>
                <CardComponent>
                    <div class="card__icon">
                        <font-awesome-icon icon="file" />
                    </div>
                    <h3 class="card__title">Публикация</h3>
                    <p class="card__description">Создать документ о публикации</p>
                </CardComponent>
                <CardComponent>
                    <div class="card__icon">
                        <font-awesome-icon icon="file" />
                    </div>
                    <h3 class="card__title">Профильная смена</h3>
                    <p class="card__description">Создать документ о профильной смене</p>
                </CardComponent>
            </CardsWrapper>
        </div>
    </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomeView',
})
</script>
