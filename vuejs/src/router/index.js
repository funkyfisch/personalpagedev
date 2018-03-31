import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/PlanetOrbits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlanetOrbits',
      component: HelloWorld
    }
  ]
})
