import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";
import { Col, Row, Typography } from "antd";
import baisri from "../../../images/home-learn.png";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

interface Prop {
  store: any;
  baseUrl: string;
}

export const StoreAll: React.FC<Prop> = ({ store, baseUrl }) => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title
          level={4}
          style={{ color: "#028910", margin: "0 0 0.5rem 1rem" }}
        >
          ร้านค้ารวม
        </Typography.Title>
        <Link
          style={{ marginRight: "1rem" }}
          onClick={() => navigate("/baisri")}
        >
          ทั้งหมด
        </Link>
      </div>
      <CardCarousel dataList={store} baseUrl="/baisri" />
      {/* <Row>
        {store.map((item: any, index: number) => (
          <Col lg={6} md={8} key={index + 1}>
            <div
              key={item.title}
              className="card-product-home"
              style={{ marginBottom: "2em" }}
              onClick={() => navigate(`${baseUrl}/${item.id}`)}
            >
              <div className="image-container">
                <img
                  alt={item.title}
                  src={
                    item.image !== "" && item.image !== null
                      ? item.image
                      : baisri
                  }
                />
                <div className="image-overlay" />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <div style={{ color: "white", fontSize: "25px" }}>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row> */}
    </>
  );
};
