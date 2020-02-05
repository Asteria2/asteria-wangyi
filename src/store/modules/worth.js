import { SWIPER_LIST, WATER_FALL } from '../mutation-types';
import { worthData } from '../../api/index'
const state = {
  swiperList: [],
  waterFall: []
}
const mutations = {
  [SWIPER_LIST](state, data) {
    state.swiperList = data
  },
  [WATER_FALL](state, data) {
    state.waterFall = data
  }
}
const actions = {
  async getWorthData({ commit }) {
    const result = await worthData();
    if (result.code === 0) {
      let data = [];
      let swiperData = result.data.swiperList;
      swiperData.forEach(element => {
        element.forEach((item) => {
          data.push(item)
        })
      });
      commit(SWIPER_LIST, swiperData)
      commit(WATER_FALL, result.data.waterfall)
    }
  }
}
export default {
  state,
  actions,
  mutations
}