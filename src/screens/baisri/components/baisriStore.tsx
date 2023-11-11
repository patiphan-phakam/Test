import { Col, Row, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baisri from "../../../images/home-learn.png";
import { ProductService } from "../../../service/product-service";
import { axiosBackend } from "../../../config/axiosBackend";
import { IProductData } from "../../../types/product";
import { UserService } from "../../../service/user-service";
import Card from "antd/es/card/Card";
import { Content } from "antd/es/layout/layout";
import { ProductSkeleton } from "../../../components/ProductSkeleton";

interface Props {
  baseUrl: string;
}

export const BaisriStore: React.FC<Props> = ({ baseUrl }) => {
  const { storeId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [store, setStore] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userService = UserService(axiosBackend);
    const productService = ProductService(axiosBackend);
    const getStore = async () => {
      if (storeId) {
        const res = await userService.findById(storeId);
        if (res.data) {
          const { data } = res;
          setStore(data);
          return data;
        }
      }
    };
    getStore().then(async (storeData: any) => {
      if (storeId) {
        const res = await productService.getByStoreId(storeId);
        if (res && res.data) {
          const { data } = res;
          const setData = data.map((product: IProductData) => ({
            ...product,
            key: product.id,
            store: storeData.fullName,
            province: storeData.province,
          }));
          setProduct(setData);
          setLoading(false);
        }
      }
    });
  }, [storeId]);

  return (
    <>
      <Content className="content">
        <div className="card-home">
          <div className="container-content" style={{ marginBottom: "2rem" }}>
            <Row>
              <h2 style={{ marginLeft: "1.5rem" }}>{store.fullName} </h2>
            </Row>
            <Row>
              <h2
                style={{
                  color: "#028910",
                  marginLeft: "1.5rem",
                  wordWrap: "break-word",
                }}
              >
                สินค้าค้าทั้งหมด
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
                      onClick={() =>
                        navigate(`${baseUrl}/product/${item.productId}`)
                      }
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
                          <p className="card-description-custom">{`${item.store}`}</p>
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
