import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";

interface Prop {
  productList: ICardData[];
}

export const Popular: React.FC<Prop> = ({ productList }) => {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Row>
          <h2 style={{ color: "#028910", marginLeft: "5rem" }}>ยอดนิยม</h2>
        </Row>
        <CardCarousel dataList={productList} baseUrl="/baisri/product" />
      </div>
    </>
  );
};
