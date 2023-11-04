import { Header } from "antd/es/layout/layout";
import "./layout.css";
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  MenuProps,
  Modal,
  Row,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import logoImage from "../../images/logo120.png";
// import logoImageMb from "../../images/logo-mb.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../auth/auth";
import Link from "antd/es/typography/Link";
import { UserService } from "../../service/user-service";
import { IUserData } from "../../types/user";
import { axiosBackend } from "../../config/axiosBackend";
import { Search } from "../../components/search";

// const { Search } = Input;

interface prop {
  menu: MenuProps["items"];
  handleMenu: (status: boolean) => void;
  menuOpen: boolean;
  menuSelected: string;
  title: string;
}

export const Navbar: React.FC<prop> = ({
  menu,
  handleMenu,
  menuOpen,
  menuSelected,
  title,
}) => {
  const { accessToken, signout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<IUserData | undefined>();

  // const onSearch = (value: string) => {
  //   return;
  // };

  const menus = [
    {
      key: 1,
      label: <Link onClick={() => navigate("/user")}>store</Link>,
      level: [1],
    },
    {
      key: 2,
      label: <Link onClick={() => showProfile()}>profile</Link>,
      level: [0, 1, 2],
    },
    {
      key: 3,
      label: <Link onClick={() => navigate("/history")}>history</Link>,
      level: [2],
    },
    {
      key: 4,
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
      level: [0, 1, 2],
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
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const text = searchParams.get("text");

  // const { pathname } = useLocation();
  // const defaultId = pathname.split("/");
  // const getId = defaultId[2] === "product" ? defaultId[3] : defaultId[2];

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Header className="app-header content">
          {/* <div
          className="mobile-menu-toggle"
          onClick={(e) => handleMenu(!menuOpen)}
        >
          {menuOpen ? (
            <CloseOutlined style={{ color: "green" }} />
          ) : (
            <MenuOutlined style={{ color: "green" }} />
          )}
        </div> */}

          <div className="left-section">
            {/* <div className="logo-mobile">
            <img src={logoImageMb} alt="Logo" />
          </div> */}
            <div
              className="logo"
              style={{ marginTop: "1rem", cursor: "pointer" }}
              onClick={() => navigate("/home")}
            >
              <img src={logoImage} alt="Logo" />
            </div>
            <div className="menu-custom">
              {/* <Menu
              mode="horizontal"
              items={menu}
              selectedKeys={[menuSelected ?? "home"]}
            /> */}
              <Search />
            </div>
          </div>
          <div className="right-section">
            {/* <div className="search">
            <Search
              className="custom-input"
              allowClear
              onSearch={onSearch}
              style={{ width: "100%" }}
            />
          </div> */}
            <div className="login" style={{ marginTop: "0.5rem" }}>
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
                    className="white-button"
                    onClick={() => navigate("/login")}
                  >
                    LOGIN
                  </Button>
                  <Button
                    className="green-button"
                    onClick={() => navigate("/register")}
                  >
                    SIGN UP
                  </Button>
                </>
              )}
            </div>
            <div className="login-mobile" style={{ marginTop: "0.9rem" }}>
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
      </div>
      {menuSelected !== "home" && (
        <div style={{ backgroundColor: "white", border: "1px solid #f0f0f0 " }}>
          <Header
            className="app-header content"
            style={{ boxShadow: "inherit" }}
          >
            {type && text ? (
              <>
                <Breadcrumb
                  items={
                    type && text
                      ? [
                          {
                            title: (
                              <Link onClick={() => navigate("/home")}>
                                หน้าหลัก
                              </Link>
                            ),
                          },
                          {
                            title: `${title}${
                              type === "store" ? "ร้านค้า" : "สินค้า"
                            }`,
                          },
                          {
                            title: text,
                          },
                        ]
                      : [
                          {
                            title: (
                              <Link onClick={() => navigate("/home")}>
                                หน้าหลัก
                              </Link>
                            ),
                          },
                          {
                            title: title,
                          },
                        ]
                  }
                />
              </>
            ) : (
              <Breadcrumb
                items={[
                  {
                    title: (
                      <Link onClick={() => navigate("/home")}>หน้าหลัก</Link>
                    ),
                  },
                  {
                    title: title,
                  },
                ]}
              />
            )}
          </Header>
        </div>
      )}

      <Modal
        title="Profile"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Row
          style={{
            backgroundColor: "#f0f0f0",
            borderRadius: "15px",
          }}
          justify={"center"}
        >
          <Col span={24} style={{ paddingLeft: "1rem" }}>
            <p>ชื่อ : {userProfile?.fullName}</p>
            <p>เบอร์โทร : {userProfile?.phone}</p>
            <p>อีเมล : {userProfile?.email}</p>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
