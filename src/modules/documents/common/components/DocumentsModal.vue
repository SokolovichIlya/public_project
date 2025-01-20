<template>
    <el-dialog
        v-model="isShowModalDocument"
        :title="getDocumentModalTitle"
        :show-close="false"
        width="600px"
    >
        <p class="text text--gray text--xs" style="margin-bottom: 10px;">Заполните все обязательные поля, отмеченные *</p>
        <Category v-if="typeDocument === 'category'" />
        <KPK v-if="typeDocument === 'kpk'" />
        <Publication v-if="typeDocument === 'publication'" />
        <Student v-if="typeDocument === 'student'" />
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Category from './documents/Category.vue'
import KPK from './documents/KPK.vue'
import Publication from './documents/Publication.vue'
import Student from './documents/Student.vue'

export default defineComponent({
    name: 'DocumentsModal',

    components: {
        Category,
        KPK,
        Publication,
        Student,
    },

    props: {
        typeDocument: {
            type: String,
            required: true,
        },
    },

    data: () => ({
        isShowModalDocument: false,

        documentsTitles: {
            'category': 'Категория',
            'publication': 'Публикация',
            'kpk': 'Курс повышения квалификации',
            'student': 'Ученик',
        },
    }),

    computed: {
        getDocumentModalTitle() : string {
            return this.documentsTitles[this.typeDocument as keyof typeof this.documentsTitles]
        },
    },

    methods: {
        open() {
            this.isShowModalDocument = true
        },

        close() {
            this.isShowModalDocument = false
        },
    },
})
</script>