import { Row } from "antd";
import React from "react";
import CardCarousel, { ICardData } from "../../components/CardCarousel";

interface Props {
  baseUrl: string;
}

export const Baisri: React.FC<Props> = ({ baseUrl }) => {
  const dataList: ICardData[] = [
    {
      id: 1,
      title: "ร้านน้องบิ๊กใบตองร้านน้องบิ๊กใบตอง 1",
      description: "ร้านน้องบิ๊กใบตอง 1",
    },
    { id: 2, title: "ร้านน้องบิ๊กใบตอง 2", description: "ร้านน้องบิ๊กใบตอง 2" },
    { id: 3, title: "ร้านน้องบิ๊กใบตอง 3", description: "ร้านน้องบิ๊กใบตอง 3" },
    { id: 4, title: "ร้านน้องบิ๊กใบตอง 4", description: "ร้านน้องบิ๊กใบตอง 4" },
    { id: 5, title: "ร้านน้องบิ๊กใบตอง 5", description: "ร้านน้องบิ๊กใบตอง 5" },
    { id: 6, title: "ร้านน้องบิ๊กใบตอง 6", description: "ร้านน้องบิ๊กใบตอง 6" },
  ];

  return (
    <>
      <div className="container-content" style={{ marginBottom: "2rem" }}>
        <Row>
          <h2
            style={{
              color: "#028910",
              marginLeft: "5rem",
              wordWrap: "break-word",
            }}
          >
            ร้านค้าทั้งหมด
          </h2>
        </Row>
        <CardCarousel dataList={dataList} baseUrl={baseUrl} />
      </div>
    </>
  );
};
