import React from "react";
import { Card, Col, Rate, Row, Image } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { IProductData } from "../types/product";

interface CardCarouselProps {
  dataList: IProductData[];
  baseUrl?: string;
}

const CardCarouselProduct: React.FC<CardCarouselProps> = ({
  dataList,
  baseUrl,
}) => {
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
      <div style={{ margin: "1rem 5rem" }}>
        <Carousel ssr itemClass="image-item" responsive={responsive}>
          {dataList.map((item) => (
            <Card
              className="card-product"
              key={item.id}
              cover={
                <Image
                  preview={false}
                  alt={`product ${item.id}`}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  src={item.productImages[0]?.productImageSource}
                />
              }
              onClick={() => navigate(`${baseUrl}/product/${item.productId}`)}
            >
              <Row>
                <p className="card-name-custom">{item.productName}</p>
              </Row>
              <Row>
                <Col md={6}>
                  <p className="card-price-custom">{`฿${item.productPrice}`}</p>
                </Col>
                <Col md={18} style={{ textAlign: "right" }}>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={
                      Number(item.productAvgStar) === 0
                        ? 5
                        : item.productAvgStar
                    }
                    className="card-rate-custom"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p className="card-description-custom">{`${item.store}`}</p>
                </Col>
                <Col md={12} style={{ textAlign: "right" }}>
                  <p className="card-description-custom">{`${item.province}`}</p>
                </Col>
              </Row>
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CardCarouselProduct;
