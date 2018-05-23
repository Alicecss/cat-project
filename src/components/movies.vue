<template>
<div class="movies">
  <div class="nav">
    <ul class="navBar">
      <li><a href="#" >正在热映</a></li>
      <li><a href="#">即将上映</a></li>
      <li><a href="#">经典影片</a></li>
    </ul>
  </div>
  <div class="movies-list">
    <!--电影类型-->
    <div class="movies-type">
      <div class="name">类型：</div>
      <div class="typeContent">
        <div class="typeAll">全部</div>
        <div class="typeText" v-for='(item,index) in arrList' :key='index' >
          {{item}}
        </div>
      </div>
    </div>
    <!--区域-->
    <div class="movies-type">
      <div class="name">区域：</div>
      <div class="typeContent">
        <div class="typeAll">全部</div>
        <div class="typeText" v-for='(item,index) in arrArea' :key='index' >
          {{item}}
        </div>
      </div>
    </div>
    <!--年代-->
    <div class="movies-type">
      <div class="name">年代：</div>
      <div class="typeContent">
        <div class="typeAll">全部</div>
        <div class="typeText" v-for='(item,index) in arrTime' :key='index' >
          {{item}}
        </div>
      </div>
    </div>
  </div>
  <!--排序-->
  <div class="movies-panel">
    <div class="movies-header">
      <ul>
        <li>
          <span class="sort-control" style="cursor: default;"></span>
          <span class="sort-label">按热门排序</span>
        </li>
        <li>
          <span class="sort-control" style="cursor: default;"></span>
          <span class="sort-label">按时间排序</span>
        </li>
        <li>
          <span class="sort-control" style="cursor: default;"></span>
          <span class="sort-label">按评价排序</span>
        </li>
      </ul>
    </div>
  </div>
  <!--电影列表-->
  <div class="main">
    <dl class="main-list" clearfix>
      <dd>
        <div class="movies-item"
             v-for="(item,index) in moviesList" :key="index"
             v-if="item.sc && 4.5<=item.sc && item.sc<=9.9">
          <div class="movies-pic">
            <img :src="item.img" width="160" height="220" alt="图片找不到啦" >
          </div>
          <div class="movies-link">购票</div>
          <div class="movies-3D">{{item.ver}}</div>
          <div class="movies-name hhhe">{{item.nm}}</div>
          <div class="movies-ratsing hhhe">{{item.sc}}</div>
        </div>
      </dd>
    </dl>
  </div>
  <!--页码数-->
  <div class="footer">
    <ul>
      <li class="active">1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>...</li>
      <li class="num">27322</li>
      <li class="num">下一页</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['eeee'],
  data () {
    return {
      moviesList: this.eeee,
      arrType: ['爱情', '喜剧', '动画', '恐怖', '惊悚', '科幻', '动作', '悬疑', '战争', '奇幻', '运动', '纪录片',
        '短片', '武侠', '历史', '谍战', '黑色电影', '文艺', '其他'],
      arrArea: ['大陆', '美国', '韩国', '日本', '中国香港', '中国台湾', '泰国', '印度',
        '法国', '英国', '俄罗斯', '意大利', '西班牙', '德国', '波兰', '澳大利亚', '伊朗', '其他'],
      arrTime: ['2018以后', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2000-2010', '90年代', '80年代', '70年代', '更早']
    }
  },
  computed: {
    arrList () {
      let movies = this.moviesList
      let moviesType = []
      let moviesObj = {}
      let moviesStr = []
      let moviesNum = []
      for (let i = 0; i < movies.length; i++) {
        // movies[i].cat.split(',')把item.cat的数组里的每一个元素用逗号分开成单独的元素
        moviesNum.push(movies[i].cat.split(','))
        // 第一个参数是对象(this), 第二个参数是一个数组集合,apply([], moviesNum)将数组转换为参数
        moviesStr = [].concat.apply([], moviesNum) // 多维数组合成一维数组，concat合并多个数组
        for (let j = 0; j < moviesStr.length; j++) {
          // 数组去重
          if (!moviesObj[moviesStr[j]]) {
            moviesType.push(moviesStr[j])
            moviesObj[moviesStr[j]] = 666
          }
        }
      }
      return moviesType
    }
  }
}
</script>

<style lang="stylus" scoped>
  .movies
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
    .movies-list
      border 1px solid #e5e5e5
      width 1300px
      height 300px
      margin 40px auto
      .movies-type
        position relative
        width 1200px
        border-radius 1px solid #e5e5e5
        margin-top 40px
        padding 0 20px
        list-style-type none
        .name
          height 24px
          line-height 24px
          color #999999
          font-size 14px
        .typeContent
          margin-left 35px
          padding 0
          float left
          width 1200px
          .typeAll
            background #ef4238
            width 50px
            float left
            border-radius 14px
            padding 3px 9px
            margin-left 12px
            color #fff
          .typeText
            color #333
            font-size 14px
            float left
            margin-left 30px
            &:hover
              color #ef4238
    .movies-panel
      margin 40px auto
      width 1200px
      .movies-header
        overflow hidden
        ul
          margin 0
          padding 0
          list-style none
          li
            display inline-block
            height 16px
            line-height 18px
            margin-right 30px
            .sort-control
              display inline-block
              vertical-align top
              width 16px
              height 16px
              margin-right 2px
              border 1px solid #999
              border-radius 50%
            &:hover
              background url("../common/image/cursor.png") no-repeat
            .sort-label
              font-size 14px
              vertical-align top
    .main
      position relative
      margin 20px auto
      width 1200px
      overflow hidden
      .main-list
        margin -29px 0 20px -25px
        dd
          margin 30px 0 0 30px
          display inline-block
          vertical-align  top
          position relative
          .movies-item
            position relative
            border 1px solid #efefef
            margin  10px
            float left
            .movies-pic
              background-color #fcfcfc
              overflow hidden
              position relative
            .movies-link
              position absolute
              right 5px
              bottom 70px
              height 18px
              width 30px
              line-height 18px
              border-radius 1px
              color #e5e5e5
              text-align center
              background-color #ef4238
            .movies-3D
              background-color #66afe9
              color #fff
              width 70px
              height 20px
              text-align center
              font-size 15px
              left -2px
              top 4px
              position absolute
            .hhhe
              width 160px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              text-align center
              font-size 16px
              margin-top 10px
            .movies-name
              color #333
            .movies-ratsing
              color #ffb400
    .footer
      text-align center
      ul
        list-style none
        display block
        li
          display inline-block
          height 30px
          margin 0 4px
          border 1px solid #d8d8d8
          line-height 30px
          text-align center
          color #333
          width 40px
        .active
          background-color #ef4238
        .num
          width 50px
</style>
