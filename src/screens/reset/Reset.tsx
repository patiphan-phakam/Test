import { Row, Col, Image } from "antd";
import "../../styles/login.css";
import logo from "../../images/logo-mb.png";
import FormReset from "./components/formReset";

const ResetPage: React.FC<{}> = () => {
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
                <FormReset />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPage;
