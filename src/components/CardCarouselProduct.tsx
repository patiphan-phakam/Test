import React from "react";
import { Card, Col, Rate, Row, Image } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import popurlar1 from "../images/popular-1.png";
import { useNavigate } from "react-router-dom";

export interface ICardDataProduct {
  id: string | number;
  userId: string;
  start: number;
  dateTime: Date;
  store: string;
  product: string;
  province: string;
  type: string;
  price: number;
  sold: number;
  description: string;
  preview?: IImage[];
}

export interface IImage {
  id: number | string;
  image: string;
}

interface CardCarouselProps {
  dataList: ICardDataProduct[];
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
          {dataList.slice(0, 5).map((item) => (
            <Card
              className="card-product"
              key={item.id}
              cover={<Image preview={false} alt="example" src={popurlar1} />}
              onClick={() => navigate(`${baseUrl}/product/${item.id}`)}
            >
              <Row>
                <p className="card-name-custom">{item.product}</p>
              </Row>
              <Row>
                <Col md={6}>
                  <p className="card-price-custom">{`฿${item.price}`}</p>
                </Col>
                <Col md={18} style={{ textAlign: "right" }}>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={item.start}
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
