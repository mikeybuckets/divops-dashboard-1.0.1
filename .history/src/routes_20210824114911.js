import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bullet-list-67",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "PHP Checker",
    rtlName: "الرموز",
    icon: "tim-icons icon-upload",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-globe-2",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-cloud-download-93",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-chart-bar-32",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-molecule-40",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-atom",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-wifi",
    component: Rtl,
    layout: "/rtl",
  },
  {
    path: "/typography",
    name: "Shell Session",
    rtlName: "طباعة",
    icon: "tim-icons icon-vector",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Shell Session",
    rtlName: "طباعة",
    icon: "tim-icons icon-double-right",
    component: Typography,
    layout: "/admin",
  },
];

export default routes;
