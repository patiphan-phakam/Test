import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "../screens/error/error";
import LoginPage from "../screens/login/Login";
import { LayoutMain } from "./components/LayoutMain";
import { MenuItem } from "../App";
import RegisterPage from "../screens/register/Register";
import RegisterStorePage from "../screens/registerStore/RegisterStore";
import ResetPage from "../screens/reset/Reset";

interface Prop {
  menuItems: MenuItem[];
}

export const MainLayout: React.FC<Prop> = ({ menuItems }) => {
  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <BrowserRouter>
      <Routes>
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
        <Route
          path="/login"
          element={<LoginPage handleLogin={handleLogin} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/store" element={<RegisterStorePage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
