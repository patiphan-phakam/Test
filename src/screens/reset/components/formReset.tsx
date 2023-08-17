import { Form, Row, Col, Input, Button, Space, message } from "antd";
import "../../../styles/login.css";
import Link from "antd/es/typography/Link";
import LoginSerivce from "../services/reset-service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormReset: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const [resetStatus, setReset] = useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = () => {
    form.validateFields().then(async (values) => {
      const reset = await LoginSerivce.reset(values);
      if (!reset) {
        message.error("Register failed. ");
        return;
      }
      setReset(true);
      setTimeout(() => {}, 5000);
    });
  };

  return !resetStatus ? (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name={`username`}
            rules={[
              { required: true, message: "Please Enter Username or Email" },
            ]}
          >
            <Input placeholder="Username or Email" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Button
          type="primary"
          style={{ width: "100%", backgroundColor: "green", marginTop: "1rem" }}
          htmlType="submit"
        >
          Reset
        </Button>
      </Row>
      <Space style={{ marginTop: "1rem" }}>
        <Link className="link-action" onClick={() => navigate("/login")}>
          SIGN IN
        </Link>
      </Space>
    </Form>
  ) : (
    <Row>
      <h5>Reset Password Success.Please check your email to confirm</h5>
      <Space style={{ marginTop: "1rem" }}>
        <Link className="link-action" onClick={() => navigate("/login")}>
          SIGN IN
        </Link>
      </Space>
    </Row>
  );
};

export default FormReset;
