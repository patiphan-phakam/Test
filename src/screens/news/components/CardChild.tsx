import { Col, Card } from "antd";
import { config } from "../../../config";
import Meta from "antd/es/card/Meta";

interface IProp {
  data: any;
  showDetail: (showDetail: any) => void;
}

export const CardChild: React.FC<IProp> = ({ data, showDetail }) => {
  return (
    data && (
      <>
        {data.map((item: any, index: number) => (
          <Col md={8} key={index + 1}>
            <Card
              key={item.title}
              cover={
                <img
                  alt="example"
                  src={`${config.backendUrl}/image/${item?.image}`}
                  height={200}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              }
              onClick={() => showDetail(item)}
              style={{
                margin: "0.5rem",
              }}
            >
              <Meta title={item.title} description={item.description} />
            </Card>
            {/* <Card>
              <Row>
                <Col md={8}>
                  <img
                    src={`${config.backendUrl}/image/${item?.image}`}
                    alt={`${item.title}-${index + 1}`}
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: "24px" }}
                  />
                </Col>
                <Col md={16} style={{ padding: "0 2em" }}>
                  <h3 style={{ color: "#028910" }}>{item.title}</h3>
                  <p>{item.content}</p>
                  <Button
                    className="green-button"
                    onClick={() => showDetail(item)}
                  >
                    Read more <ArrowRightOutlined />
                  </Button>
                </Col>
              </Row>
            </Card> */}
          </Col>
        ))}
      </>
    )
  );
};
