import { createWebHistory, createRouter } from "vue-router";
import OAuth from "./components/OAuth.vue";

const routes = [
  {
    path: "/oauth",
    component: OAuth,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
