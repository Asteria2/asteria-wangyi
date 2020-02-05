<template>
  <section>
    <div class="classify" v-for="(category, index) in categoryList" :key="index">
      <img :src="category.titlePicUrl" alt="标题图片">
      <div class="wrapper">
        <ul class="list">
          <li v-for="(item ,index) in category.itemList" :key="index" class="good">
            <img :src="item.listPicUrl" alt="商品图片">
            <div class="info">
              <span class="name">{{item.name}}</span>
              <span class="price">￥{{item.counterPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import BSroll from 'better-scroll';
  import {mapState} from 'vuex';
  export default {
    computed: {
    ...mapState({
        categoryList: state => state.home.categoryList
      })
    },
    // mounted () {
    //   this.$nextTick(() => {
    //     this._setUlWidth();
    //     this._initScroll();
    //   })
    // },
    // methods: {
    //   _setUlWidth () {
    //     const uls = document.querySelectorAll('.list');
    //     let ulWidth;
    //     console.log(uls)
    //     Array.from(uls).forEach((ul, index) => {
    //       const lis = ul.querySelectorAll('li');
    //       console.log(lis)
    //       Array.from(lis).forEach((li, index) => {
    //         const width = li.clientWidth * lis.length + 20 * (lis.length - 1);
    //         console.log(`${width}width`)
    //         console.log(`${li.clientWidth}clientWidth`)
    //         ulWidth = width;
    //         console.log(`${ulWidth}ulWidth`)
    //       })
    //       ul.style.width = ulWidth + 'px';
    //     });
    //   },
    //   _initScroll () {
    //     const classifyList = document.querySelectorAll('.wrapper');
    //     Array.from(classifyList).forEach((classify, index) => {
    //       new BSroll(classify, {
    //         click: true,
    //         scrollX: true
    //       })
    //     })
    //   }
    // }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl";
  .classify img
      width 100%
      height 370px
      margin-bottom 30px
    .wrapper
      width 100%
      padding 0 30px 20px
      box-sizing border-box
      overflow hidden
      .list
        display flex
        flex-wrap nowrap
        .good
          margin-right 20px
          img
            width 200px
            height 200px
            margin-bottom 10px
            background-color #F4F4F4
          .info
            font-size 24px
            .name 
              display block
              width 200px
            .price
              color $red
</style>
