import Vue from 'vue';
import Vuex from 'vuex';
import Page from './modules/page';
import Music from './modules/search-music';
import User from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Page,
    Music,
    User,
  }
});