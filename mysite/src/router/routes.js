import { createWebHistory, createRouter } from "vue-router";
import aboutSite from "../components/routes/aboutSite";
import blogSite from "../components/routes/blogSite";
import contactSite from "../components/routes/contactSite";
import postDetails from "../components/routes/postDetails";
import HomeSite from "../components/routes/HomeSite";



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