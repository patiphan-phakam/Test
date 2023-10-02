import { Button, Col, Form, Input, Modal, Rate, Row, Space, Table } from "antd";
import Link from "antd/es/typography/Link";
import React, { useEffect, useState } from "react";

export const History: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [bookId, setBookId] = useState<string>("");
  const [value, setValue] = useState(0);

  const [dataSource, setDataSource] = useState<any>([
    {
      no: 1,
      bookingId: "111",
      date: "2023-01-02",
      productName: "productName 1",
      status: "completed",
      comment: "",
    },
  ]);

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
      dataIndex: "comment",
      key: "comment",
    },
    {
      title: "Action",
      dataIndex: "bookingId",
      key: "bookingId",
      render: (bookingId: string, row: any, index: number) => (
        <>
          <Space>
            <Link
              onClick={() => {
                setBookId(bookId);
                form.setFieldsValue({
                  ...row,
                });
                setIsModal(true);
              }}
            >
              ให้คะแนน
            </Link>
          </Space>
        </>
      ),
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      console.log(
        `🚀 ~ file: index.tsx:108 ~ form.validateFields ~ values:`,
        values
      );
    });
  };

  const desc = ["น้อยมาก", "น้อย", "ปานกลาง", "ดี", "ดีมาก"];

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
            <Table
              columns={columns}
              dataSource={dataSource}
              loading={loading}
            />
          </Col>
        </Row>
      </div>
      <Modal
        title={`ให้คะแนน`}
        open={isModal}
        onCancel={() => {
          setIsModal(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout={"vertical"}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col
              className="gutter-row"
              span={24}
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? (
                  <span className="ant-rate-text">{desc[value - 1]}</span>
                ) : (
                  ""
                )}
              </span>
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="comment" label="ความคิดเห็น">
                <Input.TextArea placeholder="แสดงความคิดเห็นให้เรา" rows={3} />
              </Form.Item>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Button
              type="primary"
              style={{
                width: "20%",
                backgroundColor: "green",
                marginTop: "1rem",
              }}
              htmlType="submit"
            >
              บันทึก
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
