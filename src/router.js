import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A1 from './views/A/1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/A/1',
      name: 'A1',
      component: A1
    }
  ]
})
