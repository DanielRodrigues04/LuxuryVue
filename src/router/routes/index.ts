import { RouteRecordRaw } from 'vue-router';
import productRoutes from './product.routes';
import checkoutRoutes from './checkout.routes';
import pageRoutes from './page.routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/products'
  },
  ...productRoutes,
  ...checkoutRoutes,
  ...pageRoutes
];

export default routes;