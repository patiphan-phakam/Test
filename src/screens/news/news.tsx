import { Col, Row, Modal } from "antd";
import React, { useEffect, useState } from "react";
// import { ArrowRightOutlined } from "@ant-design/icons";
import { axiosBackend } from "../../config/axiosBackend";
import { NewsService } from "../../service/news-service";
import { INewsItem } from "../../types/news";
import { config } from "../../config";
import { Content } from "antd/es/layout/layout";
import { CardMain } from "./components/CardMain";
import { CardChild } from "./components/CardChild";

export const News: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<INewsItem[]>([]);
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
      <Content style={{ backgroundColor: "white" }}>
        <div className="content">
          <div className="card-home-no-bg">
            <Row className="container">
              <h2
                style={{
                  color: "#028910",
                  wordWrap: "break-word",
                }}
              >
                ข่าวสารความรู้
              </h2>
            </Row>
            <Row className="container">
              {dataSource?.length > 0 ? (
                <Col span={24}>
                  <CardMain data={dataSource[0]} showDetail={showDetail} />
                  {/* <Col md={12}>
                        <img
                          src={`${config.backendUrl}/image/${dataSource[0].image}`}
                          alt={`${dataSource[0].title}-1`}
                          width={"100%"}
                          style={{ borderRadius: "24px" }}
                        />
                      </Col>
                      <Col md={12} style={{ padding: "0 2em" }}>
                        <h3 style={{ color: "#028910" }}>
                          {dataSource[0].title}
                        </h3>
                        <p>{dataSource[0].content}</p>
                        <Button
                          className="green-button"
                          onClick={() => showDetail(dataSource[0])}
                        >
                          Read more <ArrowRightOutlined />
                        </Button>
                      </Col> */}

                  <Row style={{ marginTop: "1em" }}>
                    {/* {dataSource
                      .slice(1)
                      .map((data: INewsItem, index: number) => (
                        <Col
                          md={12}
                          key={index + 1}
                          style={{ margin: "2em 0" }}
                        >
                          <Card>
                            <Row>
                              <Col md={8}>
                                <img
                                  src={`${config.backendUrl}/image/${data?.image}`}
                                  alt={`${data.title}-${index + 1}`}
                                  width={"100%"}
                                  height={"100%"}
                                  style={{ borderRadius: "24px" }}
                                />
                              </Col>
                              <Col md={16} style={{ padding: "0 2em" }}>
                                <h3 style={{ color: "#028910" }}>
                                  {data.title}
                                </h3>
                                <p>{data.content}</p>
                                <Button
                                  className="green-button"
                                  onClick={() => showDetail(data)}
                                >
                                  Read more <ArrowRightOutlined />
                                </Button>
                              </Col>
                            </Row>
                          </Card>
                        </Col>
                      ))} */}
                    <CardChild
                      data={dataSource.slice(1)}
                      showDetail={showDetail}
                    />
                  </Row>
                </Col>
              ) : (
                <></>
              )}
            </Row>
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
          </div>
        </div>
      </Content>
    </>
  );
};
