import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EventDetails from '@/components/events/EventDetails'

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
      component: EventDetails,
    },
    {
      path: '/:id',
      name: 'EventDetails',
      component: EventDetails,
      props: true
    },
  ],
})
