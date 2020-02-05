<template>
  <section class="recommend">
    <div class="header">
      <span>人气推荐</span>
      <span>更多</span>
    </div>
    <div class="content">
      <div class="top">
        <img :src="popularItem[0].listPicUrl" alt="好物推荐">
        <div class="info">
          <span v-if="isShow">APP特惠</span>
          <p class="name">{{popularItem[0].name}}</p>
          <p class="detail">{{popularItem[0].simpleDesc}}</p>
          <p class="price">￥{{popularItem[0].counterPrice}}</p>
        </div>
      </div>
      <ul class="bottom">
        <li v-for="(item, index) in getPopularItem" :key="index">
          <img :src="item.listPicUrl" alt="商品图">
          <div class="pro">
            <span class="name">{{item.name}}</span>
            <span class="price">￥{{item.counterPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    data () {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapState({
        popularItem: state => state.home.popularItem
      }),
      getPopularItem () {
        return [...this.popularItem].splice(1, 4);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .recommend
    .header
      display flex
      justify-content space-between
      align-items center
      font-size 30px
      height 100px
      padding 0 30px
      i
        font-size 30px
    .content
      .top
        display flex
        justify-content space-around
        margin 0 30px 20px
        img
          width 280px
          height 280px
        .info
          width 350px
          span
            display inline-block
            margin-top 40px
            font-size 20px
            padding 5px
            text-align center
            color $red
            border 1px solid $red
            background-color #fff
          p
            margin-top 20px
            font-size 30px
            &:nth-of-type(2)
              font-size 24px
              color #666
            &:nth-of-type(3)
              color $red
      .bottom
        clearFix()
        padding-left 10px
        li
          float left
          width 216px
          height 354px
          font-size 24px
          margin-left 20px
          padding-bottom 20px
          img
            width 216px
            height 216px
            background-color #F5F5F5
          .pro
            height 105px
            line-height 35px
            margin-top 10px
            .name 
              display inline-block
              height 70px
            .price
              color $red
</style>
