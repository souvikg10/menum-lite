import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth.vue'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Auth },
    { path: '/auth', component: Auth },
    { path: '/success', component: Dashboard }
  ]
})
