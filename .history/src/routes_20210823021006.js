/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tims.com/product/black-dashboard-react
* Copyright 2020 Creative tims (https://www.creative-tims.com)
* Licensed under MIT (https://github.com/creativemikeofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative tims

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
    icon: "tims-icons icon-bullet-list-67",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tims-icons icon-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tims-icons icon-pin",
    component: Map,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tims-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tims-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tims-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tims-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tims-icons icon-world",
    component: Rtl,
    layout: "/rtl",
  },
];
export default routes;
