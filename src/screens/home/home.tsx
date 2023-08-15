import { Col, Row, Image } from "antd";
import React from "react";
import homePicture1 from "../../images/bg.jpg";
import homeCirCle1 from "../../images/home-circle-1.png";
import homeCirCle2 from "../../images/home-circle-2.png";
import homeCirCle3 from "../../images/home-circle-3.png";
import pic1 from "../../images/menu-footer-1.png";
import "./home.css";
import { Popular } from "./components/popular";
import { Recommend } from "./components/recommend";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
          <Image preview={false} src={homePicture1} alt="Image 1" />
        </div>
        <div>
          <Image preview={false} src={homePicture1} alt="Image 2" />
        </div>
        <div>
          <Image preview={false} src={homePicture1} alt="Image 3" />
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
      <Row>
        <Col md={16}>text</Col>
        <Col md={8}>
          <img src={pic1} alt="homePicture1" />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <img src={pic1} alt="homePicture1" />
        </Col>
        <Col md={16}>text</Col>
      </Row>
      <Row>
        <Col md={16}>text</Col>
        <Col md={8}>
          <img src={pic1} alt="homePicture1" />
        </Col>
      </Row>
      <Popular />
      <Recommend />
    </>
  );
};
