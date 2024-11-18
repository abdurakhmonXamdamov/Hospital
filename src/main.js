import { createApp } from 'vue'
import App from '@/App.vue'
import store  from '/src/store/storeRoom.js';
import router from '@/router'
import notIf from '@/components/layout/notIf.vue'
import headerPart from './components/layout/headerPart.vue'
import defaultInput from './components/layout/defaultInput.vue'
import selectList from './components/layout/selectList.vue'
import modalDialog from './components/dashboard/modalDialog.vue';
import confirmDialog from './components/dashboard/confirmDialog.vue';
import phoneInput from './components/layout/phoneInput.vue';

import VueCookies from 'vue-cookies'


//! tailwind css 
import '@/assets/main.css'

const app = createApp(App)
app.component('notIf', notIf) 
app.component('headerPart', headerPart)
app.component('el-input', defaultInput)
app.component('el-select', selectList)
app.component('el-dialog', modalDialog)
app.component('el-confirm', confirmDialog)
app.component('el-phone', phoneInput)
app.use(router)
app.use(VueCookies, { expires: '3d' })
app.use(store)
app.mount('#app')



