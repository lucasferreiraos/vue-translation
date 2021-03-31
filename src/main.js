import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import i18n from './i18n'

const lang = localStorage.getItem('lang') || 'pt-br'
axios.defaults.headers['Accept-Language'] = lang

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
