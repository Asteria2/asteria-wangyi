<template>
  <div class="detail">
    <div class="top">
      <span class="phone">下载APP</span>
      <span class="computer">电脑版</span>
    </div>
    <div class="bottom">
      <p class="copyright">网易公司版权所有 @ 1997-2020</p>
      <p class="license">食品经营许可证：JY13301080111719</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"Detail"
}
</script>

<style lang="stylus" scoped>
  .detail 
    box-sizing border-box
    width 100%
    height 250px
    padding 50px 20px 30px
    font-size 24px
    text-align center
    background-color rgba(0,0,0,.8)
    color #eee
    .top
      height 100px
      span
        display inline-block
        padding 10px 20px
        width 100px
        height 40px
        line-height 40px
        border 1px solid #eee 
      .phone 
        margin-right 20px
    .bottom 
      color #999
      .copyright
        margin-bottom 10px 
</style>