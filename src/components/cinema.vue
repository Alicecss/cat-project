<template>
<div class="cinema">
  <!--品牌、区域、特殊厅-->
  <div class="cinema-list">
    <!--品牌-->
    <div class="movies-type" clearfilx>
      <div class="name">品牌：</div>
      <div class="typeContent">
        <div class="typeAll">全部</div>
        <div class="typeText" v-for='(item,index) in placeList' :key='index' >
          {{item.brd}}
        </div>
      </div>
    </div>
    <!--行政区-->
    <div class="movies-type">
      <div class="name">品牌：</div>
      <div class="typeContent">
        <div class="typeAll">全部</div>
        <div class="typeText" v-for='(item,index) in cantonList' :key='index' >
          {{item}}
        </div>
      </div>
    </div>
    <!--特殊厅-->
    <div class="movies-type">
      <div class="name">品牌：</div>
      <div class="typeContent">
        <div class="typeAll">全部</div>
        <div class="typeText" v-for='(item,index) in specialList' :key='index' >
          {{item}}
        </div>
      </div>
    </div>
  </div>
  <!--影院列表-->
  <div class="cinema-place">
    <h2>影院列表</h2>
    <div class="cinema-cell">
      <div class="cinema-info"
           v-for="(item ,index) in placeList" :key="index"
           v-show="index <= 17">
        <a href="" class="cinema-name"> {{item.nm}}</a>
        <p class="cinema-address"> {{item.addr}}</p>
        <div class="buy-btn">
          <a href="#">选座购票</a>
        </div>
        <div class="price">
          <span class="rnb">￥</span>
          <span class="rnb-num">{{item.sellPrice}}</span>
          <span >起</span>
        </div>
      </div>
    </div>
  </div>
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
  data () {
    return {
      placeList: {},
      cantonList: ['地铁附近', '白云区', '番禺区', '天河区', '越秀区', '海珠区', '荔湾区',
        '增城区', '黄埔区', '花都区', '南沙区', '从化市'],
      specialList: ['IMAX厅', '中国巨幕厅', '杜比全景厅', 'RealD厅', 'RealD 6FL厅', 'LUXE厅',
        '4DX厅', 'DTS:X临境音厅', '儿童厅', '4K厅', '4D厅', '巨幕厅']
    }
  },
  created () {
    this.$axios.get('./static/data/cinema.json')
      .then((res) => {
        this.placeList = res.data.data.movieTheatre
        console.log(this.placeList)
      })
      .catch((error) => {
        alert(error)
      })
  },
  computed: {
    arrList () {
      let movies = this.placeList
      let arrcity = []
      for (let i = 0; i < movies.length; i++) {
        arrcity.push(movies[i].brd.split(','))
        console.log(arrcity)
      }
      return arrcity
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cinema
    width 100%
    min-width 1200px
    height 100%
    position relative
    .cinema-list
      position relative
      width 1200px
      margin 25px auto
      border 1px solid #e5e5e5
      height 300px
      .movies-type
        position relative
        width 1200px
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
    .cinema-place
      position relative
      width 1200px
      margin 80px auto
      h2
        font-size 18px
        color #333
        border-left 4px solid #f03d37
        padding-left 6px
        line-height 18px
        margin-top  30px
      .cinema-cell
        display block
        padding 20px 0
        width 100%
        border-bottom 1px dashed #e5e5e5
        .cinema-info
          display inline-block
          width 100%
          .cinema-name
            display inline-block
            font-size 16px
            line-height 18px
            color #333
            margin-bottom 10px
          .cinema-address
            font-size 14px
            line-height 14px
            color #999
          .buy-btn
            float right
            width 80px
            height 45px
            line-height 45px
            margin-left 36px
            a
              display inline-block
              width 100%
              height 30px
              color #fff
              background-color #f03d37
              font-size 14px
              line-height 30px
              border-radius 100px
              text-align center
              box-shadow 0 2px 10px -2px #f03d37
              text-decoration none
          .price
            float right
            font-size 12px
            line-height 45px
            .rnb, .rnb-num
              color #f03
              font-size 15px
              font-weight 700
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
