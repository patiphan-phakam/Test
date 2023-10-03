import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
  message,
} from "antd";
import Link from "antd/es/typography/Link";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth/auth";
import { axiosBackend } from "../../../config/axiosBackend";
import { BookingSerice } from "../../../service/booking.service";
import { IUserData } from "../../../types/user";

export const ProductHistory: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const { signout } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isModalDetail, setIsModalDetail] = useState<boolean>(false);
  const [statusNow, setStatusNow] = useState<string>("");
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  const [dataSource, setDataSource] = useState<any>([]);
  const [detail, setDetail] = useState<any>([]);
  const navigate = useNavigate();

  /* eslint-disable */
  const getData = async () => {
    const bookingService = BookingSerice(axiosBackend);
    const res = await bookingService.findAll();
    if (res.data) {
      setDataSource(
        res.data.map((bk: any, index: number) => ({
          ...bk,
          key: index + 1,
        }))
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [loading]);

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      if (values.status.value) {
        const dataUpdate = {
          status: values.status.value,
        };
        const bookingService = BookingSerice(axiosBackend);
        const update = await bookingService.update(
          values.bookingId,
          dataUpdate
        );
        if (update) {
          message.success("แก้ไขเรียบร้อยแล้ว");
        }
        setLoading(true);
        setIsModal(false);
      }
    });
  };

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "สินค้า",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "วันที่สั่งซื้อ",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "สถานะ",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "แก้ไข",
      dataIndex: "bookingId",
      key: "bookingId",
      render: (productId: string, row: any, index: number) => (
        <>
          <Space>
            <Link
              onClick={() => {
                setDetail(row);
                setIsModalDetail(true);
              }}
            >
              รายละเอียด
            </Link>
            /
            <Link
              onClick={() => {
                setStatusNow(row.status);
                form.setFieldsValue({
                  ...row,
                  status: { value: row.status, label: row.status },
                });
                setIsModal(true);
              }}
            >
              แก้ไขสถานะ
            </Link>
          </Space>
        </>
      ),
    },
  ];

  const status = [
    {
      value: "new",
      label: "new",
      key: ["new"],
    },
    {
      value: "inprogress",
      label: "inprogress",
      key: ["new", "inprogress"],
    },
    {
      value: "complete",
      label: "complete",
      key: ["inprogress", "complete"],
    },
  ];

  return (
    <>
      <Row>
        <Col span={24} style={{ margin: "2em" }}>
          <Table
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            key={"no"}
          />
        </Col>
      </Row>
      <Modal
        title={`แก้ไขสถานะ`}
        open={isModal}
        onCancel={() => {
          setDetail({});
          setIsModal(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout={"vertical"}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "2em" }}
          >
            <Col className="gutter-row" span={24}>
              <Form.Item name="bookingId" hidden>
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item name="status">
                <Select
                  style={{ width: "100%" }}
                  labelInValue
                  placeholder={"type"}
                  options={status
                    .filter((status) => status.key.includes(statusNow))
                    .map((item) => ({
                      ...item,
                      disabled: statusNow === item.value,
                    }))}
                />
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
      <Modal
        title="รายละเอียด"
        open={isModalDetail}
        onCancel={() => setIsModalDetail(!isModalDetail)}
        footer={null}
      >
        <Row
          style={{ backgroundColor: "#f0f0f0", borderRadius: "15px" }}
          justify={"center"}
        >
          <Col span={24}>
            <div
              style={{
                overflow: "hidden",
                height: "300px",
                margin: "1.5em",
                borderRadius: "10px",
              }}
            >
              <img
                alt={detail?.product?.productName}
                src={
                  detail?.product?.productImages[0]
                    ? detail?.product?.productImages[0].productImageSource
                    : null
                }
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>
          <Col span={24} style={{ paddingLeft: "1rem", marginTop: "1em" }}>
            <Typography style={{ fontWeight: "bold" }}>ข้อมูลลูกค้า</Typography>
          </Col>
          <Col span={24} style={{ paddingLeft: "1rem" }}>
            <p>ชื่อลูกค้า : {detail?.user?.fullName}</p>
            <p>เบอร์โทร : {detail?.user?.phone}</p>
            <p>อีเมล : {detail?.user?.email}</p>
          </Col>
          <Col span={24} style={{ paddingLeft: "1rem" }}>
            <Typography style={{ fontWeight: "bold" }}>ข้อมูลสินค้า</Typography>
          </Col>
          <Col span={24} style={{ paddingLeft: "1rem" }}>
            <p>ชื่อสินค้า : {detail?.product?.productName}</p>
            <p>ร้านค้า : {detail?.store?.fullName}</p>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
