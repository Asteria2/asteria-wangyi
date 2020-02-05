<template>
  <div class="home">
    <Header class="header"/>  <!--头部-->
    <div class="wrapper">
      <!--加一padding解决scroll回弹下落页面显示不完整的问题-->
      <div>
        <Swiper />  <!--轮播图部分-->
        <ul class="service">
          <li>
            <i class="icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <Channel />
        <Split />
        <New />  <!--首页福利区-->
        <Split />
        <Brand /> <!--首页品牌制造商区-->
        <Split />
        <Popular /> <!--首页热销榜单区-->
        <Split />
        <Recommend />
        <Split />
        <LimitSale />
        <Split />
        <NewProducts />
        <Split />
        <Classify />
        <Split />
        <Detail />
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import Swiper from './components/Swiper/swiper';
  import Channel from './components/Channel/channel.vue';
  import New from './components/New/new.vue';
  import Brand from './components/Brand/brand.vue';
  import Popular from './components/Popular/popular.vue';
  import Recommend from './components/Recommend/recommend.vue';
  import LimitSale from './components/LimitSale/limitSale.vue';
  import NewProducts from './components/NewProducts/newProducts.vue';
  import Classify from './components/Classify/classify.vue';
  import Detail from './components/Detail/detail.vue'
export default {
  name:'Home',
  components: {
      Channel,
      Swiper,
      New,
      Brand,
      Popular,
      Recommend,
      LimitSale,
      NewProducts,
      Classify,
      Detail
    }
}
</script>

<style lang="stylus" scoped>
.home
  padding-bottom 100px
  .wrapper
    padding-top 150px
    .service
      display flex
      justify-content space-around
      align-items center
      height 72px
      li
        display flex
        &:nth-of-type(1)
          i
            background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
        &:nth-of-type(2)
          i
            background-image url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png")
        &:nth-of-type(3)
          i
            background-image url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png")
        .icon
          width 32px
          height 32px
          background-image url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png")
          background-size 32px 32px
          background-repeat no-repeat
          background-position center
          margin 0 10px 0 0
        span 
          font-size 24px
          line-height 32px
</style>