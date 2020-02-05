import Vue from 'vue'
import App from './App.vue'
import './mock/index'
import router from './router/index'
import store from './store/index'

import './common/stylus/style.styl'
import './common/stylus/reset.styl'

import Footer from './components/Footer/footer.vue'
import Header from './components/Header/header.vue'
import SelectHeader from './components/SelectHeader/selectHeader.vue'
import Split from './components/Split/split.vue'
Vue.component('Footer', Footer)
Vue.component('Header', Header)
Vue.component('SelectHeader', SelectHeader)
Vue.component('Split', Split)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
