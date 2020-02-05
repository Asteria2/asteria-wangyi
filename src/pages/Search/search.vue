<template>
  <div class="search">
    <div class="search-top">
      <i class="icon icomoon icon-suosou"></i>
      <input type="text" placeholder="n95口罩" />
      <button class="btn" @click="$router.back()">取消</button>
    </div>
    <div class="search-bottom">
      <h3 class="title">热门搜索</h3>
      <ul class="list">
        <li class="item" v-for="(item, index) in list" :key="index">
          <a href="javascript:;">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name:'Search',
  computed:{
    ...mapState({
      list:state=>state.search.list
    })
  },
  mounted(){
    this.$store.dispatch('getSearchData');
  }
}
</script>

<style lang="stylus" scoped>
.search
  width 750px
  height 1334px
  background-color #eee
  .search-top
    background-color #fff
    display flex
    justify-content space-around
    align-items center
    width 100%
    height 88px
    font-size 30px
    padding 0 30px
    box-sizing border-box
    .icon
      position absolute
      top 25px
      left 50px
      font-size 40px
    input 
      flex 7
      height 56px
      border-radius 10px
      border none
      background-color rgba(0,0,0,.1)
      text-align center
      line-height 56px
    .btn 
      flex 1
      height 40px
      margin-left 10px
      font-size 30px
      border none
      outline none
      background-color #fff
  .search-bottom
    clearFix()
    background-color #fff
    padding 0 30px 30px
    .title
      width 690px
      height 90px
      font-size 28px
      color #999
      line-height 90px
    .list
      height 220px 
      .item
        float left
        height 48px
        line-height 48px
        border 1px solid #999
        margin 0 32px 32px 0
        a
          font-size 24px
          color #333
          padding 0 15px
</style>