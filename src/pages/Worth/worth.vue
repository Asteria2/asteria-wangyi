<template>
  <div class="worth">
    <SelectHeader class="header">
      <span class="title" slot="headerTitle">值得买</span>
    </SelectHeader>
    <div class="contentContainer" ref="contentContainer">
      <div class="content">
        <!-- 轮播图区域 -->
        <div class="swiperWrap">
          <div class="swiperTitle">
            <img class="bg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png">
            <img class="deserveToBuy" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png">
            <div class="txt">严选好物&nbsp;用心生活</div>
          </div>
          <!-- 轮播图 -->
          <div class="swiperContent swiper-container">
            <ul class="list swiper-wrapper">
              <li class="item swiper-slide" v-for="(items,index) in swiperList" :key="index">
                <a href="javascript：void(0)" v-for="item in items" :key="item.id">
                  <img :src="item.imgUrl">
                  <div class="name">{{item.name}}</div>
                  <div class="desc">{{item.desc}}</div>
                </a>
              </li>
            </ul>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 瀑布流区域 -->
        <div class="m-wrappers">
          <div class="m-lookList">
            <!-- 第一列 -->
            <div class="m-lookColumn grid">
              <div class="m-lookBlock grid-item" v-for="(item1,index1) in waterFall" :key="`1${index1}`">
                <!-- 内容区 -->
                <div class="innerWrapper" v-if="item1.imgUrl">
                  <!-- 大图 -->
                  <div class="imgWrap">
                    <img :src="item1.imgUrl">
                  </div>
                  <!-- 描述 -->
                  <div class="desc" v-if="item1.txt">{{item1.txt}}</div>
                  <!-- 空白间隙 -->
                  <div class="blank"></div>
                  <!-- 用户信息 -->
                  <div class="user" v-if="item1.userPic">
                    <div class="left">
                      <img :src="item1.userPic">
                      <span>{{item1.userName}}</span>
                    </div>
                    <div class="right">
                      <img :src="item1.eyeIcon">
                      <span>{{item1.eyeCount}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import Masonry from 'masonry-layout'
export default {
  name:'Worth',
  computed:{
      ...mapState({
        swiperList:state=>state.worth.swiperList,
        waterFall:state=>state.worth.waterFall
      })
    },
    async mounted(){
      this.$store.dispatch('getWorthData');
      this.$nextTick(() => {
        new BScroll(this.$refs.contentContainer, {
          probeType:3,
          click:true
        });
        // 轮播图
        this.mySwiper = new Swiper('.swiper-container', {
            direction:"horizontal",
            slidesPerView : 4,
            slidesPerGroup:1,
            loop: true,
            autoplay: true, // 自动轮播
            speed: 1000,
              // 分页器
            pagination: {
                el: '.swiper-pagination',
            }
        });
        //等图片加载完再new瀑布流实例对象，否则瀑布流布局会有问题
        this.$Lazyload.$on("loaded",() => {
            //瀑布流布局
            this.msnry = new Masonry('.grid', {
                itemSelector: '.grid-item',
                columnWidth: 172,  //指定列宽
                gutter: 10   //指定每列之间的水平间隙
            });
            if(this.contentContainerBS){
                this.contentContainerBS.refresh();
            }
        })
        //上下滚动（滚动实例对象一定要在瀑布流实例对象之后注册，否则滚动高度不对）
      
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.worth
  background-color rgba(0,0,0,.1)
  position absolute
  left 0
  right 0
  top 0
  bottom: 49px
  .header 
    .title 
      font-size 30px
      color #666
  .contentContainer
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    overflow hidden
    .content
      padding-top 100px
      .swiperWrap
        position relative
        padding-top 100px
        .swiperTitle
          position absolute
          width 100%
          left 0
          top 0
          .bg
            width 100%
            height 100%
          .deserveToBuy
            width 130px
            height 70px
            position absolute
            left 20px
            top 30px
          .txt
            position absolute
            left 160px
            top 60px
            color white
            font-size 30px
        .swiperContent
          width 95%
          height 500px
          background white
          border-radius 16px
          margin 0 auto
          overflow hidden
          position relative
          z-index 2
          .list
            width 100%
            height 100%
            white-space nowrap
            .item
              width 180px
              height 100%
              display inline-block
              a
                display flex
                flex-direction column
                align-items center
                margin-top 30px
                img
                  width 120px
                  height 120px
                .name
                  color #333333
                  font-size 30px
                  font-weight bold
                  font-family 'PingFang-SC-Bold'
                  margin-top 15px
                .desc
                  margin-top 10px
                  color #999999
                  font-size 20px
                  font-family 'PingFangSC-Regular'
          .swiper-pagination
              position absolute
              width 100%
              left 0
              bottom 40px
              height 6px
              text-align center
      .m-wrappers
        .m-lookList
          margin 30px 10px 0 20px
          .m-lookColumn
            .m-lookBlock
              display inline-block
              width 340px
              margin-bottom 20px
              margin-right 20px
              border-radius 12px
              box-sizing border-box
              overflow hidden
              background white
              .innerWrapper
                .imgWrap
                  width 344px
                  height 200px
                  background-color #f2f2f2
                  overflow hidden
                .desc
                  box-sizing border-box
                  padding 16px 16px 0 16px
                  color #333
                  font-size 24px
                  line-height 30px
                  font-family 'PingFangSC-Regular'
                  //超出2行用省略号表示
                  display -webkit-box
                  -webkit-box-orient vertical
                  -webkit-line-clamp 2
                  overflow hidden
                  text-overflow ellipsis
                .blank
                  height 16px
                .user
                  box-sizing border-box
                  padding 16px
                  display flex
                  justify-content space-between
                  .left
                    display flex
                    align-items center
                    img
                      width 48px
                      height 48px
                      border 2px solid #d9d9d9
                      box-sizing border-box
                      border-radius 50%
                    span
                      margin-left 8px
                      color #7f7f7f
                  .right
                    display flex
                    align-items center
                    img
                      width 32px
                      height 32px
                    span
                      color #7f7f7f
</style>
<style lang="stylus">
// 分页器的样式要另外写，不能写在scoped里
.topic .swiper-pagination-bullet
  display inline-block
  width 36px
  height 100%
  background #D9D9D9
.topic .swiper-pagination-bullet-active
  background #DD1A21
</style>