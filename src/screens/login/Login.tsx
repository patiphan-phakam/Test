import { Row, Col, Image, message } from "antd";
import "../../styles/login.css";
import logo from "../../images/logo-mb.png";
import { useEffect, useState } from "react";
import FormLogin from "./components/formLogin";
import { TLogin } from "../../types/user";
import { useAuth } from "../../auth/auth";
import { UserService } from "../../service/user-service";
import { axiosBackend } from "../../config/axiosBackend";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const userService = UserService(axiosBackend);
  const [remenber, setRemember] = useState<boolean>(false);
  const [remenberUser, setRememberUser] = useState<string>("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setRemember(true);
      setRememberUser(username);
    }
  }, []);

  const handleLogin = async (user: TLogin) => {
    const { data } = await userService.login(user);
    if (data) {
      signin(data.token);
      navigate("/home");
      return;
    }
    message.error("login failed please try again");
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
                <FormLogin
                  remenber={remenber}
                  setRemember={setRemember}
                  handleLogin={handleLogin}
                  remenberUser={remenberUser}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
