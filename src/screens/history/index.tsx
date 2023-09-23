import { Col, Row, Table } from "antd";
import React from "react";

export const History: React.FC<{}> = () => {
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text: string, row: any, index: number) => index + 1,
    },
    {
      title: "วันที่สั่งซื้อ",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "สินค้า",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "แสดงความคิดเห็น",
      dataIndex: "productName",
      key: "productName",
    },
  ];

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
            ประวัติการสั่งซื้อ
          </h2>
        </Row>
        <Row>
          <Col span={24} style={{ margin: "2em" }}>
            <Table columns={columns} />
          </Col>
        </Row>
      </div>
    </>
  );
};
