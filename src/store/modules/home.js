import { homeData } from '../../api/index'
import { CHANNEL_LIST, POPULAR_ITEM, LIMIT_SALE, NEW_PRODUCTS, CATEGORY_LIST } from '../mutation-types'
const state = {
  channelList: [],
  popularItem: [],
  limitSale: [],
  newItem: [],
  categoryList: []
}
const mutations = {
  [CHANNEL_LIST](state, list) {
    state.channelList = list
  },
  [POPULAR_ITEM](state, item) {
    state.popularItem = item
  },
  [LIMIT_SALE](state, limitSale) {
    state.limitSale = limitSale
  },
  [NEW_PRODUCTS](state, newItem) {
    state.newItem = newItem
  },
  [CATEGORY_LIST](state, categoryList) {
    state.categoryList = categoryList
  }
}
const actions = {
  async getChannelList({ commit }) {
    const result = await homeData();
    if (result.code === 0) {
      commit(CHANNEL_LIST, result.data.kingKongModule.kingKongList);
      commit(POPULAR_ITEM, result.data.popularItemList);
      commit(LIMIT_SALE, result.data.flashSaleModule.itemList);
      commit(NEW_PRODUCTS, result.data.newItemList);
      commit(CATEGORY_LIST, result.data.categoryModule);
    }
  }
}
export default {
  state,
  actions,
  mutations
}