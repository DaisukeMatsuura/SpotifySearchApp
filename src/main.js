import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/tailwind.css'
import 'destyle.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://accounts.spotify.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Accept-Language'] = 'ja;q=1'

new Vue({
  render: h => h(App),
}).$mount('#app')
