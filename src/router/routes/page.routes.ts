import { RouteRecordRaw } from 'vue-router';
import About from '../../views/About.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      requiresAuth: false
    }
  }
];

export default routes;