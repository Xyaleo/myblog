import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/views/login'
import Home from '@/components/views/home'
import Article from '@/components/views/article'
import Editer from '@/components/views/editer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },{
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/editer',
      name:'Editer',
      component:Editer
    },
    {
      path:'/p/:id',
        name:'Article',
      component:Article
    }
  ]
})
