import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";

interface Prop {
  productList: ICardData[];
}

export const Recommend: React.FC<Prop> = ({ productList }) => {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Row>
          <h2 style={{ color: "#028910", marginLeft: "5rem" }}>แนะนำ</h2>
        </Row>
        <CardCarousel
          dataList={productList.sort(
            (a: { key: number }, b: { key: number }) => b.key - a.key
          )}
          baseUrl="/baisri/product"
        />
      </div>
    </>
  );
};
