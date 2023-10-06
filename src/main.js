import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).component('EasyDataTable', Vue3EasyDataTable).use(vuetify).use(router).mount('#app')
