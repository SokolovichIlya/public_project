import { createApp, type DefineComponent } from 'vue'
import App from './App.vue'

import router from './services/router'
import './modules/router'

import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faHome, 
    faTable,
    faFile,
    faUser,
    faDoorOpen,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import globalComponents from './components/global'

library.add(faHome, faTable, faFile, faUser, faDoorOpen)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)


for (const key in globalComponents) {
    const component = globalComponents[key] as DefineComponent
    app.component(key, component)
}

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
