import { createWebHistory, createRouter } from "vue-router";
import Events from "../components/Events.vue";
import Accordion from "../components/Accordion.vue";
import Carousel from "../components/Carousel.vue";
import Collapse from "../components/Collapse.vue";
import Dial from "../components/Dial.vue";
import Dismiss from "../components/Dismiss.vue";
import Drawer from "../components/Drawer.vue";
import Dropdown from "../components/Dropdown.vue";
import Popover from "../components/Popover.vue";
import Tabs from "../components/Tabs.vue";
import Tooltip from "../components/Tooltip.vue";
import Modal from "../components/Modal.vue";
// import Navbar from "../components/Navbar.vue"
import LandingPage from "../pages/LandingPage.vue"
import Clients from "../pages/Clients.vue"
import LogIn from "../pages/LogIn.vue"
import Admin from "../pages/Admin.vue"
import BarChart from "../components/BarChart.vue";


const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/landing'
  },
  {
    path: "/landing",
    name: "Landing",
    component: LandingPage,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "/clients",
        name: "Clients",
        component: Clients,
      },
    ]
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/barchart",
    name: "BarChart",
    component: BarChart,
  },
  {
    path: "/accordion",
    name: "Accordion",
    component: Accordion,
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: Collapse,
  },
  {
    path: "/dial",
    name: "Dial",
    component: Dial,
  },
  {
    path: "/dismiss",
    name: "Dismiss",
    component: Dismiss,
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: Drawer,
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: Dropdown,
  },
  {
    path: "/popover",
    name: "Popover",
    component: Popover,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
  {
    path: "/tooltip",
    name: "Tooltip",
    component: Tooltip,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;