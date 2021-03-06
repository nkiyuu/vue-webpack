import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import ToDo from '@/components/ToDo'
import GoogleMap from '@/components/GoogleMap'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/map',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    }
  ]
})
