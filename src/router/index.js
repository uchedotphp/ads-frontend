import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Editor",
    component: () =>
      import(/* webpackChunkName: "Editor" */ "../views/Editor.vue"),
  },
    {
      path: "/demo/:idem",
      name: "Demo",
      component: () =>
        import(/* webpackChunkName: "Demo" */ "../views/Demo.vue"),
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;