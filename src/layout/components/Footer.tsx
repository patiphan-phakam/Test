import { Footer } from "antd/es/layout/layout";
import "./footer.css";
import { Button, Col, Input, Layout, Row } from "antd";

import menu1 from "../../images/menu-footer-1.png";
import menu2 from "../../images/menu-footer-2.png";
import menu3 from "../../images/menu-footer-3.png";
import menu4 from "../../images/menu-footer-4.png";
import menu5 from "../../images/menu-footer-5.png";
import logo from "../../images/logo-white.png";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

export const Footers = () => {
  return (
    <Layout>
      <Footer className="scrollable-footer">
        <Row justify={"center"} className="footer-section1">
          <Col md={4}>
            <img src={menu1} alt="Logo1" />
          </Col>
          <Col md={4}>
            <img src={menu2} alt="Logo2" />
          </Col>
          <Col md={4}>
            <img src={menu3} alt="Logo3" />
          </Col>
          <Col md={4}>
            <img src={menu4} alt="Logo4" />
          </Col>
          <Col md={4}>
            <img src={menu5} alt="Logo5" />
          </Col>
        </Row>
        <Row className="footer-section2">
          <Col md={6} xs={24}>
            <Row>
              <Col md={24}>
                <img src={logo} alt="logo" width={"40%"} />
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <div className="address-content">
                  <h5 className="address-text">ร้าน น้องบิ๊กใบต้อง</h5>
                  <p className="address-text">ตำบลกมลาไสย อำเภอกมลาไสย</p>
                  <p className="address-text">จังหวัดกาฬสินธุ์ 4613</p>
                  <p className="address-text">เบอร์โทร : 080-924-3654</p>
                </div>
                <div className="address-content">
                  <h5 className="address-text">
                    ร้าน วิสาหกิจชุมชนเศรษฐกิจพอเพียงบ้านลาด
                  </h5>
                  <p className="address-text">ตำบลกมลาไสย อำเภอกมลาไสย</p>
                  <p className="address-text">จังหวัดกาฬสินธุ์ 4613</p>
                  <p className="address-text">เบอร์โทร : 080-924-3654</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={24}>
            <Row>
              <Col md={24}>
                <h5>About</h5>
              </Col>
            </Row>
            <Row>
              <Col md={24} style={{ marginBottom: "0.2rem" }}>
                <Link className="menu-list" to="">
                  About Us
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={24} className="about-menu">
                <Link className="menu-list" to="">
                  Why Baisri
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={24} className="about-menu">
                <Link className="menu-list" to="">
                  Blog
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={24} className="about-menu">
                <Link className="menu-list" to="">
                  Help Center
                </Link>
              </Col>
            </Row>
            <Row>
              <Col md={24} className="about-menu">
                <Link className="menu-list" to="">
                  Partner With Us
                </Link>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={24}>
            <Row>
              <Col md={24}>
                <h5>Top Destinations</h5>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="destinations-text">Udon Thani</p>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="destinations-text">Mahasara kham</p>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="destinations-text">Kalasin</p>
              </Col>
            </Row>
            <Row>
              <Col md={24}>
                <p className="destinations-text">Khon Kean</p>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={24}>
            <Row>Subscribe on our destination review newsletters</Row>
            <Row>
              <Col className="subscribe">
                <Input placeholder="Your Email"></Input>
                <Button type="primary">
                  <ArrowRightOutlined />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};
