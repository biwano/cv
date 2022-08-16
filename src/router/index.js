import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/career",
      name: "career",
      component: () => import("../views/CareerView.vue"),
    },
    {
      path: "/academic_studies",
      name: "academic_studies",
      component: () => import("../views/AcademicStudiesView.vue"),
    },
  ],
});

export default router;
