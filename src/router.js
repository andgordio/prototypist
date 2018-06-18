import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import InitialHome from './views/initial/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/initial/home',
      name: 'initialHome',
      component: InitialHome
    }
  ]
})
