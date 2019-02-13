import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import New from '@/views/New.vue';
import Single from '@/views/Single.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/new',
      name: 'new',
      component: New,
    },
    {
      path: '/story/:id',
      name: 'Single',
      component: Single,
    },
  ],
});
