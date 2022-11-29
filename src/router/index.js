import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/AboutView.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../components/BookingView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../components/ContactView.vue')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../components/ReviewView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('../components/ServiceView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../components/TeamView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/tour/TourListView.vue')
  },
  {
    path: "/tour/:bno",
    name: "book-page",
    component: () => import("@/components/tour/TourBookPage.vue")
  },
  {
    path: "/check/tour",
    name: "check-tour",
    component: () => import("@/components/tour/TourBookCheck.vue")
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('../components/faq/FaqList.vue')
  },
  {
    path: "/faq/:no",
    name: "faq-details",
    component: () => import("@/components/faq/FaqDetail")
  },
  {
    path: '/qna',
    name: 'qna',
    component: () => import('../components/qna/QnaList.vue')
  },
  {
    path: "/qna/:qno",
    name: "faq-details",
    component: () => import("@/components/qna/QnaDetail")
  },
  {
    path: "/add/qna",
    name: "add-qna",
    component: () => import("@/components/qna/AddQna")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
