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
export interface MenuItem {
  label: string;
  icon: React.ReactElement;
  path: string;
  name: string;
  exact?: boolean;
  showInMenu: boolean;
  subMenu?: MenuItem[];
  component: ReactElement;
}

const App = () => {
  const menuItems: MenuItem[] = [
    {
      label: "หน้าแรก",
      icon: <DashboardOutlined />,
      path: "/home",
      name: "home",
      showInMenu: true,
      component: <Home />,
    },
    {
      label: "บายศรี",
      icon: <DashboardOutlined />,
      path: "/baisri/*",
      name: "baisri",
      showInMenu: true,
      component: <BaisriRoute baseUrl="/baisri" />,
    },
    {
      label: "บายศรี",
      icon: <DashboardOutlined />,
      path: "/baisri",
      name: "baisri",
      showInMenu: true,
      component: <BaisriRoute baseUrl="/baisri" />,
    },
    // {
    //   label: "หมอพราหมณ์",
    //   icon: <DashboardOutlined />,
    //   path: "/brahman/*",
    //   name: "brahman",
    //   showInMenu: true,
    //   component: <BrahmanRoute baseUrl="/brahman" />,
    // },
    // {
    //   label: "หมอพราหมณ์",
    //   icon: <DashboardOutlined />,
    //   path: "/brahman",
    //   name: "brahman",
    //   showInMenu: true,
    //   component: <BrahmanRoute baseUrl="/brahman" />,
    // },
    // {
    //   label: "บน/แก้บน",
    //   icon: <DashboardOutlined />,
    //   path: "/votive/*",
    //   name: "votive",
    //   showInMenu: true,
    //   component: <VotiveRoute baseUrl="/votive" />,
    // },
    // {
    //   label: "บน/แก้บน",
    //   icon: <DashboardOutlined />,
    //   path: "/votive",
    //   name: "votive",
    //   showInMenu: true,
    //   component: <VotiveRoute baseUrl="/votive" />,
    // },
    {
      label: "ข่าวสารความรู้",
      icon: <DashboardOutlined />,
      path: "/news",
      name: "news",
      showInMenu: true,
      component: <News />,
    },
    {
      label: "เกี่ยวกับเรา",
      icon: <DashboardOutlined />,
      path: "/about",
      name: "about",
      showInMenu: true,
      component: <About />,
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
  return <MainLayout menuItems={menuItems} />;
};

export default App;
