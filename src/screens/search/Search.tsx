import { Card, Col, Empty, Rate, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProductService } from "../../service/product-service";
import { axiosBackend } from "../../config/axiosBackend";
import baisri from "../../images/home-learn.png";
export const Search: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [searchParams] = useSearchParams();
  const province = searchParams.get("province");
  const productName = searchParams.get("productName");
  const navigate = useNavigate();

  const checkUrl = (type: number) => {
    if (type === 2) {
      return "brahman";
    }
    if (type === 3) {
      return "votive";
    }
    return "baisri/product";
  };
  /* eslint-disable */
  useEffect(() => {
    const userService = ProductService(axiosBackend);
    const getSearch = async () => {
      const data = {
        province: province,
        productName: productName,
      };
      console.log(`🚀 ~ file: Search.tsx:22 ~ getSearch ~ data:`, data);
      const res = await userService.search(data);
      if (res.data) {
        const result = res.data.map((item: any) => {
          console.log(`🚀 ~ file: Search.tsx:27 ~ result ~ item:`, item);
          const { User } = item;
          return {
            ...item,
            key: item.id,
            store: User.fullName,
            province: User.province,
            typeUrl: checkUrl(item.productType),
          };
        });
        setData(result);
        setLoading(false);
      }
    };
    getSearch();
  }, [province, productName]);

  return (
    <>
      <Content className="content">
        {loading ? (
          <Row justify={"center"} style={{ margin: "4rem 0" }}>
            <Spin />
          </Row>
        ) : (
          <>
            {data.length > 0 ? (
              <>
                <div className="card-home">
                  <Row>
                    {data.map((item: any, index: number) => (
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
                            navigate(`/${item.typeUrl}/${item.productId}`)
                          }
                        >
                          <Row>
                            <p className="card-name-custom">
                              {item.productName}
                            </p>
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
                </div>
              </>
            ) : (
              <Row justify={"center"} style={{ margin: "4rem 0" }}>
                <Col span={10}>
                  <Empty description={"ขออภัยค่ะ ไม่พบข้อมูลที่คุณกำลังหา"} />
                </Col>
              </Row>
            )}
          </>
        )}
      </Content>
    </>
  );
};
