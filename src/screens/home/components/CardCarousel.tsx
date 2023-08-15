import React from "react";
import { Card, Image } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";
import popurlar1 from "../../../images/popular-1.png";

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
              style={{ margin: "0 0.5rem", height: "100%" }}
              cover={
                <Image
                  preview={false}
                  alt="example"
                  src={popurlar1}
                  width={"100%"}
                />
              }
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
