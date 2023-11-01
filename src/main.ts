import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import pinia from './store/store'
// import { useScreenAdaptation } from './hook/useScreenAdaptation'
// useScreenAdaptation()
const app = createApp(App).use(router)
app.use(router)
app.use(pinia)
app.config.globalProperties.$echarts = echarts // 全局挂载echarts
app.mount('#app')

