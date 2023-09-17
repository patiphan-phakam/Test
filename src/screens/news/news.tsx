import { Col, Row, Button } from "antd";
import React from "react";
import homeLearn from "../../images/home-learn.png";
import homeBelive from "../../images/home-belive.png";
import homeSocial from "../../images/home-social.png";
import { ArrowRightOutlined } from "@ant-design/icons";

export const News: React.FC<{}> = () => {
  return (
    <>
      <div className="container-content">
        <Row className="container">
          <h2
            style={{
              color: "#028910",
              wordWrap: "break-word",
            }}
          >
            ข่าวสารความรู้
          </h2>
        </Row>
        <Row className="container">
          <Col span={24}>
            <Row>
              <Col md={12}>
                <img
                  src={homeBelive}
                  alt="homePicture1"
                  width={"100%"}
                  style={{ borderRadius: "24px" }}
                />
              </Col>
              <Col md={12} style={{ padding: "0 2em" }}>
                <h3 style={{ color: "#028910" }}>การพัฒนาสังคมและชุมชน</h3>
                <p>
                  เราคือกลุ่มกิจการเพื่อสังคมที่พร้อมพัฒนาท้องถิ่นทางด้านอาชีพและวัฒนธรรมให้กับสังคม
                </p>
                <Button className="green-button">
                  Read more <ArrowRightOutlined />
                </Button>
              </Col>
            </Row>
            <Row style={{ margin: "3em 0" }}>
              <Col md={12}>
                <Row>
                  <Col md={8}>
                    <img
                      src={homeLearn}
                      alt="homePicture1"
                      width={"100%"}
                      height={"100%"}
                      style={{ borderRadius: "24px" }}
                    />
                  </Col>
                  <Col md={16} style={{ padding: "0 2em" }}>
                    <h3 style={{ color: "#028910" }}>เราคือหน่วยการเรียนรู้</h3>
                    <p>
                      ทีมงานของเราคือกลุ่มคนที่คอยช่วยเหลือและพัฒนาองค์ความรู้ด้านบายศรีและพิธีกรรมให้กับชุมชนและผู้ที่สนใจเรียนรู้อนุรักษ์วัฒนธรรมพิธีกรรมท้องถิ่นไทย
                      สืบสานต่อยอดจากรุ่นสู่รุ่น
                    </p>
                    <Button className="green-button">
                      Read more <ArrowRightOutlined />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={8}>
                    <img
                      src={homeSocial}
                      alt="homePicture1"
                      width={"100%"}
                      height={"100%"}
                      style={{ borderRadius: "24px" }}
                    />
                  </Col>
                  <Col md={16} style={{ padding: "0 2em" }}>
                    <h3 style={{ color: "#028910" }}>ความเชื่อ</h3>
                    <p>
                      หลายคนต้องการที่พึ่งทางจิตใจในหลายสถานการณ์ที่คนต้องการที่พึ่งและมองหาทางออกสิ่งศักดิ์สิทธิ์เป็นอีกหนึ่งหนทางที่ช่วยฟื้นฟูเยียวยาจิตใจและเป็นที่ยึดเหนี่ยวจิตใจได้
                    </p>
                    <Button className="green-button">
                      Read more <ArrowRightOutlined />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
