import { Fragment } from "react";
import { menuItems } from "../../../App";
import { useNavigate } from "react-router-dom";
import Link from "antd/es/typography/Link";

export const HomeMenu: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-menu">
        {menuItems
          .filter((menuItem) => menuItem.home)
          .map((m) => (
            <Fragment key={m.label}>
              <Link onClick={() => navigate(m.path)}>
                <img
                  src={`/menu/${m.iconMenu}`}
                  style={{ width: "40px" }}
                  alt={m.iconMenu}
                />
              </Link>
            </Fragment>
          ))}
      </div>
    </>
  );
};
