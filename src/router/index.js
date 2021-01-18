import Explore from '../views/Explore.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import TopHotels from '../views/TopHotels.vue'
import Hotel from '../views/Hotel.vue'
import Review from '../views/Review.vue'
import Profile from '../views/Profile.vue'

export const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'explore',
    component: Explore,
     meta: {
      requiresAuth: true
   }
  },
  {
    path: '/top',
    name: 'top',
    component: TopHotels,
     meta: {
      requiresAuth: true
   }
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: Hotel,
     meta: {
      requiresAuth: true
   }
  },
  {
    path: '/review',
    name: 'review',
    component: Review,
     meta: {
      requiresAuth: true
   }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
     meta: {
      requiresAuth: true
   }
  },
]
