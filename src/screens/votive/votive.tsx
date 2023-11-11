import { Card, Col, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import baisri from "../../images/home-learn.png";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import { ProductSkeleton } from "../../components/ProductSkeleton";

interface Props {
  baseUrl: string;
}

export const Votive: React.FC<Props> = ({ baseUrl }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProductPopurlar = async () => {
      const { data } = await productService.getByType("3");
      if (data) {
        const result = data
          .map((item: any) => {
            const { province, fullName } = item.user;
            return item.products.map((product: any) => ({
              ...product,
              province,
              fullName,
            }));
          })
          .flat();
        setProduct(result);
      }

      setLoading(false);
    };

    getProductPopurlar();
  }, []);

  return (
    <>
      <Content className="content">
        <div className="card-home">
          <div className="container-content" style={{ marginBottom: "2rem" }}>
            <Row>
              <h2
                style={{
                  color: "#028910",
                  marginLeft: "1.5rem",
                  wordWrap: "break-word",
                }}
              >
                พิธีบน/แก้บน
              </h2>
            </Row>

            {loading ? (
              <ProductSkeleton />
            ) : (
              <Row>
                {product.map((item: any, index: number) => (
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
                            src={
                              item.productImages[0]?.productImageSource ??
                              baisri
                            }
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
                          <p className="card-description-custom">{`${item.fullName}`}</p>
                        </Col>
                        <Col md={12} style={{ textAlign: "right" }}>
                          <p className="card-description-custom">{`${item.province}`}</p>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </div>
      </Content>
    </>
  );
};
