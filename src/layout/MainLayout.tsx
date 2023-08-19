import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Error } from "../screens/error/error";
import LoginPage from "../screens/login/Login";
import { LayoutMain } from "./components/LayoutMain";
import { MenuItem } from "../App";
import RegisterPage from "../screens/register/Register";
import RegisterStorePage from "../screens/registerStore/RegisterStore";
import ResetPage from "../screens/reset/Reset";
import UserLayout from "../screens/user/UserLayout";
import { Store } from "../screens/user/store";
import { MenuItemsUser } from "../screens/user/config/menu";
import { AuthProvider } from "../auth/auth";

interface Prop {
  menuItems: MenuItem[];
}

export const MainLayout: React.FC<Prop> = ({ menuItems }) => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"home"} replace />} />
          {menuItems.map((menuItem) => {
            if (menuItem.subMenu) {
              return (
                <Route
                  key={menuItem.label}
                  path={menuItem.path}
                  element={
                    <LayoutMain
                      menuItems={menuItems
                        .filter((menuItem) => menuItem.path !== "/")
                        .filter((menuItem) => !menuItem.path.includes("*"))}
                      title={menuItem.label}
                      current={menuItem.name}
                    >
                      {menuItem.component}
                    </LayoutMain>
                  }
                />
              );
            }
            return (
              <Route
                key={menuItem.label}
                path={menuItem.path}
                element={
                  <LayoutMain
                    menuItems={menuItems
                      .filter((menuItem) => menuItem.path !== "/")
                      .filter((menuItem) => !menuItem.path.includes("*"))}
                    title={menuItem.label}
                    current={menuItem.name}
                  >
                    {menuItem.component}
                  </LayoutMain>
                }
              />
            );
          })}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/store" element={<RegisterStorePage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Store />} />
            {MenuItemsUser.map((menuItem) => (
              <Route
                key={menuItem.key}
                path={menuItem.path}
                element={<Outlet />}
              >
                {menuItem.component}
              </Route>
            ))}
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
