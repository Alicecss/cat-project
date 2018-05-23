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
  <p class="title">
    2018-05-22
    <span>已更新</span>
    <br>
    榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。
    相关数据来源于“猫眼专业版”及“猫眼电影库”
  </p>
</div>
</template>

<script>
export default {}
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
    .title
      width 100%
      min-width 1200px
      text-align center
      vertical-align middle
      p
        margin 0
        padding 0
        text-align center
        font-size 14px
        line-height 20px
        color #666
      span
        color #ffb400
        text-decoration none
        margin 0 10px
</style>
