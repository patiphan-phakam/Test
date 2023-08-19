import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Space,
  Checkbox,
  message,
  Typography,
} from "antd";
import { TUserRegister } from "../../../types/loginTypes";
import { useNavigate } from "react-router-dom";

interface prop {
  remenber: boolean;
  setRemember: (status: boolean) => void;
  handleRegister: (data: TUserRegister) => void;
}
const { Link } = Typography;

interface IRegister {
  name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}
const FormRegister: React.FC<prop> = ({
  setRemember,
  remenber,
  handleRegister,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = () => {
    form.validateFields().then((values) => {
      if (values.password !== values.confirmPassword) {
        message.error("Password and confirm password does not match");
        return;
      }
      const data: IRegister = {
        ...values,
      };
      handleRegister(data);
    });
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please Enter Name" }]}
          >
            <Input placeholder="Name" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "phone" }]}
          >
            <Input placeholder="phone" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "email" }]}
          >
            <Input placeholder="email" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "username" }]}
          >
            <Input placeholder="username" style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col className="gutter-row" span={24}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please Enter Password" }]}
          >
            <Input.Password placeholder="Password" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="confirmPassword"
            rules={[
              { required: true, message: "Please Enter Confirm Password" },
            ]}
          >
            <Input.Password
              placeholder="Confirm Password"
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Checkbox
          className="green-checkbox"
          onChange={(e) => {
            setRemember(e.target.checked);
          }}
          checked={remenber}
          style={{ color: "green" }}
        >
          Remeber me
        </Checkbox>
      </Row>
      <Button
        type="primary"
        style={{ width: "100%", backgroundColor: "green", marginTop: "1rem" }}
        htmlType="submit"
      >
        SIGN UP
      </Button>
      <Space>
        {/* <Link
          onClick={() => navigate("/register/store")}
          className="link-action"
        >
          SIGN UP STORE?
        </Link> */}
        <Link onClick={() => navigate("/login")} className="link-action">
          SIGN IN
        </Link>
      </Space>
    </Form>
  );
};

export default FormRegister;
