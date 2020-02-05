<template>
  <div class="cart">
    <div class="title">
      <span class="text">购物车</span>
      <a href="javascript:;">领券</a>
    </div>
    <div class="main">
      <ul class="list">
        <li class="item">
          <span class="text">30天无忧退货</span>
        </li>
        <li class="item">
          <span class="text">48小时无忧退款</span>
        </li>
        <li class="item">
          <span class="text">满88元免邮费</span>
        </li>
      </ul>
      <img class="img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="cartImg">
      <div class="login">
        <span class="tips">去添加点什么吧</span>
        <div class="btn" @click="$router.push('/profile')">
          <a href="javascript:;">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ShopCart'
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
.cart
  position relative
  height 1334px
  width 750px
  background-color #f4f4f4
  .title 
    display flex
    justify-content space-between
    align-items center
    height 88px
    padding 0 30px
    background-color #fff
    .text 
      font-size 36px
      color #333333
    a
      width 90px
      height 88px
      font-size 30px
      color $red
      line-height 90px
      text-align center
  .main
    .list 
      display flex
      justify-content space-between
      align-items center
      height 70px
      padding 0 30px
      .item
        display flex
        align-items center
        font-size 24px
        color #666
    .img 
      position absolute
      top 0
      left 0
      bottom 0
      right 0
      margin auto
      width 248px
      height 248px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png")
      background-repeat no-repeat
      background-position center
    .login
      position absolute
      left 50%
      bottom 380px
      transform translateX(-50%)
      text-align center
      .tips
        display block
        font-size 28px
        color #999
        margin-bottom 50px
      .btn
        width 480px
        height 92px
        margin 0 135px
        text-align center
        line-height 92px
        background-color $red
        a
          font-size 30px
          color #fff
</style>