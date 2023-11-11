import "react-multi-carousel/lib/styles.css";

import { Card, Col, Rate, Row, Typography } from "antd";
import baisri from "../../../images/home-learn.png";
import { useNavigate } from "react-router-dom";

interface Prop {
  brahman: any;
  baseUrl: string;
}

export const CardBrahman: React.FC<Prop> = ({ brahman, baseUrl }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col span={24}>
        <Typography.Title
          level={4}
          style={{ color: "#028910", margin: "0 0 0.5rem 1rem" }}
        >
          {brahman.user.fullName}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Row>
          {brahman.products.map((item: any, index: number) => (
            <Col lg={6} md={8} sm={12} key={index + 1}>
              <Card
                className="card-product card-product-list"
                key={item.id}
                cover={
                  <div
                    style={{
                      overflow: "hidden",
                      height: "150px",
                    }}
                  >
                    <img
                      alt={item.productId}
                      src={item.productImages[0]?.productImageSource ?? baisri}
                      height={200}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                }
                onClick={() => navigate(`${baseUrl}/${item.productId}`)}
              >
                <Row>
                  <p className="card-name-custom">{item.productName}</p>
                </Row>
                <Row>
                  <Col md={8} style={{ width: "100%" }}>
                    <p className="card-price-custom">{`฿${item.productPrice}`}</p>
                  </Col>
                  <Col md={16} style={{ textAlign: "right" }}>
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
                  <Col md={12} style={{ width: "100%" }}>
                    <p
                      className="card-description-custom"
                      style={{ fontSize: "12px" }}
                    >{`${brahman.user.fullName}`}</p>
                  </Col>
                  <Col md={12} style={{ textAlign: "right" }}>
                    <p
                      className="card-description-custom"
                      style={{ fontSize: "12px" }}
                    >{`${brahman.user.province}`}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};
