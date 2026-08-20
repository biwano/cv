import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const SITE_TITLE = "Bruno Ilponse · Senior Fullstack Developer";
const DEFAULT_DESCRIPTION =
  "Senior Fullstack Software Developer with 15 years of experience across consulting, education, and web. Projects, skills, and career history.";

const setMetaContent = (selector, content) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
};

const setCanonicalHref = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const siteOrigin = (import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");

const absoluteUrlForRoute = (fullPath) => {
  const path = fullPath === "/" ? "/" : fullPath.replace(/\/$/, "") || "/";
  return siteOrigin ? `${siteOrigin}${path}` : path;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: SITE_TITLE,
        description: DEFAULT_DESCRIPTION,
      },
    },
    {
      path: "/career",
      name: "career",
      component: () => import("../views/CareerView.vue"),
      meta: {
        title: `Career · ${SITE_TITLE}`,
        description:
          "Career history of Bruno Ilponse — senior fullstack roles across consulting, education, and the web.",
      },
    },
    {
      path: "/academic_studies",
      name: "academic_studies",
      component: () => import("../views/AcademicStudiesView.vue"),
      meta: {
        title: `Studies · ${SITE_TITLE}`,
        description:
          "Academic studies and professional training of Bruno Ilponse, senior fullstack developer.",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      meta: {
        title: `Projects · ${SITE_TITLE}`,
        description:
          "Selected software projects by Bruno Ilponse — consulting, education, and web work.",
      },
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/SkillsView.vue"),
      meta: {
        title: `Skills · ${SITE_TITLE}`,
        description:
          "Technical skills of Bruno Ilponse — fullstack languages, frameworks, and tools.",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      component: () => import("../views/NotFoundView.vue"),
      meta: {
        title: `Page not found · ${SITE_TITLE}`,
        description: "This page does not exist.",
      },
    },
  ],
});

router.afterEach((to) => {
  const title =
    typeof to.meta.title === "string" ? to.meta.title : SITE_TITLE;
  const description =
    typeof to.meta.description === "string"
      ? to.meta.description
      : DEFAULT_DESCRIPTION;
  const url = absoluteUrlForRoute(to.path);

  document.title = title;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[name="twitter:description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[property="og:url"]', url);
  setMetaContent('meta[name="twitter:url"]', url);
  setCanonicalHref(url);
});

export default router;
