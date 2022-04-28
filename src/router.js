import { createRouter, createWebHistory } from 'vue-router';

import SuppliersDetails from './pages/suppliers/SupplierDetail.vue';
import SuppliersList from './pages/suppliers/SuppliersList.vue';
import QuotesList from './pages/quotes/QuotesList.vue';
import SignIn from './pages/signIn/SignIn.vue';
import SignUp from './pages/signUp/SignUp.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/signin' },
    { path: '/signin', component: SignIn, meta: { requiresUnauth: true } },
    { path: '/signup', component: SignUp, meta: { requiresUnauth: true } },
    { path: '/quotes', component: QuotesList, meta: { requiresAuth: true } },
    { path: '/suppliers', component: SuppliersList, meta: { requiresAuth: true } },
    {
      path: '/suppliers/:id',
      component: SuppliersDetails,
      meta: { requiresAuth: true },
      props: true,
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta?.requiresAuth && !store.getters["users/isAuthenticated"]) {
    next('/signin');
  } else if (to.meta?.requiresUnauth && store.getters["users/isAuthenticated"]) {
    next('/suppliers');
  } else {
    next();
  }
});

export default router;
