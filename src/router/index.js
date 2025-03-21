import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/showTodos",
    name: "ShowTodos",
    component: () => import("@/views/showTodos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
