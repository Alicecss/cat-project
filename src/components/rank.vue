<template>
<div class="rank">
  <div class="nav">
    <ul class="navBar">
      <li><a href="#" >热映口碑榜</a></li>
      <li><a href="#">最受期待榜</a></li>
      <li><a href="#">国内票房榜</a></li>
      <li><a href="#">北美票房榜</a></li>
      <li><a href="#">TOP100榜</a></li>
    </ul>
  </div>
  <div class="container">
    <div class="main">
      <p class="title">
        2018-05-22
        <span>已更新</span>
        <br>
        榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。
        相关数据来源于“猫眼专业版”及“猫眼电影库”
      </p>
      <div class="wrapper">
        <div v-for="(item, index) in moviesList" :key="index" class="movies-main"
            v-if="item.sc && item.sc >=8.8 && item.sc <= 9.9">
          <div class="movies-left">
            <span class="board-index-1">{{index}}</span>
            <a href="#" class="image-link" >
              <img :src="item.img" width="160" height="220" alt="图片找不到啦">
            </a>
          </div>
          <div class="board-item-main">
            <div class="movies-info">
                <p class="movies-title">{{item.nm}}</p>
                <p class="movies-star">主演：{{item.star}}</p>
                <p class="release-time">上映时间：{{item.rt}}</p>
              </div>
            <div class="score-num">
                <p class="score">
                  {{item.sc}}
                </p>
              </div>
          </div>
        </div>
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
  .rank
    width 100%
    height 100%
    min-width 1200px
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
    .container
      width 1200px
      margin 10px auto
      .main
        width 1200px
        margin 0 auto
        margin-top 70px
        .title
          width 100%
          min-width 1200px
          text-align center
          vertical-align middle
          margin 0
          padding 0
          font-size 14px
          line-height 20px
          color #666
          span
            color #ffb400
            text-decoration none
            margin 0 10px
        .wrapper
          margin-top 50px
          position relative
          .movies-main
            position relative
            width 1200px
            height 300px
            margin 10px auto
            .movies-left
              position absolute
              width 400px
              height 300px
              float left
              left 24px
              text-align center
              .board-index-1
                width 50px
                height 50px
                line-height 50px
                float left
                color #edf400
                font-size 26px
                font-weight 700
                position absolute
                margin-right 10px
                font-style italic
                display inline-block
                left 130px
                top 80px
              .image-link
                position absolute
            .board-item-main
              display inline-block
              width 680px
              height 220px
              margin-left 30px
              position relative
              border-bottom 1px solid #e5e5e5
              float right
              left -75px
              .movies-info
                position absolute
                top 64px
                .movies-title
                  font-size 26px
                  color #333
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                  width 420px
                  display block
                .movies-star
                  margin-top 18px
                  color #333
                  font-size 20px
                  text-overflow ellipsis
                  white-space nowrap
                .release-time
                  color #999
                  margin-top 8px
              .score-num
                float right
                color #ffb400
                .score
                  display inline-block
                  vertical-align top
                  margin-top 10px
                  font-size 50px
                  font-style italic
                  position absolute
                  top 32px
                  right 38px
</style>
