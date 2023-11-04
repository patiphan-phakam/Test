import { ReactElement } from "react";
import { MainLayout } from "./layout/MainLayout";
import { DashboardOutlined } from "@ant-design/icons/lib/icons";
import { Home } from "./screens/home/home";
import "typeface-roboto";
import "./app.css";
import { BaisriRoute } from "./screens/baisri/baisriRoute";
import { History } from "./screens/history";
import { News } from "./screens/news/news";
import { About } from "./screens/about/about";
import { BrahmanRoute } from "./screens/brahman/brahmanRoute";
import { VotiveRoute } from "./screens/votive/votiveRoute";
import { Search } from "./screens/search/Search";
export interface MenuItem {
  label: string;
  icon: React.ReactElement;
  path: string;
  name: string;
  exact?: boolean;
  showInMenu: boolean;
  subMenu?: MenuItem[];
  component: ReactElement;
  home?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    label: "หน้าแรก",
    icon: <DashboardOutlined />,
    path: "/home",
    name: "home",
    showInMenu: true,
    home: false,
    component: <Home />,
  },
  {
    label: "บายศรี",
    icon: <DashboardOutlined />,
    path: "/baisri/*",
    name: "baisri",
    showInMenu: false,
    home: false,
    component: <BaisriRoute baseUrl="/baisri" />,
  },
  {
    label: "บายศรี",
    icon: <DashboardOutlined />,
    path: "/baisri",
    name: "baisri",
    showInMenu: true,
    home: true,
    component: <BaisriRoute baseUrl="/baisri" />,
  },
  {
    label: "หมอพราหมณ์",
    icon: <DashboardOutlined />,
    path: "/brahman/*",
    name: "brahman",
    showInMenu: false,
    home: false,
    component: <BrahmanRoute baseUrl="/brahman" />,
  },
  {
    label: "หมอพราหมณ์",
    icon: <DashboardOutlined />,
    path: "/brahman",
    name: "brahman",
    showInMenu: true,
    home: true,
    component: <BrahmanRoute baseUrl="/brahman" />,
  },
  {
    label: "บน/แก้บน",
    icon: <DashboardOutlined />,
    path: "/votive/*",
    name: "votive",
    showInMenu: false,
    home: false,
    component: <VotiveRoute baseUrl="/votive" />,
  },
  {
    label: "บน/แก้บน",
    icon: <DashboardOutlined />,
    path: "/votive",
    name: "votive",
    showInMenu: true,
    home: true,
    component: <VotiveRoute baseUrl="/votive" />,
  },
  {
    label: "ข่าวสารความรู้",
    icon: <DashboardOutlined />,
    path: "/news",
    name: "news",
    showInMenu: true,
    home: true,
    component: <News />,
  },
  {
    label: "เกี่ยวกับเรา",
    icon: <DashboardOutlined />,
    path: "/about",
    name: "about",
    showInMenu: true,
    home: true,
    component: <About />,
  },
  {
    label: "ค้นหา",
    icon: <DashboardOutlined />,
    path: "/search",
    name: "search",
    showInMenu: false,
    component: <Search />,
  },
  {
    label: "ประวัติการสั่งซื้อ",
    icon: <DashboardOutlined />,
    path: "/history",
    name: "history",
    showInMenu: false,
    component: <History />,
  },
];
const App = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default App;
