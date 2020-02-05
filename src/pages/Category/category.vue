<template>
  <div class="categories" ref="categories">
    <div class="wrapper">
      <div class="search">
        <i class="icomoon icon-suosou"></i>
        <span class="placeholder" @click="$router.push('/search')">搜索商品，共19160款好物</span>
      </div>
      <section class="categoryList">
        <div class="line"></div>
        <div class="left">
          <ul>
            <li :class="{active: currentId * 1 === category.id}" v-for="(category, index) in categoryList" :key="index">
              <router-link :to="{path: 'category', query: {id: category.id}}" class="text">{{category.name}}</router-link>
            </li>
          </ul>
        </div>
        <router-view />
      </section>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    data () {
      return {
        isActive: true,
        currentId: ''
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.category.categoryList
      })
    },
    mounted () {
      this.$store.dispatch('getCategoryList');
      this.currentId = this.$route.query.id ? this.$route.query.id : '1005000';
      this.$nextTick(() => {
        new BScroll(this.$refs.categories, {
          probeType:3,
          click: true
        })
      })
    },
    watch: {
      $route () {
        this.currentId = this.$route.query.id;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl";
.categories
  .wrapper
    height 100%
    padding-bottom 100px
    .search
      height 56px
      width 90%
      margin 20px auto
      border-radius 10px
      background-color rgba(0,0,0,.1)
      text-align center
      line-height 56px
      i
        font-size 30px
      .placeholder
        font-size 30px
        color #666
    .line
      width 100%
      height 2px
      background-color #eee
    .categoryList
        height 100%
        position relative
      .left
        position absolute
        top 0
        left 0
        height 100%
        padding 20px 0
        ul
          width 162px
          display flex
          flex-direction column
          li
            width 160px
            height 50px
            line-height 50px
            text-align center
            font-size 28px
            margin 15px 0
            border-left 6px solid #fff
            .text 
              color rgba(0,0,0,.9)
            &.active
              border-left 6px solid $red
              a
                color $red
</style>
