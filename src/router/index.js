import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import('@/views/HomeView.vue')
const WorkView = () => import('@/views/WorkView.vue')

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/experience/:title",
      name: "Experience",
      component: WorkView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
      document.getElementById("app").scrollIntoView();
    },
});

export default router;