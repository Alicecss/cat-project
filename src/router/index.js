import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Movies from '../components/Movies.vue'
import Rank from '../components/rank.vue'
import Cinema from '../components/Cinema.vue'
import Host from '../components/Host.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/home', name: 'home', component: Home},
    {path: '/movies', name: 'movies', component: Movies},
    {path: '/rank', name: 'rank', component: Rank},
    {path: '/cinema', name: 'cinema', component: Cinema},
    {path: '/host', name: 'host', component: Host}
  ]
})
