// import { createRouter, createWebHistory } from 'vue-router';

// import HomeView from '../views/HomeView.vue';
// import FriendsView from '../views/FriendsView.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView,
//   },
//   {
//     path: '/friends',
//     name: 'friends',
//     component: FriendsView,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

// export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import FriendsView from '../views/FriendsView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  // { path: '/friends', name: 'friends', component: FriendsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
