import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import publicationsView from '@/views/publications-view.vue'
import markdownRendererComponent from '@/components/markdown-renderer-component.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Publications',
    component: publicationsView,
  },
  {
    path: '/publications/:title',
    name: 'Publication',
    component: markdownRendererComponent,
    props: route => ({ title: route.params.title, link: route.query.link as string })
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
