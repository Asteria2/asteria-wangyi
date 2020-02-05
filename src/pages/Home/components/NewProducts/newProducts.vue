<template>
  <section class="products">
    <div class="header">
      <div class="top">
        <span>新品首发</span>
      </div>
      <span class="bottom">更多</span>
    </div>
    <ul class="list">
      <li v-for="(item, index) in getNewItem" :key="index">
        <img :src="item.listPicUrl" alt="新品首发">
        <div class="good">
          <span class="name">{{item.name}}</span>
          <span class="price">￥{{item.counterPrice}}</span>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    computed: {
      ...mapState({
        newItem: state => state.home.newItem
      }),
      getNewItem () {
        return [...this.newItem].splice(0, 6);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .products
    padding-bottom 30px
    .header
      display flex
      justify-content space-between
      height 100px
      font-size 30px
      line-height 100px
      padding 0 30px
      .top
        display flex
      .bottom
        i
          width 30px
          height 30px
          font-size 30px
    .list
      clearFix()
      padding 0 10px 0 30px
      li
        float left
        width 216px
        height 300px
        margin-right 20px
        padding-bottom 30px
        img
          width 216px
          height 216px
          background-color #f5f5f5
        .good
          height 72px
          line-height 35px
          margin-top 10px
          font-size 24px
          .name 
            display inline-block
          .price
            color $red
</style>
