<template>
  <div class="home">
    <!--轮播图-->
    <div id="carousel-example-generic" class="carousel slide">
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <!--图片-->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="../common/image/autoPlayImg1.jpg">
          </div>
          <div class="item">
            <img src="../common/image/autoPlayImg2.jpg">
          </div>
          <div class="item">
            <img src="../common/image/autoPlayImg3.jpg">
          </div>
        </div>
      <!--左右翻页-->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon " aria-hidden="true"></span>
        <div class="left-right-control left"> &lt; </div>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon " aria-hidden="true"></span>
        <div class="left-right-control right"> &gt; </div>
      </a>
    </div>
    <!--电影列表-->
    <div class="container">
        <!--主页左边的电影列表栏-->
        <div class="main">
          <!--正在热映-->
          <div class="header">
            <div class="header-left">正在热映（38部）</div>
            <div class="header-right "> 全部 &gt; </div>
          </div>
          <div class="main-content clearfix">
              <ul class="main-pic moviesList-once">
                <li v-for='(item,index) in moviesList' :key='index' class="movies"
                     v-if="index<=8">
                  <div class="movies-info">
                    <div class="movies-pic">
                      <img :src="item.img" width="160" height="220" alt="图片找不到啦">
                    <!--影片片名介绍、评分-->
                      <div class="movies-text">
                        <div class="movies-title">{{item.nm}}</div>
                        <div class="movies-score">
                          {{item.sc?item.sc:"无..."}}
                        </div>
                      </div>
                    </div>
                    <a href="#" class="buy-tickets">
                      <div class="buyText">购票</div>
                    </a>
                  </div>
                </li>
              </ul>
          </div>
          <!--即将上映-->
          <div class="header">
            <div class="header-left hot-once">即将上映（237部）</div>
            <div class="header-right hot-once"> 全部 &gt; </div>
          </div>
          <div class="main-content clearfix">
            <ul class="main-pic main-height" style="height: 634px;">
              <li v-for='(item,index) in moviesList' :key='index' class="movies"
                   v-if="item.sc===0 && item.sc<=7">
                <div class="movies-info">
                  <div class="movies-pic" >
                    <img :src="item.img" width="160" height="220" alt="图片找不到啦">
                    <!--影片片名介绍、评分-->
                    <div class="movies-text">
                      <div class="movies-title">{{item.nm}}</div>
                      <div class="movies-score" style="color:#ffb400;font-style:italic;">
                        {{item.sc?item.sc:"无..."}}
                      </div>
                    </div>
                  </div>
                  <div class="movies-view">
                    <span class="view-num">{{item.wish}}人想看</span>
                  </div>
                  <div class="buy buy-left ">预告片</div>
                  <a href="#">
                    <div class="buy buy-right">预售</div>
                  </a>
                  <div class="movies-show">5月11号上映</div>
                </div>
              </li>
            </ul>
          </div>
          <!--热播电影-->
          <div class="header">
            <div class="header-left ">热播电影</div>
            <div class="header-right "> 全部 &gt; </div>
            <div class="moviesType">
              爱情 &nbsp;喜剧 &nbsp; 动作 &nbsp; 恐怖 &nbsp; 动画
            </div>
          </div>
          <div class="main-content clearfix">
            <ul class="main-pic">
              <li v-for='(item,index) in moviesList' :key='index' class="movies"
                  v-show="item.sc && 5<=item.sc && item.sc<=7">
                <div class="movies-info">
                  <div class="movies-pic">
                    <img :src="item.img" width="160" height="220" alt="图片找不到啦">
                    <!--影片片名介绍、评分-->
                    <div class="movies-text">
                      <div class="movies-title">{{item.nm}}</div>
                      <div class="movies-score" style="color:#ffb400;font-style:italic;">
                        {{item.sc?item.sc:"无..."}}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--右边的电影菜单栏-->
        <div class="aside">
          <!--今日票房-->
          <div class="list-wrapper">
            <div class="list-title">
              <span>今日票房</span>
            </div>
              <div class="list-pic">
                <img src="../common/image/a1.jpg" style="width: 120px;height: 80px;">
                <span class="list-top">后来的我们</span>
                <span class="list-bottom">7180.25百万</span>
              </div>
            <ul class="list-name">
              <li  v-for="(item,index) in moviesList" :key="index" class="list-text"
                    v-if="index>0 && index<=9">
                <span class="list-number">{{index + 1}}</span>
                <span class="list-movie-name">{{item.nm}}</span>
                <span class="list-movie-ranting">{{item.snum/100}}百万</span>
              </li>
            </ul>
            <div class="list-more">
              <h3>今日大盘</h3>
                <span class="textLeft">2.36亿</span>
                <span class="textRight">查看更多&gt;</span>
                <p>北京时间&nbsp;12:50:36&nbsp;&nbsp;&nbsp;&nbsp;
                猫眼专业版实时票房数据
                </p>
            </div>
          </div>
          <!--最受期待-->
          <div class="list-wrapper">
            <div class="ranking-title">
              <span class="textLeft">最受期待</span>
              <span class="textRight">查看完整榜单&gt;</span>
            </div>
            <div class="list-pic">
              <img src="../common/image/a2.jpg" style="width: 140px;height: 194px;">
              <span class="list-top ranking-top">狂暴巨兽</span>
              <span class="ranking-middle">上映时间：2018-06-15</span>
              <span class="list-bottom ranking-bottom">160742人想看</span>
            </div>
            <div class="ranking-pic clearfix" >
              <div class="picLeft">
                <img src="../common/image/a4.jpg" style="width: 170px;height: 120px;">
                <div class="ranking-text">
                  <span class="ranking-top-left">幕后玩家</span>
                  <span class="ranking-bottom-right">452561人想看</span>
                </div>
              </div>
              <div class="picRight">
                <img src="../common/image/c4.jpg" style="width: 170px;height: 120px;">
                <div class="ranking-text">
                  <span class="ranking-top-left">海啸奇迹</span>
                  <span class="ranking-bottom-right">52561人想看</span>
                </div>
              </div>
            </div>
            <ul class="list-name">
              <li  v-for="(item,index) in moviesList" :key="index" class="list-text"
                   v-if="index<=20 && index>=14">
                <span class="list-number">{{index-10}}</span>
                <span class="list-movie-name">{{item.nm}}</span>
                <span class="list-movie-ranting">{{item.wish}}人想看</span>
              </li>
            </ul>
          </div>
          <!--TOP 100-->
          <div class="list-wrapper">
            <div class="ranking-title">
              <span class="textLeft">TOP &nbsp; &nbsp;100</span>
              <span class="textRight">查看完整榜单&gt;</span>
            </div>
            <div class="list-pic">
              <img src="../common/image/a8.jpg" style="width: 120px;height: 80px;">
              <span class="list-top">战神纪</span>
              <span class="list-bottom">9.0分</span>
            </div>
            <ul class="list-name">
              <li  v-for="(item,index) in moviesList" :key="index" class="list-text"
                   v-show="index<=30 && index>=22 && item.sc>7">
                <span class="list-number">{{index - 20}}</span>
                <span class="list-movie-name">{{item.nm}}</span>
                <span class="list-movie-ranting">{{item.sc}}分</span>
              </li>
            </ul>
          </div>
        </div>
    </div>
    <!--尾部栏-->
    <div class="footer">
      <footer></footer>
    </div>
  </div>
</template>

<script>
import Footer from './footer'
export default {
  data () {
    return {
      moviesList: {}
    }
  },
  components: {
    Footer
  },
  created () {
    this.$axios.get('./static/data/data-movies.json')
      .then((res) => {
        this.moviesList = res.data.data.movies
        console.log(this.moviesList)
      })
      .catch((error) => {
        alert(error)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .home
    position relative
    width 100%
    margin-bottom 80px
    .carousel
      position relative
      width 100%
      min-width 1200px
      margin 0 auto
      .left-right-control
        font-family '宋体'
        position absolute
        font-size 50px
        color #333
        width  48px
        height 68px
        background-color  #fff
        top 45%
        opacity .5
        &.left
          left 50px
        &.right
          right 50px
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
          .moviesType
            font-size 14px
            position absolute
            left 270px
            cursor pointer
          .hot-once
            color deepskyblue!important
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
            height 522px
            overflow hidden
            .movies
              display inline-block
              margin-right 20px
              .movies-info
                position relative
                width 162px
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
                  height 39px
                  text-align center
                  color #333
                  text-decoration none
                  &:hover
                    background-color red
                    color #fff
                  .buyText
                    position relative
                    line-height 39px
                    left -60px
                    font-size 16px
      .aside
        flex 1
        width 200px
        height 300px
        .list-wrapper
          position relative
          width 400px
          .list-title
            color #ef4238
            height 26px
            line-height 26px
            font-size 26px
            margin-bottom 20px
          .list-pic
            position relative
            margin-bottom 40px
            .list-top
              display block
              font-size 18px
              line-height 14px
              color #333333
              position absolute
              top 20px
              left 130px
            .list-bottom
              color #ffb400
              font-size 14px
              margin-top 12px
              position absolute
              top 35px
              left 130px
            .ranking-top
              position absolute
              left 155px
              top 66px
            .ranking-middle
              left 155px
              position absolute
              color #9d9d9d
              top 90px
            .ranking-bottom
              position absolute
              left 155px
              top 110px
            .ranking-top-left
              float left
              display block
              font-size 18px
              position absolute
              top 10px
              left 100px
          .list-name
            text-overflow ellipsis
            vertical-align top
            overflow hidden
            white-space nowrap
            .list-number
              color #9d9d9d
              font-size 20px
              margin-right 20px
              font-style italic
            .list-movie-name
              font-size 18px
              color #333
            .list-movie-ranting
              float right
              color #ffb400
          .list-more
            border 1px solid #efefef
            margin-top 29px
            padding-right 15px
            width 360px
            height 150px
            position relative
            h3
              float left
              line-height 21px
              width 45px
              height 120px
              font-weight 400
              color #fff
              background-color #ef4238
              padding 10px
            .textLeft
              color #ef4238
              font-size 30px
              float left
              position absolute
              top 34px
              margin 5px
              font-weight 700
            .textRight
              color #ef4238
              position absolute
              top 50px
              left 290px
            p
              position absolute
              left 50px
              top 100px
          .ranking-title
            color #ffb400
            height 26px
            margin 50px 0 20px 0
            .textLeft
              font-size 26px
              float left
            .textRight
              font-size 14px
              float right
          .ranking-pic
            position relative
            width 100%
            margin-bottom 100px
            .picLeft
              float left
              .ranking-text
                position absolute
                .ranking-top-left
                  font-size 18px
                  margin 10px
                .ranking-bottom-right
                  color #ffb400
                  margin 10px
                  display block
                  top 10px
            .picRight
              float right
              .ranking-text
                position absolute
                .ranking-top-left
                  font-size 18px
                  margin 10px
                .ranking-bottom-right
                  color #ffb400
                  margin 10px
                  display block
                  top 10px
            .textLeft
              font-size 26px
              line-height 26px
              float left
            .textRight
              float right
</style>
