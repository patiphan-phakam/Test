import React, { useEffect } from "react";
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

const { Header, Content } = Layout;

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const { accessToken, signout } = useAuth();

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
      label: (
        <Link onClick={() => navigate("/user/store")}>ตั้งค่าข่าวสาร</Link>
      ),
    },
  ];

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

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

export default AdminLayout;
