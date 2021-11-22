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
      {
        path: "sessions/form/:id",
        component: () => import("@/views/admin/sessions/SessionForm"),
      },
    ],
  },
  {
    path: "/movies/:id",
    name: "MovieInfo",
    component: () => import("@/views/main/MovieInfo"),
  },
  {
    path: "/movie/cart/:id",
    name: "Cart",
    component: () => import("@/views/main/Cart"),
  },
  {
    path: "/success",
    name: "CartSuccess",
    component: () => import("@/views/main/CartSuccess"),
  },
  {
    path: "/auth",
    name: "AuthPage",
    component: () => import("@/views/main/Auth"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("@/views/main/Register"),
  },
  {
    path: "/aurthor",
    name: "AurthorPage",
    component: () => import("@/views/main/Author"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
