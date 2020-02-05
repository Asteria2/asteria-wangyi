
import { categoryListData } from '../../api';

import {
  GET_CATEGORIES
} from '../mutation-types';

const state = {
  categoryList: [],
  currentIndex: 0
};
const mutations = {
  [GET_CATEGORIES](state, categoryList) {
    state.categoryList = categoryList;
  }
};
const actions = {
  async getCategoryList({ commit }) {
    const result = await categoryListData();
    if (result.code === 0) {
      commit(GET_CATEGORIES, result.data);
    } else {
      console.log("请求失败")
    }
  }
};
const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
