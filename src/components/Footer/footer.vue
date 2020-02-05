<template>
  <div class="footer">
    <ul class="list">
    <li :class="{active: $route.path === '/home'}" @click="$router.push('/home')">
      <i class="icon icomoon icon-shouye "></i>
      <span class="text">首页</span>
    </li>
    <li :class="{active: $route.path === '/category' || $route.path.indexOf('/category') !== -1}" @click="$router.push('/category')">
      <i class="icon icomoon icon-yixianshi "></i>
      <span class="text">分类</span>
    </li>
    <li :class="{active: $route.path === '/worth' || $route.path.indexOf('/worth') !== -1}" @click="$router.push('/worth')">
      <i class="icon icomoon icon-gift "></i>
      <span class="text">值得买</span>
    </li>
    <li :class="{active: $route.path === '/shopCart'}" @click="$router.push('/shopCart')">
      <i class="icon icomoon icon-tubiaolunkuo "></i>
      <span class="text">购物车</span>
    </li>
    <li :class="{active: $route.path === '/profile'}" @click="$router.push('/profile')">
      <i class="icon icomoon icon-geren "></i>
      <span class="text">个人</span>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name:'Footer'
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.footer
  width 100% !important
  .list
    position fixed
    bottom 0
    left 0
    display flex
    justify-content space-around
    height 100px
    width 100% !important
    font-size 30px
    background-color #fff
    margin-top -100px
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      color #666
      &.active
        .icon:before
          color $red
        .text 
          color $red
      .icon
        font-size 40px
        position relative
        width 40px
        height 40px
        line-height 40px
        text-align center
        overflow hidden
        &:before
          color #666
      .text 
        font-size 24px
        color #666
        img
          position absolute
          left 0
          top 0
          width 40px
          height 490px
</style>