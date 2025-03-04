import { createRouter, createWebHistory } from 'vue-router'
import EventsList from '../Pages/EventsList.vue'
import EventsTemplate from '../Pages/EventsTemplate.vue'
import EventDetail from '../Pages/EventDetail.vue'
import Profile from '../Pages/UserProfile.vue'
import LeafLet from '../components/LeafLet.vue'

const routes = [
  { path: '/', component: EventsList },
  { path: '/event', component: EventsTemplate },
  { path: '/events/:id', component: EventDetail },
  { path: '/profile', component: Profile },
  { path: '/maps', component: LeafLet },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
