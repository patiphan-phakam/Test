import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

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

const CardCarouselBrahman: React.FC<CardCarouselProps> = ({
  dataList,
  baseUrl,
}) => {
  const navigate = useNavigate();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
        {dataList.map((item: any) => (
          <div
            key={item.title}
            className="card-product-home"
            onClick={() => navigate(`${baseUrl}/${item.productId}`)}
          >
            <div className="image-container">
              <img
                alt={item.title}
                src={item.productImages[0]?.productImageSource}
              />
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
              <div style={{ color: "white", fontSize: "25px" }}>
                <p>{item.productName}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CardCarouselBrahman;
