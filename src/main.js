import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'destyle.css'
import Pagination from 'vuejs-paginate'
import store from './components/store'
import router from "./router"

Vue.component('Pagination', Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
