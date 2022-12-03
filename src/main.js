import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router/index'

import { registerScrollSpy } from 'vue3-scroll-spy'
const app = createApp(App).use(router)
registerScrollSpy(app)

app.mount('#app')
