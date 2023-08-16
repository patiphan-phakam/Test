import { Col, Row, Image, Button } from "antd";
import React from "react";
import homePicture1 from "../../images/bg.jpg";
import homeCirCle1 from "../../images/home-circle-1.png";
import homeCirCle2 from "../../images/home-circle-2.png";
import homeCirCle3 from "../../images/home-circle-3.png";
import homeLearn from "../../images/home-learn.png";
import homeBelive from "../../images/home-belive.png";
import homeSocial from "../../images/home-social.png";
import "./home.css";
import { Popular } from "./components/popular";
import { Recommend } from "./components/recommend";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Review } from "./components/review";

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        stopOnHover
      >
        <div>
          <Image
            preview={false}
            src={homePicture1}
            alt="Image 1"
            width={"100%"}
          />
        </div>
        <div>
          <Image
            preview={false}
            src={homePicture1}
            alt="Image 2"
            width={"100%"}
          />
        </div>
        <div>
          <Image
            preview={false}
            src={homePicture1}
            alt="Image 3"
            width={"100%"}
          />
        </div>
      </Carousel>
      <div className="home-content">
        <Row justify={"center"}>
          <div className="home-content-header">
            <h1 style={{ color: "white", margin: 0 }}>ทำไมต้องมูผ่านเรา?</h1>
          </div>
        </Row>
        <Row justify={"center"} style={{ margin: "2rem 0" }}>
          <Col md={5} className="home-content-center">
            <Row justify={"center"}>
              <div className="circle-container">
                <Row justify={"center"}>
                  <div className="circle-content">
                    <Image
                      preview={false}
                      className="circle-image"
                      src={homeCirCle1}
                      alt="home-circle-1"
                      width="60%"
                    />
                  </div>
                </Row>
                <Row justify={"center"}>
                  <h4 style={{ color: "#D4AF37", margin: "1rem 0" }}>
                    ความสะดวกสบาย
                  </h4>
                </Row>
                <Row justify={"center"}>
                  <p style={{ color: "white", margin: "0 1rem" }}>
                    ไม่ว่าคุณจะอยู่ที่ไหนก็สามารถมูได้ตลอดเวลา
                  </p>
                </Row>
              </div>
            </Row>
          </Col>
          <Col md={5} className="home-content-center">
            <Row justify={"center"}>
              <div className="circle-container">
                <Row justify={"center"}>
                  <div className="circle-content">
                    <Image
                      preview={false}
                      className="circle-image"
                      src={homeCirCle2}
                      alt="home-circle-2"
                      width="60%"
                    />
                  </div>
                </Row>
                <Row justify={"center"}>
                  <h4 style={{ color: "#D4AF37", margin: "1rem 0" }}>
                    ประหยัดค่าใช้จ่าย
                  </h4>
                </Row>
                <Row justify={"center"}>
                  <p style={{ color: "white", margin: "0 1rem" }}>
                    ในหลายครั้งไม่ต้องเดินทางไปเองแต่สามารถทำกิจกรรมการมูได้
                  </p>
                </Row>
              </div>
            </Row>
          </Col>
          <Col md={5} className="home-content-center">
            <Row justify={"center"}>
              <div className="circle-container">
                <Row justify={"center"}>
                  <div className="circle-content">
                    <Image
                      preview={false}
                      className="circle-image"
                      src={homeCirCle3}
                      alt="home-circle-4"
                      width="60%"
                    />
                  </div>
                </Row>
                <Row justify={"center"}>
                  <h4 style={{ color: "#D4AF37", margin: "1rem 0" }}>
                    ผลงานที่ตรงใจ
                  </h4>
                </Row>
                <Row justify={"center"}>
                  <p style={{ color: "white", margin: "0 1rem" }}>
                    สามารถเลือกร้านในพื้นที่ เช็คสินค้า ราคา รีวิวได้ง่ายๆ
                  </p>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <Row className="container">
        <Col span={24}>
          <Row>
            <Col md={16} className="container-item">
              <h3 style={{ color: "#028910" }}>เราคือหน่วยการเรียนรู้</h3>
              <p>
                ทีมงานของเราคือกลุ่มคนที่คอยช่วยเหลือและพัฒนาองค์ความรู้ด้านบายศรีและพิธีกรรมให้กับชุมชนและผู้ที่สนใจเรียนรู้อนุรักษ์วัฒนธรรมพิธีกรรมท้องถิ่นไทย
                สืบสานต่อยอดจากรุ่นสู่รุ่น
              </p>
              <Button className="green-button">
                Read more <ArrowRightOutlined />
              </Button>
            </Col>
            <Col md={8}>
              <img src={homeLearn} alt="homePicture1" width={"80%"} />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <img src={homeBelive} alt="homePicture1" width={"80%"} />
            </Col>
            <Col md={16} className="container-item">
              <h3 style={{ color: "#028910" }}>การพัฒนาสังคมและชุมชน</h3>
              <p>
                เราคือกลุ่มกิจการเพื่อสังคมที่พร้อมพัฒนาท้องถิ่นทางด้านอาชีพและวัฒนธรรมให้กับสังคม
              </p>
              <Button className="green-button">
                Read more <ArrowRightOutlined />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={16} className="container-item">
              <h3 style={{ color: "#028910" }}>ความเชื่อ</h3>
              <p>
                หลายคนต้องการที่พึ่งทางจิตใจในหลายสถานการณ์ที่คนต้องการที่พึ่งและมองหาทางออกสิ่งศักดิ์สิทธิ์เป็นอีกหนึ่งหนทางที่ช่วยฟื้นฟูเยียวยาจิตใจและเป็นที่ยึดเหนี่ยวจิตใจได้
              </p>
              <Button className="green-button">
                Read more <ArrowRightOutlined />
              </Button>
            </Col>
            <Col md={8}>
              <img src={homeSocial} alt="homePicture1" width={"80%"} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Popular />
      <Recommend />
      <Review />
    </>
  );
};
