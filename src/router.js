import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Favorite from './components/pages/Favorite'
import Register from './components/pages/Registration'
import Login from './components/pages/Login'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    // ホーム
    { name: 'home', path: '/', component: Home },
    // お気に入りリスト
    { name: 'favorite', path: '/favorite', component: Favorite },

    // 認証関連
    { name: 'auth.register', path: '/auth/register', component: Register },
    { name: 'auth.login', path: '/auth/login', component: Login },

  ]
})