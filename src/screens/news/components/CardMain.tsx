import { Row, Col } from "antd";
import { config } from "../../../config";

interface IProp {
  data: any;
  showDetail: (showDetail: any) => void;
}

export const CardMain: React.FC<IProp> = ({ data, showDetail }) => {
  return (
    <>
      <Row
        style={{
          height: "320px",
          overflow: "hidden",
          borderRadius: "10px",
          border: "1px solid #dee2e4",
          cursor: "pointer",
        }}
        onClick={() => showDetail(data)}
      >
        <Col span={10}>
          <div style={{ flex: 1, padding: "1.5em" }}>
            <h3 style={{ color: "#028910" }}>{data.title}</h3>
            <p> {data.content}</p>
          </div>
        </Col>
        <Col span={14}>
          <img
            src={`${config.backendUrl}/image/${data.image}`}
            alt={data.title}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </>
  );
};
