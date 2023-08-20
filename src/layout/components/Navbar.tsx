import { Header } from "antd/es/layout/layout";
import "./layout.css";
import { Avatar, Button, Dropdown, Input, Menu, MenuProps, Modal } from "antd";
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import logoImage from "../../images/logo120.png";
import logoImageMb from "../../images/logo-mb.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import Link from "antd/es/typography/Link";
import { UserService } from "../../service/user-service";
import { IUserData } from "../../types/user";

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
  const { accessToken, signout, authInstance } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const userService = UserService(authInstance);
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();

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

  /* eslint-disable */
  const fetchUserProfile = async () => {
    try {
      const { data } = await userService.profile();
      if (data) {
        setUserProfile(data);
        return;
      }
      setUserProfile(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchUserProfile();
    }
  }, [accessToken]);
  /* eslint-disable */

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
        title="Profile"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <p>{userProfile?.fullName}</p>
      </Modal>
    </>
  );
};
