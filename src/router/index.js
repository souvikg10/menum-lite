import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/general/Auth.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import ImportData from '@/components/import-data/Import.vue'
import CreateProduct from '@/components/products/CreateProduct.vue'
import ProductDashboard from '@/components/products/Dashboard.vue'
import CreateBatch from '@/components/batchitems/CreateBatch.vue'
import BatchDashboard from '@/components/batchitems/Dashboard.vue'
import CreateMenuItems from '@/components/menuitems/CreateMenuItems.vue'
import MenuItemsDashboard from '@/components/menuitems/Dashboard.vue'
import MenuDashboard from '@/components/menus/Dashboard.vue'
import CreateMenu from '@/components/menus/CreateMenu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Auth, name: 'Welcome' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/importData', component: ImportData, name: 'Import' },
    { path: '/createProduct', component: CreateProduct, name: 'Create Product' },
    { path: '/productDashboard', component: ProductDashboard, name: 'Product Dashboard' },
    { path: '/createBatch', component: CreateBatch, name: 'Create Batch' },
    { path: '/batchDashboard', component: BatchDashboard, name: 'Batch Dashboard' },
    { path: '/createMenuItems', component: CreateMenuItems, name: 'Create Menu Items' },
    { path: '/MenuItemsDashboard', component: MenuItemsDashboard, name: 'Menu Items Dashboard' },
    { path: '/MenuDashboard', component: MenuDashboard, name: 'Menu Dashboard' },
    { path: '/createMenu', component: CreateMenu, name: 'Create Menu' }
  ]
})
