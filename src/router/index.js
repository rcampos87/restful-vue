import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewEvent from '@/components/events/NewEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/new',
      name: 'NewEvent',
      component: NewEvent,
    },
  ],
})
