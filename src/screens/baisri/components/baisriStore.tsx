import { Col, Row } from "antd";
import React from "react";
// import { useParams } from "react-router-dom";

interface Props {
  baseUrl: string;
}

export const BaisriStore: React.FC<Props> = ({ baseUrl }) => {
  // const { storeId } = useParams();
  const dataList = {
    id: 1,
    title: "ร้านน้องบิ๊กใบตอง 1",
    description: "",
  };

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Row>
          <Col md={24}>
            <h2 style={{ marginLeft: "5rem" }}>{dataList.title}</h2>
          </Col>
        </Row>
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>
            บายศรีใบตองสด
          </h2>
        </Row>
      </div>
    </>
  );
};
