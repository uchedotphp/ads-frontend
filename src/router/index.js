import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    // path: "/",
    // name: "Editor",
    // component: () =>
    //   import(/* webpackChunkName: "Editor" */ "../views/Editor.vue"),
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Editor",
        component: () => import(/* webpackChunkName: "Editor" */ "../views/Editor.vue"),
      },
    ],
  },
  {
    path: "/demo/:idem",
    name: "Demo",
    component: () => import(/* webpackChunkName: "Demo" */ "../views/Demo.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    name: "ErrorNotFound",
    component: () =>
      import(
        /* webpackChunkName: "ErrorNotFound" */ "../views/ErrorNotFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
