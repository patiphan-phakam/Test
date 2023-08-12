import { ReactElement } from "react";
import { MainLayout } from "./layout/MainLayout";
import { DashboardOutlined } from "@ant-design/icons/lib/icons";
import { Home } from "./screens/home/home";
import { Baisir } from "./screens/baisri/barisri";
import "typeface-roboto";
import "./app.css";

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
      path: "/",
      name: "",
      showInMenu: true,
      component: <Home />,
    },
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
      path: "/baisri",
      name: "baisri",
      showInMenu: true,
      component: <Baisir />,
    },
  ];
  return <MainLayout menuItems={menuItems} />;
};

export default App;
