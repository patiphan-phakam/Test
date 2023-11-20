import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";
import { Typography } from "antd";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

interface Prop {
  productList: ICardData[];
}

export const ProductAll: React.FC<Prop> = ({ productList }) => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title
          level={4}
          style={{ color: "#028910", margin: "0 0 0.5rem 1rem" }}
        >
          สินค้าทั้งหมด
        </Typography.Title>
        <Link
          style={{ marginRight: "1rem" }}
          onClick={() => navigate("/baisri")}
        >
          ทั้งหมด
        </Link>
      </div>
      <CardCarousel dataList={productList} baseUrl="/baisri/product" />
    </>
  );
};
