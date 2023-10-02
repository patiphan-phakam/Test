import { Col, Row, Button } from "antd";
import React, { useEffect, useState } from "react";
import homeLearn from "../../images/home-learn.png";
import homeBelive from "../../images/home-belive.png";
import homeSocial from "../../images/home-social.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { axiosBackend } from "../../config/axiosBackend";
import { NewsService } from "../../service/news-service";
import { INewsItem } from "../../types/news";
import { config } from "../../config";

export const News: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSource, setDataSource] = useState<INewsItem[]>([]);
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

  return (
    <>
      <div className="container-content">
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
              <Row>
                <Col md={12}>
                  <img
                    src={`${config.backendUrl}/image/${dataSource[0].image}`}
                    alt={`${dataSource[0].title}-1`}
                    width={"100%"}
                    style={{ borderRadius: "24px" }}
                  />
                </Col>
                <Col md={12} style={{ padding: "0 2em" }}>
                  <h3 style={{ color: "#028910" }}>{dataSource[0].title}</h3>
                  <p>{dataSource[0].content}</p>
                  <Button className="green-button">
                    Read more <ArrowRightOutlined />
                  </Button>
                </Col>
              </Row>
              <Row style={{ margin: "3em 0" }}>
                {dataSource.slice(1).map((data: INewsItem, index: number) => (
                  <Col md={12} key={index + 1}>
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
                        <h3 style={{ color: "#028910" }}>{data.title}</h3>
                        <p>{data.content}</p>
                        <Button className="green-button">
                          Read more <ArrowRightOutlined />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </div>
    </>
  );
};
