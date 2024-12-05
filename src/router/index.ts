import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { authGuard } from './guards/auth.guard';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  }
});

router.beforeEach(authGuard);

export default router;