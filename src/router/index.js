import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "登录",
    component: LoginView,
  },
  {
    path: "/register",
    name: "注册",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/usermain",
    redirect: "/usermain/profile",
    component: () => import("@/views/userMain/index.vue"),
    children: [
      {
        path: "profile",
        name: "个人中心",
        component: () => import("@/views/userMain/profile.vue"),
      },
      {
        path: "transfer",
        name: "操作转账",
        component: () => import("@/views/userMain/transfer.vue"),
      },
    ],
  },
  {
    path: "/managermain",
    redirect: "/managermain/account",
    component: () => import("@/views/managerMain/index.vue"),
    children: [
      {
        path: "account",
        name: "操作开户",
        component: () => import("@/views/managerMain/Account.vue"),
      },
      {
        path: "password",
        name: "操作改密",
        component: () => import("@/views/managerMain/Password.vue"),
      },
      {
        path: "money",
        name: "余额管理",
        component: () => import("@/views/managerMain/Money.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 添加路由守卫

export default router;
