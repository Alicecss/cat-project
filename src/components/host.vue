<template>
<div class="host">
  <div class="nav">
    <ul class="navBar">
      <li><a href="#" >热点首页</a></li>
      <li><a href="#">新闻资讯</a></li>
      <li><a href="#">预告片</a></li>
      <li><a href="#">精彩图集</a></li>
    </ul>
  </div>
  <div class="container">
    <div class="main">
      <!--最新资讯-->
      <div class="header">
        <div class="header-left">最新资讯</div>
        <div class="header-right "> 全部 &gt; </div>
      </div>
      <div class="main-content clearfix">
        <ul class="main-pic moviesList-once">
          <li v-for='(item,index) in moviesList' :key='index' class="movies"
              v-if="index<=8">
            <div class="movies-info">
              <div class="movies-pic">
                <img :src="item.img" width="220" height="160" alt="图片找不到啦">
                <!--影片片名介绍、评分-->
                <div class="movies-text">
                  <div class="movies-title">{{item.nm}}</div>
                  <div class="movies-score">
                    {{item.sc?item.sc:"无..."}}
                  </div>
                </div>
              </div>
              <div  class="buy-tickets">
                <p class="buyText">{{item.showInfo}}</p>
                <div class="cateyes">
                  <span>猫眼电影</span>
                  <span>{{item.wish}}看过</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['eeee'],
  data () {
    return {
      moviesList: this.eeee
    }
  }
}
</script>

<style lang="stylus" scoped>
  .host
    width 100%
    position relative
    .nav
      background-color #47464a
      width 100%
      min-width 1200px
      position relative
      text-align center
      height 60px
      .navBar
        display inline-block
        overflow hidden
        margin 0 auto
        li
          display inline-block
          line-height 60px
          &:active
            border-top none
            cursor default
          a
            font-size 16px
            line-height 60px
            height 60px
            padding 0 40px
            color #999999
            display block
            text-decoration none
            &:hover
              color #ebebeb
    .container
      width 100%
      display flex
      padding-top 60px
      .main
        flex 2
        width 200px
        height 300px
        .header
          width 900px
          height 30px
          line-height 30px
          overflow hidden
          padding 0 100px 0 50px
          .header-left
            color red
            float left
            font-size 26px
            margin-right 20px
            cursor pointer
            position absolute
            left 150px
          .header-right
            /*float right*/
            font-size 16px
            line-height 30px
            color red
            position absolute
            left 808px
            cursor pointer
        .main-content
          padding 30px 50px 30px 50px
          position relative
          text-align center
          .main-pic
            width 900px
            height 546px
            overflow hidden
            .movies
              display inline-block
              margin-right 20px
              .movies-info
                position relative
                width 222px
                border 1px solid #ccc
                .movies-pic
                  width 160px
                  height 220px
                  z-index 20
                  .movies-text
                    position relative
                    width 150px
                    height 22px
                    top -30px
                    left 8px
                    text-align left
                    z-index 50
                    .movies-title
                      float left
                      width 115px
                      height 22px
                      line-height 22px
                      white-space nowrap
                      text-overflow ellipsis
                      color #fff
                      font-weight 700
                      overflow hidden
                      font-size 16px
                      .movies-score
                        position absolute
                        float right
                        color #ffb400
                        font-style italic
                        font-size 18px
                        line-height 22px
                        left 120px
                  .movies-view
                    font-size 14px
                    color #ffb400
                    text-align left
                    width 160px
                    height 34px
                    position relative
                    .view-num
                      float left
                      position absolute
                      left 10px
                  .buy
                    width 80px
                    height 39px
                    color #333
                    text-align center
                    text-decoration none
                  .buy-left
                    float left
                    border-right 1px solid #ebebeb
                  .buy-right
                    float right
                    &:hover
                      background-color red
                      color #fff
                  .movies-show
                    font-size 18px
                    font-weight 500
                    height 34px
                    text-align center
                    text-decoration none
                  .buy-tickets
                    display block
                    width 160px
                    height 30px
                    text-align center
                    color #333
                    text-decoration none
                    position absolute
                    top 10px
                    &:hover
                      background-color red
                      color #fff
                    .buyText
                      position relative
                      line-height 39px
                      left -60px
                      font-size 16px
</style>
