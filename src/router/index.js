import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/main/Home"),
  },
  {
    path: "/dashboard/",
    name: "AdminPanel",
    component: () => import("@/views/admin/AdminPanel"),
    children: [
      {
        path: "movies",
        component: () => import("@/views/admin/movies/Movies"),
      },
      {
        path: "movies/form/:id",
        component: () => import("@/views/admin/movies/MovieForm"),
      },
      {
        path: "sessions",
        component: () => import("@/views/admin/sessions/Sessions"),
      },
    ],
  },
  {
    path: "/movies/:id",
    name: "MovieInfo",
    component: () => import("@/views/main/MovieInfo"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
