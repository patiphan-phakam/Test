import { ReactElement } from "react";
import { MainLayout } from "./layout/MainLayout";
import { DashboardOutlined } from "@ant-design/icons/lib/icons";
import { Home } from "./screens/home/home";
import "typeface-roboto";
import "./app.css";
import { BaisriRoute } from "./screens/baisri/baisriRoute";
export interface MenuItem {
  label: string;
  icon: React.ReactElement;
  path: string;
  name: string;
  exact?: boolean;
  showInMenu?: boolean;
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
  ];
  return <MainLayout menuItems={menuItems} />;
};

export default App;
