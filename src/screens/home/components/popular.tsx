import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "./CardCarousel";

export const Popular: React.FC<{}> = () => {
  const dataList = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    { title: "Card 4", description: "Description 4" },
    { title: "Card 5", description: "Description 5" },
    { title: "Card 6", description: "Description 6" },
  ];

  return (
    <>
      <Row>
        <h2>ยอดนิยม</h2>
      </Row>
      <CardCarousel dataList={dataList} />
    </>
  );
};
