import { Col, Row, Rate } from "antd";
import React, { useEffect, useState } from "react";
// import CardCarouselProduct from "../../../components/CardCarouselProduct";
import { useNavigate, useParams } from "react-router-dom";
import { ProductService } from "../../../service/product-service";
import { axiosBackend } from "../../../config/axiosBackend";
import { IProductData } from "../../../types/product";
import { UserService } from "../../../service/user-service";
import CarouselCardSkeleton from "../../../components/CardProductSkeleton";
import Card from "antd/es/card/Card";
import { Content } from "antd/es/layout/layout";

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
            <h2 style={{ marginLeft: "4rem" }}>{store.fullName} </h2>
          </Row>
          <Row>
            <h2
              style={{
                color: "#028910",
                marginLeft: "4rem",
                wordWrap: "break-word",
              }}
            >
              สินค้าค้าทั้งหมด
            </h2>
          </Row>
          {loading ? (
            <CarouselCardSkeleton />
          ) : (
            // (
            //   <CardCarouselProduct dataList={product} baseUrl={baseUrl} />
            // )

            <Row>
              {product.map((item: any, index: number) => (
                <Col lg={6} md={8} sm={12} key={index + 1}>
                  <Card
                    className="card-product"
                    key={item.id}
                    cover={
                      <div
                        style={{
                          overflow: "hidden",
                          height: "200px",
                        }}
                      >
                        <img
                          alt="example"
                          src={item.productImages[0]?.productImageSource}
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
                    style={{
                      marginBottom: "2em",
                    }}
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
                        <p
                          className="card-description-custom"
                          style={{ fontSize: "12px" }}
                        >{`${item.store}`}</p>
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
      </Content>
    </>
  );
};
