import { createApp, computed } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as echarts from 'echarts'
import * as d3 from "d3"
import pinia from './store/store'
import 'normalize.css'
import '@/assets/css/index.less'
import DataVVue3 from '@kjgl77/datav-vue3'
import './styles/element-ui-reset.scss' //自定义的elementUI样式

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import hljsVuePlugin from '@highlightjs/vue-plugin'


const app = createApp(App).use(router)
app.use(router)
app.use(pinia)
app.use(DataVVue3)
// 引入代码高亮，并进行全局注册
app.use(hljsVuePlugin)

app.config.globalProperties.$echarts = echarts // 全局挂载echarts
app.config.globalProperties.$d3 = d3
app.mount('#app')


for (const [key, component] of Object.entries(ElementPlusIconsVue)) { // elementPlus Icon
    app.component(key, component)
}
