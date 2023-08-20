import React from "react";
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
import { UserOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { useAuth } from "../../auth/auth";

const { Header, Content } = Layout;

const UserLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

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

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Row style={{ width: "100%" }}>
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
      </Header>
      <Layout>
        <Layout style={{ padding: "0 24px 24px ", margin: "2rem 0" }}>
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
