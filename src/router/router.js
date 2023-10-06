import { createRouter, createWebHistory } from 'vue-router'
import DataTable from '../views/DataTable.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
    { path: '/', component: DataTable},
    { path: '/:id', component: ProductDetails, name: 'productdetails'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router