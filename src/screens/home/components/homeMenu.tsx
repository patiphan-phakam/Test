import { Fragment } from "react";
import { menuItems } from "../../../App";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const HomeMenu: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-menu">
        {menuItems
          .filter((menuItem) => menuItem.home)
          .map((m) => (
            <Fragment key={m.label}>
              <Button
                className="green-button"
                style={{ margin: 0 }}
                onClick={() => navigate(m.path)}
              >
                {m.label}
              </Button>
            </Fragment>
          ))}
      </div>
    </>
  );
};
