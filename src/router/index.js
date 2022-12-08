import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import WorkView from "@/views/WorkView.vue";

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