import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  message,
} from "antd";
import Link from "antd/es/typography/Link";
import React, { useEffect, useState } from "react";
import { BookingSerice } from "../../service/booking.service";
import { axiosBackend } from "../../config/axiosBackend";
import { UserService } from "../../service/user-service";
import { IUserData } from "../../types/user";
import { useAuth } from "../../auth/auth";
import { CommentService } from "../../service/comment.service";
import { useNavigate } from "react-router-dom";
import { formatDateDefault } from "../../utils/date-helper";
import { Content } from "antd/es/layout/layout";

export const History: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const { signout } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  // const [bookId, setBookId] = useState<string>("");
  // const [value, setValue] = useState(0);
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  const [dataSource, setDataSource] = useState<any>([]);
  const navigate = useNavigate();

  /* eslint-disable */
  const fetchUserProfile = async (token: string) => {
    try {
      axiosBackend.defaults.headers["Authorization"] = `Bearer ${token}`;
      const userService = UserService(axiosBackend);
      const bookingService = BookingSerice(axiosBackend);
      const { data } = await userService.profile();
      if (data) {
        setUserProfile(data);

        const res = await bookingService.findByUserId(data.userId);
        if (res.data) {
          setDataSource(
            res.data.map((bk: any, index: number) => ({
              ...bk,
              key: index + 1,
            }))
          );
        }
        setLoading(false);
        return;
      }
      signout(() => {});
      setUserProfile(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUserProfile(token);
    } else {
      signout(() => {});
      navigate("/login");
    }
  }, []);

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      const data = {
        userId: userProfile?.userId,
        message: values.comment,
        productId: values.productId,
        bookingId: values.bookingId,
      };
      if (data) {
        const commentService = CommentService(axiosBackend);
        await commentService.create(data);
        message.success("ขอบคุณสำหรับคำแนะนำ");
        setIsModal(false);
      }
    });
  };

  // const desc = ["น้อยมาก", "น้อย", "ปานกลาง", "ดี", "ดีมาก"];

  // const statusTextTh = (status: string) => {
  //   if(status === 'new'){
  //     return "เปิดคำขอ"
  //   }
  // };
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "วันที่สั่งซื้อ",
      dataIndex: "createDate",
      key: "createDate",
      render: formatDateDefault,
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
      title: "",
      dataIndex: "productId",
      key: "productId",
      render: (productId: string, row: any, index: number) => (
        <>
          {row.status === "complete" ? (
            row.Comments.lenght === 0 ? (
              <Space>
                <Link
                  onClick={() => {
                    form.setFieldsValue({
                      ...row,
                    });
                    setIsModal(true);
                  }}
                >
                  แสดงความคิดเห็น
                </Link>
              </Space>
            ) : (
              <Space>ขอบคุณสำหรับความคิดเห็น</Space>
            )
          ) : (
            <></>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <Content className="content">
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
            <Col span={24} style={{ margin: "1em 0" }}>
              <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                key={"no"}
              />
            </Col>
          </Row>
        </div>
      </Content>
      <Modal
        title={`แสดงความคิดเห็น`}
        open={isModal}
        onCancel={() => {
          setIsModal(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout={"vertical"}>
          {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
          </Row> */}
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "2em" }}
          >
            <Col className="gutter-row" span={24}>
              <Form.Item name="productId" hidden>
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item name="bookingId" hidden>
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item name="comment">
                <Input.TextArea rows={3} />
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
