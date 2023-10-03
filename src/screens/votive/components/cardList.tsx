import React from "react";
import { Card, Col, Rate, Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

interface CardCarouselProps {
  dataList: any;
  baseUrl?: string;
}

const CardList: React.FC<CardCarouselProps> = ({ dataList, baseUrl }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: "0 3rem" }}>
        <Row>
          {dataList.map((item: any, index: number) => (
            <Col md={8} key={index} style={{ marginTop: "1em" }}>
              <Card
                className="card-product"
                key={item.title}
                cover={
                  <div
                    style={{
                      overflow: "hidden",
                      height: "250px",
                    }}
                  >
                    <img
                      alt="example"
                      src={item.productImages[0]?.productImageSource}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                }
                onClick={() => navigate(`${baseUrl}/${item.productId}`)}
              >
                <Meta title={item.title} />
                <Row>
                  <Col md={6}>
                    <p className="card-price-custom">{`฿${item.productPrice}`}</p>
                  </Col>
                  <Col md={18} style={{ textAlign: "right" }}>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={item.productAvgStar}
                      className="card-rate-custom"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="card-description-custom">{`${item.fullName}`}</p>
                  </Col>
                  <Col md={12} style={{ textAlign: "right" }}>
                    <p className="card-description-custom">{item.province}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CardList;
