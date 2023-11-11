import React from "react";
// import { Card } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";
import baisri from "../images/home-learn.png";

export interface ICardData {
  key: number;
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface CardCarouselProps {
  dataList: ICardData[];
  baseUrl?: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ dataList, baseUrl }) => {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <Carousel ssr itemClass="image-item" responsive={responsive}>
        {dataList.map((item) => (
          <div
            key={item.title}
            className="card-product-home"
            onClick={() => navigate(`${baseUrl}/${item.id}`)}
          >
            <div className="image-container">
              <img alt={item.title} src={item.image ? item.image : baisri} />
              <div className="image-overlay" />
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div style={{ color: "white", fontSize: "20px" }}>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CardCarousel;
