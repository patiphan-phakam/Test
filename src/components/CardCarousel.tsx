import React from "react";
import { Card, Image } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";
import popurlar1 from "../images/popular-1.png";
import { useNavigate } from "react-router-dom";
import "./style.css";

export interface ICardData {
  id: string | number;
  title: string;
  description?: string;
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
      items: 3,
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
      <div style={{ margin: "0 5rem" }}>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
        >
          {dataList.slice(0, 5).map((item) => (
            <Card
              className="card-product"
              key={item.title}
              cover={
                <Image
                  preview={false}
                  alt="example"
                  src={popurlar1}
                  width={"100%"}
                />
              }
              onClick={() => navigate(`${baseUrl}/${item.id}`)}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CardCarousel;
