import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/red",
    name: "Red",
    component: () => import("../views/Red_light"),
  },
  {
    path: "/yellow",
    name: "Yellow",
    component: () => import("../views/Yellow_light"),
  },
  {
    path: "/green",
    name: "Green",
    component: () => import("../views/Green_light"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
