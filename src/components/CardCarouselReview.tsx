import React from "react";
import { Avatar, Card, Col, Rate, Row } from "antd";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import dayjs from "dayjs";

export interface ICardDataReview {
  id: string | number;
  userId: string;
  name: string;
  star: number;
  dateTime: Date;
  store: string;
  product: string;
  review: string;
}

interface CardCarouselProps {
  dataList: ICardDataReview[];
  baseUrl?: string;
}

const CardCarouselReview: React.FC<CardCarouselProps> = ({
  dataList,
  baseUrl,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <>
      <div style={{ margin: "0 5rem" }}>
        <Carousel ssr itemClass="image-item" responsive={responsive}>
          {dataList.slice(0, 5).map((review) => (
            <Card className="card-review" key={review.id}>
              <Row>
                <Col span={4}>
                  <Avatar icon={<UserOutlined />} />
                </Col>
                <Col span={20}>
                  <div style={{ flex: 1, marginLeft: "12px" }}>
                    <div style={{ fontWeight: "bold" }}>{review.name}</div>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "10px",
                      }}
                    >
                      {dayjs(review.dateTime).format("YYYY-MM-DD HH:mm:ss")} |{" "}
                      {review.store}
                    </div>
                    <div style={{ padding: "0 0 0 8px" }}>
                      <Rate
                        disabled
                        allowHalf
                        defaultValue={review.star}
                        style={{ fontSize: "8px" }}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div>{review.review}</div>
              </Row>
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CardCarouselReview;
