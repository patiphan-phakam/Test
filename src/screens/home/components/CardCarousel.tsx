import React from "react";
import { Avatar, Card, Image } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";

interface CardData {
  title: string;
  description: string;
}

interface CardCarouselProps {
  dataList: CardData[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ dataList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
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
              key={item.title}
              style={{ margin: "0 2rem" }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title={item.title}
                description={item.description}
              />
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CardCarousel;
