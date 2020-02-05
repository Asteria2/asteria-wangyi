import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations'

import home from './modules/home'
import category from './modules/category'
import worth from './modules/worth'
import search from './modules/search'
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  modules: {
    home,
    category,
    search,
    worth
  }
})