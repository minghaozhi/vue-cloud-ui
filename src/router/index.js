import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login.vue'
import home from '@/views/home.vue'
import error from '@/views/404.vue'
import Main from '@/views/main.vue'
import User from '@/views/user/user.vue'
import Menu from '@/views/menu/menu.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '首页',
      component: home,
      children: [
        { path: '/main', name: '系统介绍', component: Main },
        { path: '/user', name: '用户管理', component: User },
        { path: '/menu', name: '菜单管理', component: Menu }
      ]
    },
    {
      path: '/error',
      name: '找不到页面',
      component: error
    }
  ]

})
router.beforeEach((to, from, next) => {
  // 登录界面登录成功之后，会把用户信息保存在会话
  // 存在时间为会话生命周期，页面关闭即失效。
  let userName = sessionStorage.getItem('user')
  if (to.path === '/login') {
    // 如果是访问登录界面，如果用户会话信息存在，代表已登录过，跳转到主页
    if (userName) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (!userName) {
      // 如果访问非登录界面，且户会话信息不存在，代表未登录，则跳转到登录界面
      next({ path: '/login' })
    } else {
      // // 加载动态菜单和路由
      // addDynamicMenuAndRoutes(userName, to, from)
      next()
    }
  }
})

export default router
