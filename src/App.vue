<template>
  <div id="app">
    <Header></Header>
    <div class="link" style="width:50%">
        <router-link to="/home">主页</router-link>
        <router-link to="/movies">电影</router-link>
        <router-link to="/cinema">影院</router-link>
        <router-link to="/rank">榜单</router-link>
        <router-link to="/host">热点</router-link>
    </div>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.$axios.get('/api/data')
      .then((res) => {
        res = res.data
        if (res.errno === 0) {
          this.seller = res.data
        }
      })
      .catch((error) => {
        alert(error)
      })
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
  .link
    position absolute
    width 400px
    height 80px
    line-height 80px
    text-align center
    top 0
    left 300px
    font-size 0
    a
      text-align center
      display inline-block
      height 80px
      line-height 80px
      width 80px
      font-size 18px
      color #333
      &:hover
        color red
      &.active
        background #ef4238
        color #fff
  .footer
    width 100%
    position absolute
    top 2450px
    left 0
    color #262426
</style>
