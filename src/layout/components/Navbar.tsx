import { Header } from "antd/es/layout/layout";
import "./layout.css";
import { Button, Input, Menu, MenuProps } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import logoImage from "../../images/logo120.png";
import logoImageMb from "../../images/logo-mb.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

interface prop {
  menu: MenuProps["items"];
  handleMenu: (status: boolean) => void;
  menuOpen: boolean;
  menuSelected: string;
}

export const Navbar: React.FC<prop> = ({
  menu,
  handleMenu,
  menuOpen,
  menuSelected,
}) => {
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    console.log("🚀 ~ file: Navbar.tsx:28 ~ value:", value);
  };

  return (
    <>
      <Header className="app-header">
        <div
          className="mobile-menu-toggle"
          onClick={(e) => handleMenu(!menuOpen)}
        >
          {menuOpen ? (
            <CloseOutlined style={{ color: "green" }} />
          ) : (
            <MenuOutlined style={{ color: "green" }} />
          )}
        </div>

        <div className="left-section">
          <div className="logo-mobile">
            <img src={logoImageMb} alt="Logo" />
          </div>
          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
          <div className="menu-custom">
            <Menu
              mode="horizontal"
              items={menu}
              selectedKeys={[menuSelected]}
            />
          </div>
        </div>
        <div className="right-section">
          <div className="search">
            <Search
              className="custom-input"
              allowClear
              onSearch={onSearch}
              style={{ width: "100%" }}
            />
          </div>
          <div className="login">
            <Button
              size="small"
              className="white-button"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>
            <Button
              size="small"
              className="green-button"
              onClick={() => navigate("/register")}
            >
              SIGN UP
            </Button>
          </div>
          <div className="login-mobile">
            <Button
              size="small"
              className="white-button"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>
          </div>
        </div>
      </Header>
    </>
  );
};
