import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import baisri from "../../images/home-learn.png";
import { UserService } from "../../service/user-service";
import { axiosBackend } from "../../config/axiosBackend";
import CarouselCardSkeleton from "../../components/CardProductSkeleton";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/es/layout/layout";

interface Props {
  baseUrl: string;
}

export const Baisri: React.FC<Props> = ({ baseUrl }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [store, setStore] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userService = UserService(axiosBackend);
    const getStore = async () => {
      const res = await userService.getStore();
      if (res.data) {
        const setData = res.data.map((store: any, index: number) => ({
          key: store.id,
          id: store.userId,
          title: store.fullName,
          description: store.province,
          image: store.storeImage,
        }));
        setStore(setData);
        setLoading(false);
      }
    };
    getStore();
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
                  marginLeft: "1rem",
                  wordWrap: "break-word",
                }}
              >
                ร้านค้าทั้งหมด
              </h2>
            </Row>
            {loading ? (
              <CarouselCardSkeleton />
            ) : (
              <Row>
                {store.map((item: any, index: number) => (
                  <Col lg={6} md={8} key={index + 1}>
                    <div
                      key={item.title}
                      className="card-product-home"
                      style={{ marginBottom: "2em" }}
                      onClick={() => navigate(`${baseUrl}/${item.id}`)}
                    >
                      <div className="image-container">
                        <img
                          alt={item.title}
                          src={
                            item.image !== "" && item.image !== null
                              ? item.image
                              : baisri
                          }
                        />
                        <div className="image-overlay" />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ color: "white", fontSize: "25px" }}>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
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
