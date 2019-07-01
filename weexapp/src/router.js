/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WeexUidemo from '@/components/weexdemo'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/weexUidemo',
      name: 'weexUidemo',
      component: WeexUidemo
    }
  ]
})
