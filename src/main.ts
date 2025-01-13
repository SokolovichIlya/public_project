import { createApp, type DefineComponent } from 'vue'
import App from './App.vue'

import router from './services/router'
import './modules/router'

import { createPinia } from 'pinia'

import globalComponents from './components/global'


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)


for (const key in globalComponents) {
    const component = globalComponents[key] as DefineComponent
    app.component(key, component)
}

app.mount('#app')
