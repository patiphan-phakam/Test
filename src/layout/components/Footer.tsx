import { HeartOutlined } from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";
import "./footer.css";
import { Col, Row } from "antd";

import menu1 from "../../images/menu-footer-1.png";
import menu2 from "../../images/menu-footer-2.png";
import menu3 from "../../images/menu-footer-3.png";
import menu4 from "../../images/menu-footer-4.png";
import menu5 from "../../images/menu-footer-5.png";

export const Footers = () => {
  return (
    <Footer>
      <Row justify={"center"} className="footer-section1">
        <Col md={4}>
          <img src={menu1} alt="Logo1" style={{ width: "200px" }} />
        </Col>
        <Col md={4}>
          <img src={menu2} alt="Logo2" style={{ width: "150px" }} />
        </Col>
        <Col md={4}>
          <img src={menu3} alt="Logo3" style={{ width: "150px" }} />
        </Col>
        <Col md={4}>
          <img src={menu4} alt="Logo4" style={{ width: "150px" }} />
        </Col>
        <Col md={4}>
          <img src={menu5} alt="Logo5" style={{ width: "150px" }} />
        </Col>
      </Row>
      <Row className="footer-section2">
        <Col md={6}>
          <Row justify={"center"}>
            <div style={{ width: "200px" }}>
              ร้าน น้องบิ๊กใบต้อง ตำบลกมลาไสย อำเภอกมลาไสย จังหวัดกาฬสินธุ์ 4613
              เบอร์โทร : 080-924-3654
            </div>
          </Row>
          <Row justify={"center"}>
            <div style={{ width: "200px" }}>
              ร้าน วิสาหกิจชุมชนเศรษฐกิจพอเพียงบ้านลาด 16 หมู่ 7 ตำบลหลักเมือง
              อำเภอกมลาไสย จังหวัดกาฬสินธุ์ 46130 เบอร์โทร : 080-924-3654
            </div>
          </Row>
        </Col>
        <Col md={6}>
          <Row justify={"center"}>
            <a href="">menu1</a>
          </Row>
          <Row justify={"center"}>
            <a href="">menu2</a>
          </Row>
          <Row justify={"center"}>
            <a href="">menu3</a>
          </Row>
          <Row justify={"center"}>
            <a href="">menu4</a>
          </Row>
          <Row justify={"center"}>
            <a href="">menu5</a>
          </Row>
        </Col>
        <Col md={6}>
          <Row justify={"center"}>
            <h5>Top Destinations</h5>
          </Row>
          <Row justify={"center"}>Udon Thani</Row>
          <Row justify={"center"}>Mahasara kham</Row>
          <Row justify={"center"}>Kalasin</Row>
          <Row justify={"center"}>Khon Kean</Row>
        </Col>
        <Col md={6}>
          <Row>Subscribe on our destination review newsletters</Row>
        </Col>
      </Row>
    </Footer>
  );
};
