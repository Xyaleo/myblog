import './assets/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


router.beforeEach((to, from, next) => {
    const name = window.localStorage.getItem('name')
    // console.log(name,to.name)
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
            // @ts-ignore
            document.title = to.meta.title
        }
        next();
    }

})
