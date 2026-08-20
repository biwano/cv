import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const SITE_TITLE = "Bruno Ilponse · Senior Fullstack Developer";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: SITE_TITLE },
    },
    {
      path: "/career",
      name: "career",
      component: () => import("../views/CareerView.vue"),
      meta: { title: `Career · ${SITE_TITLE}` },
    },
    {
      path: "/academic_studies",
      name: "academic_studies",
      component: () => import("../views/AcademicStudiesView.vue"),
      meta: { title: `Studies · ${SITE_TITLE}` },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      meta: { title: `Projects · ${SITE_TITLE}` },
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
      meta: { title: `Skills · ${SITE_TITLE}` },
    },
  ],
});

router.afterEach((to) => {
  document.title =
    typeof to.meta.title === "string" ? to.meta.title : SITE_TITLE;
});

export default router;
