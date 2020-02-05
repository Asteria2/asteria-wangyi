<template>
  <div class="profile">
    <SelectHeader class="header">
      <span class="title" slot="headerTitle">网易严选</span>
    </SelectHeader>
    <div class="main" v-show="isShow">
     <div class="logo">
       <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
     </div>
     <div class="login">
       <div class="phone" :class="{active: isActive}" @click="phoneLogin">
         <i class="icomoon icon-shouji"></i>
         <span>手机号码登录</span>
       </div>
       <div class="email" :class="{active: !isActive}" @click="emailLogin">
         <i class="icomoon icon-youxiang_huaban"></i>
         <span>邮箱账号登录</span>
       </div>
       <div class="register" @click="$router.push('/register')">
         <span>手机号快捷注册</span>
       </div>
     </div>
     <div class="type">
       <div class="wechat">
         <i class="icomoon icon-weixin"></i>
         <span>微信</span>
       </div>
       <div class="qq">
         <i class="icomoon icon-QQ"></i>
         <span>QQ</span>
       </div>
       <div class="weibo">
         <i class="icomoon icon-weibo"></i>
         <span>微博</span>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name:'Profile',
  data(){
    return {
      isShow:true,
      isActive:true
    }
  },
  methods:{
    phoneLogin(){
      this.$router.push('/login');
      this.$route.query.isPhoneLogin=true
    },
    emailLogin(){
      this.$router.push('/login');
      this.$route.query.isPhoneLogin=false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .profile 
    position relative
    height 100%
    .header 
      .title 
        font-size 30px
        color #666
    .main
      height 100%
      background-color #F2F5F4
      .logo
        display flex
        justify-content center
        padding 160px 0
        img
          width 268px
          height 90px
      .login
        padding 0 40px 380px
        .phone, .email
          display flex
          align-items center
          justify-content center
          width 670px
          height 100px
          font-size 28px
          color $red
          border 1px solid $red
          margin-bottom 32px
          &.active
            color #fff
            background-color $red
            i::before 
              color #fff
          i
            width 40px
            height 40px
            font-size 40px
            margin-right 16px
            &:before
              color $red
        .register
          font-size 28px
          color #333
          text-align center
      .type
        display flex
        justify-content center
        align-items baseline
        height 40px
        font-size 28px
        .wechat, .qq, .weibo
          float left
          display flex
          text-align center
          align-items center
          padding 0 40px
          color #7f7f7f
          border-left 1px solid #7f7f7f
        .wechat
            border none
          i
            font-size 40px
            margin-right 10px
    .title-logo
      display block
      width 138px
      height 40px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
      background-repeat no-repeat
      background-size 138px 40px
      background-position center
</style>