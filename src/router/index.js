import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login.vue'
import home from '@/views/home.vue'
import error from '@/views/404.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },
    {
      path: '/home',
      name: '首页',
      component: home
    },
    {
      path: '/error',
      name: '找不到页面',
      component: error
    }
  ]
})
