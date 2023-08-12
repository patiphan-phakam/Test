import { Row, Col, Image } from "antd";
import "../../styles/login.css";
import logo from "../../images/logo-mb.png";
import { useEffect, useState } from "react";
import FormLogin from "./components/formLogin";
import { TLogin } from "../../types/loginTypes";

interface prop {
  handleLogin: (data: TLogin) => void;
}

const LoginPage: React.FC<prop> = ({ handleLogin }) => {
  const [remenber, setRemember] = useState(false);

  useEffect(() => {
    const bsRemember = localStorage.getItem("bsRemember");
    if (bsRemember) {
      if (bsRemember === "true") {
        console.log(bsRemember);
        setRemember(true);
      }
    }
  }, []);

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
