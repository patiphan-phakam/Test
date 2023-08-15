import { Col, Row } from "antd";
import React from "react";
import homePicture1 from "../../images/bg.jpg";
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
          <img src={homePicture1} alt="Image 1" />
        </div>
        <div>
          <img src={homePicture1} alt="Image 2" />
        </div>
        <div>
          <img src={homePicture1} alt="Image 3" />
        </div>
      </Carousel>
      <div className="home-content">
        <Row justify={"center"}>
          <div className="home-content-header">
            <h1 style={{ color: "white", margin: 0 }}>ทำไมต้องมูผ่านเรา?</h1>
          </div>
        </Row>
        <Row justify={"center"}>
          <Col span={5} className="home-content-center">
            <h2>Sectio1</h2>
          </Col>
          <Col span={5} className="home-content-center">
            <h2>Sectio2</h2>
          </Col>
          <Col span={5} className="home-content-center">
            <h2>Sectio3</h2>
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
