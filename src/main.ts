import { createApp, type DefineComponent } from 'vue'
import App from './App.vue'

import router from './services/router'

import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faHome, 
    faTable,
    faFile,
    faUser,
    faDoorOpen,
    faClose,
    faPen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import globalComponents from './components/global'

library.add(faHome, faTable, faFile, faUser, faDoorOpen, faClose, faPen)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)


for (const key in globalComponents) {
    const component = globalComponents[key] as DefineComponent
    app.component(key, component)
}

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)

app.mount('#app')
