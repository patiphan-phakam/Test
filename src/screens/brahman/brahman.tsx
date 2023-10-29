import { Card, Col, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
// import CardList from "./components/cardList";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { ProductSkeleton } from "../home/components/productSkeleton";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import Meta from "antd/es/card/Meta";

interface Props {
  baseUrl: string;
}

export const Brahman: React.FC<Props> = ({ baseUrl }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProductPopurlar = async () => {
      const res = await productService.getByType(2);
      if (res.data) {
        setProduct(res.data);
        setLoading(false);
      }
    };
    getProductPopurlar();
  }, []);

  return (
    <>
      {loading ? (
        <ProductSkeleton title={""} />
      ) : (
        <Content
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div className="container-content" style={{ marginBottom: "2rem" }}>
            {product.length > 0 ? (
              product.map((dataList: any, index: number) => (
                <Row key={index}>
                  <Col md={24}>
                    <Row>
                      <h2
                        style={{
                          color: "#028910",
                          marginLeft: "4rem",
                          wordWrap: "break-word",
                        }}
                      >
                        {dataList.user.fullName}
                      </h2>
                    </Row>
                  </Col>
                  {/* {item.products && (
                    <CardList dataList={item} baseUrl={baseUrl} />
                  )} */}
                  {dataList.products.map((item: any, index: number) => (
                    <>
                      <Col lg={6} md={8} sm={12} key={index + 1}>
                        <Card
                          className="card-product"
                          key={index}
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
                          onClick={() =>
                            navigate(`${baseUrl}/${item.productId}`)
                          }
                        >
                          <Meta title={item.productName} />
                          <Row>
                            <Col md={6} sm={12}>
                              <p className="card-price-custom">{`฿${item.productPrice}`}</p>
                            </Col>
                            <Col md={18} style={{ textAlign: "right" }} sm={12}>
                              <Rate
                                disabled
                                allowHalf
                                defaultValue={5}
                                className="card-rate-custom"
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12}>
                              <p className="card-description-custom">{`${dataList.user.fullName}`}</p>
                            </Col>
                            <Col md={12} style={{ textAlign: "right" }}>
                              <p className="card-description-custom">
                                {dataList.user.province}
                              </p>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </>
                  ))}
                </Row>
              ))
            ) : (
              <></>
            )}
          </div>
        </Content>
      )}
    </>
  );
};
