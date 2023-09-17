import { Col, Row } from "antd";
import React from "react";
import CardList, { ICardData } from "./components/cardList";

interface Props {
  baseUrl: string;
}

export const Votive: React.FC<Props> = ({ baseUrl }) => {
  const dataList: ICardData[] = [
    {
      key: 1,
      id: 1,
      title: "บริการบนบานศาลกล่าวปู่เวสสุวรรณ",
      description: "คุณมด",
    },
    {
      key: 2,
      id: 2,
      title: "บริการบนบานศาลกล่าว",
      description: "คุณก๊อต",
    },
    {
      key: 3,
      id: 3,
      title: "บริการบนบานศาลกล่าว",
      description: "ร้านวิสาหกิจชุมชนบ้านโนนเมือง",
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
                พิธีบน/แก้บน
              </h2>
            </div>
          </Col>
          <CardList dataList={dataList} baseUrl={baseUrl} />
        </Row>
      </div>
    </>
  );
};
