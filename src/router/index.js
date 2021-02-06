import Vue from "vue";
// import VueRouter from "vue-router";
import Router from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
/* 
  component definition : use following... 
*/
const About = () => import(/* webpackChunkName: "about" */ "../views/About");
const DestinationDetails = () =>
  import(
    /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"
  );
const ExperienceDetails = () =>
  import(
    /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails"
  );
const NotFound = () =>
  import(/* webpackChunkName: "NotFound" */ "../views/NotFound");
const User = () => import(/* webpackChunkName: "User" */ "../views/User");
const Login = () => import(/* webpackChunkName: "Login" */ "../views/Login");
const Invoices = () =>
  import(/* webpackChunkName: "Invoices" */ "../views/Invoices");

/*
  Note:
  webpackChunkName: "name"
  console log / network / click any button or link loaded 01.js etc...
  Fixed to 01.js > link name .js
*/
// Vue.use(VueRouter);
Vue.use(Router);

// export default new Router({
const router = new Router({
  linkExactActiveClass: "custom-active-link",
  mode: "history",
  // base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        // if (to.has === "#experience") {
        //   position.offset = {
        //     y: 250
        //   };
        // }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/about",
      name: "about",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "/details/:slug",
      name: "DestinationDetails",
      props: true,
      component: DestinationDetails,
      children: [
        {
          //path: "/details/:slug/:experienceSlug"
          path: ":experienceSlug",
          name: "experienceDetails",
          props: true,
          component: ExperienceDetails
        }
      ],
      // Experience page for new page...
      // ,
      // {
      //   path: "/details/:slug/:experienceSlug",
      //   name: "experienceDetails",
      //   props: true,
      //   component: () =>
      //     import( /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails")
      // }
      beforeEnter: (to, from, next) => {
        const exists = store.destinations.find(
          destination => destination.slug === to.params.slug
        );
        if (exists) {
          next();
        } else {
          next({
            name: "notFound"
          });
        }
      }
    },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/invoices",
      name: "invoices",
      component: Invoices,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/404",
      alias: "*",
      name: "notFound",
      component: NotFound
    }
  ]
});
router.beforeEach((to, from, next) => {
  // if (to.name.requiresAuth) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // nedd to login
    if (!store.user) {
      next({
        name: "login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
    //
  } else {
    next();
  }
});
export default router;
