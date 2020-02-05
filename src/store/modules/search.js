import { SEARCH_LIST } from '../mutation-types';
import { categoryListData } from '../../api/index'
const state = {
  list: []
}
const mutations = {
  [SEARCH_LIST](state, list) {
    state.list = list
  }
}
const actions = {
  async getSearchData({ commit }) {
    const result = await categoryListData();
    if (result.code === 0) {
      commit(SEARCH_LIST, result.data)
    }
  }
}
export default {
  state,
  actions,
  mutations
}