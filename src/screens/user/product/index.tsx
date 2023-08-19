import { Button, Col, Row, Space, Table } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";

export const Product: React.FC<{}> = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text: string, row: any, index: number) => index + 1,
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "80%",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: "20%",
      render: (text: string, row: any, index: number) => {
        return (
          <>
            <Space>
              <Link>แก้ไข</Link>/<Link className="text-red">ลบ</Link>
            </Space>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Row justify={"end"}>
        <Button className="green-button">เพิ่ม</Button>
      </Row>
      <Row>
        <Col md={24}>
          <Table
            scroll={{ x: true }}
            dataSource={dataSource}
            columns={columns}
          />
        </Col>
      </Row>
    </>
  );
};
