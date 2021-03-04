
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "@/plugins/axios";

import 'lib-flexible/flexible'

import components from '@/components' // icon


import './mock/mock'

import eventBus from './utils/eventBus'

const app = createApp(App);
app.use(store).use(router).mount('#app');
app.use(axios)
app.use(components)
app.use(eventBus)
