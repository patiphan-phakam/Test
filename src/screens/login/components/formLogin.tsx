import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Space,
  Checkbox,
  Typography,
} from "antd";
import "../../../styles/login.css";
import { TLogin } from "../../../types/loginTypes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface prop {
  remenber: boolean;
  setRemember: (status: boolean) => void;
  handleLogin: (data: TLogin) => void;
  remenberUser: string;
}
const { Link } = Typography;

const FormLogin: React.FC<prop> = ({
  setRemember,
  remenber,
  handleLogin,
  remenberUser,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue({
      username: remenberUser,
    });
  }, [form, remenberUser]);

  const onFinish = () => {
    form.validateFields().then((values) => {
      handleLogin(values);
      if (remenber) {
        localStorage.setItem("username", values.username);
      }
    });
  };

  const handleRemember = (check: boolean) => {
    setRemember(check);
    if (!check) {
      localStorage.removeItem("username");
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name={`username`}
            rules={[{ required: true, message: "Please Enter Username " }]}
          >
            <Input placeholder="username" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name={`password`}
            rules={[{ required: true, message: "Please Enter Password" }]}
          >
            <Input.Password
              placeholder="Password"
              style={{ width: "100%" }}
              autoComplete="on"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Checkbox
          className="green-checkbox"
          onChange={(e) => {
            handleRemember(e.target.checked);
          }}
          checked={remenber}
          style={{ color: "green" }}
        >
          Remeber me
        </Checkbox>
      </Row>
      <Row>
        <Button
          type="primary"
          style={{ width: "100%", backgroundColor: "green", marginTop: "1rem" }}
          htmlType="submit"
        >
          LOGIN
        </Button>
      </Row>
      <Space style={{ marginTop: "1rem" }}>
        <Link className="link-action" onClick={() => navigate("/register")}>
          create account
        </Link>
        <Link className="link-action" onClick={() => navigate("/reset")}>
          forget password?
        </Link>
      </Space>
    </Form>
  );
};

export default FormLogin;
