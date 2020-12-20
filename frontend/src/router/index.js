import Vue from 'vue';
import VueRouter from 'vue-router';

import SingInRoute from './SingIn';
import SingUpRoute from './SingUp';
import StatesRoute from './States';
import CitiesRoute from './Cities';

Vue.use(VueRouter);

const routes = [SingInRoute, SingUpRoute, StatesRoute, CitiesRoute];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/', '/singup'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  return next();
});

export default router;
