import { createApp } from 'vue'
import App  from './App.vue'
import router from './routes/index'
import store from './store/index'

import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE
if(localStorage.getItem("API_TOKEN") !== undefined) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("API_TOKEN")
}
createApp(App).use(router).use(store).mount('#app')
