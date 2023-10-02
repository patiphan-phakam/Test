import {
  Space,
  Popconfirm,
  Col,
  Row,
  Table,
  Modal,
  Form,
  Input,
  Button,
  Select,
} from "antd";
import React, { useEffect, useState } from "react";
import { IUserData } from "../../../types/user";
import Link from "antd/es/typography/Link";
import { axiosBackend } from "../../../config/axiosBackend";
import { UserService } from "../../../service/user-service";
export const Users: React.FC<{}> = () => {
  /* eslint-disable */
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>();
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  const [configModal, setConfigModal] = useState<any>({});

  const fetchData = async () => {
    const userService = UserService(axiosBackend);
    try {
      const { data } = await userService.getAll();
      if (data) {
        setDataSource(
          data.map((data: any, index: number) => ({ ...data, key: index + 1 }))
        );
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const fetchUserProfile = async (token: string) => {
    try {
      axiosBackend.defaults.headers["Authorization"] = `Bearer ${token}`;
      const userService = UserService(axiosBackend);
      const res = await userService.profile();
      if (res && res.data) {
        setUserProfile(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchUserProfile(accessToken);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [loading]);

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "user",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Action",
      dataIndex: "userId",
      key: "userId",
      render: (userId: string, row: any, index: number) => (
        <>
          <Space>
            <Link
              onClick={() => {
                setUserId(userId);
                form.setFieldsValue({
                  ...row,
                });
                setIsModal(true);
              }}
            >
              แก้ไข
            </Link>
            /
            <Popconfirm
              title="ยืนยันการลบ"
              description={row.productName}
              okText="ยืนยัน"
              cancelText="ยกเลิก"
              // onConfirm={() => handleDelete(newId)}
            >
              <Link className="text-red">ลบ</Link>
            </Popconfirm>
            /
            <Popconfirm
              title="ยืนยันการรีเซ็ต"
              description={row.productName}
              okText="ยืนยัน"
              cancelText="ยกเลิก"
              // onConfirm={() => handleDelete(newId)}
            >
              <Link className="text-blue">รีเซ็ตรหัสผ่าน</Link>
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      console.log(
        `🚀 ~ file: index.tsx:108 ~ form.validateFields ~ values:`,
        values
      );
    });
  };

  const type = [
    {
      value: 1,
      label: "store",
    },
    {
      value: 2,
      label: "user",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Table
            key={"id"}
            scroll={{ x: true }}
            dataSource={dataSource}
            columns={columns}
            loading={loading}
          />
        </Col>
      </Row>
      <Modal
        title={`Edit`}
        open={isModal}
        onCancel={() => {
          setIsModal(false);
          form.resetFields();
        }}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout={"vertical"}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item name="username" label="Username">
                <Input placeholder="Title" readOnly />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="userType"
                label="User Type"
                rules={[{ required: true, message: "Please enter User Type" }]}
              >
                <Select
                  style={{ width: "100%" }}
                  labelInValue
                  placeholder={"type"}
                  options={type}
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
              Save
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
