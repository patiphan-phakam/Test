import "react-multi-carousel/lib/styles.css";
// import CardCarousel, { ICardData } from "../../../components/CardCarousel";
import { Col, Row, Typography } from "antd";
import { config } from "../../../config";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

interface Prop {
  news: any;
  showDetail: (data: any) => void;
}

export const HomeNews: React.FC<Prop> = ({ news, showDetail }) => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title
          level={4}
          style={{ color: "#028910", margin: "0 0 0.5rem 1rem" }}
        >
          ข่าวสาร
        </Typography.Title>
        <Link style={{ marginRight: "1rem" }} onClick={() => navigate("/news")}>
          ทั้งหมด
        </Link>
      </div>

      {news.length > 0 && (
        <>
          <Row style={{ width: "100%", display: "block", padding: "1rem" }}>
            <div
              style={{
                height: "400px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => showDetail(news[0])}
            >
              <img
                src={`${config.backendUrl}/image/${news[0].image}`}
                alt={news[0].title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link
                style={{ fontSize: "16px" }}
                onClick={() => showDetail(news[0])}
              >
                {news[0].title}
              </Link>
            </div>
          </Row>
          <Row>
            {news.slice(1).map((n: any, index: number) => (
              <Col
                // lg={8}
                md={12}
                sm={24}
                key={index + 1}
                style={{ padding: "1rem" }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => showDetail(n)}
                >
                  <img
                    src={`${config.backendUrl}/image/${n.image}`}
                    alt={news[0].title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Link
                    style={{ fontSize: "16px" }}
                    onClick={() => showDetail(n)}
                  >
                    {n.title}
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
