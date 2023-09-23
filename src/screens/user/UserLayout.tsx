import React, { useEffect, useState } from "react";
import {
  Col,
  Layout,
  Row,
  theme,
  Image,
  Avatar,
  Dropdown,
  MenuProps,
} from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuUser } from "./Menu";
import logo from "../../images/logo120.png";
import { MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { useAuth } from "../../auth/auth";
import { axiosBackend } from "../../config/axiosBackend";
import { UserService } from "../../service/user-service";
import { IUserData } from "../../types/user";

const { Header, Content } = Layout;

const UserLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();

  const { signout } = useAuth();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => {
            signout(() => {});
            navigate("/login");
          }}
        >
          Logout
        </Link>
      ),
    },
  ];

  const itemsMobile: MenuProps["items"] = [
    {
      key: "11",
      label: <Link onClick={() => navigate("/user/store")}>ตั้งค่าร้าน</Link>,
    },
    {
      key: "22",
      label: (
        <Link onClick={() => navigate("/user/product")}>ตั้งค่าสินค้า</Link>
      ),
    },
  ];

  const fetchUserProfile = async (token: string) => {
    try {
      axiosBackend.defaults.headers["Authorization"] = `Bearer ${token}`;
      const userService = UserService(axiosBackend);
      const res = await userService.profile();
      if (res && res.data && res.data.userLevel === 1) {
        setUserProfile(res.data);
      } else {
        signout(() => {});
        setUserProfile(undefined);
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchUserProfile(accessToken);
    } else {
      signout(() => {});
      setUserProfile(undefined);
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Row className="user-menu">
          <Col md={2}>
            <Image
              preview={false}
              src={logo}
              alt={"user-logo"}
              style={{ width: "50%" }}
            />
          </Col>
          <Col md={18}>
            <MenuUser />
          </Col>
          <Col md={4} style={{ textAlign: "right" }}>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Avatar icon={<UserOutlined />} className="avatar" />
            </Dropdown>
          </Col>
        </Row>
        <Row className="user-menu-mobile">
          <Col span={4}>
            <Dropdown
              menu={{ items: itemsMobile }}
              placement="bottomLeft"
              arrow
            >
              <Avatar icon={<MenuUnfoldOutlined />} className="avatar" />
            </Dropdown>
          </Col>
          <Col span={8}>
            <Image
              preview={false}
              src={logo}
              alt={"user-logo"}
              style={{ width: "50%" }}
            />
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Dropdown menu={{ items }} placement="bottomLeft" arrow>
              <Avatar icon={<UserOutlined />} className="avatar" />
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Layout className="user-layout">
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
