<template>
  <div class="header">
    <div class="up">
      <div class="logo">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="logo">
      </div>
      <div class="search" @click="$router.push('/search')">
        <i class="icomoon icon-suosou"></i>
        <span class="placeholder">搜索商品，共19160款好物</span>
      </div>
      <button class="login" @click="$router.push('/profile')">登录</button>
    </div>
    <div class="down">
      <div class="hide" v-if="isOpen" ref="channelList">
        <ul class="left">
          <li class="active"><a href="javascript:;">推荐</a></li>
          <li v-for="(item,index) in channelList" :key="index"><a href="javascript:;">{{item.text}}</a></li>
        </ul>
        <div class="right">
          <i class="icomoon icon-zhankai icon" @click="showChannel"></i>
        </div>
      </div>
      <div class="show" v-if="!isOpen">
        <div class="wrapper">
          <div class="top">
            <span>全部频道</span>
            <i class="icon icomoon icon-shouqi" @click="showChannel"></i>
          </div>
          <ul class="list">
            <li class="active on">
              <a href="javascript:;">推荐</a>
            </li>
            <li v-for="(item,index) in channelList" :key="index">
              <a href="javascript:;">{{item.text}}</a>
            </li>
          </ul>
        </div>
        <div class="mask"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapState} from 'vuex'
export default {
  name:'Header',
  data(){
    return {
      isOpen:true
    }
  },
  computed:{
    ...mapState({
      channelList:state=>state.home.channelList
    })
  },
  methods:{
    showChannel(){
      this.isOpen=!this.isOpen
    }
  },
  mounted(){
    this.$store.dispatch("getChannelList");
    this.$nextTick(() => {
      new BScroll(this.$refs.channelList, {
        click: true,
        scrollX: true
      });
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
    position fixed
    left 0
    top 0
    height 150px
    width 100%
    background-color #fff
    z-index 100
    .up
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 25px
      box-sizing border-box
      .logo
        flex 2
        height 40px
        background-repeat no-repeat
        background-size 138px 40px
        background-position center
        margin-right 10px
      .search
        flex 7
        height 56px
        border-radius 10px
        border none
        background-color rgba(0,0,0,.1)
        text-align center
        line-height 56px
        i
          font-size 30px
        .placeholder
          font-size 30px
          color #666
      .login
        flex 1
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline none
        color $red
        border 1px solid $red
        background-color #fff
    .down
      color #000
      .hide
        position relative
        width 100%
        height 60px
        overflow hidden
        .left
          width 100%
          font-size 30px
          height 60px
          li
            float left
            height 50px
            line-height 50px
            margin 5px 20px
            padding 0 10px
            text-align center
            a
              color #666
            &.active
              border-bottom 4px solid $red
              a
                color $red
        .right
          position absolute
          right 0
          top 0
          width 100px
          height 60px
          font-size 30px
          text-align center
          line-height 60px
          background-color #fff
          .icon
            font-size 60px
      .show
        position relative
        width 750px
        height 1334px
        .wrapper 
          position absolute
          left 0
          top 0
          width 100%
          z-index 10
          background-color #fff
          .top
            display flex
            justify-content space-between
            font-size 30px
            height 60px
            line-height 60px
            margin 0 0 20px
            text-align center
            span
              margin-left 30px
            .icon
              width 100px
              height 60px
              font-size 60px
          .list
            clearFix()
            width 100%
            font-size 24px
            text-align center
            box-sizing border-box
            li
              float left
              width 150px
              height 56px
              text-align center
              line-height 56px
              border-radius 5px
              margin 0 0 40px 30px
              background-color #FAFAFA
              box-sizing border-box
              &.on
                border 1px solid $red
                a
                  color $red
        .mask
          position absolute
          top 0
          right 0
          bottom 0
          left 0
          background-color rgba(0, 0, 0, .5)
          z-index 8
</style>