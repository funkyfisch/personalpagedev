import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/blog/BlogHome'
import HelloWorld from '@/components/home/PlanetOrbits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlanetOrbits',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogHome
    }
  ]
})
