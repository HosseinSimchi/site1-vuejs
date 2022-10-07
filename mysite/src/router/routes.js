import { createWebHistory, createRouter } from "vue-router";
import aboutSite from "../components/routes/aboutSite";
import blogSite from "../components/routes/blogSite";
import contactSite from "../components/routes/contactSite";
import postDetails from "../components/routes/postDetails";
import HomeSite from "../components/routes/HomeSite";
import signIn from "../components/routes/signIn";
import signUp from "../components/routes/signUp";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeSite,
  },
  {
    path: "/contact",
    name: "contact",
    component: contactSite,
  },
  {
    path: "/signin",
    name: "signIn",
    component: signIn,
  },
  {
    path: "/signup",
    name: "signUp",
    component: signUp,
  },
  {
    path: "/about",
    name: "about",
    component: aboutSite,
  },
  {
    path: "/postdetails",
    name: "postdetails",
    component: postDetails,
  },
  {
    path: "/blog",
    name: "blog",
    component: blogSite,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;