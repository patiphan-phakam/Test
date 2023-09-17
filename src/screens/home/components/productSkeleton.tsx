import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CarouselCardSkeleton from "../../../components/cardCarouselProduct-skeleton";

interface Prop {
  title: string;
}

export const ProductSkeleton: React.FC<Prop> = ({ title }) => {
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Row>
          <h2 style={{ color: "#028910", marginLeft: "5rem" }}>{title}</h2>
        </Row>
        <CarouselCardSkeleton />
      </div>
    </>
  );
};
