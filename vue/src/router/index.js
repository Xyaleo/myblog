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
      component:Home,
      meta: {
        // 页面标题title
        title: '主页'
      }
    },{
      path:'/login',
      name:'Login',
      component:Login,
      meta: {
        // 页面标题title
        title: '登陆注册'
      }
    },
    {
      path:'/editer',
      name:'Editer',
      component:Editer,
      meta: {
        // 页面标题title
        title: '发布文章'
      }
    },
    {
      path:'/p/:id',
      name:'Article',
      component:Article,
      meta: {
        // 页面标题title
        title: '文章'
      }
    }
  ]
})





