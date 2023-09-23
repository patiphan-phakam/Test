import { Menu } from "antd";
import { MenuItemsAdmin } from "./config/menu";
import { useLocation, useNavigate } from "react-router-dom";

export const MenuUser = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const items = MenuItemsAdmin.map((menuItem) => {
    return {
      key: menuItem.key,
      icon: menuItem.icon,
      label: menuItem.label,
      onClick: () => navigate(menuItem.path),
    };
  });
  const ks = pathname.slice(1).split("/");

  return (
    <Menu
      mode="horizontal"
      selectedKeys={ks.slice(-1)[0] === "admin" ? ["news"] : ks.slice(-1)}
      defaultOpenKeys={ks.length > 1 ? ks.slice(0, 1) : ["news"]}
      style={{ height: "100%", borderRight: 0 }}
      items={items}
    />
  );
};
