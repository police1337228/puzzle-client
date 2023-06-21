import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

// import store from "../store/index";

Vue.use(VueRouter);

function ifAuthenticated(to, from, next) {
  next();
  // if (
  //   store.state.auth.isUserLoggedIn === true &&
  //   store.state.auth.token !== null &&
  //   store.state.auth.user !== null
  // ) {
  //   next();
  // } else {
  //   if (from.name === "Main") {
  //     router.currentRoute.query["message"] = null;
  //     router.push({
  //       path: router.currentRoute.fullPath,
  //       query: { message: "login" },
  //     });
  //   } else {
  //     router.push({
  //       name: "Main",
  //       query: { message: "login" },
  //     });
  //   }
  // }
}

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/alphabet",
    name: "Alphabet",
    component: () => import("../views/Alphabet.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    component: () => import("../views/Dictionary.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/dictionary/:id",
    name: "DictionaryItem",
    component: () => import("../views/DictionaryItem.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/Game.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/lectures",
    name: "Lectures",
    component: () => import("../views/Lectures.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/lectures/:id",
    name: "LectureItem",
    component: () => import("../views/LectureItem.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/numbers",
    name: "Numbers",
    component: () => import("../views/Numbers.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    beforeEnter: ifAuthenticated,
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
  routes,
});

export default router;
