import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/general/Auth.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import ImportData from '@/components/import-data/Import.vue'
import CreateProduct from '@/components/products/CreateProduct.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Auth, name: 'Welcome' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/importData', component: ImportData, name: 'Import' },
    { path: '/createProduct', component: CreateProduct, name: 'Create Product' }
  ]
})
