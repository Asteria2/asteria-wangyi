<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Home from './pages/Home/home'
import Category from './pages/Category/category'
import Worth from './pages/Worth/worth'
import ShopCart from './pages/ShopCart/shopCart'
import Profile from './pages/Profile/profile'
import Search from './pages/Search/search'
export default {
  name: 'app',
  components:{
    Home,
    Category,
    Worth,
    ShopCart,
    Profile,
    Search
  }
}
</script>

<style lang='stylus' scoped>
#app
  width 100%
  height 100%
</style>
