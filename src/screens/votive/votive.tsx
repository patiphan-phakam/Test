import { Card, Col, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
// import CardList from "./components/cardList";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { ProductSkeleton } from "../home/components/productSkeleton";
import { useNavigate } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import { Content } from "antd/es/layout/layout";

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
            <Row>
              <h2
                style={{
                  color: "#028910",
                  marginLeft: "4rem",
                  wordWrap: "break-word",
                }}
              >
                พิธีบน/แก้บน
              </h2>
            </Row>
            <Row>
              {/* <CardList dataList={product} baseUrl={baseUrl} /> */}
              {product.map((item: any, index: number) => (
                <Col lg={6} md={8} sm={12} key={index + 1}>
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
                        <p className="card-description-custom">
                          {item.province}
                        </p>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      )}
    </>
  );
};
