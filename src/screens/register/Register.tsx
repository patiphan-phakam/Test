import { Row, Col, Image, message } from "antd";
import "../../styles/login.css";
import logo from "../../images/logo-mb.png";
import { useEffect, useState } from "react";
import FormRegister from "./components/formRegister";
import { TUserRegister } from "../../types/user";
import { axiosBackend } from "../../config/axiosBackend";
import { UserService } from "../../service/user-service";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC<{}> = () => {
  const [remenber, setRemember] = useState(false);
  const userService = UserService(axiosBackend);
  const navigate = useNavigate();

  useEffect(() => {
    const bsRemember = localStorage.getItem("bsRemember");
    if (bsRemember) {
      if (bsRemember === "true") {
        setRemember(true);
      }
    }
  }, []);

  const handleRegister = async (dataCreate: TUserRegister) => {
    const { data } = await userService.register(dataCreate);
    if (data) {
      navigate("/login");
      return;
    }
    message.error("register failed please try again");
    return;
  };

  return (
    <div className="login-page">
      <Row>
        <Col md={15}>
          <div className="left-side"></div>
        </Col>
        <Col md={9}>
          <div className="right-side">
            <div className="login-form">
              <Row justify={"center"}>
                <Image preview={false} src={logo} width={"50%"} />
              </Row>
              <div style={{ marginTop: "2rem" }}>
                <FormRegister
                  remenber={remenber}
                  setRemember={setRemember}
                  handleRegister={handleRegister}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
