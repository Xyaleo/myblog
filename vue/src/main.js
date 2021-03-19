// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
//const Vue = require('vue')
//const ElementUI = require('element-ui')
const axios = require('axios')
const VueResource = require('vue-resource')
const $ = require('jquery')
const Router = require('vue-router')
import App from './App'
import router from './router'
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
//import VueResource from 'vue-resource'
import './assets/iconfont.css'
//import $ from 'jquery'
import store from './vuex/store' // 引入store



Vue.use(VueResource)
Vue.config.productionTip = false
//Vue.use(ElementUI);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  const name = window.localStorage.getItem('name')
  console.log(name,to.name)
  if ( !name && to.name!=='Login') {
      document.title = '登陆注册'
    next({
      path: '/login'
    });
  } else if (name && to.name === 'Login') {
    // 已登录 && 前往登录页面, 则不被允许，会重定向到首页
      document.title = '主页'
    next({
      path: '/home',
    });
  } else {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next();
  }

})
