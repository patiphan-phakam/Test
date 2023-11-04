import "react-multi-carousel/lib/styles.css";
import { Typography } from "antd";
import CardCarouselBrahman from "../../../components/CardCarouselBrahman";

interface Prop {
  brahman: any;
  baseUrl: string;
}

export const CardBrahman: React.FC<Prop> = ({ brahman, baseUrl }) => {
  return (
    <>
      <Typography.Title
        level={4}
        style={{ color: "#028910", margin: "0 0 0.5rem 1rem" }}
      >
        {brahman.user.fullName}
      </Typography.Title>
      <CardCarouselBrahman dataList={brahman.products} baseUrl={baseUrl} />
    </>
  );
};
