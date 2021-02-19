import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './components/pages/Home'
import Favorite from './components/pages/Favorite'
import Register from './components/pages/Registration'
import Login from './components/pages/Login'
import DashBoard from './components/pages/UsersDashBoard'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    // ホーム
    { name: 'home', path: '/', component: Home },
    // Publicのお気に入りリスト
    { name: 'favorite', path: '/favorite', component: Favorite },

    // 認証関連
    { name: 'auth.register', path: '/auth/register', component: Register },
    { name: 'auth.login', path: '/auth/login', component: Login },

    //認証後User関連
    { name: 'user.myPage', path: '/user/my-page', component: DashBoard },

  ]
})