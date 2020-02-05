<template>
  <section class="channel">
    <ul class="list">
      <li class="item" v-for="(item, index) in channelList" :key="index">
        <img :src="item.picUrl" alt="导航列表">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name:"Channel",
    computed: {
      ...mapState({
        channelList: state => state.home.channelList
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .channel
    padding-bottom 30px
    background-color #fff
    .list
      clearFix()
      text-align center
      .item
        float left
        width 110px
        height 156px
        margin 10px 20px 9px
        img
          width 110px
          height 110px
          margin-bottom 10px
        span
          font-size 24px
          width 110px
          height 36px
          margin-top 10px

</style>
