import { Header } from "antd/es/layout/layout";
import "./layout.css";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Input,
  Menu,
  MenuProps,
  Modal,
  Row,
} from "antd";
import { CloseOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import logoImage from "../../images/logo120.png";
import logoImageMb from "../../images/logo-mb.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import Link from "antd/es/typography/Link";
import { UserService } from "../../service/user-service";
import { IUserData } from "../../types/user";
import { axiosBackend } from "../../config/axiosBackend";

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

  const [userProfile, setUserProfile] = useState<IUserData | undefined>();

  const onSearch = (value: string) => {
    return;
  };

  const menus = [
    {
      key: 1,
      label: <Link onClick={() => navigate("/user")}>store</Link>,
      level: [1],
    },
    {
      key: 2,
      label: <Link onClick={() => showProfile()}>profile</Link>,
      level: [2],
    },
    {
      key: 3,
      label: <Link onClick={() => navigate("/history")}>history</Link>,
      level: [2],
    },
    {
      key: 4,
      label: <Link onClick={() => signout(() => {})}>Logout</Link>,
      level: [1, 2],
    },
  ];

  const showProfile = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* eslint-disable */
  const fetchUserProfile = async (token: string) => {
    try {
      axiosBackend.defaults.headers["Authorization"] = `Bearer ${token}`;
      const userService = UserService(axiosBackend);
      const res = await userService.profile();
      if (res && res.data) {
        setUserProfile(res.data);
        return;
      }
      signout(() => {});
      setUserProfile(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUserProfile(token);
    }
  }, []);
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
                <Dropdown
                  menu={{
                    items: userProfile
                      ? menus.filter((menu) =>
                          menu.level.includes(userProfile?.userLevel)
                            ? menu
                            : null
                        )
                      : menus,
                  }}
                  placement="bottomLeft"
                  arrow
                >
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
        <Row
          style={{ backgroundColor: "#f0f0f0", borderRadius: "15px" }}
          justify={"center"}
        >
          <Col span={24} style={{ paddingLeft: "1rem" }}>
            <p>ชื่อ : {userProfile?.fullName}</p>
            <p>เบอร์โทร : {userProfile?.phone}</p>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
