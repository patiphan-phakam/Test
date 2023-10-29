import { Col, Row, Image, Modal, Button } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import homePicture1 from "../../images/home-page-01.jpg";
import homePicture2 from "../../images/home-page-02.jpg";
import homePicture3 from "../../images/bg.jpg";
import homeCirCle1 from "../../images/home-circle-1.png";
import homeCirCle2 from "../../images/home-circle-2.png";
import homeCirCle3 from "../../images/home-circle-3.png";
import { Popular } from "./components/popular";
import { Recommend } from "./components/recommend";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Review } from "./components/review";
import { ICardData } from "../../components/CardCarousel";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { IProductData } from "../../types/product";
import { ProductSkeleton } from "./components/productSkeleton";
import { config } from "../../config";
import { NewsService } from "../../service/news-service";
import { INewsItem } from "../../types/news";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

const isEven = (number: number): boolean => {
  return number % 2 === 0;
};

export const Home: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingPopular, setLoadingPopular] = useState<boolean>(true);
  const [loadingRecommand, setLoadingRecommend] = useState<boolean>(true);
  const [productPopular, setProductPopular] = useState<ICardData[]>([]);
  const [dataSource, setDataSource] = useState<INewsItem[]>([]);
  const [productRecommand, setProductRecommend] = useState<ICardData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detail, setDetail] = useState<any>({});

  const newsService = NewsService(axiosBackend);

  /* eslint-disable */
  const fetchData = async () => {
    try {
      const { data } = await newsService.getAll();
      if (data) {
        setDataSource(data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProductPopurlar = async () => {
      const res = await productService.getPopular();
      if (res.data) {
        const setData = res.data.map((product: IProductData) => ({
          key: product.id,
          id: product.productId,
          title: product.productName,
          description: product.productDetail,
          image: product.productImages[0]?.productImageSource,
        }));
        setProductPopular(setData);
        setLoadingPopular(false);
      }
    };
    getProductPopurlar();

    const getProductRecommend = async () => {
      const res = await productService.getRecommend();
      if (res.data) {
        const setData = res.data.map((product: IProductData) => ({
          key: product.id,
          id: product.productId,
          title: product.productName,
          description: product.productDetail,
          image: product.productImages[0]?.productImageSource,
        }));
        setProductRecommend(setData);
        setLoadingRecommend(false);
      }
    };
    getProductRecommend();
  }, []);

  const showDetail = (data: any) => {
    setDetail(data);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setDetail({});
    setIsModalOpen(false);
  };

  return (
    <>
      <Content
        style={{
          paddingLeft: "5em",
          paddingRight: "5em",
          margin: 0,
          minHeight: 280,
        }}
      >
        {/* <div className="container-content"> */}
        <Carousel
          autoPlay
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          stopOnHover
        >
          <div>
            <img
              src={homePicture1}
              alt="background one"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={homePicture2}
              alt="background two"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={homePicture3}
              alt="background three"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Carousel>
        <div className="home-content">
          <Row justify={"center"}>
            <div className="home-content-header">
              <h1 style={{ color: "white", margin: 0 }}>ทำไมต้องมูผ่านเรา?</h1>
            </div>
          </Row>
          <Row justify={"center"} style={{ margin: "2rem 0" }}>
            <Col md={5} className="home-content-center">
              <Row justify={"center"}>
                <div className="circle-container">
                  <Row justify={"center"}>
                    <div className="circle-content">
                      <Image
                        preview={false}
                        className="circle-image"
                        src={homeCirCle1}
                        alt="home-circle-1"
                        width="60%"
                      />
                    </div>
                  </Row>
                  <Row justify={"center"}>
                    <h4 style={{ color: "#D4AF37", margin: "1rem 0" }}>
                      ความสะดวกสบาย
                    </h4>
                  </Row>
                  <Row justify={"center"}>
                    <p style={{ color: "white", margin: "0 1rem" }}>
                      ไม่ว่าคุณจะอยู่ที่ไหนก็สามารถมูได้ตลอดเวลา
                    </p>
                  </Row>
                </div>
              </Row>
            </Col>
            <Col md={5} className="home-content-center">
              <Row justify={"center"}>
                <div className="circle-container">
                  <Row justify={"center"}>
                    <div className="circle-content">
                      <Image
                        preview={false}
                        className="circle-image"
                        src={homeCirCle2}
                        alt="home-circle-2"
                        width="60%"
                      />
                    </div>
                  </Row>
                  <Row justify={"center"}>
                    <h4 style={{ color: "#D4AF37", margin: "1rem 0" }}>
                      ประหยัดค่าใช้จ่าย
                    </h4>
                  </Row>
                  <Row justify={"center"}>
                    <p style={{ color: "white", margin: "0 1rem" }}>
                      ในหลายครั้งไม่ต้องเดินทางไปเองแต่สามารถทำกิจกรรมการมูได้
                    </p>
                  </Row>
                </div>
              </Row>
            </Col>
            <Col md={5} className="home-content-center">
              <Row justify={"center"}>
                <div className="circle-container">
                  <Row justify={"center"}>
                    <div className="circle-content">
                      <Image
                        preview={false}
                        className="circle-image"
                        src={homeCirCle3}
                        alt="home-circle-4"
                        width="60%"
                      />
                    </div>
                  </Row>
                  <Row justify={"center"}>
                    <h4 style={{ color: "#D4AF37", margin: "1rem 0" }}>
                      ผลงานที่ตรงใจ
                    </h4>
                  </Row>
                  <Row justify={"center"}>
                    <p style={{ color: "white", margin: "0 1rem" }}>
                      สามารถเลือกร้านในพื้นที่ เช็คสินค้า ราคา รีวิวได้ง่ายๆ
                    </p>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        {/* <div className="container">
         
        </div> */}

        <Row>
          <Col span={24}>
            <Row>
              {dataSource?.length > 0 ? (
                <>
                  {dataSource.map((item: INewsItem, index: number) => (
                    <Fragment key={index}>
                      {isEven(index) ? (
                        <>
                          <Col md={16} className="container-item">
                            <h3 style={{ color: "#028910" }}>{item.title}</h3>
                            <p>{item.content}</p>
                            <Button
                              className="green-button"
                              onClick={() => showDetail(item)}
                            >
                              Read more <ArrowRightOutlined />
                            </Button>
                          </Col>
                          <Col md={8} style={{ width: "100%" }}>
                            <img
                              src={`${config.backendUrl}/image/${item.image}`}
                              alt="homePicture1"
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                          </Col>
                        </>
                      ) : (
                        <>
                          <Col md={8} style={{ width: "100%" }}>
                            <img
                              src={`${config.backendUrl}/image/${item.image}`}
                              alt="homePicture1"
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                          </Col>
                          <Col md={16} className="container-item">
                            <h3 style={{ color: "#028910" }}>{item.title}</h3>
                            <p>{item.content}</p>
                            <Button
                              className="green-button"
                              onClick={() => showDetail(item)}
                            >
                              Read more <ArrowRightOutlined />
                            </Button>
                          </Col>
                        </>
                      )}
                    </Fragment>
                  ))}
                </>
              ) : (
                <></>
              )}
            </Row>
          </Col>
        </Row>

        {loadingPopular ? (
          <ProductSkeleton title="ยอดนิยม" />
        ) : (
          <Popular productList={productPopular} />
        )}
        {loadingRecommand ? (
          <ProductSkeleton title="แนะนำ" />
        ) : (
          <Recommend productList={productRecommand} />
        )}

        <Review />
        {/* </div> */}
      </Content>

      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Row justify={"center"}>
          {detail && (
            <>
              <Col
                span={24}
                style={{
                  overflow: "hidden",
                  height: "300px",
                  margin: "1.5em",
                  borderRadius: "10px",
                }}
              >
                <img
                  alt={detail.image}
                  src={`${config.backendUrl}/image/${detail.image}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col span={24}>
                <h3 style={{ color: "#028910", margin: "0" }}>
                  {detail.title}
                </h3>
              </Col>
              <Col span={24}>
                <p>{detail.content}</p>
              </Col>
            </>
          )}
        </Row>
      </Modal>
    </>
  );
};
