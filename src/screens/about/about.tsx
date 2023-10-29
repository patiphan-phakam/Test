import { Card, Col, Row, Image, Space } from "antd";
import React from "react";
import homeLearn from "../../images/home-learn.png";
import call from "../../images/call.png";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

export const About: React.FC<{}> = () => {
  return (
    <>
      <Content
        style={{
          paddingLeft: "5em",
          paddingRight: "5em",
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="container-content">
          <div className="about-image">
            <div className="about-text">เกียวกับเรา</div>
          </div>

          <Row style={{ marginTop: "5em" }}>
            <Col md={10}>
              <img
                src={homeLearn}
                alt="homePicture1"
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "5px",
                }}
              />
            </Col>
            <Col md={2} />
            <Col md={10}>
              <h1
                style={{
                  color: "#028910",
                  wordWrap: "break-word",
                }}
              >
                วิสัยทัศน์ (Vision)
              </h1>
              <p style={{ fontSize: "24px" }}>
                กิจการเพื่อสังคมที่พัฒนาคุณภาพชีวิตคนท้องถิ่นและอนุรักษ์ศิลปวัฒนธรรมอย่างยั่งยืน
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: "5em" }}>
            <Col md={10}>
              <h1
                style={{
                  color: "#028910",
                  wordWrap: "break-word",
                }}
              >
                พันธกิจ (Mission)
              </h1>
              <p style={{ fontSize: "24px" }}>
                บริษัท เคนเซนต์ จำกัด มุ่งมั่นพัฒนาอาชีพ ให้กับชุมชน
                ร่วมผลิตและจัดจำหน่ายสินค้าชุมชน
                สร้างรายได้ให้กับองค์กรไปพร้อมกับการเพิ่มราย
                และพัฒนาคุณภาพชีวิตคนในท้องถิ่นอย่างยั่งยืน
              </p>
            </Col>
            <Col md={2}></Col>
            <Col md={10}>
              <img
                src={homeLearn}
                alt="homePicture1"
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "5px",
                }}
              />
            </Col>
          </Row>

          <Row style={{ margin: "3em 0" }}>
            <Col offset={6} span={12}>
              <Card>
                <Row justify={"center"}>
                  <Image preview={false} src={call} />
                </Row>
                <Row justify={"center"}>ติดต่อสอบถาม</Row>
                <Row justify={"center"}>
                  <Space>
                    <MailOutlined style={{ color: "#028910" }} />
                    buysri.believe@gmail.com
                  </Space>
                </Row>
                <Row justify={"center"}>
                  <Space>
                    <PhoneOutlined style={{ color: "#028910" }} />
                    0944844791
                  </Space>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
};
