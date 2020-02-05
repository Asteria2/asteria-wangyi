<template>
  <div class="selectHeader">
    <header class="header" slot="headerSlot">
      <span class="home icomoon icon-shouye" @click="$router.replace('/home')"></span>
      <slot name="headerTitle" class="header-title"></slot>
      <div class="icon">
        <span class="icomoon icon-suosou" @click="$router.push('/search')"></span>
        <span class="icomoon icon-tubiaolunkuo" @click="$router.push('/shopCart')"></span>
      </div>
    </header>
    <div class="reco-nav" v-if="$route.path.indexOf('worth') !== -1">
      <ul class="ul-node">
        <li  :class="{active: tabIndex * 1 === index}" v-for="(tab, index) in recommendTabs" :key="tab.tabId">
          <router-link :to="{path: '/recommend/find', query: {tabIndex: index}}">{{tab.tabName}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'selectHeader'
}
</script>

<style lang="stylus" scoped> 
@import "../../common/stylus/mixins.styl";
    .selectHeader
      position relative
      z-index 100
      width 100%
      .header
        display flex
        justify-content space-between
        align-items center
        height 100px
        padding 0 13px 0 12px
        background-color #fafafa
        border-bottom 1px solid #999
        .home
          width 50px
          height 50px
          font-size 46px
        .header-title
          display flex
          justify-content space-between
          align-items center
          width 200px
          height 100px
          span 
            font-size 30px
            color #999
        .icon
          display flex
          span
            font-size 46px
            width 50px
            height 50px
            &:nth-of-type(1)
              margin-right 20px
</style>