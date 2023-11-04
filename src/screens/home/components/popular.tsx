import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";
import { Typography } from "antd";

interface Prop {
  productList: ICardData[];
}

export const Popular: React.FC<Prop> = ({ productList }) => {
  return (
    <>
      <Typography.Title
        level={4}
        style={{ color: "#028910", margin: "0 0 0.5rem 1rem" }}
      >
        ยอดนิยม
      </Typography.Title>
      <CardCarousel dataList={productList} baseUrl="/baisri/product" />
    </>
  );
};
