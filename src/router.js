import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Favorite from "./components/pages/Favorite";

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    // ホーム
    { name: 'home', path: '/', component: Home },
    // お気に入りリスト
    { name: 'favorite', path: '/favorite', component: Favorite },

  ]
})