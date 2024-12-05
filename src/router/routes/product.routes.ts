import { RouteRecordRaw } from 'vue-router';
import ProductList from '../../components/ProductList.vue';
import NewArrivals from '../../views/NewArrivals.vue';
import Collections from '../../views/Collections.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/new-arrivals',
    name: 'new-arrivals',
    component: NewArrivals,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/collections',
    name: 'collections',
    component: Collections,
    meta: {
      requiresAuth: false
    }
  }
];

export default routes;