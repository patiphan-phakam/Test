import React from "react";
import { Card, Col, Image, Rate, Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import Meta from "antd/es/card/Meta";
import { useNavigate } from "react-router-dom";

export interface ICardData {
  key: number;
  id: string | number;
  title: string;
  description?: string;
  image?: string;
}

interface CardCarouselProps {
  dataList: ICardData[];
  baseUrl?: string;
}

const CardList: React.FC<CardCarouselProps> = ({ dataList, baseUrl }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: "0 3rem" }}>
        <Row>
          {dataList.map((item, index: number) => (
            <Col md={8} key={index} style={{ marginTop: "1em" }}>
              <Card
                className="card-product"
                key={item.title}
                cover={<Image preview={false} alt="example" src={item.image} />}
                onClick={() => navigate(`${baseUrl}/${item.id}`)}
              >
                <Meta title={item.title} />
                <Row>
                  <Col md={6}>
                    <p className="card-price-custom">{`฿2500`}</p>
                  </Col>
                  <Col md={18} style={{ textAlign: "right" }}>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={5}
                      className="card-rate-custom"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <p className="card-description-custom">{`${item.description}`}</p>
                  </Col>
                  <Col md={12} style={{ textAlign: "right" }}>
                    <p className="card-description-custom">{`จังหวัดกาฬสินธุ์`}</p>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CardList;
