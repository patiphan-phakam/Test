import { Button, Col, Form, Input, Row, Image, message } from "antd";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../auth/auth";
import { IUserData } from "../../../types/user";
import { UserService } from "../../../service/user-service";
// import { useNavigate } from "react-router-dom";

export const Store: React.FC<{}> = () => {
  const { accessToken, authInstance } = useAuth();
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  const userService = UserService(authInstance);
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  /* eslint-disable */
  const fetchUserProfile = async () => {
    try {
      const { data } = await userService.profile();
      if (data) {
        form.setFieldsValue({
          ...data,
        });
        setUserProfile(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [accessToken]);
  /* eslint-disable */

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      const dataUpdate = {
        ...values,
      };
      if (userProfile?.userId) {
        const { data } = await userService.update(
          userProfile?.userId,
          dataUpdate
        );
        if (data) {
          message.success("update successfully");
        }
      }
    });
  };

  return (
    <Row>
      <Col md={12}>
        <Form form={form} onFinish={onFinish}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: "Please Enter fullName" }]}
              >
                <Input placeholder="fullName" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Please Enter address" }]}
              >
                <Input placeholder="address" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="subdistrict"
                rules={[
                  { required: true, message: "Please Enter subdistrict" },
                ]}
              >
                <Input placeholder="subdistrict" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="district"
                rules={[{ required: true, message: "Please Enter district" }]}
              >
                <Input placeholder="district" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="province"
                rules={[{ required: true, message: "Please Enter province" }]}
              >
                <Input placeholder="province" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="postcode"
                rules={[{ required: true, message: "Please Enter postcode" }]}
              >
                <Input placeholder="postcode" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please Enter email" }]}
              >
                <Input placeholder="email" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Please Enter phone" }]}
              >
                <Input placeholder="phone" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="storeName"
                rules={[{ required: true, message: "Please Enter storeName" }]}
              >
                <Input placeholder="storeName" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Button
            type="primary"
            style={{
              width: "100%",
              backgroundColor: "green",
              marginTop: "1rem",
            }}
            htmlType="submit"
          >
            Save
          </Button>
        </Form>
      </Col>
      <Col md={12}>
        <div style={{ padding: "0 1rem" }}>
          <Image src="https://plus.unsplash.com/premium_photo-1677637688405-fa8a3cb3597c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
        </div>
      </Col>
    </Row>
  );
};
