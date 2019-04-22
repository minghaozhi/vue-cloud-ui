import Vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
Vue.use(vuex)
// import tab from './modules/tab'
// import iframe from './modules/iframe'

// import menu from './modules/menu'

const store = new vuex.Store({
  modules: {
    app: app,
    user: user
  }
})

export default store
