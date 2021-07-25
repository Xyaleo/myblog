
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import Article from '@/views/article.vue'
import Editer from '@/views/editer.vue'
import About from '@/views/about.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
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
  },
    {
    path:'/about',
    name:'About',
    component:About,
    meta: {
        // 页面标题title
        title: '关于'
    }
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router
