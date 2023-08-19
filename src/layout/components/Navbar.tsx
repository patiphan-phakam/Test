import { Header } from "antd/es/layout/layout";
import "./layout.css";
import { Avatar, Button, Dropdown, Input, Menu, MenuProps, Modal } from "antd";
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import logoImage from "../../images/logo120.png";
import logoImageMb from "../../images/logo-mb.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import Link from "antd/es/typography/Link";

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
  const { accessToken, signout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    return;
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link onClick={() => showProfile()}>profile</Link>,
    },
    {
      key: "2",
      label: <Link onClick={() => signout(() => {})}>Logout</Link>,
    },
  ];

  const showProfile = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
              selectedKeys={[menuSelected ?? "home"]}
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
            {accessToken ? (
              <>
                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                  <Avatar icon={<UserOutlined />} className="avatar" />
                </Dropdown>
              </>
            ) : (
              <>
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
              </>
            )}
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
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{accessToken}</p>
      </Modal>
    </>
  );
};
