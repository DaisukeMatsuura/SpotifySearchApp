import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://accounts.spotify.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
  render: h => h(App),
}).$mount('#app')
