import { Col, Row, Modal } from "antd";
import React, { useEffect, useState } from "react";
import homePicture1 from "../../images/home-page-01.jpg";
import homePicture2 from "../../images/home-page-02.jpg";
import homePicture3 from "../../images/home-page-03.jpg";
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
import { Content } from "antd/es/layout/layout";
import { HomeMenu } from "./components/homeMenu";
import { HomeNews } from "./components/homeNews";
// import { Search } from "../../components/search";

// const isEven = (number: number): boolean => {
//   return number % 2 === 0;
// };

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
      <div>
        <Carousel
          autoPlay
          showThumbs={false}
          infiniteLoop
          showStatus={false}
          stopOnHover
          className="carousel-container"
        >
          <div className="carousel-image">
            <img
              src={homePicture1}
              alt="background one"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-image">
            <img
              src={homePicture2}
              alt="background two"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="carousel-image">
            <img
              src={homePicture3}
              alt="background three"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>

      <div className="content-home-menu" />
      <Content className="content">
        <HomeMenu />

        <div className="card-home">
          {loadingRecommand ? (
            <ProductSkeleton title="แนะนำ" />
          ) : (
            <HomeNews news={dataSource} showDetail={showDetail} />
          )}
        </div>

        <div className="card-home">
          {loadingPopular ? (
            <ProductSkeleton title="ยอดนิยม" />
          ) : (
            <Popular productList={productPopular} />
          )}
        </div>

        <div className="card-home">
          {loadingRecommand ? (
            <ProductSkeleton title="แนะนำ" />
          ) : (
            <Recommend productList={productRecommand} />
          )}
        </div>
        <Review />
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
