import { Fragment } from "react";
import { menuItems } from "../../../App";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";
import { Row } from "antd";

export const HomeMenu: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-menu">
        {menuItems
          .filter((menuItem) => menuItem.home)
          .map((m) => (
            <div
              key={m.label}
              className="div-menu-home"
              onClick={() => navigate(m.path)}
            >
              <div className="row-menu-home">
                <Link>
                  <img
                    src={`/menu/${m.iconMenu}`}
                    className="menu-home-icon"
                    alt={m.iconMenu}
                  />
                </Link>
                <p className="menu-home-label">{m.label}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
