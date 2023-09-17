import { Col, Row } from "antd";
import React from "react";
import CardList, { ICardData } from "./components/cardList";

interface Props {
  baseUrl: string;
}

export const Brahman: React.FC<Props> = ({ baseUrl }) => {
  const dataList: ICardData[] = [
    {
      key: 1,
      id: 1,
      title: "ร้านน้องบิ๊กใบตองร้านน้องบิ๊กใบตอง 1",
      description: "ร้านน้องบิ๊กใบตอง 1",
    },
    {
      key: 2,
      id: 2,
      title: "ร้านน้องบิ๊กใบตอง 2",
      description: "ร้านน้องบิ๊กใบตอง 2",
    },
    {
      key: 3,
      id: 3,
      title: "ร้านน้องบิ๊กใบตอง 3",
      description: "ร้านน้องบิ๊กใบตอง 3",
    },
    {
      key: 4,
      id: 4,
      title: "ร้านน้องบิ๊กใบตอง 4",
      description: "ร้านน้องบิ๊กใบตอง 4",
    },
    {
      key: 5,
      id: 5,
      title: "ร้านน้องบิ๊กใบตอง 5",
      description: "ร้านน้องบิ๊กใบตอง 5",
    },
    {
      key: 6,
      id: 6,
      title: "ร้านน้องบิ๊กใบตอง 6",
      description: "ร้านน้องบิ๊กใบตอง 6",
    },
  ];

  return (
    <>
      <div className="container-content" style={{ marginBottom: "2rem" }}>
        <Row>
          <Col md={24}>
            <div style={{ margin: "0 5rem" }}>
              <h2
                style={{
                  color: "#028910",
                  wordWrap: "break-word",
                }}
              >
                หมอพราหมณ์ติ่งลี่
              </h2>
            </div>
          </Col>
          <CardList dataList={dataList} baseUrl={baseUrl} />
        </Row>
      </div>
    </>
  );
};
