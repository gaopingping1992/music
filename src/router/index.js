import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Singer = () => import('@/components/singer/singer')
const Rank = () => import('@/components/rank/rank')
const Search = () => import('@/components/search/search')
const Recommend = () => import('@/components/recommend/recommend')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
