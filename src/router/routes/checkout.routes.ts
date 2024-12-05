import { RouteRecordRaw } from 'vue-router';
import Checkout from '../../views/Checkout.vue';
import { useCartStore } from '../../stores/cartStore';

const routes: RouteRecordRaw[] = [
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      const cartStore = useCartStore();
      if (cartStore.isEmpty) {
        next({ name: 'products' });
      } else {
        next();
      }
    }
  }
];

export default routes;