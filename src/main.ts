import {createApp} from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import "~/styles/index.scss";
import "uno.css";
import App from './App.vue'
import routes from '~pages'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
