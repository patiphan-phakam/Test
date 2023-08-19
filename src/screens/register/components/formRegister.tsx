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
  Select,
} from "antd";
import { TUserRegister } from "../../../types/loginTypes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserService } from "../../../service/user-service";
import { axiosBackend } from "../../../config/axiosBackend";

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
  userLevel: number;
  username: string;
  password: string;
  confirmPassword: string;
  userType: string;
}
const FormRegister: React.FC<prop> = ({
  setRemember,
  remenber,
  handleRegister,
}) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const userService = UserService(axiosBackend);
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

  const handleKeyPress = (e: any) => {
    const charCode = e.which || e.keyCode;
    // Allow only numeric digits (0-9) or the Backspace key
    if (charCode !== 8 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
    if (inputValue.length >= 10) {
      e.preventDefault();
    }
  };

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      if (values.password !== values.confirmPassword) {
        message.error("Password and confirm password does not match");
        return;
      }
      delete values.confirmPassword;
      const data: IRegister = {
        ...values,
        userLevel: values.userLevel.value,
        userType: type.find((t) => values.userLevel.value === t.value)?.label,
      };
      const res = await userService.register(data);
      if (res) {
        navigate("/login");
        return;
      }
      message.error("register failed please try again");
      return;
    });
  };

  const handleInputChange = (e: any) => {
    const newValue = e.target.value;
    if (newValue.length <= 10) {
      setInputValue(newValue);
    }
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Please Enter Name Surname" }]}
          >
            <Input placeholder="Name Surname" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please Enter Phone" }]}
          >
            <Input
              placeholder="phone"
              style={{ width: "100%" }}
              onKeyPress={handleKeyPress}
              onChange={handleInputChange}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please Enter Email" }]}
          >
            <Input placeholder="email" style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={24}>
          <Form.Item
            name="userLevel"
            rules={[{ required: true, message: "Please Enter Type" }]}
          >
            <Select
              style={{ width: "100%" }}
              labelInValue
              placeholder={"type"}
              options={type}
            />
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
            <Input.Password
              placeholder="Password"
              style={{ width: "100%" }}
              autoComplete="on"
            />
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
              autoComplete="on"
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
